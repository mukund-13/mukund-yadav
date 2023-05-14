import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TbBrandLinkedin} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yp81mep', 'template_rs12cyp', form.current, 'uDqhjINe1hX0wS5d4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mukundy8@gmail.com</h5>
            <a href="mailto:mukundy8@gmail.com" target="_blank">Send An Email</a>
          </article>

          <article className="contact__option">
            <TbBrandLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Mukund Yadav</h5>
            <a href="https://www.linkedin.com/in/mukund-yadav-3b2038202/" target="_blank">Message Me On LinkedIn</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact