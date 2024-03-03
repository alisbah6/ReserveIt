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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160222310381395999/sagar.png?ex=65f5acba&is=65e337ba&hm=bf2edc03dd63e0e7b19d4f3b5769742851f93edf784f3a323198360e466c9452&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160223519368544276/1622656026615.png?ex=65f5adda&is=65e338da&hm=fb7b94c58219e8892c4aed9498c4dfa038f89c86250f8a8fa4810c72760519b9&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160231596415258705/Aslam-Chicken-Vector-Mascot-Logo-Template-43-large-removebg-preview_2_1.png?ex=65f5b560&is=65e34060&hm=8fcefaea01fe9cfa241bd236c3758cca2023c0a3a065fd3f72726207b51a2a28&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160232758912753676/varq_-_removebg-preview_1.png?ex=65f5b675&is=65e34175&hm=a16ebef32a7c04dd55049a951f8e5b2388ed68ab28edd5590c28b664cf15921c&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160228827201556540/234676_1_1.png?ex=65f5b2cc&is=65e33dcc&hm=83677664c34679d801eeec8577e7902b4f44a8b9940210008fb0f1083a242005&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160233560347774976/1627640725_1553781524_LogoGulati-removebg-preview_1.png?ex=65f5b734&is=65e34234&hm=1538b81c39b807f1478085a664d75e55da1900aebdb387a135f61ebcee2642b9&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160225342447964233/590x375-1684554391_29aea936d59e82dae364_2_1.png?ex=65f5af8d&is=65e33a8d&hm=c813111cca09c154864ed784d528b873676f016c1a1c6334ecd1bbba3adbe45c&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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
            <div><img src="https://media.discordapp.net/attachments/947184208491733032/1160227694911442964/OSIqY9re_1.png?ex=65f5b1be&is=65e33cbe&hm=00ce93bf768fbe1244b571bf05a9b93442278b588723fd00a8f9570ec3e4e901&=&format=webp&quality=lossless&width=460&height=684" alt="" class="poster" /></div>
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