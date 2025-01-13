// Product Categories
export const categories = [
    {
        id: 1,
        name: "Laptops",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        link: "/products?category=Laptops"
    },
    {
        id: 2,
        name: "Tablets",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        link: "/products?category=Tablets"
    },
    {
        id: 3,
        name: "Displays",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        link: "/products?category=Displays"
    },
    {
        id: 4,
        name: "Desktop",
        image: "https://images.unsplash.com/photo-1593152167544-085d3b9c4938",
        link: "/products?category=Desktop"
    },
    {
        id: 5,
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
        link: "/products?category=Accessories"
    }
];

// Brands
export const brands = [
    "Apple",
    "Dell",
    "HP",
    "Lenovo",
    "Samsung",
    "ASUS",
    "Microsoft",
    "LG"
];

// Specifications options for filtering
export const specifications = {
    ram: ["4GB", "8GB", "16GB", "32GB", "64GB"],
    storage: ["256GB", "512GB", "1TB", "2TB"],
    screenSize: ["13-inch", "14-inch", "15-inch", "16-inch", "27-inch", "32-inch"],
    processor: ["M1", "M2", "M2 Pro", "M2 Max", "Intel i5", "Intel i7", "Intel i9", "AMD Ryzen 7", "AMD Ryzen 9"],
    resolution: ["1080p", "2K", "4K", "5K", "6K"]
};

// Availability options
export const availabilityOptions = [
    { value: "all", label: "All" },
    { value: "in_stock", label: "In Stock" },
    { value: "out_of_stock", label: "Out of Stock" },
    { value: "pre_order", label: "Pre-order" }
];
// All Products with enhanced details
// Previous categories, brands, specifications, and availabilityOptions remain the same...

// All Products with enhanced details
export const allProducts = [
    // Laptops - Apple
    {
        id: 1,
        name: "MacBook Pro 14",
        description: "Experience unprecedented power with the Apple M2 Pro chip, featuring a 12-core CPU and up to 19-core GPU. The MacBook Pro 14 redefines professional computing with its stunning Liquid Retina XDR display, offering extreme dynamic range and incredible color accuracy. Perfect for intensive tasks like video editing, software development, and machine learning. The advanced thermal architecture ensures sustained performance without throttling, while the six-speaker sound system delivers studio-quality audio. With up to 18 hours of battery life and a versatile array of ports including HDMI, SDXC, and MagSafe 3, this MacBook Pro is engineered for professionals who demand the ultimate in performance and capability.",
        price: 1999.00,
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
            "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0"
        ],
        category: "Laptops",
        brand: "Apple",
        specs: {
            ram: "16GB",
            storage: "512GB",
            processor: "M2 Pro",
            screenSize: "14-inch",
            resolution: "4K",
            battery: "70Wh lithium-polymer",
            ports: "3x Thunderbolt 4, HDMI, SDXC",
            weight: "3.5 lbs (1.6 kg)",
            dimensions: "12.31 x 8.71 x 0.61 inches"
        },
        warranty: "1 year limited warranty with 90 days of complimentary technical support",
        sku: "MBPR14-M2P-512",
        availability: "in_stock",
        rating: 4.8,
        reviews: [
            {
                id: 1,
                user: "Sarah Johnson",
                rating: 5,
                date: "2023-12-15",
                verified: true,
                title: "Perfect for Computer Science Major",
                content: "As a CS student, this MacBook Pro handles all my programming tasks effortlessly. The M2 Pro chip makes compiling code incredibly fast, and the battery life is outstanding for long coding sessions.",
                helpfulVotes: 45,
                courseContext: "Computer Science - Advanced Programming",
                isStudentPurchase: true
            },
            {
                id: 2,
                user: "Michael Chen",
                rating: 4,
                date: "2023-12-10",
                verified: true,
                title: "Great Performance, Slightly Pricey",
                content: "The performance is exceptional for running multiple VMs and coding environments. The display is perfect for long hours of work. Only downside is the price, but the student discount helps.",
                helpfulVotes: 32,
                courseContext: "Software Engineering",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 245,
            averageRating: 4.8,
            ratingDistribution: {
                5: 180,
                4: 45,
                3: 15,
                2: 3,
                1: 2
            }
        },
        educationalUse: {
            recommendedFor: ["Computer Science", "Digital Media", "Engineering"],
            softwareCompatibility: ["Xcode", "Adobe Creative Suite", "Visual Studio Code"],
            studentTestimonials: 12
        },
        documentation: {
            userManual: "https://support.apple.com/guide/macbook-pro/welcome/mac",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-01"
    },
    {
        id: 2,
        name: "MacBook Pro 16",
        description: "The most powerful MacBook Pro ever is here. Featuring the blazing-fast M2 Max chip with up to 38‑core GPU, this 16-inch powerhouse delivers exceptional performance for the most demanding tasks. The stunning Liquid Retina XDR display with Extreme Dynamic Range and over a billion colors brings your work to life with incredible detail and clarity. With up to 96GB of unified memory, you can work with massive files and run multiple pro apps with ease. The advanced thermal system maintains pro-level performance while staying whisper-quiet.",
        price: 2499.00,
        images: [
            "https://images.unsplash.com/photo-1537498425277-c283d32ef9db",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
            "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0"
        ],
        category: "Laptops",
        brand: "Apple",
        specs: {
            ram: "32GB",
            storage: "1TB",
            processor: "M2 Max",
            screenSize: "16-inch",
            resolution: "4K",
            battery: "100Wh lithium-polymer",
            ports: "3x Thunderbolt 4, HDMI, SDXC",
            weight: "4.7 lbs (2.1 kg)",
            dimensions: "14.01 x 9.77 x 0.66 inches"
        },
        warranty: "1 year limited warranty with 90 days of complimentary technical support",
        sku: "MBPR16-M2M-1TB",
        availability: "in_stock",
        rating: 4.9,
        reviews: [
            {
                id: 1,
                user: "Alex Thompson",
                rating: 5,
                date: "2023-12-20",
                verified: true,
                title: "Ultimate Machine Learning Workstation",
                content: "This MacBook Pro handles complex ML models and data processing tasks with ease. The M2 Max chip's performance in TensorFlow and PyTorch is remarkable. Battery life is exceptional even under heavy workloads.",
                helpfulVotes: 56,
                courseContext: "Machine Learning and AI",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 189,
            averageRating: 4.9,
            ratingDistribution: {
                5: 160,
                4: 25,
                3: 3,
                2: 1,
                1: 0
            }
        },
        educationalUse: {
            recommendedFor: ["Data Science", "Machine Learning", "Video Production"],
            softwareCompatibility: ["TensorFlow", "PyTorch", "Final Cut Pro"],
            studentTestimonials: 15
        },
        documentation: {
            userManual: "https://support.apple.com/guide/macbook-pro/welcome/mac",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-15"
    },
    {
        id: 3,
        name: "Dell XPS 15",
        description: "The Dell XPS 15 combines stunning OLED technology with powerful performance in a premium aluminum and carbon fiber build. Featuring an Intel Core i7 processor and NVIDIA RTX graphics, this laptop delivers exceptional performance for creative work and demanding applications. The InfinityEdge display virtually eliminates bezels, providing an immersive viewing experience with 100% Adobe RGB color accuracy. Perfect for content creation, engineering applications, and professional work. The advanced thermal design ensures consistent performance under heavy workloads.",
        price: 1799.00,
        images: [
            "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9",
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
            "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb"
        ],
        category: "Laptops",
        brand: "Dell",
        specs: {
            ram: "16GB",
            storage: "512GB",
            processor: "Intel i7",
            screenSize: "15-inch",
            resolution: "4K",
            battery: "86Wh",
            ports: "2x Thunderbolt 4, USB-C, SD card reader",
            weight: "4.0 lbs (1.8 kg)",
            dimensions: "13.57 x 9.06 x 0.71 inches",
            gpu: "NVIDIA RTX 3050 Ti"
        },
        warranty: "1 year ProSupport with onsite service",
        sku: "XPS15-i7-512",
        availability: "in_stock",
        rating: 4.7,
        reviews: [
            {
                id: 1,
                user: "Emily Parker",
                rating: 5,
                date: "2023-12-18",
                verified: true,
                title: "Perfect for Engineering Programs",
                content: "Handles AutoCAD and SOLIDWORKS perfectly. The OLED display is amazing for detailed CAD work, and the performance is outstanding.",
                helpfulVotes: 38,
                courseContext: "Mechanical Engineering",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 156,
            averageRating: 4.7,
            ratingDistribution: {
                5: 120,
                4: 25,
                3: 8,
                2: 2,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Engineering", "Architecture", "Digital Arts"],
            softwareCompatibility: ["AutoCAD", "SOLIDWORKS", "Adobe Creative Suite"],
            studentTestimonials: 10
        },
        documentation: {
            userManual: "https://www.dell.com/support/home/en-us/product-support/product/xps-15-laptop/docs",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-20"
    },
    {
        id: 4,
        name: "HP Spectre x360",
        description: "Experience versatility and power with the HP Spectre x360, a premium convertible laptop that adapts to your needs. The 360-degree hinge design allows seamless transitions between laptop, tablet, tent, and stand modes. Featuring a stunning 14-inch touchscreen with anti-reflection coating and HP Sure View privacy screen. The 11th Gen Intel Core i7 processor and Intel Iris Xe graphics deliver outstanding performance for both creative work and everyday tasks. With up to 16 hours of battery life, Bang & Olufsen audio, and HP Command Center for performance control, this laptop is perfect for students who need flexibility and power.",
        price: 1399.00,
        images: [
            "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50",
            "https://images.unsplash.com/photo-1589561084510-4e32f3c4f96d",
            "https://images.unsplash.com/photo-1589561084367-404b25492fee",
            "https://images.unsplash.com/photo-1589561084242-5c35b3887be8"
        ],
        category: "Laptops",
        brand: "HP",
        specs: {
            ram: "16GB",
            storage: "1TB",
            processor: "Intel i7",
            screenSize: "14-inch",
            resolution: "2K",
            battery: "66Wh",
            ports: "2x Thunderbolt 4, USB-A, microSD",
            weight: "2.95 lbs (1.34 kg)",
            dimensions: "12.08 x 7.66 x 0.67 inches",
            touchscreen: true,
            convertible: true
        },
        warranty: "1 year limited hardware warranty with 24/7 technical support",
        sku: "SPEC-14-i7-1TB",
        availability: "in_stock",
        rating: 4.6,
        reviews: [
            {
                id: 1,
                user: "Jessica Lee",
                rating: 5,
                date: "2023-12-12",
                verified: true,
                title: "Perfect for Architecture Student",
                content: "The touchscreen and pen support are amazing for sketching and CAD work. Battery life is great, and the convertible design is perfect for studio sessions.",
                helpfulVotes: 42,
                courseContext: "Architecture Design",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 134,
            averageRating: 4.6,
            ratingDistribution: {
                5: 98,
                4: 24,
                3: 8,
                2: 3,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Architecture", "Digital Arts", "General Studies"],
            softwareCompatibility: ["AutoCAD", "Adobe Creative Suite", "Sketchup"],
            studentTestimonials: 8
        },
        documentation: {
            userManual: "https://support.hp.com/us-en/product/hp-spectre-x360-convertible-laptop-pc/series",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-25"
    },
    {
        id: 5,
        name: "iPad Pro 12.9",
        description: "Transform your learning experience with the iPad Pro 12.9-inch, featuring the groundbreaking M2 chip and stunning Liquid Retina XDR display. This powerful tablet combines the versatility of iPadOS with pro-level performance, making it perfect for digital note-taking, creative work, and immersive learning. The advanced mini-LED technology delivers true-to-life colors and incredible contrast, while ProMotion technology ensures smooth scrolling and responsive Apple Pencil input. With Center Stage for video calls, Thunderbolt connectivity, and support for the Magic Keyboard, this iPad Pro is a complete solution for modern education.",
        price: 1099.00,
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
            "https://images.unsplash.com/photo-1544244015-b72d372de1b8",
            "https://images.unsplash.com/photo-1544244015-fc2f29423aa3",
            "https://images.unsplash.com/photo-1544244015-d54c7c0a2703"
        ],
        category: "Tablets",
        brand: "Apple",
        specs: {
            ram: "8GB",
            storage: "256GB",
            processor: "M2",
            screenSize: "12.9-inch",
            resolution: "2732 x 2048",
            battery: "40.88Wh",
            ports: "USB-C with Thunderbolt 4",
            weight: "1.5 lbs (682 g)",
            dimensions: "11.04 x 8.46 x 0.23 inches",
            cameras: "12MP Wide + 10MP Ultra Wide, LiDAR Scanner"
        },
        warranty: "1 year limited warranty with 90 days of complimentary technical support",
        sku: "IPADPRO-129-M2-256",
        availability: "in_stock",
        rating: 4.8,
        reviews: [
            {
                id: 1,
                user: "David Wilson",
                rating: 5,
                date: "2023-12-08",
                verified: true,
                title: "Perfect Digital Note-Taking Device",
                content: "The iPad Pro with Apple Pencil has completely replaced my paper notebooks. The screen is gorgeous, and note-taking with GoodNotes is a game-changer for organizing my study materials.",
                helpfulVotes: 67,
                courseContext: "Medical School",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 312,
            averageRating: 4.8,
            ratingDistribution: {
                5: 265,
                4: 35,
                3: 8,
                2: 3,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Medical Students", "Art Students", "General Studies"],
            softwareCompatibility: ["Procreate", "GoodNotes", "Notability"],
            studentTestimonials: 25
        },
        documentation: {
            userManual: "https://support.apple.com/guide/ipad/welcome/ipados",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-05"
    },
    {
        id: 6,
        name: "Samsung Galaxy Tab S9 Ultra",
        description: "Experience the ultimate in Android tablets with the Galaxy Tab S9 Ultra. This premium tablet features a massive 14.6-inch Super AMOLED display with a 120Hz refresh rate, perfect for multitasking and creative work. The included S Pen provides precise input with ultra-low latency, making it ideal for note-taking and digital art. Powered by the Snapdragon 8 Gen 2 processor and featuring Samsung DeX for a desktop-like experience, this tablet bridges the gap between tablet and laptop. With its IP68 water and dust resistance, quad speakers tuned by AKG, and Wi-Fi 6E support, it's the perfect companion for both academic and creative pursuits.",
        price: 1199.00,
        images: [
            "https://images.unsplash.com/photo-1632634571086-44a93c2c6034",
            "https://images.unsplash.com/photo-1632634571321-2f7e859e1b1b",
            "https://images.unsplash.com/photo-1632634571254-a128d5c1d9c7",
            "https://images.unsplash.com/photo-1632634571543-735c377e2c91"
        ],
        category: "Tablets",
        brand: "Samsung",
        specs: {
            ram: "16GB",
            storage: "512GB",
            processor: "Snapdragon 8 Gen 2",
            screenSize: "14.6-inch",
            resolution: "2960 x 1848",
            battery: "11200mAh",
            ports: "USB-C",
            weight: "1.6 lbs (726 g)",
            dimensions: "12.85 x 8.21 x 0.21 inches",
            cameras: "13MP + 6MP Ultra Wide"
        },
        warranty: "1 year manufacturer warranty",
        sku: "TABS9U-16-512",
        availability: "in_stock",
        rating: 4.7,
        reviews: [
            {
                id: 1,
                user: "Thomas Brown",
                rating: 5,
                date: "2023-12-15",
                verified: true,
                title: "Excellent for Digital Art",
                content: "The S Pen is incredibly responsive, and the large screen is perfect for digital art and design work. Samsung DeX mode makes it a great laptop replacement.",
                helpfulVotes: 45,
                courseContext: "Digital Media Arts",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 178,
            averageRating: 4.7,
            ratingDistribution: {
                5: 140,
                4: 28,
                3: 7,
                2: 2,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Digital Arts", "Note-taking", "Content Creation"],
            softwareCompatibility: ["Clip Studio Paint", "Samsung Notes", "Canva"],
            studentTestimonials: 15
        },
        documentation: {
            userManual: "https://www.samsung.com/us/support/downloads",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-10"
    },

    // ... (previous products 1-6 remain the same)

    {
        id: 7,
        name: "Surface Pro 9",
        description: "Experience the perfect blend of laptop performance and tablet flexibility with the Surface Pro 9. This versatile 2-in-1 device features a stunning 13-inch PixelSense Flow display with up to 120Hz refresh rate and touch support. Powered by Intel's latest Core i5 processor, it delivers the performance you need for multitasking, creative work, and demanding applications. The optional Surface Slim Pen 2 provides a natural writing and drawing experience with haptic feedback. Perfect for students who need both tablet mobility and laptop functionality in one device.",
        price: 999.00,
        images: [
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
            "https://images.unsplash.com/photo-1593642634427-dd3a98351138",
            "https://images.unsplash.com/photo-1593642634533-89d302e4a3f9",
            "https://images.unsplash.com/photo-1593642634627-6fdaf35d4e3c"
        ],
        category: "Tablets",
        brand: "Microsoft",
        specs: {
            ram: "16GB",
            storage: "256GB",
            processor: "Intel i5",
            screenSize: "13-inch",
            resolution: "2880 x 1920",
            battery: "Up to 15.5 hours",
            ports: "2x Thunderbolt 4",
            weight: "1.94 lbs (879 g)",
            dimensions: "11.3 x 8.2 x 0.37 inches"
        },
        warranty: "1 year limited hardware warranty",
        sku: "SURFACE-P9-i5-256",
        availability: "pre_order",
        rating: 4.6,
        reviews: [
            {
                id: 1,
                user: "Rachel Kim",
                rating: 5,
                date: "2023-12-14",
                verified: true,
                title: "Perfect for Digital Note-Taking",
                content: "The Surface Pro 9 is amazing for taking notes in class. The pen experience is fantastic, and the ability to switch between laptop and tablet mode is super convenient.",
                helpfulVotes: 34,
                courseContext: "Business Administration",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 145,
            averageRating: 4.6,
            ratingDistribution: {
                5: 98,
                4: 35,
                3: 8,
                2: 3,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Business", "Art", "General Studies"],
            softwareCompatibility: ["Microsoft Office", "OneNote", "Adobe Creative Cloud"],
            studentTestimonials: 12
        },
        documentation: {
            userManual: "https://support.microsoft.com/surface",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-15"
    },
    {
        id: 8,
        name: "Pro Display XDR",
        description: "Elevate your visual experience with the Pro Display XDR, Apple's professional 6K display designed for the most demanding creative workflows. Featuring extreme dynamic range (XDR) and precise color accuracy, this 32-inch display delivers stunning visuals with 1,600 nits of peak brightness and a 1,000,000:1 contrast ratio. The Retina 6K resolution provides incredible detail, while the nano-texture glass option minimizes glare. Perfect for professional video editing, photography, and 3D rendering. The display supports P3 wide color and true 10-bit color depth, ensuring accurate color representation for professional work.",
        price: 4999.00,
        images: [
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
            "https://images.unsplash.com/photo-1593642632854-6f9a3d6f9d36",
            "https://images.unsplash.com/photo-1593642632897-a3d3e8e19c0e",
            "https://images.unsplash.com/photo-1593642632959-6c40b7086c89"
        ],
        category: "Displays",
        brand: "Apple",
        specs: {
            screenSize: "32-inch",
            resolution: "6K (6016 x 3384)",
            brightness: "1,600 nits peak, 1,000 nits sustained",
            contrast: "1,000,000:1",
            colorSpace: "P3 wide color",
            ports: "Thunderbolt 3, USB-C",
            weight: "16.49 lbs (7.48 kg)",
            dimensions: "28.3 x 16.2 x 1.1 inches"
        },
        warranty: "1 year limited warranty with optional AppleCare+ coverage",
        sku: "PRODXDR-32-6K",
        availability: "in_stock",
        rating: 4.9,
        reviews: [
            {
                id: 1,
                user: "Mark Anderson",
                rating: 5,
                date: "2023-12-01",
                verified: true,
                title: "Unmatched Color Accuracy",
                content: "As a film student, the color accuracy and HDR capabilities of this display are incredible. It's perfect for color grading and post-production work.",
                helpfulVotes: 56,
                courseContext: "Film Production",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 89,
            averageRating: 4.9,
            ratingDistribution: {
                5: 80,
                4: 7,
                3: 2,
                2: 0,
                1: 0
            }
        },
        educationalUse: {
            recommendedFor: ["Film Production", "Photography", "Graphic Design"],
            softwareCompatibility: ["Final Cut Pro", "DaVinci Resolve", "Adobe Creative Suite"],
            studentTestimonials: 8
        },
        documentation: {
            userManual: "https://support.apple.com/pro-display-xdr",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-01"
    },
    {
        id: 9,
        name: "LG UltraFine 5K",
        description: "Experience exceptional clarity and color accuracy with the LG UltraFine 5K display. Designed in collaboration with Apple, this 27-inch monitor delivers stunning 5K resolution and P3 wide color gamut support, making it perfect for professional creative work. The built-in webcam, microphone, and stereo speakers provide a complete workstation solution. With Thunderbolt 3 connectivity, you can connect and charge your MacBook Pro with a single cable. The display's true 10-bit color depth and 500 nits brightness ensure accurate color representation for professional photo and video editing.",
        price: 1299.00,
        images: [
            "https://images.unsplash.com/photo-1527443195645-1133f7f28990",
            "https://images.unsplash.com/photo-1527443195723-4e737b7b8c6c",
            "https://images.unsplash.com/photo-1527443195801-3ff275f2dd8c",
            "https://images.unsplash.com/photo-1527443195878-6c0d5fc21ba1"
        ],
        category: "Displays",
        brand: "LG",
        specs: {
            screenSize: "27-inch",
            resolution: "5K (5120 x 2880)",
            brightness: "500 nits",
            colorSpace: "P3 wide color",
            ports: "Thunderbolt 3, USB-C",
            speakers: "Stereo speakers (5W x 2)",
            camera: "Built-in 1080p webcam",
            weight: "18.7 lbs (8.5 kg)",
            dimensions: "24.6 x 14.8 x 2.4 inches"
        },
        warranty: "1 year limited warranty",
        sku: "ULTRA5K-27-5K",
        availability: "in_stock",
        rating: 4.7,
        reviews: [
            {
                id: 1,
                user: "Sophie Chen",
                rating: 5,
                date: "2023-11-28",
                verified: true,
                title: "Perfect for Design Work",
                content: "The color accuracy and resolution are perfect for my graphic design projects. The built-in webcam and speakers are a great bonus for online classes.",
                helpfulVotes: 42,
                courseContext: "Graphic Design",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 156,
            averageRating: 4.7,
            ratingDistribution: {
                5: 120,
                4: 25,
                3: 8,
                2: 2,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Graphic Design", "Photography", "Digital Media"],
            softwareCompatibility: ["Adobe Creative Suite", "Sketch", "Final Cut Pro"],
            studentTestimonials: 14
        },
        documentation: {
            userManual: "https://www.lg.com/support",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-05"
    },

    // ... (previous products 1-9 remain the same)

    {
        id: 10,
        name: "Samsung Odyssey G9",
        description: "Experience gaming and productivity on a whole new level with the Samsung Odyssey G9, the world's first dual QHD gaming monitor. This 49-inch super ultra-wide monitor features an immersive 1000R curved display that matches the natural curvature of the human eye. With a rapid 240Hz refresh rate, 1ms response time, and G-Sync/FreeSync Premium Pro support, it delivers unparalleled smoothness for both gaming and professional work. The QLED technology and HDR1000 support ensure exceptional color accuracy and contrast, making it perfect for content creation, multi-tasking, and immersive gaming sessions.",
        price: 1599.00,
        images: [
            "https://images.unsplash.com/photo-1527443195645-1133f7f28990",
            "https://images.unsplash.com/photo-1527443195723-4e737b7b8c6c",
            "https://images.unsplash.com/photo-1527443195801-3ff275f2dd8c",
            "https://images.unsplash.com/photo-1527443195878-6c0d5fc21ba1"
        ],
        category: "Displays",
        brand: "Samsung",
        specs: {
            screenSize: "49-inch",
            resolution: "5120 x 1440",
            refreshRate: "240Hz",
            responseTime: "1ms",
            brightness: "1000 nits peak",
            contrast: "2500:1",
            curvature: "1000R",
            ports: "2x DisplayPort 1.4, HDMI 2.0",
            weight: "31.8 lbs (14.4 kg)",
            dimensions: "45.18 x 21.15 x 14.4 inches"
        },
        warranty: "3 years limited warranty",
        sku: "ODYSSEY-G9-49",
        availability: "out_of_stock",
        rating: 4.8,
        reviews: [
            {
                id: 1,
                user: "James Wilson",
                rating: 5,
                date: "2023-11-25",
                verified: true,
                title: "Perfect for Architecture Software",
                content: "The ultra-wide screen is amazing for CAD work and 3D modeling. Having multiple windows open side by side has greatly improved my workflow.",
                helpfulVotes: 48,
                courseContext: "Architecture",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 234,
            averageRating: 4.8,
            ratingDistribution: {
                5: 190,
                4: 35,
                3: 6,
                2: 2,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Architecture", "Game Development", "Multi-tasking"],
            softwareCompatibility: ["AutoCAD", "Unity", "Adobe Creative Suite"],
            studentTestimonials: 18
        },
        documentation: {
            userManual: "https://www.samsung.com/support",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-11-10"
    },
    {
        id: 11,
        name: "Mac Studio",
        description: "Unleash extraordinary capabilities with the Mac Studio, featuring the revolutionary M2 Ultra chip. This compact powerhouse delivers unprecedented performance for professional workflows. With up to 192GB of unified memory, massive SSD storage options, and extensive connectivity including Thunderbolt 4 ports, it's engineered for the most demanding creative tasks. The advanced thermal system maintains peak performance while staying whisper-quiet. Perfect for 3D rendering, complex simulations, and professional audio/video production. The Mac Studio redefines what's possible in a desktop workstation, offering server-grade performance in a desktop form factor.",
        price: 3999.00,
        images: [
            "https://images.unsplash.com/photo-1527443195645-1133f7f28990",
            "https://images.unsplash.com/photo-1527443195723-4e737b7b8c6c",
            "https://images.unsplash.com/photo-1527443195801-3ff275f2dd8c",
            "https://images.unsplash.com/photo-1527443195878-6c0d5fc21ba1"
        ],
        category: "Desktop",
        brand: "Apple",
        specs: {
            ram: "64GB",
            storage: "2TB",
            processor: "M2 Ultra",
            ports: "6x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet",
            dimensions: "7.7 x 7.7 x 3.7 inches",
            weight: "7.9 lbs (3.6 kg)",
            wifi: "Wi-Fi 6E",
            bluetooth: "5.3"
        },
        warranty: "1 year limited warranty with 90 days of technical support",
        sku: "MACSTUDIO-M2U-2TB",
        availability: "in_stock",
        rating: 4.9,
        reviews: [
            {
                id: 1,
                user: "Daniel Kim",
                rating: 5,
                date: "2023-12-18",
                verified: true,
                title: "Incredible for 3D Animation",
                content: "Renders that used to take hours now complete in minutes. The M2 Ultra chip handles complex 3D scenes with ease. Perfect for my animation projects.",
                helpfulVotes: 34,
                courseContext: "3D Animation",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 67,
            averageRating: 4.9,
            ratingDistribution: {
                5: 60,
                4: 5,
                3: 2,
                2: 0,
                1: 0
            }
        },
        educationalUse: {
            recommendedFor: ["3D Animation", "Video Production", "Software Development"],
            softwareCompatibility: ["Maya", "Final Cut Pro", "Xcode"],
            studentTestimonials: 8
        },
        documentation: {
            userManual: "https://support.apple.com/mac/mac-studio",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-20"
    },
    {
        id: 12,
        name: "HP Envy Desktop",
        description: "Transform your creative workspace with the HP Envy Desktop, a powerhouse designed for professional content creation and multitasking. Featuring the latest Intel Core i9 processor and NVIDIA RTX graphics, this desktop delivers exceptional performance for video editing, 3D rendering, and complex computational tasks. With tool-less access for easy upgrades, premium audio by Bang & Olufsen, and HP's comprehensive security features, it's the perfect blend of performance and practicality. The sleek design includes a brushed aluminum finish and customizable RGB lighting, while maintaining excellent thermal management for sustained performance.",
        price: 1799.00,
        images: [
            "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9",
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
            "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb"
        ],
        category: "Desktop",
        brand: "HP",
        specs: {
            ram: "32GB",
            storage: "1TB SSD + 2TB HDD",
            processor: "Intel i9",
            gpu: "NVIDIA RTX 3080",
            ports: "USB-C, USB-A, HDMI, DisplayPort",
            dimensions: "15.7 x 6.1 x 15.8 inches",
            weight: "13.4 lbs (6.1 kg)",
            powerSupply: "750W 80+ Gold"
        },
        warranty: "2 years limited warranty with HP Support Assistant",
        sku: "ENVY-i9-32GB",
        availability: "in_stock",
        rating: 4.6,
        reviews: [
            {
                id: 1,
                user: "Lisa Chen",
                rating: 5,
                date: "2023-12-22",
                verified: true,
                title: "Perfect for Video Production",
                content: "Handles 4K video editing smoothly. The multiple storage options are great for managing large media files. Very quiet operation even under heavy loads.",
                helpfulVotes: 28,
                courseContext: "Film Production",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 89,
            averageRating: 4.6,
            ratingDistribution: {
                5: 65,
                4: 18,
                3: 4,
                2: 1,
                1: 1
            }
        },
        educationalUse: {
            recommendedFor: ["Media Production", "Game Development", "Engineering"],
            softwareCompatibility: ["Adobe Creative Suite", "AutoCAD", "Unity"],
            studentTestimonials: 12
        },
        documentation: {
            userManual: "https://support.hp.com/us-en/products",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-25"
    },
    // ... (previous products 1-12 remain the same)

    {
        id: 13,
        name: "Dell Precision Workstation",
        description: "Experience unparalleled workstation performance with the Dell Precision Workstation. Built for professional content creators, engineers, and data scientists, this powerhouse features the latest AMD Ryzen 9 processor and professional-grade graphics. The tool-less chassis design allows for easy upgrades and maintenance, while the advanced thermal design ensures optimal performance under heavy workloads. With ISV certifications and Dell's Reliable Memory Technology Pro, it's engineered for mission-critical applications and complex computational tasks. Perfect for 3D rendering, scientific computing, and professional video production.",
        price: 2499.00,
        images: [
            "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9",
            "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
            "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
            "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb"
        ],
        category: "Desktop",
        brand: "Dell",
        specs: {
            ram: "64GB DDR4 ECC",
            storage: "2TB NVMe SSD + 4TB HDD",
            processor: "AMD Ryzen 9",
            gpu: "NVIDIA RTX A5000",
            ports: "USB-C, USB-A, DisplayPort, HDMI",
            dimensions: "16.7 x 7.5 x 18.9 inches",
            weight: "28 lbs (12.7 kg)",
            powerSupply: "950W Platinum"
        },
        warranty: "3 years ProSupport with next business day on-site service",
        sku: "PREC-R9-64GB",
        availability: "pre_order",
        rating: 4.7,
        reviews: [
            {
                id: 1,
                user: "Robert Zhang",
                rating: 5,
                date: "2023-12-28",
                verified: true,
                title: "Perfect for Machine Learning Research",
                content: "The performance is exceptional for training large ML models. The ECC memory and professional GPU make it perfect for research work. Extremely quiet for such a powerful machine.",
                helpfulVotes: 22,
                courseContext: "Computer Science - Machine Learning",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 45,
            averageRating: 4.7,
            ratingDistribution: {
                5: 35,
                4: 8,
                3: 2,
                2: 0,
                1: 0
            }
        },
        educationalUse: {
            recommendedFor: ["Data Science", "3D Animation", "Engineering Simulation"],
            softwareCompatibility: ["TensorFlow", "Maya", "ANSYS"],
            studentTestimonials: 6
        },
        documentation: {
            userManual: "https://www.dell.com/support/home/en-us/product-support/product/precision-workstation",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-30"
    },
    {
        id: 14,
        name: "Magic Keyboard with Touch ID",
        description: "Elevate your typing experience with the Magic Keyboard with Touch ID. This premium wireless keyboard combines elegant design with advanced functionality, featuring Apple's latest scissor mechanism and Touch ID for secure authentication. The backlit keys provide excellent visibility in any lighting condition, while the numeric keypad enhances productivity for data entry and calculations. The built-in rechargeable battery lasts up to a month, and the keyboard pairs automatically with your Mac for a seamless setup experience. Perfect for students who need a reliable, secure, and comfortable keyboard for long study sessions.",
        price: 149.00,
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            "https://images.unsplash.com/photo-1587829741302-dc798b83add4",
            "https://images.unsplash.com/photo-1587829741303-dc798b83add5",
            "https://images.unsplash.com/photo-1587829741304-dc798b83add6"
        ],
        category: "Accessories",
        brand: "Apple",
        specs: {
            connectivity: "Bluetooth 5.0",
            battery: "Built-in rechargeable lithium-ion",
            batteryLife: "1 month between charges",
            dimensions: "16.48 x 4.52 x 0.45 inches",
            weight: "0.81 pounds",
            compatibility: "macOS 11.4 or later",
            features: ["Touch ID sensor", "Backlit keys", "Numeric keypad"]
        },
        warranty: "1 year limited warranty",
        sku: "MAGIC-KB-TOUCH",
        availability: "in_stock",
        rating: 4.7,
        reviews: [
            {
                id: 1,
                user: "Emma Wilson",
                rating: 5,
                date: "2023-12-05",
                verified: true,
                title: "Great for Long Study Sessions",
                content: "The key travel and tactile feedback are perfect for writing papers. Touch ID makes logging in and purchasing apps super convenient.",
                helpfulVotes: 89,
                courseContext: "General Studies",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 423,
            averageRating: 4.7,
            ratingDistribution: {
                5: 350,
                4: 50,
                3: 15,
                2: 5,
                1: 3
            }
        },
        educationalUse: {
            recommendedFor: ["All Students", "Programming", "Writing"],
            softwareCompatibility: ["All macOS applications"],
            studentTestimonials: 45
        },
        documentation: {
            userManual: "https://support.apple.com/kb/magic-keyboard",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-01"
    },
    {
        id: 15,
        name: "Surface Pen",
        description: "Transform your Surface device into a digital canvas with the Surface Pen. Featuring 4,096 levels of pressure sensitivity and tilt support, this precision stylus offers a natural writing and drawing experience. The virtually lag-free performance and magnetic attachment make it perfect for note-taking, sketching, and precise selections. With programmable buttons and eraser functionality, it enhances productivity in both academic and creative work. The pen's battery lasts up to a year, and it integrates seamlessly with Windows Ink Workspace for an enhanced digital inking experience.",
        price: 99.00,
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            "https://images.unsplash.com/photo-1587829741302-dc798b83add4",
            "https://images.unsplash.com/photo-1587829741303-dc798b83add5",
            "https://images.unsplash.com/photo-1587829741304-dc798b83add6"
        ],
        category: "Accessories",
        brand: "Microsoft",
        specs: {
            pressureLevels: "4,096",
            battery: "1x AAAA",
            batteryLife: "Up to 12 months",
            weight: "0.04 pounds",
            compatibility: "Surface devices",
            features: ["Tilt support", "Programmable buttons", "Magnetic attachment"]
        },
        warranty: "1 year limited hardware warranty",
        sku: "SURFACE-PEN-4K",
        availability: "in_stock",
        rating: 4.5,
        reviews: [
            {
                id: 1,
                user: "Maria Garcia",
                rating: 5,
                date: "2023-12-03",
                verified: true,
                title: "Essential for Digital Note-Taking",
                content: "Perfect pressure sensitivity for handwritten notes. The magnetic attachment is convenient, and battery life is excellent.",
                helpfulVotes: 56,
                courseContext: "Architecture",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 267,
            averageRating: 4.5,
            ratingDistribution: {
                5: 180,
                4: 65,
                3: 15,
                2: 5,
                1: 2
            }
        },
        educationalUse: {
            recommendedFor: ["Note-taking", "Digital Art", "Design"],
            softwareCompatibility: ["OneNote", "Adobe Creative Suite", "Sketchable"],
            studentTestimonials: 28
        },
        documentation: {
            userManual: "https://support.microsoft.com/surface-pen",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-05"
    },
    {
        id: 16,
        name: "Galaxy Buds Pro",
        description: "Experience premium audio with the Galaxy Buds Pro, featuring intelligent active noise cancellation and crystal-clear sound quality. These wireless earbuds automatically detect your voice and switch to ambient mode for conversations, making them perfect for both study sessions and social interactions. With IPX7 water resistance, 360° Audio with head tracking, and up to 28 hours of battery life with the charging case, they're designed for all-day comfort and durability. The multiple microphones ensure clear voice capture during online classes and calls, while the companion app offers extensive customization options.",
        price: 199.00,
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
            "https://images.unsplash.com/photo-1590658268038-6bf12165a8e0",
            "https://images.unsplash.com/photo-1590658268039-6bf12165a8e1",
            "https://images.unsplash.com/photo-1590658268040-6bf12165a8e2"
        ],
        category: "Accessories",
        brand: "Samsung",
        specs: {
            battery: "Earbuds: 61mAh, Case: 472mAh",
            batteryLife: "5h (ANC on), 28h with case",
            connectivity: "Bluetooth 5.0",
            waterResistance: "IPX7",
            features: [
                "Active Noise Cancellation",
                "360° Audio",
                "Voice Detect",
                "Multiple microphones"
            ],
            dimensions: "Earbuds: 19.5 x 20.5 x 20.8mm",
            weight: "Earbuds: 6.3g each"
        },
        warranty: "1 year limited warranty",
        sku: "BUDS-PRO-ANC",
        availability: "in_stock",
        rating: 4.6,
        reviews: [
            {
                id: 1,
                user: "James Lee",
                rating: 5,
                date: "2023-12-08",
                verified: true,
                title: "Perfect for Online Classes",
                content: "The noise cancellation is excellent for focusing during study sessions. Voice detection works great during class participation.",
                helpfulVotes: 78,
                courseContext: "Online Learning",
                isStudentPurchase: true
            }
        ],
        reviewStats: {
            totalReviews: 345,
            averageRating: 4.6,
            ratingDistribution: {
                5: 250,
                4: 70,
                3: 15,
                2: 7,
                1: 3
            }
        },
        educationalUse: {
            recommendedFor: ["Online Learning", "Study Sessions", "Content Creation"],
            softwareCompatibility: ["Samsung Wearable App", "All Audio Apps"],
            studentTestimonials: 32
        },
        documentation: {
            userManual: "https://www.samsung.com/us/support/mobile/audio",
            quickStartGuide: "path/to/quickstart.pdf",
            safetyInfo: "path/to/safety.pdf",
            techSpecs: "path/to/specs.pdf"
        },
        createdAt: "2023-12-10"
    }
];

// Featured Products (subset of allProducts)
export const featuredProducts = allProducts.filter(product =>
    [1, 5, 8, 11, 14].includes(product.id)
);

// New Arrivals (subset of allProducts, sorted by createdAt)
export const newArrivals = allProducts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

// Hero Slides
export const heroSlides = [
    {
        id: 1,
        title: "MacBook Pro",
        subtitle: "Supercharged by M2 Pro and M2 Max",
        description: "Up to 96GB unified memory, up to 38-core GPU",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        link: "/products/macbook-pro",
        colorFrom: "black",
        colorTo: "black"
    },
    {
        id: 2,
        title: "iPad Pro",
        subtitle: "Supercharged by M2",
        description: "With breakthrough performance and next-generation Apple Pencil hover",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        link: "/products/ipad-pro",
        colorFrom: "purple-900",
        colorTo: "purple-900"
    },
    {
        id: 3,
        title: "Pro Display XDR",
        subtitle: "A sight to be bold",
        description: "32-inch 6K Retina display with extreme dynamic range",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        link: "/products/pro-display-xdr",
        colorFrom: "gray-900",
        colorTo: "gray-900"
    }
];