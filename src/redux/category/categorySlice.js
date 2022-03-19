import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    name: "",
    categories: null,
    isLoading: false,
  }
  
  const categorySlice = createSlice({
    name: "category",
   initialState,
    reducers: {
     categoryPending: (state) => {
        state.isLoading = true;
      },
     categorySuccess: (state, { payload }) => {
        state.categories = payload;
        return state;
      },
     categoryFail: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
      },
     
    },
  
  })
  
  export  default categorySlice;
  
  export const userSelector = state => state.categories
  