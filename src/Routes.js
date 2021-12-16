import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpringPensionerDetails from "./components/SpringPensionerDetails";
import React, { useEffect, useState } from 'react';
import PensionerData from "./components/PensionerData";
import Header from "./components/Header";
import AbstractRegister from './components/AbstractRegister';
import AbstractLogin from './components/AbstractLogin';
import AbstractLogout from './components/AbstractLogout';
import Page404 from './components/Page404';
import Home from './components/Home';
import Footer from './components/Footer';
import BankData from './components/BankData';


const Routes = () => {

    
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>

                                <Route path="/pensioner"> <PensionerData /> </Route>
                                <Route path="/spring"> <SpringPensionerDetails /> </Route>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <AbstractRegister /> </Route>
                                <Route path="/login"> <AbstractLogin /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                                <Route path="/bank"> <BankData /> </Route>
                                
                                
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    
export default Routes;

