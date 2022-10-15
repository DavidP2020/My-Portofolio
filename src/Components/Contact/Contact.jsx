import React, { useRef } from 'react';
import './Contact.css'
import Line from '@iconscout/react-unicons/icons/uil-line'
import Envelope from '@iconscout/react-unicons/icons/uil-envelope-check'
import Message from '@iconscout/react-unicons/icons/uil-message'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_fodp50v","template_6ul6myh", form.current, 'NFCEzby3URCiecst8')
      .then((result) => {
          alert("Success Send Messages")
      }, (error) => {
          alert(error.text);
      });
      e.target.reset()
  };
  return (
    <section className='contact section' id="Contact">
      <h2 className='section-title'>Contact Me</h2>
      <span className='section-subtitle'>Find me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk To Me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className='contact-icon'><Envelope /></i>

              <h3 className="contact-card">Email</h3>
              <span className="contact-card-data">david11pangestu@gmail.com</span>
            </div>
            <div className="contact-card">
              <i className='contact-icon'><Line /></i>

              <h3 className="contact-card">Line</h3>
              <span className="contact-card-data">davidpangestu16</span>
            </div>

          </div>
        </div>

        <div className="contact-content-wrapper">
          <h3 className="contact-title">Send Email For Me</h3>
          <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className='contact-form-wrapper'>
              <div className="contact-form-div">
                <label className="contact-form-tag">Email</label>
                <input className='contact-form-input' type="text" name='email' id='email' placeholder='Input Your Email' />
              </div>

              <div className="contact-form-div">
                <label className="contact-form-tag">Subject</label>
                <input className='contact-form-input' type="text" name='subject' id='subject' placeholder='Input Subject' />
              </div>

              <div className="contact-form-div">
                <label className="contact-form-tag">Name</label>
                <input className='contact-form-input' type="text" name='name' id='email' placeholder='Input Your Name' />
              </div>

              <div className="contact-form-div">
                <label className="contact-form-tag">Text</label>
                <textarea className='contact-form-input contact-form-area' cols="30" row="40" name='message' id='message' placeholder='Input Message'></textarea>
              </div>
            </div>
            <div>
              <button className='contact-button button button--flex'  >Send <Message/></button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact