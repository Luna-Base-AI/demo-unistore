import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
    const [isHovered, setIsHovered] = useState(false);
    const studentPrice = product.price * 0.9; // 10% student discount

    const handleQuickView = (e) => {
        e.preventDefault();
        onQuickView?.(product);
    };

    // Get the first image from the images array, fallback to a default image if none exists
    const mainImage = product.images?.[0] || product.image || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8';

    return (
        <div className="group relative">
            <Link
                to={`/products/${product.id}`}
                className="block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                    <img
                        src={mainImage}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                            }`}
                    />
                    {onQuickView && (
                        <button
                            onClick={handleQuickView}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-lg
                            text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            Quick View
                        </button>
                    )}
                </div>
                <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="flex flex-col">
                        <span className="text-lg font-medium text-gray-900">
                            ${studentPrice.toFixed(2)}{' '}
                            <span className="text-sm text-green-600">(Student Price)</span>
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
