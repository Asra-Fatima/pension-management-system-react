import { getAllPensionerService, addPensionerService, updatePensionerService, deletePensionerService } from "./services/PensionerService";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getallPensioner,addPensioner , updatePensioner ,deletePensioner } from '../redux/PensionerSlice';

// import { Store } from "redux";
// import { Provider } from "react";

const PensionerData = () => {

    const [pensioner_id, setPensioner_id] = useState('');
    const dispatch = useDispatch();
    const pensionerDataFromStore = useSelector((state) => state.pensioner.pensionerState);
    const pensionerList = useSelector((state) => state.pensioner.pensionerList);

    const handleEmp = (e) => {
        console.log('handlePensioner');
        setPensioner_id(e.target.value);
    }
// this 
    

    const submitGetallPensioner = (evt) => {
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

    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Pensioner Details Component</h1>
            <p>Fetch data from backend, store it in redux store and get it to component</p>

            {/* <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Get All Pensioner Details</p>
                <form className="form form-group form-primary" onSubmit={submitGetEmpById}>
                    <input className="form-control mt-3" type="number" id="eid" name="eid" value={eid} onChange={handleEmp} placeholder="Enter eid to search" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Employee" />
                </form>
                <p>Data from store: {empDataFromStore.eid} {empDataFromStore.firstName} {empDataFromStore.salary}</p>
            </div> */}

            <div>
                <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                    <p>Find all Pensioner </p>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetallPensioner} value="Find All Pensioner Details" />
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
                                    <tr k={k}> <td>{pensioner.pensioner_id}</td>  <td>{pensioner.age}</td>  <td>{pensioner.aadhar}</td> <td>{pensioner.pan}</td> <td>{pensioner.salary}</td> <td>{pensioner.acc_No}</td> <td>{pensioner.pensionType}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
                <p>Some other functionality</p>
            </div>



        </div>
    );
}
export default PensionerData;