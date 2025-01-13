import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../store/productSlice';

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const { products, filters } = useSelector(state => state.products);
    const selectedCategories = filters.categories;

    // Get unique categories from available products
    const availableCategories = [...new Set(products.map(product => product.category))].sort();

    const handleCategoryChange = (category) => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];
        dispatch(setFilters({ categories: newCategories }));
    };

    if (availableCategories.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Categories</h3>
            <div className="space-y-2">
                {availableCategories.map((category) => (
                    <label key={category} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{category}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
