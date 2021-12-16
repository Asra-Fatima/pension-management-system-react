import { createSlice } from "@reduxjs/toolkit";
import Bank from "../components/models/Bank";


const BankSlice = createSlice({

    name: 'bank',

    initialState: {
       

        bankState: new Bank(),
        // empList: []
        


    },

    reducers: {

        getBankById: (state, action) => {
            console.log('BankSlice reducers getBankById');
            state.bankState = action.payload;
        },
        addbankdetails: (state, action) => {
            console.log('Add bank');
            state.bankState = action.payload;
        },
        deletebankbyaccno:(state,action)=>{
            console.log('delete bank');
            state.bankState=action.payload;
        },
        updatebankdetails:(state,action)=>{
            state.bankState=action.payload;
        }


        
        // more methods will be added 
    }
});

export const { getBankById,addbankdetails,deletebankbyaccno } = BankSlice.actions;

export default BankSlice.reducer;