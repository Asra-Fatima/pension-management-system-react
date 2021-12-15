import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                            height="24px" alt="Capgemini" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/pensioner" >Pensioner</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/spring" >Spring</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;