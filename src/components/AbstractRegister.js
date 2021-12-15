import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AbstractUser from './models/AbstractUser';

const AbstractRegister = (props) => {

    const history = useHistory();

    const [abstractUser, setAbstractUser] = useState(new AbstractUser());
    const [credentials, setCredentials] = useState('');

    const handleAbstractUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAbstractUser({
            ...abstractUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAbstractUser = (event) => {

        axios.post(`http://localhost:8082/register`, abstractUser)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('abstractUser', abstractUser);
                alert('You are registered successfully. Please login now.');
                history.push('/login'); // check this method to navigate 
            }).catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
       <div
            style={{
                backgroundImage: `url("https://www.indiafilings.com/learn/wp-content/uploads/2018/04/Employee-Pension-Scheme.jpg")`,
                
            }}>


        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Register</h1>
                <form className="form form-group form-dark " onSubmit={submitAbstractUser}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={abstractUser.userName}
                            onChange={handleAbstractUser}
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={abstractUser.password}
                            onChange={handleAbstractUser} />
                        {/* <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="EMPLOYEE">EMPLOYEE</option>
                                <option value="MANAGER">MANAGER</option>
                            </select>
                        </div> */}
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Register"
                            onClick={submitAbstractUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
            </div>
            <div>
                {/* https://material.io/components/dialogs/web#alert-dialog */}
            </div>
        </div >
      </div>
    )
}
export default AbstractRegister;