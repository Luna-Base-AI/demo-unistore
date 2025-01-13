import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/productSlice';

const BrandFilter = () => {
    const dispatch = useDispatch();
    const { products, filters } = useSelector(state => state.products);
    const selectedBrands = filters.brands;

    // Get unique brands from available products
    const availableBrands = [...new Set(products.map(product => product.brand))].sort();

    const handleBrandChange = (brand) => {
        const newBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter((b) => b !== brand)
            : [...selectedBrands, brand];
        dispatch(setFilters({ brands: newBrands }));
    };

    if (availableBrands.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Brands</h3>
            <div className="space-y-2">
                {availableBrands.map((brand) => (
                    <label key={brand} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{brand}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default BrandFilter;
