import React from 'react'
import '../assets/css/NavBar.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__left">
                <Link className="navBar__leftTitle" to="/"><p>ALX<span className="navBar__spannedText">IM</span>S</p></Link>
            </div>
            <div className="navBar__right">
                <Link className="navBar__links" to="/sign-up"><Button className="navBar__signupbtn">Sign Up</Button></Link>
                <Link className="navBar__links" to="/login"><Button className="navBar__loginbtn">Login</Button></Link>
            </div>
        </div>
    )
}

export default NavBar
