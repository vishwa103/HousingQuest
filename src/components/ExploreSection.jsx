import React, { useState } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import AboutusImageOne from "../assets/AboutusImageOne.png";
import AboutusImageTwo from "../assets/AboutusImageTwo.png";
import AboutusImageThree from "../assets/AboutusImageThree.png";
import ProfileImageOne from "../assets/ProfileImageOne.png";
import ProfileImageTwo from "../assets/ProfileImageTwo.png";
import ProfileImageThree from "../assets/ProfileImageThree.png";
import ProfileImageFour from "../assets/ProfileImageFour.png";
import ExperienceImage from "../assets/ExperienceImage.png";
import LuxuryVillaOne from "../assets/LuxuryVilla (1).jpg";
import LuxuryVillaTwo from "../assets/LuxuryVilla (2).jpg";
import LuxuryVillaThree from "../assets/LuxuryVilla (3).jpg";
import LuxuryVillaFour from "../assets/LuxuryVilla (4).jpg";
import LuxuryVillaFive from "../assets/LuxuryVilla (5).jpg";
import LuxuryVillaSix from "../assets/LuxuryVilla (6).jpg";
import LuxuryVillaSeven from "../assets/LuxuryVilla (7).jpg";
import LuxuryVillaEight from "../assets/LuxuryVilla (8).jpg";


import DotIcon from "../assets/DotIcon.png";
import TaxIcon from "../assets/TaxIcon.png";


import { LuArrowRightCircle } from 'react-icons/lu';
import { BsArrowRightCircle, BsArrowRightCircleFill } from 'react-icons/bs';


import InstagramIcon from '../assets/InstagramIcon.png'
import WhatsappIcon from '../assets/WhatsappIcon.png'
import VisibleReveal from './VisibleReveal';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

// Define the data for the items
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

const tailoreddata = [
    { title: 'Property Buying', image: LuxuryVillaOne ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Property Selling', image: LuxuryVillaTwo ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .`},
    { title: 'Property Management', image: LuxuryVillaThree ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Investment Consultancy', image: LuxuryVillaFour ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
    { title: 'Leasing Services', image: LuxuryVillaFive ,description:`Our property buying service focuses on understanding your preferences, location needs, and budget to find the ideal property for you. We provide expert advice on Dubai’s top areas, whether you're looking for luxury villas, penthouses, or apartments .` },
];


const portfoliodata = {
    Apartments: [
        {
            id: 1,
            title: 'Modern Apartment 1',
            image: AboutusImageOne,
            subtitle: 'Luxury Living Space',
            location: 'Burj Khalifa Residences',
            price: 'from $300,000',
            installment: 'for 10 Years',
            initialPayment: '$30,000',
            completionDate: '09/2025'
        },
        {
            id: 2,
            title: 'Modern Apartment 2',
            image: AboutusImageTwo,
            subtitle: 'Contemporary Design',
            location: 'Burj Khalifa Residences',
            price: 'from $320,000',
            installment: 'for 12 Years',
            initialPayment: '$32,000',
            completionDate: '12/2025'
        },
        {
            id: 3,
            title: 'City View Apartment',
            image: AboutusImageThree,
            subtitle: 'Panoramic Views',
            location: 'Downtown Dubai',
            price: 'from $350,000',
            installment: 'for 15 Years',
            initialPayment: '$35,000',
            completionDate: '06/2026'
        }
    ],
    Villas: [
        {
            id: 1,
            title: 'Luxury Villa 1',
            image: AboutusImageTwo,
            subtitle: 'Spacious Villa',
            location: 'Palm Jumeirah',
            price: 'from $1,200,000',
            installment: 'for 20 Years',
            initialPayment: '$120,000',
            completionDate: '11/2025'
        },
        {
            id: 2,
            title: 'Luxury Villa 2',
            image: AboutusImageOne,
            subtitle: 'Elegant Design',
            location: 'Dubai Marina',
            price: 'from $1,500,000',
            installment: 'for 25 Years',
            initialPayment: '$150,000',
            completionDate: '02/2026'
        },
        {
            id: 3,
            title: 'Exclusive Villa',
            image: AboutusImageThree,
            subtitle: 'High-End Luxury',
            location: 'Jumeirah Golf Estates',
            price: 'from $2,000,000',
            installment: 'for 30 Years',
            initialPayment: '$200,000',
            completionDate: '08/2026'
        }
    ],
    Rentals: [
        {
            id: 1,
            title: 'Cozy Rental ',
            image: AboutusImageOne,
            subtitle: 'Comfortable Living',
            location: 'Downtown Dubai',
            price: 'from $2,000/month',
            installment: 'Monthly',
            initialPayment: '1 Month Rent',
            completionDate: 'Available Now'
        },
        {
            id: 2,
            title: 'Cozy Rental ',
            image: AboutusImageTwo,
            subtitle: 'Convenient Location',
            location: 'Business Bay',
            price: 'from $2,500/month',
            installment: 'Monthly',
            initialPayment: '1 Month Rent',
            completionDate: 'Available Now'
        },
        {
            id: 3,
            title: 'Luxury Rental',
            image: AboutusImageThree,
            subtitle: 'Elegant and Spacious',
            location: 'Palm Jumeirah',
            price: 'from $5,000/month',
            installment: 'Monthly',
            initialPayment: '1 Month Rent',
            completionDate: 'Available Now'
        }
    ],
};


const ExploreSection = () => {

    const [selectedCategory, setSelectedCategory] = useState('Apartments');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div className='explore-section'>

            <VisibleReveal>
                <div className='tailored-section'>
                    <div className='d-flex align-items-end justify-content-between'>
                        <h1 className='tailored-title'>Explore Our Property Portfolio</h1>
                        <div className='d-sm-flex gap-2'>
                            <button
                                className={`button-secondary ${selectedCategory === 'Apartments' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('Apartments')}
                            >
                                Apartments
                            </button>
                            <button
                                className={`button-secondary ${selectedCategory === 'Villas' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('Villas')}
                            >
                                Villas
                            </button>
                            <button
                                className={`button-secondary ${selectedCategory === 'Rentals' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('Rentals')}
                            >
                                Rentals
                            </button>

                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='row'>
                            {portfoliodata[selectedCategory].map((item) => (
                                <div className='col-md-6 my-3' key={item.id}>
                                    <div className='discover-image-container'>
                                        <img src={item.image} className='discover-image' alt={item.title} />
                                        <div className='discover-image-content-main'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='tailored-image-title'>{item.title}</div>
                                            </div>
                                        </div>
                                        <div className='arrow-top'><BsArrowRightCircle size={30} /></div>
                                        <div className='discover-image-content-top'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='discover-image-subtext'>
                                                    {item.subtitle}
                                                </div>
                                                <BsArrowRightCircleFill className='discover-arrow-icon' size={30} />
                                            </div>
                                        </div>
                                        <div className='discover-image-content-bottom'>
                                            <div className='d-flex flex-column gap-2 justify-content-end align-items-end'>
                                                <div className='discover-image-text-container'>
                                                    <CiLocationOn size={20} /> {item.location}
                                                </div>
                                                <div className='d-sm-flex gap-1'>
                                                    {item.price &&
                                                        <div className='discover-image-text-container'>
                                                            <div className='discover-text-lite'>
                                                                Price
                                                            </div>
                                                            <div>
                                                                {item.price}
                                                            </div>
                                                        </div>
                                                    }
                                                    {item.installment &&
                                                        <div className='discover-image-text-container'>
                                                            <div className='discover-text-lite'>
                                                                Installment
                                                            </div>
                                                            <div>
                                                                {item.installment}
                                                            </div>
                                                        </div>
                                                    }
                                                    {item.initialPayment &&
                                                        <div className='discover-image-text-container'>
                                                            <div className='discover-text-lite'>
                                                                Initial Payment
                                                            </div>
                                                            <div>
                                                                {item.initialPayment}
                                                            </div>
                                                        </div>
                                                    }
                                                    {item.completionDate &&
                                                        <div className='discover-image-text-container'>
                                                            <div className='discover-text-lite'>
                                                                Completion Date
                                                            </div>
                                                            <div>
                                                                {item.completionDate}
                                                            </div>
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                            <div className='mt-3 d-flex justify-content-between'>
                                <p className='text-white'>Don’t Miss out on our hot deals</p>
                                <div className='d-flex h-50 gap-3'>
                                    <img src={InstagramIcon} alt='Instagram' width={20} height={20} />
                                    <img src={WhatsappIcon} alt='Instagram' width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </VisibleReveal>

            <VisibleReveal>
                <div className='experience-section'>
                    <div className='row'>
                        <div className='col-md-6 my-3'>
                            <div className='d-flex flex-column justify-content-between h-100'>
                                <div>
                                    <p className='experience-text'>With over 25 years of experience, Housing Quest has been at the forefront of Dubai's luxury real estate sector. We specialize in connecting discerning buyers with the city’s most iconic properties, offering unparalleled expertise in property management, buying, selling, and leasing high-end properties.</p>
                                    <div className='d-flex my-4'>
                                        <div className='experience-profile-images'>
                                            <img src={ProfileImageOne} alt='ProfileImageOne' className='experience-profile-image' />
                                            <img src={ProfileImageTwo} alt='ProfileImageTwo' className='experience-profile-image' />
                                            <img src={ProfileImageThree} alt='ProfileImageThree' className='experience-profile-image' />
                                            <img src={ProfileImageFour} alt='ProfileImageFour' className='experience-profile-image' />
                                        </div>
                                        <div className='experience-text'>
                                            Meet Our <br /> Professional Team
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center my-3 gap-5' >
                                        <h1 className='experience-title'>25+</h1>
                                        <h6 className='experience-description'>Years <br /> of experience</h6>
                                    </div>
                                    <div className='divider'>
                                        <span className='gray-line'></span>
                                    </div>

                                    <div className='d-flex align-items-center my-3 gap-5' >
                                        <h1 className='experience-title'>84%</h1>
                                        <h6 className='experience-description'>Customer<br />
                                            Satisfaction Rate</h6>
                                    </div>
                                    <div className='divider'>
                                        <span className='gray-line'></span>
                                    </div>

                                    <div className='d-flex align-items-center my-3 gap-5' >
                                        <h1 className='experience-title'>324</h1>
                                        <h6 className='experience-description'>Exquisite Properties<br />
                                            Ready for your Selection</h6>
                                    </div>
                                    <div className='divider'>
                                        <span className='gray-line'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 my-3'>
                            <div className='image-container'>
                                <img src={AboutusImageOne} className='experience-image' alt='experience-image' width="100%" />
                                <div className='discover-image-content '>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <p className='experience-image-title'>Find Your Dream</p>
                                        <button className='hero-explore-button'><img src={AboutusImageOne} className='explore-button-image' alt='explore-button-image' /> <div className='pe-2'>Get Our<br />Consultation</div></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </VisibleReveal>
            <VisibleReveal>
                <div className='tailored-section'>
                    <div className='d-flex align-items-end justify-content-between'>
                        <h1 className='tailored-title'>Tailored Solutions for your Real Estate Needs</h1>
                        <button className='button-primary'>Explore More <LuArrowRightCircle size={25} /></button>
                    </div>
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

                <div className='row my-5'>
                    <div className='col-md-6'>
                        <div className='aboutus-title d-flex align-items-center mb-3'>
                            <img src={DotIcon} alt='starsicon' width="10px" height="10px" />
                            Explore Our Advantages
                        </div>
                        <div className='explore-title'>
                            Why Dubai Stands Unrivalled?
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='image-container'>
                            <img src={ExperienceImage} alt={`discoverimage`} className='discover-image' width="100%" />
                            <div className='aboutus-image-content'>
                                <h6 className='aboutus-image-title'>
                                    <img src={TaxIcon} alt="icon" />
                                    Tax-Free Income
                                </h6>
                                <div className='aboutus-image-description'>Dubai’s year-round offers zero property tax and no capital gains tax, allowing investors to maximize returns on real estate investments.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </VisibleReveal>


            <div className='discover-section'>
                <VisibleReveal>

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
                        <div className='col-md-12 my-3'>
                            <div className='discover-button'>
                                <div>Lot More to Explore</div>
                                <div><FiArrowRightCircle size={30} /></div>
                            </div>
                        </div>
                    </div>
                </VisibleReveal>
                <VisibleReveal>

                    <div className='row my-5'>
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

            </div>

        </div>
    );
}

export default ExploreSection;
