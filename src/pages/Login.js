import React from 'react'
import '../assets/css/Login.css'
import Logo from '../assets/img/logo.jpeg'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <h1>Welcome Back to ALX-IMS</h1>
            <div className="login__container">
                <div className="login__containerImage">
                    <img src={Logo} alt="Banner" />
                </div>
                <div className="login__containerCard">
                    <h2>Login to Your Account</h2>
                    <div className="login__emailInput">
                        <EmailIcon className="login__icon" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="login__passwordInput">
                        <LockIcon className="login__icon"/>
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login__reset">
                        <p>Forgot password? <span><Link className="login__link" to="/reset">Reset</Link></span></p>
                    </div>
                    <Button className="login__btn">Login</Button>
                </div>
                <div className="login__containerContent">
                    <p>No account yet? <span><Link className="login__link" to="/sign-up">Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
