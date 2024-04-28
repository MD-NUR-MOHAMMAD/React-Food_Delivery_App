import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="Footer" id='Footer'>
            <div className="Footer-content">
                <div className="Footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Choose from a diverse menufrom a diverse menufrom a diverse menufrom a diverse menufrom a diverse menu</p>
                    <div className="Footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="Footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy </li>
                    </ul>       
                </div>
                <div className="Footer-content-right">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>+91 1234567890</li>
                        <li>5Wl8I@example.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="Footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer