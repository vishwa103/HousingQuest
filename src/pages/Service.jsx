import React from 'react'
import ServiceImage from '../assets/ServiceImage.png'
import AboutusImageOne from "../assets/AboutusImageOne.png";
import AboutusImageTwo from "../assets/AboutusImageTwo.png";
import AboutusImageThree from "../assets/AboutusImageThree.png";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FiArrowRightCircle } from 'react-icons/fi';
import ContactSection from '../components/ContactSection';

const tailoreddata = [
    { title: 'Property Buying', image: AboutusImageOne },
    { title: 'Property Selling', image: AboutusImageTwo },
    { title: 'Property Management', image: AboutusImageThree },
    { title: 'Investment Consultancy', image: AboutusImageOne },
    { title: 'Leasing Services', image: AboutusImageOne },
];

const items = [
    { id: 1, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 2, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 3, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 4, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 5, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 6, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 7, label: 'Luxury Villa', image: AboutusImageOne },
    { id: 8, label: 'Luxury Villa', image: AboutusImageOne },
];


const Service = () => {
    return (
        <div className='service-section'>
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
                                <div className='discover-image-container'>
                                    <img src={item.image} className='discover-image' alt={item.title} />
                                    <div className='discover-image-content'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='tailored-image-title'>{item.title}</div>
                                            <div><BsArrowRightCircleFill size={30} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
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
            <ContactSection/>
        </div>
    )
}

export default Service