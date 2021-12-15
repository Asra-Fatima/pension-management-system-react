import { createSlice } from "@reduxjs/toolkit";

const BankSlice = createSlice(
    {
        name: 'bank',

        initialState: {

            bankState: new BankDetails(),
            bankList: []
        },
        reducers:{

            getBankById: (state, action) => {
                console.log('BankSlice reducers getBankById');
                state.bankState = action.payload;
            }
        }
    }
);
export const { getBankById } = BankSlice.actions;
export default BankSlice.reducer;

// name: 'emp',

// initialState: {
//     // empState: {
//     //     eid: 101,
//     //     firstName: 'Sonu',
//     //     salary: 10.5
//     // }

//     empState: new Employee(),
//     empList: []


// },

// reducers: {

//     getEmpById: (state, action) => {
//         console.log('EmpSlice reducers getEmpById');
//         state.empState = action.payload;
//     },

//     getAllEmps: (state, action) => {
//         console.log('EmpSlice reducers getAllEmps');
//         state.empList = action.payload;
//     }

//     // more methods will be added 
// }
// });

// export const { getEmpById, getAllEmps } = EmpSlice.actions;

// export default EmpSlice.reducer;