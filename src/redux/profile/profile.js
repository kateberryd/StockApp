import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
const url = 'https://trade-historyapp.herokuapp.com/api/v1/auth/login';

export const profiledata = createAsyncThunk(
  "profile",
  async () => {
    try {
      const res = await axios.get(url);
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




