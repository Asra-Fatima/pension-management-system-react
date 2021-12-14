import axios from 'axios';

// Create services for other components in this way. 


const getAllPensionerService = () => {
    console.log(`getPensionerByIdService`);
    return axios.get(`/getallpensioner`);
}

const addPensionerService = (pensioner) => {
    console.log(`getPensionerByIdService`);
    return axios.post(`/addpensioner`, pensioner);
}

const updatePensionerService = (pensioner) => {
    console.log(`getPensionerByIdService`);
    return axios.post(`/updatepensioner`, pensioner);
}

const deletePensionerService = (pensioner_id) => {
    console.log(`getPensionerByIdService`);
    return axios.post(`/deletepensionerbyid${pensioner_id}`);
}



export { getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService };