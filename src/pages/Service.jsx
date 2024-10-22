import React from 'react'
import ServiceImage from '../assets/ServiceImage.png'
import AboutusImageOne from "../assets/AboutusImageOne.png";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FiArrowRightCircle } from 'react-icons/fi';
import ContactSection from '../components/ContactSection';
import VisibleReveal from '../components/VisibleReveal';

import LuxuryVillaOne from "../assets/LuxuryVilla (1).jpg";
import LuxuryVillaTwo from "../assets/LuxuryVilla (2).jpg";
import LuxuryVillaThree from "../assets/LuxuryVilla (3).jpg";
import LuxuryVillaFour from "../assets/LuxuryVilla (4).jpg";
import LuxuryVillaFive from "../assets/LuxuryVilla (5).jpg";
import LuxuryVillaSix from "../assets/LuxuryVilla (6).jpg";
import LuxuryVillaSeven from "../assets/LuxuryVilla (7).jpg";
import LuxuryVillaEight from "../assets/LuxuryVilla (8).jpg";


const tailoreddata = [
    { title: 'Property Buying', image: LuxuryVillaOne ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Property Selling', image: LuxuryVillaTwo ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .`},
    { title: 'Property Management', image: LuxuryVillaThree ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Investment Consultancy', image: LuxuryVillaFour ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Leasing Services', image: LuxuryVillaFive ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
];


const items = [
    { id: 1, label: 'Luxury Villa', image: LuxuryVillaOne },
    { id: 2, label: 'Luxury Villa', image: LuxuryVillaTwo },
    { id: 3, label: 'Luxury Villa', image: LuxuryVillaThree },
    { id: 4, label: 'Luxury Villa', image: LuxuryVillaFour },
    { id: 5, label: 'Luxury Villa', image: LuxuryVillaFive },
    { id: 6, label: 'Luxury Villa', image: LuxuryVillaSix },
    { id: 7, label: 'Luxury Villa', image: LuxuryVillaSeven },
    { id: 8, label: 'Luxury Villa', image: LuxuryVillaEight },
];


const Service = () => {
    return (
        <div className='service-section'>
            <VisibleReveal>
            <div className='image-container'>
                <img src={ServiceImage} className='service-image' alt='Service Image' width="100%" />
                <div className='service-content'>
                    <h1 className='hero-title'>
                        Tailored Real Estate Services for
                        <br />
                        Your Needs
                    </h1>
                    <div className='hero-subtitle'>
                        Luxury living with breathtaking views and prime locations.
                    </div>
                </div>
            </div>
            <div className='services-category'>
                <div className='mt-4'>
                    <div className='row'>
                    {tailoreddata.map((item, index) => (
                                <div className='col-md-12 my-3' key={index}>
                                    <div className='tailored-image-container'>
                                    <div className='discover-image-tailored-content'>
                                        <div className='discover-image-container'>
                                            <img src={item.image} className='discover-image' alt={item.title} />
                                            <div className='discover-image-content'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div className='tailored-image-title'>{item.title}</div>
                                                    <div><BsArrowRightCircleFill size={30} /></div>
                                                </div>
                                            </div>
                                        </div> <div className='my-3 discover-image-tailored-content-inside'>
                                            <div className='tailored-image-title'>{item.title}</div>
                                            <div className='discover-image-tailored-description'>{item.description}</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            </VisibleReveal>
            <VisibleReveal>
            <div className='row my-5 py-5 px-2'>
                <div className='col-md-12'>
                    <div className='discover-image-container'>
                        <img src={AboutusImageOne} alt={`discoverimage`} className='discover-image' />
                        <div className='discover-image-content-two'>
                            <div className='discover-title'>Helping you find your dream property in Dubai’s</div>
                            <button className='button-primary my-3'>Start Your Journey <FiArrowRightCircle size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
            </VisibleReveal>
            <VisibleReveal>
            <div className='discover-section'>
                <h1 className='explore-title text-center'>
                    Discover Your Ideal Property
                </h1>
                <p className='explore-description text-center'>
                    Factors that make Dubai one of the most attractive destinations for real estate
                </p>

                <div className='row my-3'>
                    {items.map(item => (
                        <div className='col-md-3 my-2 col-6' key={item.id}>
                            <div className='discover-image-container'>
                                <img src={item.image} alt={`discoverimage${item.id}`} className='discover-image' width="100%" />
                                <FiArrowRightCircle size={30} className='discover-arrow-icon' />
                                <div className='discover-image-content'>
                                    <div>{item.id.toString().padStart(2, '0')}</div>
                                    <div>{item.label}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                   
                </div>

            </div>
            </VisibleReveal>
            <ContactSection/>
        </div>
    )
}

export default Service