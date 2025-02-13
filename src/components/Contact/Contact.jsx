import React, { useRef, useState } from 'react'
import './Contact.css'
import { LuCircleArrowRight } from 'react-icons/lu'
import LeftToRightReveal from '../LeftToRightReveal'
// import TopToBottomReveal from '../TopToBottomReveal'
import VisibleReveal from '../VisibleReveal'
import emailjs from '@emailjs/browser';
const Contact = () => {
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
        <section id='contact' className="contact">

            <div className='row'>
                <div className='col-md-8'>
                    <LeftToRightReveal>
                        <div>
                            <h2 className='contact-title'>Lets Have a Quick<br /> Conversation</h2>
                        </div>
                    </LeftToRightReveal>
                </div>
                <div className='col-md-4'>

                    <div className='contact-card'>
                        Get a <br />Quote
                        <span className='contact-icon'>
                            <LuCircleArrowRight />
                        </span>
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
                <VisibleReveal>

                    <div className='row'>
                        <div className='col-md-6'>
                            <input type="text"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name" className='contact-input'
                                required />
                        </div>
                        <div className='col-md-6'>
                            <input type="text"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email" className='contact-input' required />
                        </div>
                        <div className='col-md-6'>
                            <input type="tel"
                                name='mobile'
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile No" className='contact-input' required />
                        </div>
                        <div className='col-md-6'>
                            <select placeholder="Property Type"
                                name='propertyType'
                                value={formData.propertyType}
                                onChange={handleChange}
                                required
                                className='contact-input custom-dropdown'>
                                <option value="">Select Property Type</option>
                                <option value='Off Plan'>Off Plan</option>
                                <option value='Ready To Move'>Ready To Move</option>
                                <option value='Rent'>Rent</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <textarea placeholder="Message"
                            name='description' 
                             value={formData.description}
                             onChange={handleChange}
                            className='contact-input' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <button className='contact-button' type="submit">{loading ? 'Submitting...' : `Submit Information`}<LuCircleArrowRight /> </button>
                        </div>
                        
                        {message && <div className='col-md-12 mt-3'>{message}</div>}
                    </div>
                </VisibleReveal>

            </form>
        </section>
    )
}

export default Contact