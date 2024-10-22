import React from 'react';
import StarsIcon from '../assets/StarsIcon.png';
import AboutUsIconOne from '../assets/AboutUsIconOne.png';
import AboutUsIconTwo from '../assets/AboutUsIconTwo.png';
import AboutUsIconThree from '../assets/AboutUsIconThree.png';
import AboutUsImageOne from '../assets/AboutUsImageOne.png';
import AboutUsImageTwo from '../assets/AboutUsImageTwo.png';
import AboutUsImageThree from '../assets/AboutUsImageThree.png';
import { motion } from 'framer-motion';
import useInView from './useInView'; // Import your custom hook

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
  const { ref: titleRef, isInView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: descriptionRef, isInView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='about-section'>
      <motion.div
        className='aboutus-title'
        ref={titleRef}
        initial='hidden'
        animate={titleInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <img src={StarsIcon} alt='starsicon' width={20} height={20} />
        <div>About Us</div>
      </motion.div>
      <motion.h4
        className='aboutus-description w-sm-75'
        ref={descriptionRef}
        initial='hidden'
        animate={descriptionInView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
      >
        In the ever-evolving landscape of Dubai’s real estate market, Housing Quest stands as a beacon of innovation, trust, and excellence—crafting a journey where finding a home becomes an unparalleled experience
      </motion.h4>
      <div className='row my-3' style={{overflow:"hidden"}}>
        {aboutUsData.map((item, index) => (
          <motion.div
            className='col-md-4 my-3'
            key={index}
            initial='hidden'
            animate={titleInView || descriptionInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
