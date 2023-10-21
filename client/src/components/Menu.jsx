import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Menu.css';

function Menu() {
  return (
    <div>
      <Navbar />
      <h1>Menu</h1>
      <div className='menu-container'>
        <h3>Sagar Ratna</h3>
        <div className='menu-content'>
        <ul>
          <li>Starters</li>
          <li>Idlis</li>
          <li>Vadas</li>
          <li>Snacks</li>
          <li>Dosas</li>
          <li>Uttapams</li>
          <li>North Indian</li>
          <li>Beverages</li>
          <li>Deserts</li>
        </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Menu;