#!/usr/bin/env python3
"""
TCT Website - Automatic Gallery & Image Optimizer
Author: Travel Computer Training (TCT)
Description:
  images/gallery/ နှင့် images/hero-bg.jpg တို့ကို Web Standard ဖြစ်သော
  (1200px / 1920px, Quality 85%, ~170 KB) သို့ အလိုအလျောက် resize နှင့် compress ပြုလုပ်ပေးသော script ဖြစ်ပါသည်။
"""

import os
import glob
from PIL import Image

def optimize_all():
    print("==================================================")
    print("  TCT Website - Automatic Image Optimizer")
    print("==================================================\n")

    # 1. Optimize Gallery Images (Max width: 1200px, Quality: 85)
    gallery_dir = os.path.join(os.path.dirname(__file__), "images", "gallery")
    gallery_images = sorted(glob.glob(os.path.join(gallery_dir, "*.jpg")))

    print(f"📸 Gallery ဖိုဒါအတွင်း တွေ့ရှိသော ပုံအရေအတွက်: {len(gallery_images)} ပုံ\n")

    total_orig = 0
    total_new = 0

    for img_path in gallery_images:
        orig_kb = os.path.getsize(img_path) / 1024
        total_orig += orig_kb

        with Image.open(img_path) as im:
            im = im.convert("RGB")
            w, h = im.size
            if w > 1200:
                new_w = 1200
                new_h = int(h * (1200 / w))
                im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            else:
                new_w, new_h = w, h

            im.save(img_path, "JPEG", quality=85, optimize=True, progressive=True)

        new_kb = os.path.getsize(img_path) / 1024
        total_new += new_kb
        print(f"✓ {os.path.basename(img_path):24}: {w}x{h} ({orig_kb:6.1f} KB) ➔ {new_w}x{new_h} ({new_kb:5.1f} KB)")

    # 2. Optimize Hero Background (Max width: 1920px, Quality: 85)
    hero_path = os.path.join(os.path.dirname(__file__), "images", "hero-bg.jpg")
    if os.path.exists(hero_path):
        orig_hero_kb = os.path.getsize(hero_path) / 1024
        with Image.open(hero_path) as im:
            im = im.convert("RGB")
            w, h = im.size
            if w > 1920:
                new_w = 1920
                new_h = int(h * (1920 / w))
                im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            else:
                new_w, new_h = w, h
            im.save(hero_path, "JPEG", quality=85, optimize=True, progressive=True)
        new_hero_kb = os.path.getsize(hero_path) / 1024
        print(f"\n✓ hero-bg.jpg              : {w}x{h} ({orig_hero_kb:6.1f} KB) ➔ {new_w}x{new_h} ({new_hero_kb:5.1f} KB)")

    saved_mb = (total_orig - total_new) / 1024
    pct = (1 - total_new / total_orig) * 100 if total_orig > 0 else 0
    print("\n--------------------------------------------------")
    print(f"🎉 ပြီးစီးပါပြီ! စုစုပေါင်း ချုံ့ပေးနိုင်ခဲ့သော Data ပမာဏ: {saved_mb:.2f} MB ({pct:.1f}% လျှော့ချပြီး)")
    print("--------------------------------------------------\n")

if __name__ == "__main__":
    optimize_all()
