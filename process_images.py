import os
from PIL import Image

src_img_path = r"C:/Users/pc/.gemini/antigravity/brain/264508a6-539a-4d4a-a0ba-c53618f779d9/.user_uploaded/media_1795445140754_20fffca8.jpg"
out_dir = r"d:/Swayam/kuku/public/images/products"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_img_path)
w, h = img.size

# Let's define the precise boxes for each product based on 1024x576 image
# Bottom row bestsellers:
# Total 6 cards:
# Card 1: Floral Hair Accessory: x ~ 60 to 205, y ~ 795 to 920 in scaled terms? No, total height is 576!
# In 1024x576:
# Card 1: x: 62 to 205, y: 457 to 535
# Card 2: Handmade Rose Stem: x: 222 to 348, y: 457 to 535
# Card 3: Floral Tealight Holder (Trio): x: 367 to 493, y: 457 to 535
# Card 4: Mini Flower Pot Decor: x: 512 to 638, y: 457 to 535
# Card 5: Decorative Diya Plate: x: 657 to 783, y: 457 to 535
# Card 6: Floral Toran: x: 802 to 928, y: 457 to 535

# From Categories row:
# Cat 1 (Floral Creations - Pink Rose): x: 58 to 150, y: 345 to 415
# Cat 2 (Tealight Holders & Diyas - Red Dahlia): x: 250 to 335, y: 345 to 415
# Cat 3 (Home Decor - Sunflowers): x: 435 to 510, y: 345 to 415
# Cat 4 (Torans & Hangings): x: 600 to 705, y: 345 to 415
# Cat 5 (Decorative Flowers - Pink Blossom): x: 790 to 865, y: 345 to 415

# From Hero banner:
# Hero banner showcase (full top product group): x: 340 to 980, y: 80 to 270
# Hero item 1: Red tealight lotus: x: 345 to 480, y: 155 to 255
# Hero item 2: Blue royal velvet tealight: x: 430 to 600, y: 220 to 275 (also full blue flower: x: 430 to 600, y: 160 to 275)
# Hero item 3: Sunflowers mini pot: x: 600 to 740, y: 80 to 255
# Hero item 4: Pink fluffy rose stem: x: 745 to 885, y: 90 to 260
# Hero item 5: Floral toran garland: x: 680 to 980, y: 215 to 275

crops = {
    # Bestsellers cards product shots (clean 1:1 square crop or 4:3)
    "hair-accessory-1.jpg": (60, 455, 207, 538),
    "rose-stem-1.jpg": (220, 455, 350, 538),
    "tealight-trio-1.jpg": (365, 455, 495, 538),
    "flower-pot-1.jpg": (510, 455, 640, 538),
    "diya-plate-1.jpg": (655, 455, 785, 538),
    "floral-toran-1.jpg": (798, 455, 930, 538),

    # Detailed hero product shots (higher resolution)
    "blue-velvet-diya.jpg": (430, 160, 600, 275),
    "red-dahlia-diya.jpg": (345, 155, 480, 258),
    "sunflower-pot-hero.jpg": (600, 80, 740, 255),
    "rose-stem-hero.jpg": (745, 90, 885, 260),
    "floral-garland-hero.jpg": (680, 215, 980, 275),

    # Category icons / closeups
    "cat-rose.jpg": (65, 345, 150, 415),
    "cat-red-diya.jpg": (250, 345, 335, 415),
    "cat-sunflowers.jpg": (435, 345, 510, 415),
    "cat-toran.jpg": (600, 345, 705, 415),
    "cat-blossom.jpg": (790, 345, 865, 415),

    # Hero visual banner showcase
    "hero-stage.jpg": (335, 80, 985, 280),
}

for name, box in crops.items():
    cropped = img.crop(box)
    # Upscale slightly with high quality Lanczos filter for crisp presentation
    factor = 3
    nw, nh = (box[2] - box[0]) * factor, (box[3] - box[1]) * factor
    high_res = cropped.resize((nw, nh), Image.Resampling.LANCZOS)
    high_res.save(os.path.join(out_dir, name), quality=95)
    print(f"Saved {name}: {nw}x{nh}")

# Also save the full master reference image as craftbloom-master.jpg
img.save(os.path.join(out_dir, "craftbloom-master.jpg"), quality=95)
print("Saved all product images successfully!")

