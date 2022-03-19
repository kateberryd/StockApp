import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './loginSlice'
import profileReducer from './profile/profileSlice'
import tradeReducer from './trade/tradeSlice'
import categoryReducer from './category/categorySlice'


export default configureStore({
  reducer: {
    user: loginReducer.reducer,
    profile: profileReducer.reducer,
    trade: tradeReducer.reducer,
    categories: categoryReducer.reducer
  },
})