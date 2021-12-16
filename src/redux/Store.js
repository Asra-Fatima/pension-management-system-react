import pensionerReducer from './PensionerSlice';
import { configureStore } from "@reduxjs/toolkit";

 
console.log('store');
const store = configureStore(
    {
        reducer: {
            pensioner: pensionerReducer
        }
    }
);

export default store;