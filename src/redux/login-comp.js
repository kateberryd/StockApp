import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
const loginUrl = 'https://trade-historyapp.herokuapp.com/api/v1/auth/login';

export const loginUser = createAsyncThunk(
  "login",
  async (formdata, thunkAPI) => {
    try {
      const res = await axios.post(loginUrl, formdata);
      if (res.status === 200) {
      
        return res;
      } else {
    
        return thunkAPI.rejectWithValue(res.data)
      }
    } catch (e) {
      console.log("Error", e.res.data)
      // thunkAPI.rejectWithValue(e.res.data)
    }
  }
)




