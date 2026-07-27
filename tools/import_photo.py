# -*- coding: utf-8 -*-
"""生成画像をWeb用に最適化して public/images/<slug>/ に取り込む。

使い方:
    python tools/import_photo.py <元画像> <slug> <名前> <プリセット>

プリセット: hero(16:9) / wide(4:3) / square(1:1) / portrait(3:4)

指定アスペクト比に中央クロップ → リサイズ → WebP保存する。
元画像は Downloads 等に置いたまま、プロジェクトには最適化版のみを入れる。
"""
import json
import os
import sys
from PIL import Image

PRESETS = {
    "hero": (1920, 1080),
    "wide": (1200, 900),
    "square": (1000, 1000),
    "portrait": (900, 1200),
}

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def center_crop_resize(img: Image.Image, tw: int, th: int) -> Image.Image:
    src_ratio = img.width / img.height
    dst_ratio = tw / th
    if src_ratio > dst_ratio:
        # 横に長い → 左右を切る
        new_w = int(img.height * dst_ratio)
        left = (img.width - new_w) // 2
        img = img.crop((left, 0, left + new_w, img.height))
    else:
        # 縦に長い → 上下を切る
        new_h = int(img.width / dst_ratio)
        top = (img.height - new_h) // 2
        img = img.crop((0, top, img.width, top + new_h))
    return img.resize((tw, th), Image.LANCZOS)


def main():
    if len(sys.argv) != 5:
        print(__doc__)
        sys.exit(1)

    src, slug, name, preset = sys.argv[1:5]
    if preset not in PRESETS:
        print(f"プリセットは {' / '.join(PRESETS)} のいずれかです（指定値: {preset}）")
        sys.exit(1)

    # 同じ元画像を2回取り込むのを防ぐ（ダウンロード漏れの検知）
    log_path = os.path.join(HERE, "tools", ".import-log.json")
    log = {}
    if os.path.exists(log_path):
        with open(log_path, "r", encoding="utf-8") as f:
            log = json.load(f)
    key = os.path.basename(src)
    if key in log and log[key] != f"{slug}/{name}":
        print(f"ERROR: {key} は既に {log[key]} として取り込み済みです。"
              f"ダウンロードが完了していない可能性があります。")
        sys.exit(2)

    tw, th = PRESETS[preset]
    img = Image.open(src).convert("RGB")
    out = center_crop_resize(img, tw, th)

    dst_dir = os.path.join(HERE, "public", "images", slug)
    os.makedirs(dst_dir, exist_ok=True)
    dst = os.path.join(dst_dir, f"{name}.webp")
    out.save(dst, "WEBP", quality=82, method=6)

    log[key] = f"{slug}/{name}"
    with open(log_path, "w", encoding="utf-8") as f:
        json.dump(log, f, ensure_ascii=False, indent=1)

    kb = os.path.getsize(dst) / 1024
    print(f"saved: public/images/{slug}/{name}.webp  ({tw}x{th}, {kb:.0f} KB)")


if __name__ == "__main__":
    main()
