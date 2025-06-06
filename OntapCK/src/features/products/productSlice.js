// features/products/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/products';

// Fetch all products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch(url);
    return await res.json();
  }
);

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const res = await fetch(`${url}/${id}`);
    return await res.json();
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (updatedProduct) => {
    const res = await fetch(`${url}/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    return await res.json();
  }
);

// Add a new product
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    return await res.json();
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await fetch(`${url}/${id}`, { method: 'DELETE' });
    return id; // Trả về ID của sản phẩm bị xóa để cập nhật state
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Lỗi khi tải dữ liệu';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        // Lọc bỏ sản phẩm có ID đã bị xóa khỏi state
        state.data = state.data.filter(product => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
