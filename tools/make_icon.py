# -*- coding: utf-8 -*-
"""HPサンプルスタジオのデスクトップアイコン（白猫）を生成する。
背景プレートはオレンジ（ポートフォリオページのアクセントカラーに合わせる）。
出力: cat-icon-white.ico / cat-icon-white_preview.png
"""
import os
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))

PLATE = (217, 119, 6)        # オレンジプレート（サイトのアクセントカラー）
BODY = (250, 250, 248)       # 白
BODY_DARK = (222, 226, 230)  # 影（耳の内側）
INK = (58, 34, 12)           # 輪郭（暖色寄りのダークブラウン）
AMBER = (245, 191, 66)       # 瞳（アンバー）


def draw_cat(size: int) -> Image.Image:
    s = size / 256.0
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    def xy(*pts):
        return [(p[0] * s, p[1] * s) for p in pts]

    d.ellipse(xy((10, 10), (246, 246)), fill=PLATE, outline=INK, width=max(1, int(8 * s)))

    d.polygon(xy((52, 120), (66, 30), (128, 84)), fill=BODY, outline=INK)
    d.polygon(xy((204, 120), (190, 30), (128, 84)), fill=BODY, outline=INK)
    d.polygon(xy((66, 100), (72, 52), (108, 82)), fill=BODY_DARK)
    d.polygon(xy((190, 100), (184, 52), (148, 82)), fill=BODY_DARK)

    d.ellipse(xy((40, 68), (216, 226)), fill=BODY, outline=INK, width=max(1, int(7 * s)))

    d.ellipse(xy((86, 148), (170, 212)), fill=(238, 241, 243))

    for cx in (92, 164):
        d.ellipse(xy((cx - 17, 112), (cx + 17, 152)), fill=(255, 255, 255), outline=INK, width=max(1, int(4 * s)))
        d.ellipse(xy((cx - 8, 122), (cx + 8, 146)), fill=AMBER)
        d.ellipse(xy((cx - 3, 126), (cx + 3, 136)), fill=INK)

    d.polygon(xy((120, 164), (136, 164), (128, 176)), fill=INK)
    d.line(xy((128, 176), (128, 188)), fill=INK, width=max(1, int(4 * s)))
    d.arc(xy((108, 176), (128, 198)), 0, 100, fill=INK, width=max(1, int(4 * s)))
    d.arc(xy((128, 176), (148, 198)), 80, 180, fill=INK, width=max(1, int(4 * s)))

    w = max(1, int(4 * s))
    for y1, y2 in ((150, 142), (166, 166), (182, 190)):
        d.line(xy((30, y1), (78, y2)), fill=INK, width=w)
        d.line(xy((226, y1), (178, y2)), fill=INK, width=w)

    return img


def main():
    sizes = [256, 128, 64, 48, 32, 16]
    imgs = [draw_cat(sz) for sz in sizes]
    ico_path = os.path.join(HERE, "cat-icon-white.ico")
    imgs[0].save(ico_path, format="ICO", sizes=[(sz, sz) for sz in sizes],
                 append_images=imgs[1:])
    png_path = os.path.join(HERE, "cat-icon-white_preview.png")
    imgs[0].save(png_path)
    print("saved:", ico_path)
    print("saved:", png_path)


if __name__ == "__main__":
    main()
