import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    isAuth:false,
    isAdmin: false,
    isLoading: false,
  }
  
  const profileSlice = createSlice({
    name: "user",
   initialState,
    reducers: {
      profilePending: (state) => {
        state.isLoading = true;
      },
      profileSuccess: (state, { payload }) => {
        state.email = payload.email;
        state.firstName = payload.first_name;
        state.isAdmin = payload.isAdmin;
        state.isAuth = true;
        state.lastName = payload.last_name;
        state.isLoading = false;
        return state;
      },
      profileFail: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
      },
     
    },
  
  })
  
  export default profileSlice;
  
  export const userSelector = state => state.profile
  