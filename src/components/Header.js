import React from 'react'
const Header = () => {

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-secondary">
                <div class="container">
                    <span className="navbar-brand" to="/">
                        <img src="https://cdn.pixabay.com/photo/2020/11/14/19/01/elderly-5743157_1280.png"
                            height="24px" alt="Pension" />Pensioner Details
                    </span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            { <li className="nav-item">
                                <span className="nav-link" to="/hello" >Bank</span>
                            </li> }
                            <li className="nav-item">
                                <span className="nav-link" to="/emp" >Pensioner Details</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to="/spring" >Pension</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to="/register" >About</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;