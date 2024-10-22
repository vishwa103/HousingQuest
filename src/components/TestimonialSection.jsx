import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import StarsIcon from '../assets/StarsIcon.png'

import AboutusImageOne from "../assets/AboutusImageOne.png";
import AboutusImageTwo from "../assets/AboutusImageTwo.png";
import AboutusImageThree from "../assets/AboutusImageThree.png";
import VisibleReveal from './VisibleReveal';

const testimonials = [
    {
        image: AboutusImageOne,
        title: "Exceptional Service for Our Dream Home",
        description: `Working with HQRealestates was an exceptional experience from start to finish. Their team demonstrated an impressive level of professionalism and expertise, guiding us through every step of the buying process. The attention to detail and commitment to finding the perfect home for us made all the difference. We couldn’t be happier with our new home and are grateful for their support and dedication.`,
        username: "Jane D",
    },
    {
        image: AboutusImageTwo,
        title: "Seamless Transactions and Outstanding Results",
        description: `I’ve had the pleasure of working with HQRealestates for both buying and selling properties, and each time, they exceeded my expectations. Their market knowledge and strategic approach helped me achieve the best possible outcome in a timely manner. The personalized service and clear communication throughout the transactions made the entire process seamless and stress-free. Highly recommend them to anyone in the real estate market.`,
        username: "Emily R",
    },
    {
        image: AboutusImageThree,
        title: "Innovative Marketing and Expert Advice",
        description: `The team at HQRealestates truly went above and beyond in helping us sell our property. Their innovative marketing strategies and expert advice ensured that our home was presented in the best light possible. Their responsiveness and thorough understanding of the market helped us secure a great deal. We were impressed by their dedication and would not hesitate to work with them again in the future.`,
        username: "Sarah M",
    },
    // Add more testimonials here
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({ opacity: 0 })
                .then(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                    controls.start({ opacity: 1 });
                });
        }, 10000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [controls]);

    const testimonial = testimonials[currentIndex];

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        controls.start({ opacity: 0 }).then(() => controls.start({ opacity: 1 }));
    };

    return (
        <VisibleReveal>
        <div className='testimonial-section my-5'>
            <div className='aboutus-title mb-3'>
                <img src={StarsIcon} alt='starsicon' />
                Testimonials
            </div>

            <div className='d-flex align-items-center'>
                <h1 className='testimonial-title '>Hear from the Experienced </h1>
            </div>
            <div className='testimonial-container'>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={controls}
                    transition={{ duration: 1 }} // Fade duration
                    className='row'
                >
                    <div className='col-md-5 my-3'>
                        <div className='image-container'>
                            <img src={testimonial.image} alt="Testimonial" className='testimonial-image' width="100%" />
                        </div>
                    </div>
                    <div className='col-md-7 my-3'>
                        <div className='testimonial-content'>
                            <div className='testimonial-description'>
                                {testimonial.description}
                            </div>
                            <div className='d-flex align-items-center gap-3'  >
                                <div className='image-container'>
                                    <img src={testimonial.image} alt="Testimonial" className='testimonial-profile' />
                                </div>
                                <div className='d-flex flex-column justify-content-between'>
                                    <div className='testimonial-username '>
                                        {testimonial.username}
                                    </div>
                                    <div className='testimonial-usertitle'>
                                        {testimonial.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <div className='indicators w-75 mx-auto d-flex align-items-center mt-5'>
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
        </VisibleReveal>
    );
}

export default TestimonialSection;
