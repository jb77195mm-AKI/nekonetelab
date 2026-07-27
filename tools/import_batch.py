# -*- coding: utf-8 -*-
"""ステージングフォルダ内の生成画像を一括でWebPに変換する。

使い方:
    python tools/import_batch.py ./_incoming

入力ファイル名は <slug>__<name>.<ext> とし、name から出力サイズを
自動判定する。変換処理は import_photo.py と共通化している。
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

from PIL import Image

from import_photo import HERE, PRESETS, center_crop_resize


SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}
FILENAME_PATTERN = re.compile(
    r"^(?P<slug>[a-z0-9-]+)__(?P<name>[a-z0-9-]+)$",
    re.IGNORECASE,
)
IMAGE_REFERENCE_PATTERN = re.compile(
    r"/images/(?P<slug>[a-z0-9-]+)/(?P<name>[a-z0-9-]+)\.(?:svg|webp)",
    re.IGNORECASE,
)

PROJECT_ROOT = Path(HERE)
DATA_DIR = PROJECT_ROOT / "src" / "data"
PUBLIC_IMAGES_DIR = PROJECT_ROOT / "public" / "images"


def preset_for_name(name: str) -> str | None:
    """画像名から import_photo.py のプリセット名を返す。"""
    if name == "hero":
        return "hero"
    if name.startswith("staff-"):
        return "portrait"
    if name.startswith("gallery-"):
        return "square"
    if (
        name == "concept"
        or name.startswith("menu-")
        or name.startswith("work-")
    ):
        return "wide"
    return None


def required_images_by_slug() -> dict[str, set[str]]:
    """src/data/*.ts の画像参照から slug ごとの必要画像名を抽出する。"""
    required: dict[str, set[str]] = {}
    for data_file in sorted(DATA_DIR.glob("*.ts")):
        source = data_file.read_text(encoding="utf-8")
        for match in IMAGE_REFERENCE_PATTERN.finditer(source):
            slug = match.group("slug").lower()
            name = match.group("name").lower()
            required.setdefault(slug, set()).add(name)
    return required


def import_image(src: Path, slug: str, name: str, preset: str) -> Path:
    """1枚を中央クロップ、LANCZOSリサイズ、WebP(q82)で保存する。"""
    width, height = PRESETS[preset]
    with Image.open(src) as image:
        converted = center_crop_resize(image.convert("RGB"), width, height)

    destination_dir = PUBLIC_IMAGES_DIR / slug
    destination_dir.mkdir(parents=True, exist_ok=True)
    destination = destination_dir / f"{name}.webp"
    converted.save(destination, "WEBP", quality=82, method=6)
    return destination


def print_readiness(required: dict[str, set[str]]) -> None:
    """既存WebPを含めた業種別の画像充足状況を表示する。"""
    print("\nImage readiness:")
    for slug, names in sorted(required.items()):
        existing = {
            name
            for name in names
            if (PUBLIC_IMAGES_DIR / slug / f"{name}.webp").is_file()
        }
        missing = sorted(names - existing)
        if missing:
            print(
                f"  MISSING {slug}: {len(existing)}/{len(names)} "
                f"(missing: {', '.join(missing)})"
            )
        else:
            print(f"  READY   {slug}: {len(existing)}/{len(names)}")


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 1

    staging_dir = Path(sys.argv[1]).expanduser().resolve()
    if not staging_dir.is_dir():
        print(f"ERROR: staging directory not found: {staging_dir}")
        return 1

    required = required_images_by_slug()
    imported = 0
    warnings = 0
    errors = 0

    for src in sorted(staging_dir.iterdir(), key=lambda path: path.name.lower()):
        if not src.is_file():
            continue

        extension = src.suffix.lower()
        if extension not in SUPPORTED_EXTENSIONS:
            print(f"WARNING: skipped unsupported file: {src.name}")
            warnings += 1
            continue

        match = FILENAME_PATTERN.fullmatch(src.stem)
        if match is None:
            print(
                "WARNING: skipped unexpected filename "
                f"(expected <slug>__<name>.<ext>): {src.name}"
            )
            warnings += 1
            continue

        slug = match.group("slug").lower()
        name = match.group("name").lower()
        preset = preset_for_name(name)
        if preset is None:
            print(f"WARNING: skipped unknown image name: {src.name}")
            warnings += 1
            continue

        if slug not in required:
            print(f"WARNING: skipped unknown slug: {src.name}")
            warnings += 1
            continue
        if name not in required[slug]:
            print(f"WARNING: skipped image not referenced by {slug}.ts: {src.name}")
            warnings += 1
            continue

        try:
            destination = import_image(src, slug, name, preset)
        except (OSError, ValueError) as error:
            print(f"ERROR: failed to import {src.name}: {error}")
            errors += 1
            continue

        width, height = PRESETS[preset]
        size_kb = destination.stat().st_size / 1024
        relative_destination = destination.relative_to(PROJECT_ROOT).as_posix()
        print(
            f"saved: {relative_destination} "
            f"({width}x{height}, {size_kb:.0f} KB)"
        )
        imported += 1

    print(
        f"\nBatch result: imported={imported}, "
        f"warnings={warnings}, errors={errors}"
    )
    print_readiness(required)
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
