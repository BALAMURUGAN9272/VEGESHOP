import {combineReducers, configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsslice from '../Slice/ProductSlice'
import productReducer from "../Slice/ProductSlice"



const reducer = combineReducers({
  productsState : productsslice,
  productstate : productReducer
  
})
const store = configureStore({
    reducer,
    middleware : (getdefaultmiddleware)=> getdefaultmiddleware().concat(logger)
})

export default store;