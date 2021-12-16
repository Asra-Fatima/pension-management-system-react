import React from 'react'
import { getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService } from "./services/PensionerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getallPensioner,addPensioner, updatePensioner ,deletePensioner } from '../redux/PensionerSlice';
import axios from 'axios';

    const PensionerData = props => {
    const [pensioner_id, setPensioner_id] = useState('');
    const dispatch = useDispatch();
    const pensionerDataFromStore = useSelector((state) => state.pensioner.pensionerState);
    const [newPensionerObj, setNewPensionerObj] = useState('');
    const [displayPensionerObj, setDisplayPensionerObj] = useState('');
    const [displyUpdatePensioner, setDisplyUpdatePensioner] = useState('');
    const [updatePensionerDetails, setUpdatePensionerDetails] = useState({pensioner_id:'', age: '', aadhar: '', pan:'', salary:'', acc_No:'', pensionType:''});
        const [pensionerList, setPensionerList] = useState([]);

    const handlePensioner = (e) => {
        console.log('handlePensioner');
        setPensioner_id(e.target.value);
    }
    const handleAddPensioner = (e) => {
        console.log(e.target.value);
        setNewPensionerObj({
            ...newPensionerObj,
            [e.target.name]: e.target.value
        });
    }
        const handleUpdatePensioner = (e) => {
                console.log(e.target.value);
                setUpdatePensionerDetails({
                    ...updatePensionerDetails,
                    [e.target.name]: e.target.value
                });
            }

    const updatePensioner = (event) => {
        axios.put(`/updatepensioner`,updatePensionerDetails)
            .then((response) => {
                alert('Updated')
                console.log(response.data);
            }).catch(() => {
                alert("Not updated")
                console.log('Error')
            });
        event.preventDefault();
    }


    
            
        

    // const submitGetBankById = (evt) => {
    //     evt.preventDefault();
    //     console.log('submitGetBankById');
    //     getBankByIdService(accno)
    //         .then((response) => { dispatch(getBankById(response.data)) })
    //         .catch(() => {
    //             alert(`Bank with accno: ${accno} not found.`);
    //         });
    //     setAccno('');
    // }
    const submitDeletePensioner = (evt) => {
        evt.preventDefault();
        console.log('submitDeletePensioner');
        deletePensionerService(pensioner_id)

            .then((response) => {
                dispatch(deletePensioner(response.data))
                alert('Pensioner Deleted ');
            })

            .catch(() => {
                alert(`Pensione with pensioner_id: ${pensioner_id} not found.`);
            });
        setPensioner_id('');
    }
    const addPensioner = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/addpensioner`, newPensionerObj)
            .then((response) => {
                setDisplayPensionerObj(response.data);
                alert('Pensioner Details  added successfully.');
                setNewPensionerObj({ pensioner_id:'', age: '', aadhar: '', pan:"", salary:"", acc_No:"", pensionType:"" })
            })
            .catch(() => {
                alert("Pensioner Details Could Not Be Added.");
            });
    }
    
    const submitGetAllPensioners = (e) => {
        console.log();
        axios.get(`/getpensioner`)
            .then((response) => {
                setPensionerList(response.data);
            }).catch(error => {
                console.log(error.message)
            });
    }
        
  return (
    <div className="container-fluid">
    <h1 className="display-4 text-warning mt-3 mb-3" >Pensioner Details Component</h1>
    <p>Fetch data from backend, store it in redux store and get it to component</p>
    {/* <div className="container">
                    {<div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                        
                <table className="table table-light table-striped ">
                    <thead>
                        <tr>
                            <th>Pensioner_id</th>
                            <th>Age</th>
                            <th>Aadhar</th>
                            <th>Pan</th>
                            <th>Salary</th>
                            <th>Acc_No</th>
                            <th>PensionType</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pensionerDataFromStore.pensioner_id}</td>
                            <td>{pensionerDataFromStore.age}</td>
                            <td>{pensionerDataFromStore.aadhar}</td>
                            <td>{pensionerDataFromStore.pan}</td>
                            <td>{pensionerDataFromStore.salary}</td>
                            <td>{pensionerDataFromStore.acc_No}</td>
                            <td>{pensionerDataFromStore.pensionType}</td>
                            
                            


                        </tr>
                    </tbody>
                </table>
            </div> } */}

            <p>--------------------</p>
            <br></br>
            <div className="container">

                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Remove Pensioner Details</p>
                    <form className="form form-group form-primary" onSubmit={submitDeletePensioner }>
                        <input className="form-control mt-4" type="number" id="pensioner_id" name="pensioner_id" value={pensioner_id} onChange={handlePensioner} placeholder="Enter Pensioner Id to delete the details" />
                        <input className="form-control mt-4 btn btn-danger" type="submit" value="Remove Pensioner Details" />
                    </form>


                </div>
             

                <p>-----------------------------------------------------------------------------------------------------</p>
                <div className="container-fluid">
                    <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                        <p>Add Pensioner Details</p>

                        <input className="form-control mt-3" type="text" id="pensioner_id" name="pensioner_id" value={newPensionerObj.setPensioner_id} onChange={handleAddPensioner} placeholder="Enter Pensioner_id"/>
                        <input className="form-control mt-3" type="number" id="age" name="age" value={newPensionerObj.age} onChange={handleAddPensioner} placeholder="Enter Age"/>
                        <input className="form-control mt-3" type="number" id="aadhar" name="aadhar" value={newPensionerObj.aadhar} onChange={handleAddPensioner} placeholder="Enter Aadhar number"/>
                        <input className="form-control mt-3" type="number" id="pan" name="pan" value={newPensionerObj.pan} onChange={handleAddPensioner} placeholder="Enter Pan number"/>
                        <input className="form-control mt-3" type="number" id="salary" name="salary" value={newPensionerObj.salary} onChange={handleAddPensioner} placeholder="Enter Slary"/>
                        <input className="form-control mt-3" type="number" id="acc_no" name="acc_No" value={newPensionerObj.acc_No} onChange={handleAddPensioner} placeholder="Enter Account number"/>
                        <input className="form-control mt-3" type="text" id="pensionType" name="pensionType" value={newPensionerObj.pensionType} onChange={handleAddPensioner} placeholder="Enter PensionType"/>
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Add Pensioner" onClick={addPensioner} />
                        {/* <table className="table table-light table-striped ">
                            <thead>
                                <tr>
                                <th>Pensioner_id</th>    
                                <th>Age</th>
                                <th>Aadhar</th>
                                <th>Pan</th>
                                <th>Salary</th>
                                <th>Acc_no</th>
                                <th>PensionType</th>
                                

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{displayPensionerObj.pensioner_id}</td>
                                    <td>{displayPensionerObj.age}</td>
                                    <td>{displayPensionerObj.pan}</td>
                                    <td>{displayPensionerObj.aadhar}</td>
                                    <td>{displayPensionerObj.salary}</td>
                                    <td>{displayPensionerObj.acc_No}</td>
                                    <td>{displayPensionerObj.pensionType}</td>
                                    
                                    
                                </tr>
                            </tbody>
                        </table> */}
                    </div>

                </div>

<p>-------------------------------------------------</p>

<div>
            <p>Find all Pensioner Details</p>
            <div className="col-5 border border-light shadow p-3 mb-5 bg-white">


                <div>
                    <form className="form form-group form-primary">
                        <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllPensioners} value="Find All Pensioner Details" />
                    </form>
                </div >
                <table className="table table-light table-striped ">
                    <thead>
                        <tr>
                            <th>Pensioner_id</th>
                            <th>Age</th>
                            <th>Aadhar</th>
                            <th>Pan</th>
                            <th>Salary</th>
                            <th>Acc_no</th>
                            <th>PensionType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pensionerList.map((pensioner, k) => {
                            return (
                                <tr k={k}><td>{pensioner.pensioner_id}</td>  <td>{pensioner.age}</td>  <td>{pensioner.aadhar}</td> <td>{pensioner.pan}</td> <td>{pensioner.salary}</td> <td>{pensioner.acc_No}</td> <td>{pensioner.pensionType}</td></tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>

        </div>




    


<p>--------------------------------------------------</p>
<div className="container">
                     <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                         <p>Update Pensioner Details</p>

                         <input className="form-control mt-3" type="text" id="pensioner_id" name="pensioner_id" value={updatePensionerDetails.pensioner_id} onChange={handleUpdatePensioner} placeholder="Enter Pensioner_id"/>
                         <input className="form-control mt-3" type="number" id="age" name="age" value={updatePensionerDetails.age} onChange={handleUpdatePensioner} placeholder="Enter Age"/>
                         <input className="form-control mt-3" type="number" id="aadhar" name="aadhar" value={updatePensionerDetails.aadhar} onChange={handleUpdatePensioner} placeholder="Enter Aadhar number"/>
                         <input className="form-control mt-3" type="number" id="pan" name="pan" value={updatePensionerDetails.pan} onChange={handleUpdatePensioner} placeholder="Enter Pan number"/>
                         <input className="form-control mt-3" type="number" id="salary" name="salary" value={updatePensionerDetails.salary} onChange={handleUpdatePensioner} placeholder="Enter Slary"/>
                         <input className="form-control mt-3" type="number" id="acc_no" name="acc_No" value={updatePensionerDetails.acc_No} onChange={handleUpdatePensioner} placeholder="Enter Account number"/>
                         <input className="form-control mt-3" type="text" id="pensionType" name="pensionType" value={updatePensionerDetails.pensionType} onChange={handleUpdatePensioner} placeholder="Enter PensionType"/>

                         <input className="form-control mt-3 btn btn-primary" type="submit" value="UpdatePensioner" onClick={updatePensioner} />
                         <table className="table w-auto small table table-light table-striped ">
                             <thead>
                                 <tr>
                                 <th>Pensioner_id</th>    
                                 <th>Age</th>
                                 <th>Aadhar</th>
                                 <th>Pan</th>
                                 <th>Salary</th>
                                 <th>Acc_no</th>
                                 <th>PensionType</th>
                               </tr>
                           </thead>
                             <tbody>
                                 <tr>
                                    <td>{updatePensionerDetails.pensioner_id}</td>
                                     <td>{updatePensionerDetails.age}</td>
                                     <td>{updatePensionerDetails.pan}</td>
                                     <td>{updatePensionerDetails.aadhar}</td>
                                     <td>{updatePensionerDetails.salary}</td>
                                     <td>{updatePensionerDetails.acc_No}</td>
                                     <td>{updatePensionerDetails.pensionType}</td>


                                 </tr>
                             </tbody>
                         </table>
                    </div>
                    </div>
         {/* </div> */}

        </div>
 </div>
  );
                    }
                
export default PensionerData;





// import React from 'react'
// import { getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService } from "./services/PensionerService";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { getallPensioner, addPensioner, updatePensioner, deletePensioner } from '../redux/PensionerSlice';
// import axios from 'axios';
// import Pensioner from './models/pensioner';
// import PensionerSlice from '../redux/PensionerSlice';
 


// const PensionerData = props => {
//     const [displyUpdatePensioner, setDisplyUpdatePensioner] = useState('');
//     const [updatePensionerDetails, setUpdatePensionerDetails] = useState({pensioner_id:'', age: '', aadhar: '', pan:'', salary:'', acc_No:'', pensionType:''});



//     const handleUpdatePensioner = (e) => {
//                 console.log(e.target.value);
//                 setUpdatePensionerDetails({
//                     ...updatePensionerDetails,
//                     [e.target.name]: e.target.value
//                 });
//             }

//     const updatePensioner = (event) => {
//         axios.put(`/updatepensioner`,updatePensionerDetails)
//             .then((response) => {
//                 alert('Updated')
//                 console.log(response.data);
//             }).catch(() => {
//                 alert("Not updated")
//                 console.log('Error')
//             });
//         event.preventDefault();
//     }

    



//     return (