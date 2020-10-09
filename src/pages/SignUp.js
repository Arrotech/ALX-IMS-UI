import React from 'react'
import '../assets/css/SignUp.css'
import Logo from '../assets/img/logo.jpeg'
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';

function SignUp() {
    return (
        <div className="signup">
            <h1>Welcome Onboard</h1>
            <div className="signup__container">
                <div className="signup__left">
                    <img src={Logo} alt="Signup Banner" />
                    <div className="signup__topLeft"><Link className="signup__link" to="/sign-up">SignUp</Link></div>
                    <div className="signup__centered">ALX-IMS</div>
                    <div className="signup__centeredParagraph">
                        <p>If you want to know more about us consider signing up.</p>
                        <p>You get to manage all of your information at a go.</p>
                        </div>
                </div>
                <div className="signup__right">
                    <h2>Create New Account</h2>
                    <div className="signup__card">
                        <div className="signup__firstname">
                            <input type="text" placeholder="Firstname" />
                        </div>
                        <div className="signup__lastname">
                            <input type="text" placeholder="Lastname" />
                        </div>
                        <div className="signup__username">
                            <PersonIcon />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="signup__phone">
                            <PhoneIcon />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div className="signup__email">
                            <EmailIcon />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="signup__password">
                            <LockIcon />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="signup__account">
                            <p>Already have an account? <span><Link className="signup__loginlink" to="/login">Login</Link></span></p>
                        </div>
                        <Button className="signup__btn">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
