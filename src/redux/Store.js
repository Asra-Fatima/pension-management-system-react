import pensionerReducer from './PensionerSlice';
import { configureStore } from "@reduxjs/toolkit"; 
const store = configureStore(
    {
        reducer: {
            pensioner: pensionerReducer,
        }
    }
);
export default store;