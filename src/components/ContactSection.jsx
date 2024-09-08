import React from 'react'
import ContactImage from '../assets/ContactImage.png'


const ContactSection = () => {
    return (
        <div className='contact-section'>
            <h1 className='contact-title'>Connect With Us</h1>
            <div className='contact-container'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <div className='image-container'>
                            <img src={ContactImage} className='contact-image' alt='contact-image' width="100%" />

                        </div>
                    </div>
                    <div className='col-md-6 my-3'>
                        <h3 className='contact-card-title'>Reach out to our team</h3>
                        <p className='contact-card-description'>We are here to answer all your queries and need, leave us a message.</p>
                            <div className='divider'>
                                <span className='black-line'></span>
                            </div>
                        <form>
                            <div className='row'>
                                <div className='col-md-6 '>
                                    <div className='d-flex flex-column mb-3'>
                                    <label className='contact-label'>Name</label>
                                    <input type='text' className='contact-input' placeholder='Name' />
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='d-flex flex-column mb-3'>
                                    <label className='contact-label'>Email</label>
                                    <input type='text' className='contact-input' placeholder='example@gmail.com' />
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='d-flex flex-column mb-3'>
                                    <label className='contact-label'>Mobile No</label>
                                    <input type='number' className='contact-input' placeholder='+971' />
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='d-flex flex-column mb-3'>
                                    <label className='contact-label'>Property Type</label>
                                    <select type='text' className='contact-input'>
                                    <option value='sale'>-- SELECT --</option>
                                        <option value='sale'>Sale</option>
                                        <option value='rent'>Rent</option>
                                    </select>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='d-flex flex-column mb-3'>
                                    <label className='contact-label'>Description</label>
                                    
                                    <textarea rows={7} className='contact-input' placeholder='Enter your message' />
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <button className='contact-button'>Submit Information</button>
                                </div>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ContactSection