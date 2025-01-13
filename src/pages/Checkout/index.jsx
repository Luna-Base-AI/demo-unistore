import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RadioGroup } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {
    CreditCardIcon,
    TruckIcon,
    AcademicCapIcon,
    GiftIcon,
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const shippingOptions = [
    { id: 'standard', title: 'Standard Delivery', price: 4.99, days: '3-5 business days' },
    { id: 'express', title: 'Express Delivery', price: 14.99, days: '1-2 business days' },
    { id: 'campus', title: 'Campus Pickup', price: 0, days: 'Next business day' },
];

const paymentMethods = [
    { id: 'credit', title: 'Credit Card', icon: CreditCardIcon },
    { id: 'debit', title: 'Debit Card', icon: CreditCardIcon },
    { id: 'paypal', title: 'PayPal', icon: CreditCardIcon },
];

// Input field component for consistent styling
const InputField = ({ label, error, ...props }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <div className="relative">
            <input
                {...props}
                className={`
                    w-full px-4 py-2.5 rounded-lg border
                    focus:ring-2 focus:ring-offset-2 focus:outline-none
                    transition duration-150 ease-in-out
                    ${error
                        ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                    }
                `}
            />
            {error && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                </div>
            )}
        </div>
        {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
    </div>
);

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
    const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [isGiftWrap, setIsGiftWrap] = useState(false);
    const [giftMessage, setGiftMessage] = useState('');
    const [couponCode, setCouponCode] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            studentId: '',
            university: '',
            termsAccepted: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            address: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            zipCode: Yup.string().required('Required'),
            studentId: Yup.string().required('Required'),
            university: Yup.string().required('Required'),
            termsAccepted: Yup.boolean().oneOf([true], 'Terms must be accepted'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Checkout Form */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Personal Information */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                label="First Name"
                                type="text"
                                {...formik.getFieldProps('firstName')}
                                error={formik.touched.firstName && formik.errors.firstName}
                            />
                            <InputField
                                label="Last Name"
                                type="text"
                                {...formik.getFieldProps('lastName')}
                                error={formik.touched.lastName && formik.errors.lastName}
                            />
                            <InputField
                                label="Email"
                                type="email"
                                className="col-span-2"
                                {...formik.getFieldProps('email')}
                                error={formik.touched.email && formik.errors.email}
                            />
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Address</h2>
                        <div className="space-y-6">
                            <InputField
                                label="Street Address"
                                type="text"
                                {...formik.getFieldProps('address')}
                                error={formik.touched.address && formik.errors.address}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <InputField
                                    label="City"
                                    type="text"
                                    {...formik.getFieldProps('city')}
                                    error={formik.touched.city && formik.errors.city}
                                />
                                <InputField
                                    label="State"
                                    type="text"
                                    {...formik.getFieldProps('state')}
                                    error={formik.touched.state && formik.errors.state}
                                />
                                <InputField
                                    label="ZIP Code"
                                    type="text"
                                    {...formik.getFieldProps('zipCode')}
                                    error={formik.touched.zipCode && formik.errors.zipCode}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Student Verification */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <AcademicCapIcon className="h-6 w-6 mr-2 text-indigo-600" />
                            Student Verification
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                label="Student ID"
                                type="text"
                                {...formik.getFieldProps('studentId')}
                                error={formik.touched.studentId && formik.errors.studentId}
                            />
                            <InputField
                                label="University"
                                type="text"
                                {...formik.getFieldProps('university')}
                                error={formik.touched.university && formik.errors.university}
                            />
                        </div>
                    </div>

                    {/* Shipping Options */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                            <TruckIcon className="h-6 w-6 mr-2 text-indigo-600" />
                            Shipping Options
                        </h2>
                        <RadioGroup value={selectedShipping} onChange={setSelectedShipping}>
                            <div className="space-y-4">
                                {shippingOptions.map((option) => (
                                    <RadioGroup.Option
                                        key={option.id}
                                        value={option}
                                        className={({ checked }) =>
                                            `${checked ? 'bg-indigo-50 border-indigo-500' : 'border-gray-200'}
                                            relative border-2 rounded-lg p-4 flex cursor-pointer focus:outline-none
                                            hover:bg-indigo-50 transition-colors duration-200`
                                        }
                                    >
                                        {({ checked }) => (
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label as="p" className="font-medium text-gray-900">
                                                            {option.title}
                                                        </RadioGroup.Label>
                                                        <RadioGroup.Description as="span" className="text-gray-500">
                                                            {option.days}
                                                        </RadioGroup.Description>
                                                    </div>
                                                </div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    ${option.price.toFixed(2)}
                                                </div>
                                            </div>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                {...formik.getFieldProps('termsAccepted')}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-gray-900">
                                I accept the terms and conditions
                            </label>
                        </div>
                        {formik.touched.termsAccepted && formik.errors.termsAccepted && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.termsAccepted}</p>
                        )}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 sticky top-4">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                        {/* Cart Items Summary */}
                        <div className="space-y-4 mb-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between py-2 border-b border-gray-100">
                                    <div className="flex items-start">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                            {item.giftWrap && (
                                                <p className="text-xs text-indigo-600">Gift wrapped</p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${(item.studentPrice * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Price Breakdown */}
                        <div className="space-y-3 py-4 border-b border-gray-100">
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-600">Subtotal</p>
                                <p className="text-sm font-medium text-gray-900">
                                    ${cartItems.reduce((sum, item) => sum + (item.studentPrice * item.quantity), 0).toFixed(2)}
                                </p>
                            </div>

                            {selectedShipping && (
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-600">Shipping ({selectedShipping.title})</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${selectedShipping.price.toFixed(2)}
                                    </p>
                                </div>
                            )}

                            {isGiftWrap && (
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-600">Gift Wrapping</p>
                                    <p className="text-sm font-medium text-gray-900">$5.99</p>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <p className="text-sm text-gray-600">Tax (10%)</p>
                                <p className="text-sm font-medium text-gray-900">
                                    ${(cartItems.reduce((sum, item) => sum + (item.studentPrice * item.quantity), 0) * 0.1).toFixed(2)}
                                </p>
                            </div>
                        </div>

                        {/* Coupon Code Input */}
                        <div className="py-4 border-b border-gray-100">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <button
                                    onClick={() => {/* Handle coupon application */ }}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="pt-4">
                            <div className="flex justify-between mb-4">
                                <p className="text-base font-semibold text-gray-900">Total</p>
                                <p className="text-base font-semibold text-gray-900">
                                    ${(
                                        cartItems.reduce((sum, item) => sum + (item.studentPrice * item.quantity), 0) + // Subtotal
                                        (selectedShipping?.price || 0) + // Shipping
                                        (isGiftWrap ? 5.99 : 0) + // Gift wrap
                                        (cartItems.reduce((sum, item) => sum + (item.studentPrice * item.quantity), 0) * 0.1) // Tax
                                    ).toFixed(2)}
                                </p>
                            </div>

                            {/* Student Discount Notice */}
                            <p className="text-sm text-green-600 mb-6">
                                Student discount applied: 10% off regular prices
                            </p>

                            {/* Checkout Button */}
                            <button
                                type="submit"
                                onClick={formik.handleSubmit}
                                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 
                         transition-colors duration-200 font-medium text-sm focus:outline-none 
                         focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Complete Purchase
                            </button>

                            {/* Secure Payment Notice */}
                            <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                Secure checkout powered by Stripe
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
