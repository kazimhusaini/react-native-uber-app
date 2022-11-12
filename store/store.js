import { configureStore} from "@reduxjs/toolkit";
import navReducer from "../slices/NavSlice";
// import navReducer from 

export const store =configureStore({
    reducer:{
        nav:navReducer
    }
})