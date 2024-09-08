import React from 'react'
import StarsIcon from '../assets/StarsIcon.png'
import AboutUsIconOne from '../assets/AboutUsIconOne.png'
import AboutUsIconTwo from '../assets/AboutUsIconTwo.png'
import AboutUsIconThree from '../assets/AboutUsIconThree.png'

import AboutUsImageOne from '../assets/AboutUsImageOne.png'
import AboutUsImageTwo from '../assets/AboutUsImageTwo.png'
import AboutUsImageThree from '../assets/AboutUsImageThree.png'


const aboutUsData = [
    {
        image: AboutUsImageOne,
        icon: AboutUsIconOne,
        title: 'Property Management',
        description: 'We provide full-service property management, including tenant screening, rent collection, maintenance, and financial reporting to give you peace of mind.',
    },
    {
        image: AboutUsImageTwo,
        icon: AboutUsIconTwo,
        title: 'Leasing Services',
        description: 'Whether you are a tenant or a property owner, we help you lease high-end properties to the right tenants, ensuring long-term value.',
    },
    {
        image: AboutUsImageThree,
        icon: AboutUsIconThree,
        title: 'Property Buying',
        description: 'Discover our exclusive listings across Dubai, ranging from luxurious villas to sleek apartments in the city\'s prime areas like Downtown, Palm Jumeirah, and Dubai Marina.',
    },
];


const AboutSection = () => {
    return (

        <section className='about-section'>
            <div className='aboutus-title'>
                <img src={StarsIcon} alt='starsicon' />
                About Us
            </div>
            <h4 className='aboutus-description w-sm-75'>
                In the ever-evolving landscape of Dubai’s real estate market, Housing Quest stands as a beacon of innovation, trust, and excellence—crafting a journey where finding a home becomes an unparalleled experience
            </h4>

            <div className='row my-3'>
                {aboutUsData.map((item, index) => (
                    <div className='col-md-4 my-3' key={index}>
                        <div className='image-container'>
                            <img src={item.image} className='aboutus-image' alt={item.title} width="100%" />
                            <div className='aboutus-image-content'>
                                <h6 className='aboutus-image-title'>
                                    <img src={item.icon} alt="icon" />
                                    {item.title}
                                </h6>
                                <div className='aboutus-image-description'>{item.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutSection