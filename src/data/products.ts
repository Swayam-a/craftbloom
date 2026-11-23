import { Product, Category, Review } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'floral-creations',
    name: 'Floral Creations',
    title: 'Handmade Pipe-Cleaner Flowers & Stems',
    description: 'Everlasting velvet pipe-cleaner blooms crafted petal by petal with vibrant colors and soft-touch textures.',
    image: '/images/products/cat-rose.jpg',
    bannerImage: '/images/products/rose-stem-hero.jpg',
    itemCount: 4,
    accentColor: 'from-pink-500/20 to-purple-500/20'
  },
  {
    id: 'tealight-holders-diyas',
    name: 'Tealight Holders & Diyas',
    title: 'Decorative Floral Tealight Holders & Diyas',
    description: 'Enchanting floral candle & tealight holders with faux pearl halos, creating warm festive illumination.',
    image: '/images/products/cat-red-diya.jpg',
    bannerImage: '/images/products/tealight-trio-1.jpg',
    itemCount: 5,
    accentColor: 'from-amber-500/20 to-rose-500/20'
  },
  {
    id: 'home-decor',
    name: 'Home Decor',
    title: 'Handmade Flower Pots & Miniature Arrangements',
    description: 'Whimsical potted sunflowers, daisies, and botanical desk arrangements in textured handcrafted pots.',
    image: '/images/products/cat-sunflowers.jpg',
    bannerImage: '/images/products/sunflower-pot-hero.jpg',
    itemCount: 3,
    accentColor: 'from-yellow-400/20 to-emerald-500/20'
  },
  {
    id: 'torans-hangings',
    name: 'Torans & Hangings',
    title: 'Decorative Floral Hangings & Torans',
    description: 'Traditional and contemporary entrance door torans, floral wall bands, and auspicious festive garlands.',
    image: '/images/products/cat-toran.jpg',
    bannerImage: '/images/products/floral-toran-1.jpg',
    itemCount: 4,
    accentColor: 'from-orange-500/20 to-amber-500/20'
  },
  {
    id: 'decorative-flowers',
    name: 'Decorative Flowers',
    title: 'Handmade Floral Ornaments & Brooches',
    description: 'Versatile handcrafted floral brooches, gift toppers, and decorative motifs for garments, bags, and decor.',
    image: '/images/products/cat-blossom.jpg',
    bannerImage: '/images/products/hero-stage.jpg',
    itemCount: 3,
    accentColor: 'from-rose-400/20 to-pink-500/20'
  },
  {
    id: 'accessories',
    name: 'Floral Accessories',
    title: 'Handmade Floral Accessories & Jewellery',
    description: 'Unique wearable flower art including bridal haldi hair sticks, floral pins, and delicate floral jewellery.',
    image: '/images/products/hair-accessory-1.jpg',
    bannerImage: '/images/products/hair-accessory-1.jpg',
    itemCount: 3,
    accentColor: 'from-amber-400/20 to-orange-500/20'
  },
  {
    id: 'festive-decor',
    name: 'Festive Decor',
    title: 'Festive Decorative Plates & Accessories',
    description: 'Artisan gota-patti mirror diya plates, festive centerpieces, and pooja decorative ensembles.',
    image: '/images/products/diya-plate-1.jpg',
    bannerImage: '/images/products/craftbloom-master.jpg',
    itemCount: 4,
    accentColor: 'from-purple-500/20 to-rose-500/20'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-hair-accessory',
    name: 'Floral Hair Accessory',
    slug: 'floral-hair-accessory',
    price: 199,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 56,
    category: 'accessories',
    categoryName: 'Floral Accessories',
    shortDescription: 'Handcrafted floral hair bun ornament with beaded halo and polished hairpin stick.',
    description: 'A striking traditional floral hair ornament handcrafted with layered velvet craft petals in warm sunshine yellow and bright orange tones. Accented with an elegant ring of lustrous faux pearls and paired with an artisan wooden pin. Ideal for weddings, Haldi / Mehendi ceremonies, festive get-togethers, and modern bohemian styling.',
    craftDetails: [
      '100% Handcrafted by skilled women artisans',
      'High-grade flexible pipe cleaner petals that retain their shape',
      'Lustrous acrylic faux pearl garland ring',
      'Smooth hand-finished wooden pin included',
      'Lightweight and comfortable to wear all day'
    ],
    materials: ['Velvet Craft Wire', 'Faux Pearl Beads', 'Polished Wood Pin', 'Felt Base'],
    dimensions: 'Ring: 8.5 cm outer diameter, Pin: 15 cm length',
    primaryImage: '/images/products/hair-accessory-1.jpg',
    images: [
      '/images/products/hair-accessory-1.jpg',
      '/images/products/craftbloom-master.jpg'
    ],
    isBestseller: true,
    isNew: true,
    inStock: true,
    availableColors: [
      { name: 'Sunshine Yellow & Orange', hex: '#F59E0B', bgClass: 'bg-amber-500' },
      { name: 'Rose Pink & Cream', hex: '#EC4899', bgClass: 'bg-pink-500' },
      { name: 'Royal Blue & Gold', hex: '#3B82F6', bgClass: 'bg-blue-600' }
    ],
    customisable: true,
    tags: ['hair accessory', 'haldi jewellery', 'floral jewellery', 'bestseller', 'festive']
  },
  {
    id: 'prod-rose-stem',
    name: 'Handmade Rose Stem',
    slug: 'handmade-rose-stem',
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    reviewCount: 42,
    category: 'floral-creations',
    categoryName: 'Floral Creations',
    shortDescription: 'Delicate everlasting velvet pipe-cleaner rose stem with leafy green foliage.',
    description: 'An everlasting floral rose stem sculpted meticulously using plush velvet pipe cleaners. Featuring layered soft pink petals in a rich dimensional cabbage rose form, complete with sturdy yet bendable emerald green calyx, stem, and foliage. Never withers, requires zero watering, and adds a cheerful handmade vibe to bud vases, study desks, or gift hampers.',
    craftDetails: [
      'Multi-layered sculpted petals for realistic depth',
      'Bendable wire core stem allows customized vase arrangement',
      'Ultra-soft velvet texture that does not collect excess dust',
      'Individually wrapped and packaged with care'
    ],
    materials: ['Chenille Craft Velvet Wire', 'Flexible Florist Wire Core', 'Floral Tape'],
    dimensions: 'Flower: 6.5 cm diameter, Total Length: 24 cm',
    primaryImage: '/images/products/rose-stem-1.jpg',
    images: [
      '/images/products/rose-stem-1.jpg',
      '/images/products/rose-stem-hero.jpg',
      '/images/products/cat-rose.jpg'
    ],
    isBestseller: true,
    inStock: true,
    availableColors: [
      { name: 'Blush Pink', hex: '#EC4899', bgClass: 'bg-pink-500' },
      { name: 'Crimson Red', hex: '#DC2626', bgClass: 'bg-red-600' },
      { name: 'Lavender Mist', hex: '#A855F7', bgClass: 'bg-purple-500' },
      { name: 'Buttercup Yellow', hex: '#FBBF24', bgClass: 'bg-yellow-400' }
    ],
    customisable: true,
    tags: ['rose', 'pipe cleaner flower', 'artificial bouquet', 'everlasting bloom', 'gifting']
  },
  {
    id: 'prod-floral-tealight-holder',
    name: 'Floral Tealight Holder (Set of 3)',
    slug: 'floral-tealight-holder',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 78,
    category: 'tealight-holders-diyas',
    categoryName: 'Tealight Holders & Diyas',
    shortDescription: 'Tri-color festive floral tealight diya set encircled with glistening faux pearls.',
    description: 'A vibrant set of three decorative floral tealight candle holders in traditional festive shades: auspicious red, auspicious yellow/gold, and emerald green. Each holder features concentric looped velvet craft petals crowned by a delicate circlet of pearl beads around a central brass/aluminum cup that fits standard tealights (both wax and smokeless LED).',
    craftDetails: [
      'Set of 3 assorted festive colors: Red, Gold/Yellow, and Forest Green',
      'Heat-safe central metal cup for safe candle burning',
      'Dense velvety petal loops that sparkle softly in candlelight',
      'Hand-threaded pearl bead border'
    ],
    materials: ['Craft Chenille Wire', 'Heat-resistant Metal Cup', 'Pearl Beads', 'Reinforced Felt Backing'],
    dimensions: 'Each holder: 9 cm diameter, 2 cm height',
    primaryImage: '/images/products/tealight-trio-1.jpg',
    images: [
      '/images/products/tealight-trio-1.jpg',
      '/images/products/blue-velvet-diya.jpg',
      '/images/products/red-dahlia-diya.jpg'
    ],
    isBestseller: true,
    isNew: true,
    inStock: true,
    availableColors: [
      { name: 'Festive Trio (Red, Yellow, Green)', hex: '#DC2626', bgClass: 'bg-red-600' },
      { name: 'Royal Peacock (Blue, Teal, Gold)', hex: '#2563EB', bgClass: 'bg-blue-600' },
      { name: 'Pastel Dream (Pink, Lilac, Mint)', hex: '#C084FC', bgClass: 'bg-purple-400' }
    ],
    customisable: true,
    tags: ['diya', 'tealight', 'diwali decor', 'pooja decor', 'bestseller']
  },
  {
    id: 'prod-flower-pot-decor',
    name: 'Mini Flower Pot Decor',
    slug: 'mini-flower-pot-decor',
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 64,
    category: 'home-decor',
    categoryName: 'Home Decor',
    shortDescription: 'Charming mini sunflower arrangement seated in a textured bark-finish pot.',
    description: 'Bring sunshine into your workspace! This adorable desktop mini pot features a cheerful trio of blooming sunflowers with rich golden-yellow velvet petals and dark chocolate centers, set amongst green leaves in a corrugated rustic bark-patterned pot. A mood-lifting accent that never needs watering.',
    craftDetails: [
      'Includes 3 articulated sunflowers with flexible wired stems',
      'Miniature rustic ribbed bark effect pot',
      'Compact footprint ideal for computer desks, bookshelves, and bedside tables',
      'Weighted base so it won’t tip over easily'
    ],
    materials: ['Velvet Wire', 'Textured Paper-board Pot', 'Eco Moss Base', 'Wooden Core'],
    dimensions: 'Total Height: 12 cm, Width: 9 cm, Pot Diameter: 5.5 cm',
    primaryImage: '/images/products/flower-pot-1.jpg',
    images: [
      '/images/products/flower-pot-1.jpg',
      '/images/products/sunflower-pot-hero.jpg',
      '/images/products/cat-sunflowers.jpg'
    ],
    isBestseller: true,
    inStock: true,
    availableColors: [
      { name: 'Classic Sunflower Yellow', hex: '#F59E0B', bgClass: 'bg-amber-500' },
      { name: 'Daisy White & Yellow', hex: '#FEF08A', bgClass: 'bg-yellow-200' },
      { name: 'Wildflower Lavender', hex: '#A855F7', bgClass: 'bg-purple-500' }
    ],
    customisable: false,
    tags: ['sunflower', 'desk plant', 'mini pot', 'table decor', 'gift for friend']
  },
  {
    id: 'prod-decorative-diya-plate',
    name: 'Decorative Diya Plate',
    slug: 'decorative-diya-plate',
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviewCount: 51,
    category: 'festive-decor',
    categoryName: 'Festive Decor',
    shortDescription: 'Gota-patti & mirror-work festive decorative pooja diya plate with marigold pom-poms.',
    description: 'An artisanal festive diya platter adorned with shimmering golden gota patti lace, arched scalloped fan borders, an auspicious central mirror, and cheerful yellow and saffron fluffy pom-poms. Designed to hold candles, traditional clay diyas, or kumkum-chawal during festive poojas, Diwali celebrations, and housewarmings.',
    craftDetails: [
      'Intricate gota patti scallop design with metallic golden shine',
      'Central reflective glass mirror to catch flickering diya reflections',
      'Festive marigold pom-pom accents',
      'Solid non-slip base suitable for table tops and floor rangolis'
    ],
    materials: ['Golden Gota Patti Ribbon', 'Glass Mirror', 'Marigold Pom-Poms', 'MDF Base'],
    dimensions: '16 cm width, 14 cm depth',
    primaryImage: '/images/products/diya-plate-1.jpg',
    images: [
      '/images/products/diya-plate-1.jpg',
      '/images/products/red-dahlia-diya.jpg',
      '/images/products/craftbloom-master.jpg'
    ],
    isBestseller: true,
    inStock: true,
    availableColors: [
      { name: 'Marigold Gold & Orange', hex: '#EA580C', bgClass: 'bg-orange-600' },
      { name: 'Rose Pink & Silver Gota', hex: '#EC4899', bgClass: 'bg-pink-500' }
    ],
    customisable: true,
    tags: ['diya plate', 'pooja thali', 'festive decor', 'gota patti', 'diwali']
  },
  {
    id: 'prod-floral-toran',
    name: 'Floral Toran Door Hanging',
    slug: 'floral-toran-door-hanging',
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviewCount: 37,
    category: 'torans-hangings',
    categoryName: 'Torans & Hangings',
    shortDescription: 'V-shaped traditional floral entrance toran with handmade rosettes and golden trim.',
    description: 'Adorn your doorway with joy and blessings! This handcrafted V-shaped toran is made with a rich golden woven ribbon border, alternating crimson red and sunshine yellow floral rosettes, emerald green foliage accents, and festive side ties. Perfect for front doors, pooja room entrances, and celebratory festival backdrops.',
    craftDetails: [
      'Traditional auspicious V-form fits standard single entrance doors',
      'Densely packed handmade floral rosettes with green leaf accents',
      'Sturdy golden zari border with reinforced side hanging loops',
      'Reusable year after year without color fading'
    ],
    materials: ['Zari Fabric Band', 'Chenille Wire Rosettes', 'Felt Leaves', 'Golden Hanging Rings'],
    dimensions: 'Total span: 92 cm (36 inches), Center drop: 30 cm',
    primaryImage: '/images/products/floral-toran-1.jpg',
    images: [
      '/images/products/floral-toran-1.jpg',
      '/images/products/floral-garland-hero.jpg',
      '/images/products/cat-toran.jpg'
    ],
    isBestseller: true,
    inStock: true,
    availableColors: [
      { name: 'Classic Red & Yellow', hex: '#DC2626', bgClass: 'bg-red-600' },
      { name: 'Pink & Ivory Pastel', hex: '#F472B6', bgClass: 'bg-pink-400' },
      { name: 'Royal Orange & Magenta', hex: '#EA580C', bgClass: 'bg-orange-600' }
    ],
    customisable: true,
    tags: ['toran', 'door hanging', 'bandarwal', 'entrance decor', 'festive']
  },
  {
    id: 'prod-blue-velvet-diya',
    name: 'Royal Blue Velvet Lotus Diya',
    slug: 'royal-blue-velvet-lotus-diya',
    price: 179,
    originalPrice: 229,
    rating: 4.9,
    reviewCount: 45,
    category: 'tealight-holders-diyas',
    categoryName: 'Tealight Holders & Diyas',
    shortDescription: 'Statement royal blue velvet petal diya holder with shimmering pearl border.',
    description: 'An eye-catching signature piece from CraftBloom. Deep cobalt royal blue velvet pipe-cleaner petals curve gracefully outward, highlighted by an inner halo of polished white pearls around the tea-light holder. Creates a magical contrast against warm golden candlelight.',
    craftDetails: [
      'Signature midnight royal blue colorway',
      'Individual hand-curved petal loops with uniform symmetry',
      'Central cup supports standard 3.8 cm tealight',
      'Includes one complimentary unscented soy wax tealight'
    ],
    materials: ['Royal Blue Chenille Wire', 'Faux Glass Pearls', 'Metal Diya Core'],
    dimensions: 'Diameter: 10 cm, Height: 2.5 cm',
    primaryImage: '/images/products/blue-velvet-diya.jpg',
    images: [
      '/images/products/blue-velvet-diya.jpg',
      '/images/products/tealight-trio-1.jpg',
      '/images/products/hero-stage.jpg'
    ],
    isBestseller: false,
    isNew: true,
    inStock: true,
    availableColors: [
      { name: 'Royal Blue', hex: '#1D4ED8', bgClass: 'bg-blue-700' },
      { name: 'Peacock Emerald', hex: '#059669', bgClass: 'bg-emerald-600' },
      { name: 'Deep Purple', hex: '#7E22CE', bgClass: 'bg-purple-700' }
    ],
    customisable: true,
    tags: ['royal blue diya', 'tealight holder', 'pearl diya', 'diwali gift']
  },
  {
    id: 'prod-red-dahlia-diya',
    name: 'Crimson Dahlia Tealight Diya',
    slug: 'crimson-dahlia-tealight-diya',
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 38,
    category: 'tealight-holders-diyas',
    categoryName: 'Tealight Holders & Diyas',
    shortDescription: 'Rich crimson double-tier dahlia blossom tealight holder.',
    description: 'Sculpted like a blooming dahlia in full glory, this crimson red tealight holder features two dense tiers of pointed craft petals with subtle golden accents and a snug candle receptacle. Radiates warmth and warmth in any room setting.',
    craftDetails: [
      'Two-tiered layered petal structure for dramatic volume',
      'Non-shedding velvety fibers',
      'Felt-lined bottom prevents surface scratches',
      'Complimentary tealight included'
    ],
    materials: ['Crimson Chenille Craft Wire', 'Golden Accents', 'Metal Diya Shell'],
    dimensions: 'Diameter: 9.5 cm, Height: 2.2 cm',
    primaryImage: '/images/products/red-dahlia-diya.jpg',
    images: [
      '/images/products/red-dahlia-diya.jpg',
      '/images/products/tealight-trio-1.jpg',
      '/images/products/craftbloom-master.jpg'
    ],
    isBestseller: false,
    inStock: true,
    availableColors: [
      { name: 'Crimson Red', hex: '#B91C1C', bgClass: 'bg-red-700' },
      { name: 'Bright Magenta', hex: '#BE185D', bgClass: 'bg-pink-700' }
    ],
    customisable: true,
    tags: ['crimson diya', 'dahlia', 'tealight', 'festive lighting']
  },
  {
    id: 'prod-blossom-brooch',
    name: 'Handmade Blossom Brooch & Stem',
    slug: 'handmade-blossom-brooch-stem',
    price: 129,
    originalPrice: 169,
    rating: 4.7,
    reviewCount: 29,
    category: 'decorative-flowers',
    categoryName: 'Decorative Flowers',
    shortDescription: 'Sweet 5-petal pink blossom with sunny yellow pistil, usable as brooch or decor accent.',
    description: 'A charming handcrafted 5-petal flower in vibrant candy pink with a sunny yellow center and a flexible green stem. Versatile accessory that can be pinned to denim jackets, tote bags, hairbands, or displayed in bud vases.',
    craftDetails: [
      'Vivid candy pink velvet petals with yellow button center',
      'Includes dual safety brooch pin and bendable wire stem',
      'Ultra lightweight and kid/tween-friendly',
      'Durable, bendable and re-shapeable'
    ],
    materials: ['High Density Pipe Cleaner Velvet', 'Safety Brooch Pin Backing', 'Flexible Core'],
    dimensions: 'Diameter: 6 cm, Stem: 10 cm',
    primaryImage: '/images/products/cat-blossom.jpg',
    images: [
      '/images/products/cat-blossom.jpg',
      '/images/products/rose-stem-1.jpg'
    ],
    isBestseller: false,
    inStock: true,
    availableColors: [
      { name: 'Candy Pink', hex: '#EC4899', bgClass: 'bg-pink-500' },
      { name: 'Sky Lavender', hex: '#C084FC', bgClass: 'bg-purple-400' },
      { name: 'Sunny Lemon', hex: '#FDE047', bgClass: 'bg-yellow-300' }
    ],
    customisable: true,
    tags: ['brooch', 'flower pin', 'tween gift', 'bag charm', 'pink blossom']
  },
  {
    id: 'prod-festive-floral-garland',
    name: 'Festive Floral Garland Border',
    slug: 'festive-floral-garland-border',
    price: 399,
    originalPrice: 499,
    rating: 4.9,
    reviewCount: 31,
    category: 'torans-hangings',
    categoryName: 'Torans & Hangings',
    shortDescription: 'Straight decorative floral border garland with woven golden zari backing.',
    description: 'A stunning horizontal decorative floral garland band created on a wide woven golden zari strip, studded with alternating marigold yellow and rose red floral rosettes. Beautiful along fireplace mantles, pooja altar borders, curtain pelmets, or dining table runners.',
    craftDetails: [
      'Gleaming gold zari woven foundation',
      'Evenly spaced dual-tone handcrafted rosettes',
      'Includes golden ties on both sides for effortless mounting',
      'Rolls up neatly for easy seasonal storage'
    ],
    materials: ['Zari Fabric Band', 'Chenille Rosettes', 'Satin Backing'],
    dimensions: 'Length: 100 cm (40 inches), Width: 6 cm',
    primaryImage: '/images/products/floral-garland-hero.jpg',
    images: [
      '/images/products/floral-garland-hero.jpg',
      '/images/products/floral-toran-1.jpg'
    ],
    isBestseller: false,
    isNew: true,
    inStock: true,
    availableColors: [
      { name: 'Golden Festive Red & Yellow', hex: '#F59E0B', bgClass: 'bg-amber-500' },
      { name: 'Rose & Champagne Gold', hex: '#F472B6', bgClass: 'bg-pink-400' }
    ],
    customisable: true,
    tags: ['garland', 'mandir border', 'table runner decor', 'zari garland']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aanya Sharma',
    rating: 5,
    date: '3 days ago',
    comment: 'The blue velvet tealight holder is even more gorgeous in person! The pearl detailing and velvet finish feel so premium. Everyone asked where I bought it!',
    verified: true,
    location: 'Mumbai, MH'
  },
  {
    id: 'rev-2',
    author: 'Priya Patel',
    rating: 5,
    date: '1 week ago',
    comment: 'Ordered the floral hair accessory for my sister’s haldi ceremony. It looked so fresh, colorful and didn’t wilt like real flowers! Super happy with the fast delivery.',
    verified: true,
    location: 'Ahmedabad, GJ'
  },
  {
    id: 'rev-3',
    author: 'Rhea Nambiar',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The mini sunflower pot decor on my work desk brings a smile to my face every single morning. The craft quality is top-notch and made with so much love.',
    verified: true,
    location: 'Bengaluru, KA'
  },
  {
    id: 'rev-4',
    author: 'Tanvi Joshi',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The toran looks majestic on our front entrance door. Truly artistic craftsmanship that stands out from typical plastic decorations.',
    verified: true,
    location: 'Pune, MH'
  }
];

export const BRAND_CONFIG = {
  name: 'CraftBloom',
  tagline: 'Handmade • Creative • Unique',
  heroHeadline: 'Little Pieces of Art. Made with Love. ♡',
  heroSubheadline: 'Discover handmade creations that bring colour, joy and creativity into every corner of your world.',
  whatsappNumber: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  email: 'hello@craftbloomstudio.com',
  instagram: '@craftbloom.studio',
  freeShippingThreshold: 499,
  shippingFee: 49,
};

