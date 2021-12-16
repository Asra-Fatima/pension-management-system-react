import { createSlice } from "@reduxjs/toolkit";
import Pensioner from "../components/models/Pensioner";


const PensionerSlice = createSlice({

    name: 'pensioner',

    initialState: {
       

        pensionerState: new Pensioner(),
         pensionerList: []
        


    },

    reducers: {

        getallPensioner: (state, action) => {
            console.log('PensionerSlice reducers getallPensioner ');
            state.pensionerState = action.payload;
        },
 
        addPensioner: (state, action) => {
            console.log('PensionerSlice reducers addPensioner ');
            state.pensionerState = action.payload;
        },

        updatePensioner: (state, action) => {
            console.log('PensionerSlice reducers updatePensioner ');
            state.pensionerState = action.payload;
        },

        deletePensioner: (state, action) => {
            console.log('PensionerSlice reducers deletePensioner ');
            state.pensionerState = action.payload;
        },

        
        // more methods will be added 
    }
});

export const {getallPensioner,addPensioner , updatePensioner ,deletePensioner} = PensionerSlice.actions;

export default PensionerSlice.reducer;