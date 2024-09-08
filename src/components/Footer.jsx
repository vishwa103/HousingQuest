import React from 'react'
import InstagramIcon from '../assets/InstagramIcon.png'
import WhatsappIcon from '../assets/WhatsappIcon.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer-section'>

            <div className='row d-flex align-items-center justify-content-between'>
                <div className='col-md-2 my-3'>
                    <h1 className='logo-title'>
                        Housing Quest
                    </h1>
                </div>
                <div className='col-md-8 my-3'>
                    <div className='d-flex  justify-content-around align-items-center'>
                        <a className='footer-link' href="#/#home">Home</a>
                        <a className='footer-link' href="#/#about">About Us</a>
                        <Link className='footer-link' to="/service">Service</Link>
                        <a className='footer-link' href="#/#property">Property</a>
                        <a className='footer-link' href="#/#contact">Contact </a>

                    </div>

                </div>
                <div className='col-md-1 my-3'>
                    <div className='d-flex justify-content-between'>
                        <img src={InstagramIcon} alt='Instagram' />
                        <img src={WhatsappIcon} alt='Instagram' />
                    </div>
                </div>

            </div>

            <div className='row d-flex align-items-center justify-content-between'>
            <div className='col-md-2 my-3'>
                    <div className='footer-text'>
                    Terms & Services
                    </div>
                </div>
                <div className='col-md-3 my-3'>
                    <div className='d-flex justify-content-between'>
                    <div className='footer-text'>
                    Conditions
                    </div>
                    <div className='footer-text'>
                    Privacy Policy
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer