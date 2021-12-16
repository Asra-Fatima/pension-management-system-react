import axios from 'axios';

// Create services for other components in this way. 


const getAllPensionerService = () => {
    console.log(`getAllPensionerService`);
    return axios.get(`http://localhost:8082/getpensioner`);
}

const addPensionerService = (pensioner) => {
    console.log(`getPensionerByIdService`);
    return axios.post(`http://localhost:8082/addpensioner`, pensioner);
}

const updatePensionerService = (pensioner) => {
    console.log(`getPensionerByIdService`);
    return axios.put(`http://localhost:8082/updatepensioner`, pensioner);
}

const deletePensionerService = (pensioner_id) => {
    console.log(`getPensionerByIdService`);
    return axios.delete(`http://localhost:8082/deletepensioner/${pensioner_id}`);
}



export { getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService };





//.......................//
// import axios from 'axios';
// import BankSlice from '../../redux/BankSlice';
// import BankData from '../BankData';
// // Create services for other components in this way. 

// const getBankByIdService = (accno) => {
//     console.log(`getBankByIdService`);
//    // return axios.get(`/getbankbyid/${accno}`);
//     return axios.get(`http://localhost:8082/getbankbyid/${accno}`);
// }
// const addBankService = (bank) => {
//     console.log(`getBankByIdService`);
//     return axios.post(`http://localhost:8082/addbankdetails`,bank);
// }
// const deleteBankService=(accno)=>{
//     return axios.delete(`http://localhost:8082/deletebankbyaccno/${accno}`)
// }
// const updateBankService =(bank)=>{
//     return axios.put(`http://localhost:8082/updatebankdetails`,bank);
// }
// export{getBankByIdService,addBankService,deleteBankService,updateBankService};