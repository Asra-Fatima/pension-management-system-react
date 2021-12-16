import pensionerReducer from './PensionerSlice';
import bankReducer from './BankSlice';
import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            pensioner: pensionerReducer,
            bank: bankReducer
            
        }
    }
);

export default store;