import React from 'react'
import './Home.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import AboutImage from '../../assets/aboutImage.png'
import Profile1 from '../../assets/profiles/profile1.png'
import Profile2 from '../../assets/profiles/profile2.png'
import Profile3 from '../../assets/profiles/profile3.png'
import Profile4 from '../../assets/profiles/profile4.png'

import LocationIcon from '../../assets/icons/locationIcon.png'
import TaxIcon from '../../assets/icons/taxIcon.png'
import RentalIcon from '../../assets/icons/rentalIcon.png'

import PropertyImage1 from '../../assets/property/PropertyImage1.png'
import PropertyImage2 from '../../assets/property/PropertyImage2.png'
import PropertyImage3 from '../../assets/property/PropertyImage3.png'

import MapImage from '../../assets/mapImage.png'
import OfficeImage from '../../assets/OfficeImage.png'

import { LuCircleArrowRight } from 'react-icons/lu'
import PropertyBuyingRounded from '../../assets/about/RoundedImage1.png'
import PropertySellingRounded from '../../assets/about/RoundedImage2.png'
import LeasingServicesRounded from '../../assets/about/RoundedImage3.png'
import { GoDotFill } from 'react-icons/go'
import Assistance from '../../components/Assistance/Assistance'
import Testimonial from '../../components/Testimonial/Testimonial'
import Contact from '../../components/Contact/Contact'
import TopToBottomReveal from '../../components/TopToBottomReveal'
import LeftToRightReveal from '../../components/LeftToRightReveal'
import VisibleReveal from '../../components/VisibleReveal'
import CardStack from '../../components/Slider/Slider'


const Home = () => {
  // const colors = ["#ff5733", "#33c4ff", "#28a745", "#ffc107", "#6f42c1"];

  return (
    <section className='home' id='home'>
      <HeroSection />
      <section id='about' className='about-section'>
        <div>
          <div>
            <div className='about-image-container' >
              <TopToBottomReveal>
                <img src={AboutImage} alt='About Image' className='about-image' width="100%" height="100%" />
                <div className='about-image-content'>
                  <div className='d-flex justify-content-between align-items-end'>
                    <h4 className='about-image-title'>Find Your Dream</h4>
                    <div className='about-image-card'>
                      <img src={Profile1} alt='Profile Image' className='about-image-profile' width="45px" height="45px" />
                      Get Our <br /> Consultation
                    </div>
                  </div>
                </div>
              </TopToBottomReveal>
            </div>
          </div>
        </div>
        <div className='my-4'>
          <TopToBottomReveal>
            <div>
              <h2 className='about-title'>About <span style={{ color: "var(--primary-color)" }}>Housing Quest</span></h2>
              <p className='about-description'>With over 25 years of experience, Housing Quest has been at the forefront of Dubai's luxury real estate sector. We specialize in connecting discerning buyers with the city’s most iconic properties, offering unparalleled expertise in property management, buying, selling, and leasing high-end properties.</p>
            </div>
          </TopToBottomReveal>

          <LeftToRightReveal>
            <div>
              <div className='d-flex gap-3 align-items-center mt-4'>
                <div className='about-profile-images'>
                  <img src={Profile1} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={Profile2} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={Profile3} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={Profile4} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                </div>
                <div className='about-profile-content'>
                  Meet Our <br /> Professional Team
                </div>
              </div>
            </div>
          </LeftToRightReveal>

          <div className='row mt-5'>
            <div className='col-md-4'>
              <TopToBottomReveal>
                <div className='about-card'>
                  <h4 className='about-card-title'>25+</h4>
                  <p className='about-card-description'>Years of<br /> Experience</p>
                </div>
              </TopToBottomReveal>

            </div>
            <div className='col-md-4'>
              <TopToBottomReveal>
                <div className='about-card'>
                  <h4 className='about-card-title'>84%</h4>
                  <p className='about-card-description'>Customer<br />
                    Satisfaction Rate</p>
                </div>
              </TopToBottomReveal>

            </div>
            <div className='col-md-4'>
              <TopToBottomReveal>
                <div className='about-card'>
                  <h4 className='about-card-title'>324</h4>
                  <p className='about-card-description'>Exquisite Properties<br />
                    Ready for your </p>
                </div>
              </TopToBottomReveal>
            </div>
          </div>
          <section id='service' className='about-container mt-5'>
            <div className='row' >
              <div className='col-md-6 mb-3' >
                <div className='d-flex flex-column h-100 justify-content-between '>
                  <TopToBottomReveal>
                    <h2 className='about-title-two'>Tailored Solutions<br />
                      for your Real Estate<br />
                      Needs
                    </h2>
                  </TopToBottomReveal>
                  <LeftToRightReveal>
                    <button className='about-button'>Explore More <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight size={24} /></span></button>
                  </LeftToRightReveal>
                </div>
              </div>
              <div className='col-md-6' >
                <div className='d-flex flex-column gap-3'>
                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={PropertyBuyingRounded} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Property Buying</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)", margin: "0" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>

                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={PropertySellingRounded} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Property Selling</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>

                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={LeasingServicesRounded} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Leasing Services</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id='property' className='explore-section'>
        <VisibleReveal>
          <h2 className='explore-title'>Explore Our <span style={{ color: "var(--primary-color)" }}>Property</span> Portfolio</h2>
        </VisibleReveal>

        <CardStack
          // colors={colors}
          // cardWidth="90vw"
          // cardHeight="90vh"
          // cardOffset={12}
          // scaleFactor={0.08}
        />
        {/* <LeftToRightReveal> */}
        <h6 className='explore-subtitle'><span style={{ color: "var(--primary-color)" }}><GoDotFill size={24} /></span>Explore Our Advantages</h6>
        <h2 className='explore-title-two'>Why Dubai Stands Unrivalled?</h2>
        {/* </LeftToRightReveal> */}

        <div className='my-5'>
          <VisibleReveal>
            <div className='explore-image-container' >
              <img src={PropertyImage1} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={LocationIcon} alt='LocationIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>Strategic Location</h5>
                  <p className='explore-image-description'>Positioned as a global business hub between Europe, Asia, and Africa, Dubai benefits from high demand for property from international investors and expatriates.</p>
                </div>
              </div>
            </div>
          </VisibleReveal>
          <VisibleReveal>

            <div className='explore-image-container' >
              <img src={PropertyImage2} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={RentalIcon} alt='RentalIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>High Rental Yields</h5>
                  <p className='explore-image-description'>
                    Dubai consistently offers one of the highest rental yields in the world, ranging between 5% to 9%, making it an attractive option for property investors.
                  </p>
                </div>
              </div>
            </div>
          </VisibleReveal>
          <VisibleReveal>

            <div className='explore-image-container' >
              <img src={PropertyImage3} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={TaxIcon} alt='TaxIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>Tax-Free Income</h5>
                  <p className='explore-image-description'>
                    Dubai’s year-round offers zero property tax and no capital gains tax, allowing investors to maximize returns on real estate investments.
                  </p>
                </div>
              </div>
            </div>
          </VisibleReveal>

        </div>
      </section>

      <Assistance />

      <Testimonial />

      <section id='map' className='map'>
        <VisibleReveal>
          <div className='map-image-container'>
            <img src={MapImage} alt='Map Image' className='map-image' width="100%" height="100%" />
            <div className='map-content'>
              <div className='d-sm-flex gap-5 justify-content-between'>
                <div>
                  <LeftToRightReveal>
                    <div className='d-flex flex-column'>
                      <h2 className='map-title'>Give Us a Visit</h2>
                      <p className='map-address'><img src={LocationIcon} alt='LocationIcon' width={20} height={20} /> 814, Burlington Towers, Business Bay,<br /> Dubai UAE</p>
                      <p className='map-address'>info@hqrealestates.com</p>
                      <p className='map-address'>+971 544040799</p>
                      <p className='map-address'>+971 563600699</p>
                      <p className='map-address'>044-580777</p>
                    </div>
                  </LeftToRightReveal>
                </div>
                <LeftToRightReveal>
                  <div className='d-flex flex-column justify-content-end align-items-end'>
                    <div className='office-image-container'>
                      <img src={OfficeImage} alt='Office Image' className='office-image' width="100%" height="100%" />
                    </div>
                  </div>
                </LeftToRightReveal>
              </div>
            </div>
          </div>
        </VisibleReveal>
      </section>

      <Contact />
    </section>
  )
}

export default Home