import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src ={assets.logo} alt="" className='logo'/>
                <p>Lorem Ipsum is simply dummy text of printing and typesetting industry.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+72-983-390-38979</li>
                <li>contact@zomwiggy.com</li>
            </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @BhavyaAnand - Made with love </p>

      
    </div>
  )
}

export default Footer
