import { useDispatch } from 'react-redux';
import { setFilters } from '../../../store/productSlice';
import { availabilityOptions } from '../../../data/mock/products';

const AvailabilityFilter = ({ selectedAvailability }) => {
    const dispatch = useDispatch();

    const handleAvailabilityChange = (value) => {
        dispatch(setFilters({ availability: value }));
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Availability</h3>
            <div className="space-y-2">
                {availabilityOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                        <input
                            type="radio"
                            checked={selectedAvailability === option.value}
                            onChange={() => handleAvailabilityChange(option.value)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default AvailabilityFilter;
