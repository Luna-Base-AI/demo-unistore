import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from '../data/mock/products';

const initialState = {
    products: allProducts || [], // Ensure we have a fallback
    filters: {
        price: { min: 0, max: 5000 },
        brands: [],
        categories: [],
        specifications: {},
        availability: 'all'
    },
    sort: 'relevance',
    currentPage: 1,
    itemsPerPage: 20,
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

// Selectors
export const selectAllProducts = state => state.products.products;
export const selectProductById = (state, productId) =>
    state.products.products.find(product => product.id === productId);
export const selectProductsLoading = state => state.products.loading;
export const selectProductsError = state => state.products.error;

export const {
    setProducts,
    setFilters,
    setSort,
    setCurrentPage,
    setLoading,
    setError
} = productSlice.actions;

export default productSlice.reducer;
