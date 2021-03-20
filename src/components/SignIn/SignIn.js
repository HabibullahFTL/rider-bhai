import React, { useContext } from 'react';
import "./SignIn.css";
import fbIcon from '../../img/facebook.svg';
import googleIcon  from '../../img/google.svg';
import ghIcon from '../../img/github.svg';
import { UserContext } from '../../App';

const SignIn = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 m-auto">
                    <div className="card my-4">
                        <div className="card-body">
                            <form action="" className="p-3">
                                <h4>Create New Account</h4>
                                <div className="custom-input-area">
                                    <input type="text" id="name" required />
                                    <label htmlFor="name"><span>Name</span></label>
                                </div>
                                <div className="custom-input-area">
                                    <input type="text" id="email" required />
                                    <label htmlFor="email"><span>Email</span></label>
                                </div>
                                <div className="custom-input-area">
                                    <input type="password" id="password" required />
                                    <label htmlFor="password"><span>Password</span></label>
                                </div>
                                <div className="custom-input-area">
                                    <input type="password" id="confirm-password" required />
                                    <label htmlFor="confirm-password"><span>Confirm Password</span></label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-alt-orange btn-block">Sign Up</button>
                                    <h6>Already have an account ? <a href="#">Login</a></h6>
                                </div>
                                <div className="text-center">
                                    <h5 className="or-devider"></h5>
                                    <div className="social-login w-100 w-lg-75">
                                        <img src={fbIcon} alt=""/>
                                        <span>Continue with Facebook</span>
                                    </div>
                                    <div className="social-login w-100 w-lg-75">
                                        <img src={googleIcon} alt=""/>
                                        <span>Continue with Google</span>
                                    </div>
                                    <div className="social-login w-100 w-lg-75">
                                        <img src={ghIcon} alt=""/>
                                        <span>Continue with GitHub</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;