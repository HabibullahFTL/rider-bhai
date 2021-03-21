import React, { useContext } from 'react';
import logo from '../../img/logo.svg';
import './Header.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const Header = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const signOut = ()=>{
        setLoginUserDetails({
            isSignIn: false,
            name: '',
            email: '',
            photo: '',
            uid: '',
            errMessage: ''
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#destination" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Destination
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/destination/bike">Find For Bike</Link></li>
                                <li><Link className="dropdown-item" to="/destination/car">Find For Car</Link></li>
                                <li><Link className="dropdown-item" to="/destination/bus">Find For Bus</Link></li>
                                <li><Link className="dropdown-item" to="/destination/rail">Find For Rail</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>
                        {
                            !loginUserDetails.isSignIn && <li className="nav-item">
                                <Link to="/signin" className="btn btn-orange"><i className="fas fa-sign-in-alt"></i> Sign In</Link>
                            </li>
                        }
                        {
                            loginUserDetails.isSignIn && 
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#destination" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hi {loginUserDetails.name}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/signin"><i className="fas fa-user"></i> View Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/signin" onClick={signOut}><i className="fas fa-sign-in-alt"></i> Sign Out</Link></li>
                                </ul>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;