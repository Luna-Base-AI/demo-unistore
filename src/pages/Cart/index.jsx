import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    moveToWishlist
} from '../../store/cartSlice';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const wishlist = useSelector(state => state.cart.wishlist);

    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateQuantity({ productId, quantity }));
    };

    const handleRemove = (productId) => {
        if (window.confirm('Are you sure you want to remove this item from your cart?')) {
            dispatch(removeFromCart(productId));
        }
    };

    const handleToggleWishlist = (productId) => {
        const isInWishlist = wishlist.includes(productId);
        if (isInWishlist) {
            if (window.confirm('Remove this item from your wishlist?')) {
                dispatch(toggleWishlist(productId));
            }
        } else {
            if (window.confirm('Add this item to your wishlist?')) {
                dispatch(moveToWishlist(productId));
            }
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.studentPrice * item.quantity, 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * 0.1; // 10% tax
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    if (cartItems.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <div className="mt-8 text-center">
                    <p className="text-gray-500">Your cart is empty</p>
                    <Link
                        to="/products"
                        className="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Cart Items - Left Side */}
                <div className="lg:col-span-8">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center py-6 border-b border-gray-200">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-md"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    ${item.studentPrice.toFixed(2)} (Student Price)
                                </p>
                                <div className="mt-2 flex items-center space-x-4">
                                    <select
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                        className="rounded-md border-gray-300 py-1.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        {[...Array(10)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        onClick={() => handleToggleWishlist(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        title={wishlist.includes(item.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                                    >
                                        {wishlist.includes(item.id) ? (
                                            <HeartSolidIcon className="h-5 w-5 text-red-500" />
                                        ) : (
                                            <HeartIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        title="Remove from Cart"
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-lg font-medium text-gray-900">
                                    ${(item.studentPrice * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary - Right Side */}
                <div className="lg:col-span-4">
                    <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="text-gray-600">Subtotal</p>
                                <p className="text-gray-900">${calculateSubtotal().toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Tax (10%)</p>
                                <p className="text-gray-900">${calculateTax().toFixed(2)}</p>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between">
                                    <p className="text-lg font-medium text-gray-900">Total</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        ${calculateTotal().toFixed(2)}
                                    </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Student prices applied</p>
                            </div>
                            <Link
                                to="/checkout"
                                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 text-center block"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
