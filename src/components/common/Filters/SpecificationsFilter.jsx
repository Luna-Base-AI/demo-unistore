import { useDispatch } from 'react-redux';
import { setFilters } from '../../../store/productSlice';
import { specifications } from '../../../data/mock/products';

const SpecificationsFilter = ({ selectedSpecs }) => {
    const dispatch = useDispatch();

    const handleSpecChange = (type, value) => {
        const newSpecs = {
            ...selectedSpecs,
            [type]: selectedSpecs[type]?.includes(value)
                ? selectedSpecs[type].filter(v => v !== value)
                : [...(selectedSpecs[type] || []), value]
        };
        dispatch(setFilters({ specifications: newSpecs }));
    };

    return (
        <div className="space-y-6">
            {Object.entries(specifications).map(([type, values]) => (
                <div key={type} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 capitalize">
                        {type.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="space-y-2">
                        {values.map((value) => (
                            <label key={value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedSpecs[type]?.includes(value) || false}
                                    onChange={() => handleSpecChange(type, value)}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">{value}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpecificationsFilter;
