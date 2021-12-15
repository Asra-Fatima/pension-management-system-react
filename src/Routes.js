import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpringPensionerDetails from "./components/SpringPensionerDetails";
import React, { useEffect, useState } from 'react';
import PensionerData from "./components/PensionerData";
import Header from "./components/Header";


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
                                
                            </Switch>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    
export default Routes;