import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Menu.css';

function Menu() {
  return (
    <body>
      <Navbar />
      <div className="nav-hotel">
            <div className="hotel"><a className="tag" href="#Aslamchicken">Aslam chicken</a></div>
            <div className="hotel"><a className="tag" href="#Bukhara">Bukhara</a></div>
            <div className="hotel"><a className="tag" href="#Gulati">Gulati</a></div>
            <div className="hotel"><a className="tag" href="#Karim">Karim</a></div>
            <div className="hotel"><a className="tag" href="#Rajinderdadhaba">Rajinder Da Dhaba</a></div>
            <div className="hotel"><a className="tag" href="#Sagarratna">Sagar Ratna</a></div>
            <div className="hotel"><a className="tag" href="#Sandoz">Sandoz</a></div>
            <div className="hotel"><a className="tag" href="#Varq ">Varq</a></div>
        </div>
      <section id='Aslamchicken' className='main'>
      <div className="container-menu-top">
            
          </div>  
      </section>
      <section id='Bukhara' className='main'>
      <div className="container-menu">
            
            </div>  
      </section>
      <section id='Gulati' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <section id='Karim' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <section id='Rajinderdadhaba' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <section id='Sagarratna' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <section id='Sandoz' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <section id='Varq' className='main'>
        <div className="container-menu">
            
          </div>  
      </section>
      <Footer />
    </body>
  )
}

export default Menu;