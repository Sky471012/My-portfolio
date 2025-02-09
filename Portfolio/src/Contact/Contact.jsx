import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_a4efdon', 'template_iepcu6h', form.current, {
                publicKey: '2a-_W5UIB8MNTgQpj',
            })
            .then(
                () => {
                    form.current.reset();
                    alert('Message sent successfully!');
                },
                (error) => {
                    alert(`Failed to send the message: ${error.text}`);
                },
            );
    };

    return (
        <>
            <div id="contact" className="contact">
                <hr />
                <div className='contact-container'>
                    <div className="contact-left">
                        <h1>CONTACT</h1>
                        <p><i className="fa-solid fa-envelope"></i>sharma.aakash1012@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i>8929676776</p>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/aakash-sharma-a178062a7" className="linkedin" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.github.com/Sky471012" className="github"><i className="fa-brands fa-square-github" aria-label="GitHub"></i></a>
                            <a href="https://www.instagram.com/sky_101247" className="instagram"><i className="fa-brands fa-square-instagram" aria-label="Instagram"></i></a>
                        </div>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="contact-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email Id" required />
                            <textarea cols="30" name="message" rows="6" placeholder="Your Message..." required></textarea>
                            <button type="submit" value='send'>SUBMIT</button>
                        </form>
                    </div>
                </div>

                <div className="copyright">
                    <span>© Aakash Sharma | All Rights Reserved</span>
                </div>
            </div>
        </>
    )
}

export default Contact;