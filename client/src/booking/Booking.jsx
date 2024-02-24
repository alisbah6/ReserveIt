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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160222310381395999/sagar.png?ex=65e337ba&is=65d0c2ba&hm=7118b7ad4e123a18f60e82cbd95ca927774ff3b2816ec497ef2ca8fc4716326b&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160223519368544276/1622656026615.png?ex=65e338da&is=65d0c3da&hm=69a8346a3867822b64fad1ba89f731251b2a95a68dc8a0b88617174d88756416&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160231596415258705/Aslam-Chicken-Vector-Mascot-Logo-Template-43-large-removebg-preview_2_1.png?ex=65e34060&is=65d0cb60&hm=b29a4d39704510515100b6fe04534677e06d6406ecbd2f5c1fda95431cf41248&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160232758912753676/varq_-_removebg-preview_1.png?ex=65e34175&is=65d0cc75&hm=28063f6bf20272c74ef3475928875e2aa0dcd61b623b9e0e507624a33c49a4a0&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160228827201556540/234676_1_1.png?ex=65e33dcc&is=65d0c8cc&hm=4bf2a141293723bfdd2cb525c7563305fd96d198147be9979b2336cdb102523f&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://cdn.discordapp.com/attachments/947184208491733032/1160233560347774976/1627640725_1553781524_LogoGulati-removebg-preview_1.png?ex=65e34234&is=65d0cd34&hm=a3fba80fc8a76a256bc88fa21ce94846c42347352c4881633ce4482a3f38649c&" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160225342447964233/590x375-1684554391_29aea936d59e82dae364_2_1.png?ex=65e33a8d&is=65d0c58d&hm=0ccb0f01c078f58fe79d3d4523e19d047411ac9635dcd318205dbd37f42bbe53&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160227694911442964/OSIqY9re_1.png?ex=65e33cbe&is=65d0c7be&hm=9076fef253b33407efacbbc860789c5fad81ecf977911481529357ae654e15aa&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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