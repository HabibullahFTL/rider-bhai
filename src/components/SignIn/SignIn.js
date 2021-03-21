import React, { useContext, useState } from 'react';
import "./SignIn.css";
import fbIcon from '../../img/facebook.svg';
import googleIcon from '../../img/google.svg';
import ghIcon from '../../img/github.svg';
import { UserContext } from '../../App';
import { emailSignIn, emailSignUp, fbSignIn, ghSignIn, googleSignIn } from './SignInManager';
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router';
import profileImg from '../../img/profile.jpg';

const SignIn = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [isNewUser, setIsNewUser] = useState(false);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    // For Email & Password Sign Up
    const handleEmailSignUp = (e) => {
        if (isNewUser && loginUserDetails.name && loginUserDetails.email && loginUserDetails.password) {
            emailSignUp(loginUserDetails.name, loginUserDetails.email, loginUserDetails.password)
                .then(data => {
                    if (data.errMessage) {
                        setLoginUserDetails({
                            ...loginUserDetails,
                            errMessage: data.errMessage
                        })
                    } else {
                        setLoginUserDetails(data);
                        history.replace(from);
                    }
                });
        }
        e.preventDefault();
    }

    // For Email & Password Sign In
    const handleEmailSignIn = (e) => {
        if (!isNewUser && loginUserDetails.email && loginUserDetails.password) {
            emailSignIn(loginUserDetails.email, loginUserDetails.password)
                .then(data => {
                    if (data.errMessage) {
                        setLoginUserDetails({
                            ...loginUserDetails,
                            errMessage: data.errMessage
                        })
                    } else {
                        setLoginUserDetails(data);
                        history.replace(from);
                    }
                });
        }
        e.preventDefault();
    }
    const handleGooleSignIn = () => {
        googleSignIn()
            .then(data => {
                if (data.errMessage) {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.errMessage
                    })
                } else {
                    setLoginUserDetails(data);
                    history.replace(from);
                }
            });
    }

    const handleFBSignIn = () => {
        fbSignIn()
            .then(data => {
                if (data.errMessage) {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.errMessage
                    })
                } else {
                    setLoginUserDetails(data);
                    history.replace(from);
                }
            });
    }

    const handleGHSignIn = () => {
        ghSignIn()
            .then(data => {
                if (data.errMessage) {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.errMessage
                    })
                } else {
                    setLoginUserDetails(data);
                    history.replace(from);
                }
            });
    }

    // Validating Data
    const handleOnChange = (e) => {
        if (e.target.name === 'name' && e.target.value) {
            loginUserDetails.name = e.target.value;
        }
        if (e.target.name === 'email' && e.target.value) {
            const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
            const emailErr = document.getElementById('emailErr');
            if (emailRegEx.test(e.target.value)) {
                emailErr.innerText = "";
                loginUserDetails.email = e.target.value;
            } else {
                emailErr.innerText = "Email is not valid"
            }
        }
        if (e.target.name === 'password' && e.target.value && !isNewUser) {
            let passwordErr = document.getElementById('passwordErr');
            if (e.target.value.length < 8) {
                passwordErr.innerText = "Password must be at least 8 character";
            } else {
                passwordErr.innerText = "";
                loginUserDetails.password = e.target.value;
            }
        }
        if (e.target.name === 'password' && e.target.value && isNewUser) {
            let passwordErr = document.getElementById('passwordErr');
            let confPassword = document.getElementById('confirm-password');
            const passwordChk = document.getElementById('password');
            if (e.target.value === confPassword.value) {
                loginUserDetails.password = e.target.value;
                passwordErr.innerText = "";
                loginUserDetails.password = e.target.value;
            } else if (passwordChk.value.length < 8) {
                passwordErr.innerText = "Password must be at least 8 character";
            } else if (e.target.value !== confPassword.value && confPassword.value !== "") {
                passwordErr.innerText = "Password not matched";
            } else {
                passwordErr.innerText = "";
                loginUserDetails.password = e.target.value;
            }
        }
        if (e.target.name === 'confirm-password' && e.target.value) {
            let passwordErr = document.getElementById('passwordErr');
            const passwordChk = document.getElementById('password');
            if (e.target.value !== passwordChk.value) {
                passwordErr.innerText = "Password not matched";
            } else if (passwordChk.value.length < 8) {
                passwordErr.innerText = "Password must be at least 8 character";
            } else if (e.target.value === passwordChk.value) {
                passwordErr.innerText = "";
                loginUserDetails.password = e.target.value;
            }
        }
    }

    let formHandler;
    if (isNewUser) {
        formHandler = handleEmailSignUp;
    } else {
        formHandler = handleEmailSignIn;
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 m-auto">
                    <div className="card my-4">
                        {
                            !loginUserDetails.isSignIn && <div className="card-body">
                                <form action="" className="p-3" onSubmit={formHandler}>
                                    {isNewUser ? <h4>Create New Account</h4> : <h4>Sign In</h4>}
                                    <small style={{ color: 'red' }}>{loginUserDetails?.errMessage}</small>
                                    {isNewUser && <div className="custom-input-area">
                                        <input type="text" id="name" name="name" onChange={handleOnChange} required />
                                        <label htmlFor="name"><span>Name</span></label>
                                    </div>}
                                    <div className="custom-input-area">
                                        <input type="text" id="email" name="email" onChange={handleOnChange} required />
                                        <label htmlFor="email"><span>Email</span></label>
                                    </div>
                                    <small style={{ color: 'red' }} id="emailErr"></small>
                                    <div className="custom-input-area">
                                        <input type="password" id="password" name="password" onChange={handleOnChange} required />
                                        <label htmlFor="password"><span>Password</span></label>
                                    </div>
                                    <small style={{ color: 'red' }} id="passwordErr"></small>
                                    {isNewUser && <div className="custom-input-area">
                                        <input type="password" id="confirm-password" name="confirm-password" onKeyUp={handleOnChange} required />
                                        <label htmlFor="confirm-password"><span>Confirm Password</span></label>
                                    </div>}
                                    <div className="text-center">
                                        {
                                            isNewUser ?
                                                <button type="submit" className="btn btn-alt-orange btn-block">Sign Up</button> :
                                                <button type="submit" className="btn btn-alt-orange btn-block">Sign In</button>
                                        }
                                        {
                                            isNewUser ?
                                                <h6>Already have an account ? <button onClick={() => setIsNewUser(!isNewUser)} className="no-style">Sign In</button></h6> :
                                                <h6>Don’t have an account ? <button onClick={() => setIsNewUser(!isNewUser)} className="no-style">Create an account </button></h6>
                                        }
                                    </div>
                                </form>
                                <div className="text-center card-body">
                                    <h5 className="or-devider"> </h5>
                                    <button className="social-login w-100" onClick={handleFBSignIn}>
                                        <img src={fbIcon} alt="" />
                                        <span>Continue with Facebook</span>
                                    </button>
                                    <button className="social-login w-100 w-lg-75" onClick={handleGooleSignIn}>
                                        <img src={googleIcon} alt="" />
                                        <span>Continue with Google</span>
                                    </button>
                                    <button className="social-login w-100 w-lg-75" onClick={handleGHSignIn}>
                                        <img src={ghIcon} alt="" />
                                        <span>Continue with GitHub</span>
                                    </button>
                                </div>
                            </div>
                        }
                        {
                            loginUserDetails.isSignIn && <div className="card-body text-center">
                                <h5 className="text-success">Welcome to Rider Bhai!</h5>
                                <hr />
                                <div className="my-2">
                                    {
                                        loginUserDetails.photo ? 
                                        <img src={loginUserDetails.photo} alt="" className="rounded-circle w-25 img-thumbnail m-auto" /> : <img src={profileImg} alt="" className="rounded-circle w-25 img-thumbnail m-auto" />
                                    }
                                </div>
                                <h5>{loginUserDetails.name} </h5>
                                <Link to="/" className="btn btn-orange"><i className="fas fa-search"></i> Start Finding Ticket</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;