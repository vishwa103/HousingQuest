import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import StarsIcon from '../assets/StarsIcon.png'

import AboutusImageOne from "../assets/AboutusImageOne.png";
import AboutusImageTwo from "../assets/AboutusImageTwo.png";
import AboutusImageThree from "../assets/AboutusImageThree.png";

const testimonials = [
    {
        image: AboutusImageOne,
        title: "Corporate Gala",
        description: `We hired this company to decorate our annual corporate gala, and they exceeded all expectations. The attention to detail was impeccable, and the decor perfectly reflected our brand's image. The event was a huge success, and our clients were thoroughly impressed. We look forward to working with them again for future events.`,
        username: " Jane D",
    },
    {
        image: AboutusImageTwo,
        title: "Princess Charm’s Birthday",
        description: `I wanted my daughter's birthday party to be extra special, and they delivered beyond my wildest dreams! The themed decorations were vibrant and fun, and every little detail was taken care of. My daughter and her friends had an amazing time, and the memories we made that day will last a lifetime. I highly recommend their services for any special occasion!`,
        username: " Emily R ",
    },
    {
        image: AboutusImageThree,
        title: "Mr & Mrs. Just Married",
        description: `Our wedding day was nothing short of magical, thanks to the incredible team behind our decor. They listened to every detail of our vision and brought it to life in the most breathtaking way. From the floral arrangements to the reception setup, everything was perfect. Our guests couldn't stop raving about how beautiful everything looked. We can't thank them enough for making our day unforgettable!`,
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
    );
}

export default TestimonialSection;
