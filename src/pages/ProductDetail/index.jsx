import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StarIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, toggleWishlist } from '../../store/cartSlice';
import {
    selectProductById,
    selectProductsLoading,
    selectProductsError,
    setLoading,
    setError
} from '../../store/productSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedTab, setSelectedTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [shareTooltip, setShareTooltip] = useState(false);

    // Get product and loading states using selectors
    const product = useSelector(state => selectProductById(state, parseInt(id)));
    const isLoading = useSelector(selectProductsLoading);
    const error = useSelector(selectProductsError);
    const wishlist = useSelector(state => state.cart?.wishlist || []);
    const isWishlisted = wishlist.includes(parseInt(id));

    useEffect(() => {
        if (!product && !isLoading && !error) {
            dispatch(setLoading(true));
            // Simulate loading product data
            setTimeout(() => {
                if (!product) {
                    dispatch(setError('Product not found'));
                }
                dispatch(setLoading(false));
            }, 500);
        }
    }, [product, isLoading, error, dispatch, id]);

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600">Error</h2>
                    <p className="mt-2 text-gray-600">{error}</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
                    <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    const studentPrice = product.price * 0.9; // 10% student discount
    const mainImage = product.images?.[currentImageIndex] || product.image;
    const images = product.images || [product.image];

    // Get review count from reviewStats or fallback to reviews array length
    const reviewCount = product.reviewStats?.totalReviews ||
        (Array.isArray(product.reviews) ? product.reviews.length : 0);

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'specifications', label: 'Specifications' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'academic', label: 'Academic Use' },
        { id: 'documentation', label: 'Documentation' }
    ];

    const handleAddToCart = () => {
        try {
            dispatch(addToCart({ product, quantity }));
            // Show success message
            alert('Product added to cart successfully!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add product to cart. Please try again.');
        }
    };

    const handleBuyNow = () => {
        try {
            dispatch(addToCart({ product, quantity }));
            navigate('/cart'); // Navigate to cart page
        } catch (error) {
            console.error('Error processing buy now:', error);
            alert('Failed to process purchase. Please try again.');
        }
    };

    const handleToggleWishlist = () => {
        try {
            dispatch(toggleWishlist(product.id));
            // Show success message
            alert(isWishlisted ? 'Removed from wishlist!' : 'Added to wishlist!');
        } catch (error) {
            console.error('Error toggling wishlist:', error);
            alert('Failed to update wishlist. Please try again.');
        }
    };

    const handleShare = async () => {
        const shareData = {
            title: product.name,
            text: `Check out this ${product.name} on UniStore!`,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setShareTooltip(true);
                setTimeout(() => setShareTooltip(false), 2000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
            alert('Failed to share product. Please try again.');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li>Home</li>
                    <li>•</li>
                    <li>{product.category}</li>
                    <li>•</li>
                    <li className="text-gray-900">{product.name}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`aspect-square rounded-lg overflow-hidden bg-gray-100 ${currentImageIndex === index ? 'ring-2 ring-indigo-500' : ''
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                        <p className="mt-2 text-lg text-gray-500">{product.brand}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                    key={rating}
                                    className={`${product.rating > rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                        } h-5 w-5`}
                                />
                            ))}
                        </div>
                        <p className="ml-3 text-sm text-gray-500">
                            {product.rating} ({reviewCount} reviews)
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <p className="text-3xl font-bold text-gray-900">
                            ${studentPrice.toFixed(2)}{' '}
                            <span className="text-sm text-green-600 font-normal">Student Price</span>
                        </p>
                        <p className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</p>
                    </div>

                    {/* Availability */}
                    <div className="mb-6">
                        <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${product.availability === 'in_stock'
                                ? 'bg-green-100 text-green-800'
                                : product.availability === 'out_of_stock'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                        >
                            {product.availability === 'in_stock'
                                ? 'In Stock'
                                : product.availability === 'out_of_stock'
                                    ? 'Out of Stock'
                                    : 'Pre-order'}
                        </span>
                    </div>

                    {/* SKU */}
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                    </div>

                    {/* Purchase Options */}
                    <div className="space-y-4 mb-8">
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                Quantity
                            </label>
                            <select
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="flex space-x-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={product.availability === 'out_of_stock'}
                                className={`flex-1 px-6 py-3 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${product.availability === 'out_of_stock'
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
                                    }`}
                            >
                                {product.availability === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                            <button
                                onClick={handleBuyNow}
                                disabled={product.availability === 'out_of_stock'}
                                className={`flex-1 px-6 py-3 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${product.availability === 'out_of_stock'
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-500'
                                    }`}
                            >
                                Buy Now
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <button
                                onClick={handleToggleWishlist}
                                className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50"
                            >
                                {isWishlisted ? (
                                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                                ) : (
                                    <HeartIcon className="h-5 w-5 text-gray-400" />
                                )}
                                <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                            </button>
                            <div className="relative">
                                <button
                                    onClick={handleShare}
                                    className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50"
                                >
                                    <ShareIcon className="h-5 w-5 text-gray-400" />
                                    <span>Share</span>
                                </button>
                                {shareTooltip && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md">
                                        Link copied!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setSelectedTab(tab.id)}
                                        className={`${selectedTab === tab.id
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                            } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8">
                            {selectedTab === 'description' && (
                                <div className="prose max-w-none">
                                    <p className="text-gray-600">{product.description}</p>
                                </div>
                            )}

                            {selectedTab === 'specifications' && (
                                <div className="grid grid-cols-1 gap-4">
                                    {Object.entries(product.specs || {}).map(([key, value]) => (
                                        <div key={key} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-200">
                                            <dt className="text-sm font-medium text-gray-500 capitalize">
                                                {key.replace('_', ' ')}
                                            </dt>
                                            <dd className="text-sm text-gray-900 col-span-2">{value}</dd>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedTab === 'reviews' && (
                                <div className="space-y-8">
                                    {Array.isArray(product.reviews) && product.reviews.map((review) => (
                                        <div key={review.id} className="border-b border-gray-200 pb-8">
                                            <div className="flex items-center mb-4">
                                                <div className="flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={`${review.rating > rating
                                                                ? 'text-yellow-400 fill-yellow-400'
                                                                : 'text-gray-300'
                                                                } h-4 w-4`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="ml-3 text-sm text-gray-500">{review.date}</p>
                                            </div>
                                            <h4 className="text-lg font-medium text-gray-900">{review.title}</h4>
                                            <p className="mt-2 text-gray-600">{review.content}</p>
                                            <div className="mt-4 flex items-center">
                                                <span className="text-sm font-medium text-gray-900">{review.user}</span>
                                                {review.isStudentPurchase && (
                                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                        Verified Student Purchase
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {selectedTab === 'academic' && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Recommended For</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {product.educationalUse?.recommendedFor.map((major) => (
                                                <span
                                                    key={major}
                                                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                                >
                                                    {major}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">Software Compatibility</h3>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {product.educationalUse?.softwareCompatibility.map((software) => (
                                                <span
                                                    key={software}
                                                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                                                >
                                                    {software}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedTab === 'documentation' && (
                                <div className="space-y-6">
                                    {product.documentation && (
                                        <>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">User Manual</h3>
                                                <a
                                                    href={product.documentation.userManual}
                                                    className="mt-2 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download User Manual
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Quick Start Guide</h3>
                                                <a
                                                    href={product.documentation.quickStartGuide}
                                                    className="mt-2 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download Quick Start Guide
                                                </a>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-900">Safety Information</h3>
                                                <a
                                                    href={product.documentation.safetyInfo}
                                                    className="mt-2 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download Safety Information
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
