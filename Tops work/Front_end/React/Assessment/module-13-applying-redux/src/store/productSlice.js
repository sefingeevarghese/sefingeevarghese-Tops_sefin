import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API calls - in a real app, these would be actual API endpoints
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Async thunks for API operations
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Mock data for products
    return [
      {
        id: 1,
        productName: 'iPhone 14',
        price: 79999,
        offerPrice: 71999,
        photo: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOR6k5qDPOYxL_o-buguDEWwxq37PX7Nrlo_oVhAmAZxyfYqDXFbblgLBVR9RyqXJ42y8Sxzni7zk9_8G5iA7taAxCN9IC_Pq8-yx0kW0nMP7y3__uqYuP2Sq9',
        qty: 1,
        description: 'Latest iPhone with advanced A16 Bionic chip and enhanced camera system',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 2,
        productName: 'Samsung Galaxy S23',
        price: 67999,
        offerPrice: 59999,
        photo: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-5g-1.jpg',
        qty: 1,
        description: 'High-performance Android smartphone with excellent camera system',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 3,
        productName: 'MacBook Pro',
        price: 159999,
        offerPrice: 143999,
        photo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Professional laptop with M2 chip for developers and creators',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 4,
        productName: 'iPad Air',
        price: 54999,
        offerPrice: 49999,
        photo: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Versatile tablet perfect for work, creativity, and entertainment',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 5,
        productName: 'Sony WH-1000XM4',
        price: 29999,
        offerPrice: 24999,
        photo: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Premium noise-cancelling wireless headphones with exceptional sound quality',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 6,
        productName: 'Dell XPS 13',
        price: 89999,
        offerPrice: 79999,
        photo: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Ultra-portable laptop with premium build and stunning 4K display',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 7,
        productName: 'Apple Watch Series 8',
        price: 41999,
        offerPrice: 36999,
        photo: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Advanced smartwatch with comprehensive health monitoring and fitness tracking',
        added_date: new Date().toISOString().split('T')[0]
      },
      {
        id: 8,
        productName: 'OnePlus 11',
        price: 56999,
        offerPrice: 49999,
        photo: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center',
        qty: 1,
        description: 'Flagship Android phone with ultra-fast charging and premium design',
        added_date: new Date().toISOString().split('T')[0]
      }
    ];
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData) => {
    // Simulate API call
    const newProduct = {
      ...productData,
      id: Date.now(),
      added_date: new Date().toISOString().split('T')[0]
    };
    // In real app: const response = await fetch(`${API_BASE_URL}/products`, { method: 'POST', body: JSON.stringify(newProduct) });
    return newProduct;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, productData }) => {
    // Simulate API call
    const updatedProduct = { ...productData, id };
    // In real app: const response = await fetch(`${API_BASE_URL}/products/${id}`, { method: 'PUT', body: JSON.stringify(updatedProduct) });
    return updatedProduct;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    // Simulate API call
    // In real app: await fetch(`${API_BASE_URL}/products/${id}`, { method: 'DELETE' });
    return id;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      // Filter products based on search term
      if (action.payload === '') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(product =>
          product.productName.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.description.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        state.filteredItems = state.searchTerm === '' ? state.items : 
          state.items.filter(product =>
            product.productName.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.filteredItems = state.searchTerm === '' ? state.items : 
          state.items.filter(product =>
            product.productName.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          );
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
        state.filteredItems = state.filteredItems.filter(item => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, clearError } = productSlice.actions;
export default productSlice.reducer;