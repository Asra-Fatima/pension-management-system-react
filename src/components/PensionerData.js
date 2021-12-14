import {getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService } from "./services/PensionerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getallpensioner,addPensioner , updatePensioner ,deletePensioner } from '../redux/PensionerSlice';

import { Store } from "redux";
import { Provider } from "react";

const PensionerData = () => {

    const [pensioner_id, setPensioner_id] = useState('');
    const dispatch = useDispatch();
    const pensionerDataFromStore = useSelector((state) => state.pensioner.pensionerState);
    const pensionerList = useSelector((state) => state.pensioner.pensionerList);

    const handlePensioner = (p) => {
        console.log('handlePensioner');
        setPensioner_id(p.target.value);
    }

    
    const submit = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllPensioner');
        getAllPensionerService()
            .then((response) => {
                dispatch(getallPensioner(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submit = (evt) => {
        evt.preventDefault();
        console.log('submitAddPensionerService');
        addPensionerService()
            .then((response) => {
                dispatch(addPensioner(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }
    
    const submit = (evt) => {
        evt.preventDefault();
        console.log('submitUpdatePensionerService');
        updatePensionerService()
            .then((response) => {
                dispatch(updatePensioner(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submit = (evt) => {
        evt.preventDefault();
        console.log('submitDeletePensionerService');
        deletePensionerService()
            .then((response) => {
                dispatch(deletePensioner(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }




    
        


