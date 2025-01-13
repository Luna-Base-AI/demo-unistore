import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Squares2X2Icon as ViewGridIcon, ListBulletIcon as ViewListIcon } from '@heroicons/react/24/outline';
import ProductCard from '../../components/common/ProductCard';
import QuickView from '../../components/common/QuickView';
import PriceFilter from '../../components/common/Filters/PriceFilter';
import BrandFilter from '../../components/common/Filters/BrandFilter';
import CategoryFilter from '../../components/common/Filters/CategoryFilter';
import { setFilters, setSort, setCurrentPage } from '../../store/productSlice';

const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'rating', label: 'Highest Rated' },
];

const NoResults = () => (
    <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">
            Try adjusting your filters or search criteria to find what you're looking for.
        </p>
    </div>
);

const ProductCatalog = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { products, filters, sort, currentPage, itemsPerPage, loading, error } = useSelector(
        (state) => state.products
    );
    const [viewType, setViewType] = useState('grid');
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    // Handle URL parameters for filters
    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            dispatch(setFilters({ categories: [category] }));
        }

        const brand = searchParams.get('brand');
        if (brand) {
            dispatch(setFilters({ brands: [brand] }));
        }

        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');
        if (minPrice || maxPrice) {
            dispatch(setFilters({
                price: {
                    min: minPrice ? parseInt(minPrice) : filters.price.min,
                    max: maxPrice ? parseInt(maxPrice) : filters.price.max
                }
            }));
        }

        const sortParam = searchParams.get('sort');
        if (sortParam) {
            dispatch(setSort(sortParam));
        }
    }, [searchParams, dispatch]);

    // Apply filters
    const filteredProducts = products.filter(product => {
        // Price filter
        const priceMatch = product.price >= filters.price.min && product.price <= filters.price.max;

        // Brand filter
        const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);

        // Category filter
        const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);

        // Availability filter
        const availabilityMatch = filters.availability === 'all' || filters.availability === product.availability;

        return priceMatch && brandMatch && categoryMatch && availabilityMatch;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sort) {
            case 'price-low-high':
                return a.price - b.price;
            case 'price-high-low':
                return b.price - a.price;
            case 'newest':
                return new Date(b.createdAt) - new Date(a.createdAt);
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            default:
                return 0;
        }
    });

    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = sortedProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const handleQuickView = (product) => {
        setQuickViewProduct(product);
        setIsQuickViewOpen(true);
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="bg-gray-200 rounded-lg h-80"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-red-700">Error: {error}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        {filters.categories.length > 0 ? filters.categories[0] : 'All Products'}
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <select
                        value={sort}
                        onChange={(e) => dispatch(setSort(e.target.value))}
                        className="rounded-md border-gray-300 py-1.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => setViewType(viewType === 'grid' ? 'list' : 'grid')}
                        className="p-2 text-gray-400 hover:text-gray-500"
                    >
                        {viewType === 'grid' ? (
                            <ViewListIcon className="h-5 w-5" />
                        ) : (
                            <ViewGridIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
                {/* Filters */}
                <div className="hidden lg:block space-y-6">
                    <PriceFilter />
                    <BrandFilter />
                    <CategoryFilter />
                </div>

                {/* Product grid */}
                <div className="lg:col-span-3">
                    {filteredProducts.length > 0 ? (
                        <>
                            <div
                                className={
                                    viewType === 'grid'
                                        ? 'grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'
                                        : 'space-y-6'
                                }
                            >
                                {displayedProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onQuickView={handleQuickView}
                                        viewType={viewType}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-8 flex justify-center">
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => dispatch(setCurrentPage(index + 1))}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === index + 1
                                                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </>
                    ) : (
                        <NoResults />
                    )}
                </div>
            </div>

            {/* Quick View Modal */}
            <QuickView
                product={quickViewProduct}
                open={isQuickViewOpen}
                setOpen={setIsQuickViewOpen}
            />
        </div>
    );
};

export default ProductCatalog;
