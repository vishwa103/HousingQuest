import React from 'react'
import MapIcon from '../../assets/icons/mapIcon.png'
// import MenuIcon from '../../assets/icons/menuIcon.png'
// import CallIcon from '../../assets/icons/callIcon.png'
import WhatsappIcon from '../../assets/icons/whatsappIcon.png'
import logo from '../../assets/Housing-Quest-PNG.png'

import ExploreIcon from '../../assets/icons/exploreImage.png'
import HeroImage from '../../assets/heroImage.png'
import HomeIcon from '../../assets/icons/homeIcon.png'
import DownloadIcon from '../../assets/icons/downloadIcon.png'
import './HeroSection.css'

import { useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import LeftToRightReveal from '../LeftToRightReveal'
import TopToBottomReveal from '../TopToBottomReveal'
import RightToLeftReveal from '../RightToLeftReveal'

const HeroSection = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='hero-section'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='d-flex flex-column justify-content-between mb-4' style={{ height: "100vh" }}>

                        <div className='d-flex justify-content-between align-items-start '>
                            <LeftToRightReveal>
                                {/* <div className='d-flex text-white align-items-center gap-2'>
                                    <h1 className='logo m-0'>HQ</h1>
                                    <p className='logo-name m-0'>Housing <br />Quest</p>
                                </div> */}
                                <img src={logo} alt='Housing Quest' width={100} height={50} />
                            </LeftToRightReveal>

                            <div className='d-flex text-white align-items-center gap-2'>
                                <LeftToRightReveal>

                                    <span style={{ cursor: "pointer" }} onClick={() => handleScroll('map')}> <img className='icon' src={MapIcon} alt='map' /></span>
                                </LeftToRightReveal>

                                {/* <img className='icon' src={MenuIcon} alt='menu' /> */}
                                <div className='header-menu'>
                                    <LeftToRightReveal>

                                        <span style={{ cursor: "pointer" }} onClick={() => setShowMenu(!showMenu)}>

                                            {showMenu ? <IoClose size={30} style={{ margin: 0 }} /> : <IoIosMenu size={30} style={{ margin: 0 }} />}
                                        </span>
                                    </LeftToRightReveal>

                                    <ul className={`header-menu-items ${showMenu ? 'active' : ''}`}>
                                        <li style={{ cursor: "pointer",marginBottom:"5px" }} onClick={() => handleScroll('home')}>Home</li>
                                        <li style={{ cursor: "pointer",marginBottom:"5px" }} onClick={() => handleScroll('about')}>About</li>
                                        <li style={{ cursor: "pointer",marginBottom:"5px" }} onClick={() => handleScroll('property')}>Property</li>
                                        <li style={{ cursor: "pointer",marginBottom:"5px" }} onClick={() => handleScroll('service')}>Services</li>
                                        <li style={{ cursor: "pointer",marginBottom:"5px" }} onClick={() => handleScroll('contact')}>Contact</li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                        <div>
                            <TopToBottomReveal>

                                <h1 className='hero-title'>Real Estate in <b style={{ color: "var(--primary-color)" }}>Dubai</b></h1>
                                <h4 className='hero-subtitle'>A New Standard of Finest Properties</h4>
                            </TopToBottomReveal>

                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{ cursor: "pointer" }} onClick={() => handleScroll('contact')}>
                                <LeftToRightReveal>
                                <a className='text-decoration-none' href='https://wa.me/+971544040799' target='_blank' ><div className='hero-card'>
                                        <img src={WhatsappIcon} alt='CallIcon' width="48px" height="48px" /> Get in Touch
                                    </div></a>
                                </LeftToRightReveal>
                            </span>
                            <div>
                                <LeftToRightReveal>

                                    <div className='hero-card'>
                                        <img src={ExploreIcon} alt='ExploreIcon' width="48px" height="48px" />
                                        <p className='hero-explore'>Explore All<br />
                                            Our Properties</p>
                                    </div>
                                </LeftToRightReveal>
                            </div>


                        </div>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <RightToLeftReveal>

                            <div className='hero-image-container'>
                                <img src={HeroImage} className='hero-image' alt='hero-image' width="100%" height="100%" />
                                <div className='hero-image-overlay'>
                                    <div className='d-flex justify-content-end'>
                                        <img className='icon' src={HomeIcon} alt='HomeIcon' />
                                    </div>
                                    {/* <div className='d-flex justify-content-end'>
                                        <div className='hero-download-card'>
                                            <img src={DownloadIcon} alt='DownloadIcon' width="22px" height="22px" />
                                            <p className='m-0'>Download <br />Catalog</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </RightToLeftReveal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection