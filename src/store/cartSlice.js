import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    wishlist: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    studentPrice: product.price * 0.9,
                    image: product.images?.[0] || product.image,
                    quantity,
                });
            }
        },
        toggleWishlist: (state, action) => {
            const productId = action.payload;
            const existingIndex = state.wishlist.indexOf(productId);

            if (existingIndex >= 0) {
                state.wishlist.splice(existingIndex, 1);
            } else {
                state.wishlist.push(productId);
            }
        },
        moveToWishlist: (state, action) => {
            const productId = action.payload;
            // Add to wishlist if not already there
            if (!state.wishlist.includes(productId)) {
                state.wishlist.push(productId);
            }
            // Remove from cart
            state.items = state.items.filter(item => item.id !== productId);
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {
    addToCart,
    toggleWishlist,
    moveToWishlist,
    removeFromCart,
    updateQuantity,
    clearCart
} = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.items;
export const selectWishlistItems = state => state.cart.wishlist;
export const selectCartTotal = state =>
    state.cart.items.reduce((total, item) => total + (item.studentPrice * item.quantity), 0);

// Calculate totals with all discounts applied
export const selectCartTotals = state => {
    const subtotal = state.cart.items.reduce(
        (total, item) => total + (item.studentPrice * item.quantity),
        0
    );

    const couponDiscount = state.cart.discounts.appliedCoupons.reduce(
        (total, coupon) => total + (coupon.type === 'percentage'
            ? subtotal * (coupon.value / 100)
            : coupon.value),
        0
    );

    const shipping = state.cart.selectedShipping?.price || 0;
    const tax = (subtotal - couponDiscount) * 0.1; // 10% tax

    return {
        subtotal,
        couponDiscount,
        shipping,
        tax,
        total: subtotal - couponDiscount + shipping + tax,
    };
};

export default cartSlice.reducer;
