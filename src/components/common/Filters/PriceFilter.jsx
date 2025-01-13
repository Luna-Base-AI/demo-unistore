import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/productSlice';

const PriceFilter = () => {
    const dispatch = useDispatch();
    const { products, filters } = useSelector(state => state.products);

    // Calculate actual price range from products
    const minAvailable = Math.min(...products.map(p => p.price));
    const maxAvailable = Math.max(...products.map(p => p.price));

    const [priceRange, setPriceRange] = useState({
        min: filters.price.min || minAvailable,
        max: filters.price.max || maxAvailable
    });

    useEffect(() => {
        setPriceRange({
            min: Math.max(minAvailable, filters.price.min),
            max: Math.min(maxAvailable, filters.price.max)
        });
    }, [minAvailable, maxAvailable]);

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        const newPriceRange = {
            ...priceRange,
            [name]: parseInt(value) || 0
        };
        setPriceRange(newPriceRange);
        dispatch(setFilters({ price: newPriceRange }));
    };

    if (!products.length) {
        return null;
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Available range:</span>
                    <span>${minAvailable.toFixed(2)} - ${maxAvailable.toFixed(2)}</span>
                </div>
                <div className="flex gap-4">
                    <input
                        type="number"
                        name="min"
                        value={priceRange.min}
                        onChange={handlePriceChange}
                        className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        min={minAvailable}
                        max={maxAvailable}
                    />
                    <span className="text-gray-500">to</span>
                    <input
                        type="number"
                        name="max"
                        value={priceRange.max}
                        onChange={handlePriceChange}
                        className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        min={minAvailable}
                        max={maxAvailable}
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;
