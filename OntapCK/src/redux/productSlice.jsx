import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/products';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch(API_URL);
    return await res.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;
