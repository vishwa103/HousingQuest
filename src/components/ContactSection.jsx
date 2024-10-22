import React, { useRef, useState } from 'react';
import ContactImage from '../assets/ContactImage.png';
import VisibleReveal from './VisibleReveal';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        propertyType: '',
        description: '',
    });

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Prepare the data to match your template
        const templateParams = {
            to_name: 'Housing Quest Realestates', // Replace with the actual recipient's name or a variable
            from_name: formData.name,
            message: `
                Email: ${formData.email}
                Mobile: ${formData.mobile}
                Property Type: ${formData.propertyType}
                Description: ${formData.description}
            `,
        };

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setMessage('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                mobile: '',
                propertyType: '',
                description: '',
            });
        })
        .catch((err) => {
            console.error('FAILED...', err);
            setMessage('Failed to send your message. Please try again later.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <VisibleReveal>
            <div className='contact-section'>
                <h1 className='contact-title'>Connect With Us</h1>
                <div className='contact-container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='image-container'>
                                <img src={ContactImage} className='contact-image' alt='contact-image' width="100%" />
                            </div>
                        </div>
                        <div className='col-md-6 my-3'>
                            <h3 className='contact-card-title'>Reach out to our team</h3>
                            <p className='contact-card-description'>We are here to answer all your queries, leave us a message.</p>
                            <div className='divider'>
                                <span className='black-line'></span>
                            </div>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='d-flex flex-column mb-3'>
                                            <label className='contact-label'>Name</label>
                                            <input
                                                type='text'
                                                name='name'
                                                className='contact-input'
                                                placeholder='Name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex flex-column mb-3'>
                                            <label className='contact-label'>Email</label>
                                            <input
                                                type='email'
                                                name='email'
                                                className='contact-input'
                                                placeholder='example@gmail.com'
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex flex-column mb-3'>
                                            <label className='contact-label'>Mobile No</label>
                                            <input
                                                type='tel'
                                                name='mobile'
                                                className='contact-input'
                                                placeholder='+971'
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='d-flex flex-column mb-3'>
                                            <label className='contact-label'>Property Type</label>
                                            <select
                                                name='propertyType'
                                                className='contact-input'
                                                value={formData.propertyType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value=''>-- SELECT --</option>
                                                <option value='Off Plan'>Off Plan</option>
                                                <option value='Ready To Move'>Ready To Move</option>
                                                <option value='Rent'>Rent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className='d-flex flex-column mb-3'>
                                            <label className='contact-label'>Description</label>
                                            <textarea
                                                rows={7}
                                                name='description'
                                                className='contact-input'
                                                placeholder='Enter your message'
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <button type='submit' className='contact-button' disabled={loading}>
                                            {loading ? 'Submitting...' : 'Submit Information'}
                                        </button>
                                    </div>
                                    {message && <div className='col-md-12 mt-3'>{message}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </VisibleReveal>
    );
};

export default ContactSection;
