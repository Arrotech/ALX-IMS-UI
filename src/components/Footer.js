import React from 'react'
import '../assets/css/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>Explore our latest special offers or add ALXIMS to a partner account for convenience and discounts. Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            <p>Save your favorites easily and always have something to watch.</p>
            <hr />
            <div className="footer__content">
                <div className="footer__about">
                    <h3>ABOUT</h3>
                    <p>Careers</p>
                    <p>ALX-IMS</p>
                    <p>Anime</p>
                    <p>Manga</p>
                    <p>Categories</p>
                </div>
                <div className="footer__services">
                    <h3>SERVICES</h3>
                    <p>Animations</p>
                    <p>Membership</p>
                    <p>Billing</p>
                </div>
                <div className="footer__account">
                    <h3>ACCOUNT</h3>
                    <p>Sign Up</p>
                    <p>Login</p>
                </div>
                <div className="footer__support">
                    <h3>SUPPORT</h3>
                    <p>arrotechdesign@gmail.com</p>
                    <p>+254 711 371 265</p>
                    <p>14th Floor K-Annex</p>
                    <p>+0 350 645 000</p>
                </div>
            </div>
            <hr />
            <div className="footer__copyright">
                <p>Copyright © 2020 Alx Ims. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
