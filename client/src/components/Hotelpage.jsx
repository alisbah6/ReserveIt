import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Restrauts } from './Restraunts';
import './Hotelpage.css';

function Hotelpage() {
  return (
    <div>
        <Navbar/>
        <br></br>
        {Restrauts.map((item,index)=>
        {
          return(
            <p key={index}>{item.name}</p>
          )
        })}
        <Footer/>
    </div>
  );
}
export default Hotelpage;