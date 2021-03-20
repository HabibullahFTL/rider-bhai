import React, { useContext, useState } from 'react';
import "./SignIn.css";
import fbIcon from '../../img/facebook.svg';
import googleIcon from '../../img/google.svg';
import ghIcon from '../../img/github.svg';
import { UserContext } from '../../App';
import { emailSignUp, fbSignIn, ghSignIn, googleSignIn } from './SignInManager';

const SignIn = () => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
    const [isNewUser, setIsNewUser] = useState(false);

    const handleEmailSignUp = (e) => {
        e.preventDefault();
        console.log("out",loginUserDetails);
        if (!isNewUser && loginUserDetails.name && loginUserDetails.email && loginUserDetails.password) {
            console.log(loginUserDetails);
            // emailSignUp()
            //     .then(data => {
            //         if (data.dataType === 'userData') {
            //             console.log(data);
            //         } else {
            //             setLoginUserDetails({
            //                 ...loginUserDetails,
            //                 errMessage: data.message
            //             });
            //         }
            //     });
        }
    }
    const handleGooleSignIn = () => {
        googleSignIn()
            .then(data => {
                if (data.dataType === 'userData') {
                    console.log(data);
                } else {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.message
                    });
                    console.log(data.message);
                }
            });
    }

    const handleFBSignIn = () => {
        fbSignIn()
            .then(data => {
                if (data.dataType === 'userData') {
                    console.log(data);
                } else {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.message
                    });
                    console.log(data.message);
                }
            });
    }

    const handleGHSignIn = () => {
        ghSignIn()
            .then(data => {
                if (data.dataType === 'userData') {
                    console.log(data);
                } else {
                    setLoginUserDetails({
                        ...loginUserDetails,
                        errMessage: data.message
                    });
                    console.log(data.message);
                }
            });
    }

    const handleOnChange = (e)=>{
        if(e.target.name === 'name' && e.target.value){
            loginUserDetails.name = e.target.value;
        }
        if(e.target.name === 'email' && e.target.value){
            loginUserDetails.email = e.target.value;
        }
        if(e.target.name === 'password' && e.target.value){
            loginUserDetails.password = e.target.value;
            let passwordErr = document.getElementById('passwordErr');
            let confPassword = document.getElementById('confirm-password');
            if (e.target.value !== confPassword.value && confPassword === "") {
                passwordErr.innerText = "";
            }else if (e.target.value !== confPassword.value) {
                passwordErr.innerText = "Password not matched";
            }
        }
        if(e.target.name === 'confirm-password' && e.target.value){
            let passwordErr = document.getElementById('passwordErr');
            if (e.target.value !== loginUserDetails.password) {
                passwordErr.innerText = "Password not matched";
            }else{
                passwordErr.innerText = "";
            }
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 m-auto">
                    <div className="card my-4">
                        <div className="card-body">
                            <form action="" className="p-3" onSubmit={handleEmailSignUp}>
                                {isNewUser ? <h4>Create New Account</h4> : <h4>Sign In</h4>}
                                <small style={{ color: 'red' }}>{loginUserDetails.errMessage}</small>
                                {isNewUser && <div className="custom-input-area">
                                    <input type="text" id="name" name="name" onChange={handleOnChange} required />
                                    <label htmlFor="name"><span>Name</span></label>
                                </div>}
                                <div className="custom-input-area">
                                    <input type="text" id="email" name="email" onChange={handleOnChange} required />
                                    <label htmlFor="email"><span>Email</span></label>
                                </div>
                                <div className="custom-input-area">
                                    <input type="password" id="password" name="password" onChange={handleOnChange} required />
                                    <label htmlFor="password"><span>Password</span></label>
                                </div>
                                <small style={{ color: 'red' }} id="passwordErr"></small>
                                {isNewUser && <div className="custom-input-area">
                                    <input type="password" id="confirm-password" name="confirm-password" onChange={handleOnChange} required />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;