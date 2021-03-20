import React from 'react';
import logo from '../../img/logo.svg';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container">
                <Link class="navbar-brand" to="/"><img src={logo} className="logo" alt=""/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#destination" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Destination
                        </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/destination/bike">Find For Bike</Link></li>
                                <li><Link class="dropdown-item" to="/destination/car">Find For Car</Link></li>
                                <li><Link class="dropdown-item" to="/destination/bus">Find For Bus</Link></li>
                                <li><Link class="dropdown-item" to="/destination/rail">Find For Rail</Link></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/signin" className="btn btn-orange"><i className="fas fa-sign-in-alt"></i> Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;