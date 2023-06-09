import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tpffix5', 'template_pv800bp', form.current, 'uj2CYe81AOB2OycRL')
    e.target.reset()
  };
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container Contact__container'>
        <div className='Contact__options'>
          <article className='Contact__option'>
            <MdOutlineEmail className='Contact__option-icon'/>
            <h4>Email</h4>
            <h5>meding97@gmail.com</h5>
            <a href="mailto:meding97@gmail.com">Send a message</a>
          </article>
          <article className='Contact__option'>
            <BsLinkedin className='Contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Gustav Meding</h5>
            <a href="https://www.linkedin.com/messaging/thread/new/" target="_blank">Send a message</a>
          </article>
          <article className='Contact__option'>
            <BsWhatsapp className='Contact__option-icon'/>
            <h4>What's App</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+4560194030" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact