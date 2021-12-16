import axios from "axios";
import { useEffect, useState } from "react";
import Pensioner from "./models/Pensioner";

const SpringPensionerDetails = () => {

    // state - for the component 
    const [pensioner, setPensioner] = useState(new Pensioner());
    const [newPensionerObj, setNewPensionerObj] = useState(new Pensioner());
    const [displayPensionerObj, setDisplayPensionerObj] = useState(new Pensioner());
    const [pensionerList, setPensionerList] = useState([]);

    const handlePensioner = (e) => {
        setPensioner({
            ...pensioner,
            [e.target.name]: e.target.value
        });
    }

    const handleAddPensioner = (e) => {
        console.log(e.target.value);
        setNewPensionerObj({
            ...newPensionerObj,
            [e.target.name]: e.target.value
        });
    }

    const submitGetallPensioner = () => {
        axios.get(`http://localhost:8082/getpensioner`)
            .then((response) => {
                setPensionerList(response.data);
                console.log(response.data);
                console.log(pensionerList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }


    

    

    const submitAddPensioner = (evt) => {
        evt.preventDefault();
        axios.post(`http://localhost:8082/addpensioner`, newPensionerObj)
            .then((response) => {
                setDisplayPensionerObj(response.data);
                alert('Pensioner Details  added successfully.');
                setNewPensionerObj({ age: '', aadhar: '', pan:"", salary:"", acc_No:"", pensionType:"" })
            })
            .catch(() => {
                alert("Pensioner could not be added.");
            });
    }

    return (
        <div>

            <div>
                <p>Add New Pensioner Details</p>
                {/* <form onSubmit={submitAddPensioner}> */}
                <div id="addNewPensionerDiv">
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={newPensionerObj.age}
                        onChange={handleAddPensioner}
                        placeholder="Enter Age" />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={newPensionerObj.salary}
                        onChange={handleAddPensioner}
                        placeholder="Enter salary" />
                    <input
                        type="number"
                        id="aadhar"
                        name="aadhar"
                        value={newPensionerObj.aadhar}
                        onChange={handleAddPensioner}
                        placeholder="Enter Aadhar number" />
                    <input
                        type="number"
                        id="pan"
                        name="pan"
                        value={newPensionerObj.pan}
                        onChange={handleAddPensioner}
                        placeholder="Enter Pan Number" />
                     <input
                        type="number"
                        id="acc_No"
                        name="acc_No"
                        value={newPensionerObj.acc_No}
                        onChange={handleAddPensioner}
                        placeholder="Enter Acc_No" />
                    <input
                        type="text"
                        id="pensionType"
                        name="pensionType"
                        value={newPensionerObj.pensionType}
                        onChange={handleAddPensioner}
                        placeholder="Enter PensionType" />
                    
                    
                    <input
                        type="submit"
                        // type="button"
                        value="Add Pensioner"
                        onClick={submitAddPensioner}
                    />
                </div>
                {/* </form> */}
                <p>New Pensioner Data: {displayPensionerObj.pensioner_id} {displayPensionerObj.age} {displayPensionerObj.salary} {displayPensionerObj.aadhar} {displayPensionerObj.pan} {displayPensionerObj.acc_No} {displayPensionerObj.pensionType} </p>
            </div>
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Pensioner</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Pensioner"
                        onClick={submitGetallPensioner }
                    />
                </div>
                <div className="col-4">
                    <div className="border border-light">
                    </div>
                </div>
                <p>----------------</p>
            </div>
            {/* Google Material UI Table  */}
            <div>
                <div class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Pensioner_id</th>
                                    <th class="mdc-data-table_header-cell mdc-data-table_header-cell--numeric" role="columnheader" scope="col">Age</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Salary</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Aadhar</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Pan</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Acc_No</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">PensionType</th>
                                    
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {pensionerList.map((pensioner, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{pensioner.pensioner_id}</td>
                                            <td className="mdc-data-table__cell">{pensioner.age}</td>
                                            <td className="mdc-data-table__cell">{pensioner.salary}</td>
                                            <td className="mdc-data-table__cell">{pensioner.aadhar}</td>
                                            <td className="mdc-data-table__cell">{pensioner.pan}</td>
                                            <td className="mdc-data-table__cell">{pensioner.acc_No}</td>
                                            <td className="mdc-data-table__cell">{pensioner.pensionType}</td></tr>
                                            
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpringPensionerDetails;