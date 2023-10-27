import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './Contact.css';

function Contact() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Navbar />
      <div className='container-content'>
        <div style={{ backgroundImage: 'url("client/src/assets/contact.jpg")' }}>
          <h1 className='heading-contact'>Contact Us</h1>
          <div className='contact-deatils'>
            <div className='contactInfo'>
              <div className='box-one'>
                <h4><i class="fas fa-location"></i>Address</h4>
                <p>New Delhi 110013</p>
              </div>
              <div className='box-one'>
                <h4><i className='fa fa-phone'></i>Phone</h4>
                <p>011 41827498</p>
              </div>
              <div className='box-one'>
                <h4><i class="fa fa-envelope"></i>Email</h4>
                <p>alisbahhina@gmail.com</p>
              </div>
            </div>
            <div className='feedInfo'>
              <div className='box-two'>
                <h4>Send Feedback/Message</h4>
                <br />
                <input className='feed' placeholder='Full Name' />
                <br />
                <input className='feed' placeholder='Email' />
                <br />
                <input className='info' placeholder='Type your message' />
                <br />
                <button className='send'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
export default Contact;
