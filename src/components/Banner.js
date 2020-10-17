import React from 'react'
import '../assets/css/Banner.css'
import BannerImage from '../assets/img/banner2.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__text">
                <h1>Welcome to online entertainment</h1>
                <p>Series, movies, kids’ shows plus SuperSport, live news and more.</p>
                <p><Button className="banner__btn">Get Started</Button></p>
                <p><ExpandMoreIcon className="banner__expandMore"/></p>
            </div>
        </div>
    )
}

export default Banner
