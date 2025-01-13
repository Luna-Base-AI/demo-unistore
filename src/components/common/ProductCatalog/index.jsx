import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/24/outline';
import ProductCard from '../ProductCard';
import QuickView from '../QuickView';
import { setSort, setCurrentPage } from '../../../store/productSlice';

const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
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
    const { products, sort, currentPage, itemsPerPage } = useSelector((state) => state.products);
    const [viewType, setViewType] = useState('grid');
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    // Apply filters
    const filteredProducts = products.filter(product => {
        const priceMatch = product.price >= filters.price.min && product.price <= filters.price.max;
        const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
        const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
        return priceMatch && brandMatch && categoryMatch;
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



    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
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

            {/* Product grid */}
            <div className="mt-8">
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