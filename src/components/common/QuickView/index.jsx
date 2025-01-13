import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const QuickView = ({ product, open, setOpen }) => {
    if (!product) return null;

    const studentPrice = product.price * 0.9; // 10% student discount
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Get the first image from the images array, fallback to a default image if none exists
    const mainImage = product.images?.[currentImageIndex] || product.image || 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8';
    const hasMultipleImages = product.images?.length > 1;

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900">
                                            {product.name}
                                        </Dialog.Title>
                                        <div className="mt-4">
                                            <div className="relative">
                                                <img
                                                    src={mainImage}
                                                    alt={product.name}
                                                    className="w-full rounded-lg object-cover aspect-video"
                                                />
                                                {hasMultipleImages && (
                                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                                        {product.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setCurrentImageIndex(index)}
                                                                className={`h-2 w-2 rounded-full ${currentImageIndex === index
                                                                    ? 'bg-white'
                                                                    : 'bg-white/50'
                                                                    }`}
                                                            >
                                                                <span className="sr-only">View image {index + 1}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="mt-4 text-sm text-gray-500">{product.description}</p>
                                            <div className="mt-4">
                                                <p className="text-lg font-medium text-gray-900">
                                                    ${studentPrice.toFixed(2)}{' '}
                                                    <span className="text-sm text-green-600">(Student Price)</span>
                                                </p>
                                                <p className="text-sm text-gray-500 line-through">
                                                    ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Add to Wishlist
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default QuickView;
