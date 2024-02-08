import React from 'react'
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
import './Booking.css';
import {Link} from 'react-router-dom';
function Booking() {
  return (
    <div>
      <Navbar />
      <p className='heading'>Restraunts Booking</p>
      <div class="hotel-container">
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160222310381395999/sagar.png?ex=6533e03a&is=65216b3a&hm=3f321ee55bf0bc0b059d3e8629acf20f8cb29ec88292444efcb4384e8c4473c0&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Sagar Ratna</h4>
              <p class="booking__hotel-details">
                Most preferred destination for South Indian cuisines across the country
              </p>
              <Link to="/SagarRatna/1/DefenceColony"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160223519368544276/1622656026615.png?ex=6533e15a&is=65216c5a&hm=de1330987a33cf4238532225039f98412aefa7cbddc39a7414f376986714b322&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Sandoz</h4>
              <p class="booking__hotel-details">
                Sandoz Cafe, is a culinary haven offering a delightful fusion of Indian and Mughlai cuisines
              </p>
              <Link to="/Sandoz/2/ConnaughtPlace"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160231596415258705/Aslam-Chicken-Vector-Mascot-Logo-Template-43-large-removebg-preview_2_1.png?ex=6533e8e0&is=652173e0&hm=764f2ba49837f4e6822d9ee16b5c940c457bc81f803d6aa2cd1adf9f1848e042&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Aslam Chicken</h4>
              <p class="booking__hotel-details">
                This place is a hidden gem that makes the best Mughlai and Biryani dishes. The dishes are really spicy and full of butter.
              </p>
              <Link to="/AslamChicken/6/ChandniChowk"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160232758912753676/varq_-_removebg-preview_1.png?ex=6533e9f5&is=652174f5&hm=e10a2c40fd1665692b4524e160dcd0dccf237d9e344c593f6c8ffc3987eb0fbc&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Varq</h4>
              <p class="booking__hotel-details">
                Varq is one the most cherished outlets for Indian fine dining in the capital.
              </p>
              <Link to="/Varq/7/TajMahal"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="hotel-container">
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160228827201556540/234676_1_1.png?ex=6533e64c&is=6521714c&hm=6d4b52e6bba1d244a1f4acca410dba70c42d4e4b9e3801fd84cab04771814298&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Karim's</h4>
              <p class="booking__hotel-details">
                Busting Mughlai joint popular during Ramadan, with wide-ranging non-veg options & no-frills seating.
              </p>
              <Link to="/Karim/5/GreenPark"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160233560347774976/1627640725_1553781524_LogoGulati-removebg-preview_1.png?ex=6533eab4&is=652175b4&hm=82a282af7be85fd4e0f8d2442f8a60debea7956eccd6f42727fce54a4c454d47&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Gulati</h4>
              <p class="booking__hotel-details">
              Gulati has been serving 'Buffet Lunch' since early 2000.Buffet changes every day and offers a new experience to the taste buds on a daily basis 
              </p>
              <Link to="/Gulati/8/Pandara"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160225342447964233/590x375-1684554391_29aea936d59e82dae364_2_1.png?ex=6533e30d&is=65216e0d&hm=b681d659a2a57c5765e028c90f8a9fa085dd518d03f3ae6245b6b10743380226&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Bukhara</h4>
              <p class="booking__hotel-details">
                Legendary place with a history of serving selected food of the north west Frontier province
              </p>
              <Link to="/Bukhara/3/ITCMaurya"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
        <div class="main-container">
          <div class="poster-container">
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160227694911442964/OSIqY9re_1.png?ex=6533e53e&is=6521703e&hm=5daf072357a3d3e798907acc8d7f6271c1cf7aa238b76e12d80c5e651aab156c&" alt="" class="poster" /></div>
          </div>
          <div class="booking-container">
            <div class="booking__content">
              <h4 class="booking__hotel-name">Rajinder Da Dhaba</h4>
              <p class="booking__hotel-details">
                Traditional dhaba cuisine gets a makeover at this modern dining venue with funky wall art.
              </p>
              <Link to="/RajinderDaDhaba/4/Safdarjung"><button class="booking__buy-btn">Book now</button></Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default Booking;