import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Sagar } from './Restraunts';
import './Hotelpage.css';

function Hotelpage() {
  return (
    <div>
        <Navbar/>
        <br></br>
        {Sagar.map((item,index)=>
        {
          return(
            <div className='container'key={index}>
            <div className="branch-container">
              <div className='branch'>
                <p>Branches</p>
              <ul>
                <li>{item.b1}</li>
                <li>{item.b2}</li>
                <li>{item.b3}</li>
                <li>{item.b4}</li>
                <li>{item.b5}</li>
              </ul>
              </div>
            </div>
            <div className="details-container">
            </div>
        </div>
          )
        })}
        <Footer/>
    </div>
  );
}
export default Hotelpage;