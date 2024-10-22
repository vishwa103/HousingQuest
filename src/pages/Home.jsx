import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/HeroImage.png'

import AboutusImageOne from '../assets/AboutusImageTwo.png'
import AboutusImageThree from '../assets/AboutusImageThree.png'

import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import TestimonialSection from '../components/TestimonialSection'
import ExploreSection from '../components/ExploreSection'
import LeftToRightReveal from '../components/LeftToRightReveal';
import RightToLeftReveal from '../components/RightToLeftReveal';

const images = [HeroImage, AboutusImageOne, AboutusImageThree ]; // Array of images

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash from the URL
    if (hash) {
      // Clean the hash and extract the section id
      const sectionId = hash.replace(/^#/, '').split('/')[0];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
      const fadeOutTimeout = setTimeout(() => setFadeClass('fade-out'), 9000); // Start fade out before image change
      const intervalId = setInterval(() => {
          setFadeClass('fade-out');
          setTimeout(() => {
              setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
              setFadeClass('fade-in');
          }, 1000); // Time for fade out before changing image
      }, 10000); // Change image every 10 seconds

      return () => {
          clearInterval(intervalId);
          clearTimeout(fadeOutTimeout);
      };
  }, []);

  const variants = {
    hidden: { x: '100%', opacity: 0 }, // Start off-screen to the right
    visible: { x: 0, opacity: 1 },     // End at its original position
  };

  return (
    <div style={{marginTop:"-65px"}}>
     <section id='home' className='hero-section'>
            <div className='discover-image-container'>
                <img src={images[currentIndex]} className={`hero-image ${fadeClass}`} alt='hero-image' />
                
                <div className="hero-content">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience Dubai’s Finest Properties
        <br />
        A New Standard of Luxury Living
      </motion.h1>

      <motion.div
        className="hero-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Luxury living with breathtaking views and prime locations.
      </motion.div>
    </div>
    <div className="hero-button-container">
    <motion.div
      
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }} // Adjust duration as needed
    >
      {/* Uncomment and use this button if needed */}
      {/* <button className='hero-button'>
        Download Catalog <GoDownload size={20} />
      </button> */}

      <button className="hero-explore-button">
        <img src={images[currentIndex]} className="explore-button-image" alt="explore-button" />
        <div className="pe-2">
          Explore All
          <br />
          Our Properties
        </div>
      </button>
    </motion.div>
    </div>
                
            </div>
        </section>
        <section id='about'>
     <AboutSection/>
     </section>
     <section id='property'>
     <ExploreSection/>
     </section>
     <section id='about'>
     <TestimonialSection/>
     </section>
     <section id='contact'>
     <ContactSection/>
     </section>
      

    </div>
  )
}

export default Home