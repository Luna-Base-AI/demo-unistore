import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    heroSlides,
    featuredProducts,
    newArrivals,
    categories
} from '../../data/mock/products';
import ProductCard from '../../components/common/ProductCard';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-b from-${slide.colorFrom}/30 to-${slide.colorTo}/10`}>
                            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                                <div className="max-w-2xl">
                                    <h1 className="text-6xl font-medium text-white mb-4">
                                        {slide.title}
                                    </h1>
                                    <h2 className="text-3xl text-white/90 mb-4">
                                        {slide.subtitle}
                                    </h2>
                                    <p className="text-xl text-white/80 mb-8">
                                        {slide.description}
                                    </p>
                                    <Link
                                        to={slide.link}
                                        className="text-lg text-white hover:text-gray-200 transition-colors inline-flex items-center"
                                    >
                                        Learn more
                                        <ChevronRightIcon className="h-5 w-5 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-medium text-gray-900 mb-12 text-center">
                        Shop by Category
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={category.link}
                                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
                            >
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors">
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-2xl font-medium text-white">{category.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-medium text-gray-900 mb-12 text-center">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-medium text-gray-900">New Arrivals</h2>
                        <Link
                            to="/products?sort=new"
                            className="text-lg text-gray-900 hover:opacity-70 transition-opacity flex items-center"
                        >
                            Shop All New Arrivals
                            <ChevronRightIcon className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {newArrivals.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Banner */}
            <section className="relative h-[600px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="Innovation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40">
                    <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-medium text-white mb-6">
                                Innovation for Everyone
                            </h2>
                            <p className="text-xl text-white/90 mb-8">
                                Discover the latest in technology and find the perfect device for your needs.
                            </p>
                            <Link
                                to="/products"
                                className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors text-lg"
                            >
                                Explore All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
