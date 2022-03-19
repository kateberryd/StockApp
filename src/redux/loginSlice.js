import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    isAuth:false,
    isAdmin: false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  }
  
  const authSlice = createSlice({
    name: "user",
   initialState,
    reducers: {
      loginPending: (state) => {
        state.isLoading = true;
      },
      loginSuccess: (state, { payload }) => {
        state.email = payload.email;
        state.firstName = payload.first_name;
        state.isAdmin = payload.isAdmin;
        state.isAuth = true;
        state.isError = false
        state.lastName = payload.last_name;
        state.isLoading = false;
        state.isSuccess = true;
        return state;
      },
      loginFail: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.isError = true;
        // state.errorMessage = payload.msg;
      },
     
    },
  
  })
  
  export default authSlice;
  
  export const userSelector = state => state.user
  