import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginleft">
                    <h3 className="loginLogo">Social_1987</h3>
                    <span className="loginDesc">Connect with friends and the world around you with Social_1987</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;