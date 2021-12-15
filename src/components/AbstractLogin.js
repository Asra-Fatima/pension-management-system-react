import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import AbstractUser from './models/AbstractUser';

const AbstractLogin = () => {

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
        axios.post(`http://localhost:8082/login`, abstractUser)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Login</h1>
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
                            autoFocus
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
                            onChange={handleAbstractUser}
                            required
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitAbstractUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default AbstractLogin;