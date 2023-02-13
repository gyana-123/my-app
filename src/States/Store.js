import { configureStore } from "@reduxjs/toolkit";
import  { getProduct } from "./Reducers/productSlice";

export default configureStore({
    reducer:{
        product : getProduct

    }
})
