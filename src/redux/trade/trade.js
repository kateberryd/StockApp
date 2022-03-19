import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
const url = 'https://trade-historyapp.herokuapp.com/api/v1/trade-analysis/stock?query=Pinterest Inc';

export const tradedata = createAsyncThunk(
  "trade",
  async (thunkAPI) => {
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




export const filteredTrade = createAsyncThunk(
  "trade",
  async (category,thunkAPI) => {
    try {
      const res = await axios.get(`https://trade-historyapp.herokuapp.com/api/v1/trade-analysis/stock?query=${category}`);
      if (res.status === 200) {
        return res;
      } else {
        console.log(res);
        return thunkAPI.rejectWithValue(res.data)
      }
    } catch (e) {
      console.log("Error", e.message);
      // thunkAPI.rejectWithValue(e.res.data)
    }
  }
)




