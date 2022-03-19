import { createSlice } from "@reduxjs/toolkit"
import { FaLessThanEqual } from "react-icons/fa";



const initialState = {
  market: '',
  grossProfit: '',
  grossLoss: '',
  stocks: null,
    consideration: "",
    quantity: "",
    email: "",
    price:'',
    direction: '',
    changeInPriceFromAToB: '',
    date: '',
    isLoadingT: FaLessThanEqual

  }
  
  const tradeSlice = createSlice({
    name: "trade",
   initialState,
    reducers: {
      tradePending: (state) => {
        state.isLoadingT = true;
      },
      tradeSuccess: (state, { payload }) => {
        console.log(payload.stock);
        state.stocks = payload.stock;
        state.grossLoss = payload.grossLoss;
        state.grossProfit = payload.grossProfit;
        state.market = payload.market

        state.isLoadingT = false;
        return state;
      },
      tradeFail: (state, { payload }) => {
        console.log('payload', payload);
        state.isLoading = false;
        state.stocks = []
      },
     
    },
  
  })
  
  export default tradeSlice;
  
  export const userSelector = state => state.trade;
  