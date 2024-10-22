import React from 'react'
import InstagramIcon from '../assets/InstagramIcon.png'
import WhatsappIcon from '../assets/WhatsappIcon.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaWhatsapp } from 'react-icons/fa'
import { CiLocationOn, CiPhone } from 'react-icons/ci'
import { MdOutlineMailOutline } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'


const Footer = () => {
    return (
        <div className='footer-section'>

            <div className='row d-flex align-items-center justify-content-between'>
                <div className='col-md-6 my-3 col-6'>

                    <h1 className='logo-title'>
                        Housing Quest
                    </h1>
                    <p className='text-white d-flex align-items-center gap-1 footer-link'>
                        <CiPhone size={20} className='text-white' /> +97145870744
                    </p>
                    <p className='text-white d-flex align-items-center gap-1 footer-link'>
                        <CiLocationOn size={20} className='text-white'/> Business Bay, Dubai
                    </p>
                    <div className='text-white d-flex align-items-center gap-2 w-100  footer-link'>
                        <TfiEmail size={15} className='text-white'/> Info@hqrealestates.com
                    </div>
                </div>
                {/* <div className='col-md-8 my-3'>
                    <div className='d-flex  justify-content-around align-items-center'>
                        <a className='footer-link' href="#/#home">Home</a>
                        <a className='footer-link' href="#/#about">About Us</a>
                        <Link className='footer-link' to="/service">Service</Link>
                        <a className='footer-link' href="#/#property">Property</a>
                        <a className='footer-link' href="#/#contact">Contact </a>

                    </div>

                </div> */}
                <div className='col-md-6 my-3 col-6'>
                    <div className='d-flex flex-column gap-3 align-items-end'>
                    <FaInstagram size={20} className='text-white' />
                    <FaWhatsapp size={20} className='text-white' />
                    <FaFacebook size={20} className='text-white' />
                    <FaLinkedin size={20} className='text-white' />
                    </div>
                </div>

            </div>

            {/* <div className='row d-flex align-items-center justify-content-between'>
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
            </div> */}

        </div>
    )
}

export default Footer