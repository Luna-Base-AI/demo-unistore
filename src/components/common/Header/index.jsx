import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Header = () => {
    // Get cart items count from Redux store
    const cartItemsCount = useSelector(state =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center">
                            <span className="text-xl font-bold text-indigo-600">UniStore</span>
                        </Link>
                        <div className="hidden md:flex space-x-4">
                            <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                                Products
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/auth/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                            Login
                        </Link>
                        <Link
                            to="/cart"
                            className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 relative"
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                                </span>
                            )}
                            <span className="ml-2">Cart</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
