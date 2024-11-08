import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://fakestoreapi.com/products';

export const userData = createAsyncThunk('user', async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error; 
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userData.pending, (state) => {
        state.loading = true;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
