import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './Menu.css';

document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))


function change(n) {
  let panels = document.querySelectorAll('main div')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')
}

function Menu() {
  return (
    <div>
      <Navbar />
      <div className="nav-hotel">
        <div className="hotel"><a className="tag" href="#Aslamchicken">Aslam chicken</a></div>
        <div className="hotel"><a className="tag" href="#Bukhara">Bukhara</a></div>
        <div className="hotel"><a className="tag" href="#Gulati">Gulati</a></div>
        <div className="hotel"><a className="tag" href="#Karim">Karim</a></div>
        <div className="hotel"><a className="tag" href="#Rajinderdadhaba">Rajinder Da Dhaba</a></div>
        <div className="hotel"><a className="tag" href="#Sagarratna">Sagar Ratna</a></div>
        <div className="hotel"><a className="tag" href="#Sandoz">Sandoz</a></div>
        <div className="hotel"><a className="tag" href="#Varq">Varq</a></div>
      </div>
      <section id='Aslamchicken' className='main'>
        <div className="container-menu">
          <div className='inside-container'>
          <div className='main-main-menu'>
              <h1 className='menu-head'>TANDOORI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN KABAB FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHIKEN KABAB HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH QUARTER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA HALF</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹410/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹400/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹200/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DESSERTS & BEVERAGES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> WATER BOTTLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KULAD KHEER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹20/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹60/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>ASLAM SPECIAL DAHI BUTTER GRAVY</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN QUARTER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN KABAB FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHIKEN KABAB HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH QUARTER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER HALF</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> EXTRA GRAVY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹550/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹280/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹730/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹400/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹50/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className='inside-container'>
            <div className='main-main-menu'>
              <h1 className='menu-head'>BREAKFAST COMBO</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> 8 RICE IDLI + 8 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> 4 RICE IDLI + 4 MEDU VADA + 2 MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> 4 RICE IDLI + 4 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> 2 RICE IDLI + 2 MEDU VADA + 1 MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹749/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹749/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹429/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹429/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>MEAL COMBO</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MASALA DOSA COMBO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA MASALA DOSA COMBO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>THALI</h1>
              <h1 className='menu-head'>SOUTH INDIAN THALI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAGAR SPECIAL THALI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹335/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>NORTH INDIAN THALI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> EXECUTIVE THALI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DELUXE THALI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹355/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VADAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MEDU VADA (FOUR PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAL VADA (4 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAHI VADA SINGLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAHI VADA(TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RASAM VADA (4 PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> IDLIS (2 PCS) + VADA (1 PC)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> IDLI (1 PC) + VADA (2 PCS)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹195/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>IDLIS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RICE IDLI (TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MADRAS IDLI FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MINI IDLIS DIPPED IN SAMBHAR (TWELVE PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> IDLI CHAAT - SMALL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹160/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹120/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DOSAS</h1>
              <h1 className='menu-head'>PLAIN DOSAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PAPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MYSORE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GHEE ROAST PLAIN DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>MASALA DOSAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo">  PAPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GHEE ROAST MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>RAVA DOSAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA VEGETABLE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA COCONUT PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA COCONUT MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA VEGETABLE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA MYSORE ONION MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹280/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SOUTHERN SPECIALS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PODI GHEE ROAST PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHETTINAD PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GHEE ROAST GARLIC PEPPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PODI GHEE ROAST MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHETTINAD MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GHEE ROAST GARLIC PEPPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHETTINAD PANEER DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>FUSION DOSAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPRING ROLL DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HOT GARLIC DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAGAR SPECIAL PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA ONION PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEGETABLE CHEESE DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹280/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHINESE</h1>
              <h1 className='menu-head'>CHINESE SOUP</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SWEET CORN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HOT AND SOUR SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG MANCHOW SOUP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHINESE STARTERS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HONEY CHILLI POTATOES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CRISPY VEG SALT & PEPPER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GOBHI MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER MANCHURIAN DRY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHINESE MAIN COURSE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GOBHI MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER MANCHURIAN -- GRAVY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>NOODLES & RICE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG SINGAPORE CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GARLIC GINGER CHILLI CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG HAKKA NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG SCHEZWAN FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG SINGAPORE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG SCHEZWAN NOODLES</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>STARTERS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> APLAM (SOUTH INDIAN PAPAD)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RASAM (SMALL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RASAM (FULL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> UPMA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹145/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹155/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>UTTAPAM</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PLAIN UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TOMATO UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> COCONUT UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TOMATO ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIXED VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TOMATO COCONUT UTTAPAM</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SOUTH INDIAN RICE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEMON RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CURD RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> POORI BHAJI WITH KURMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEGETABLE BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAMBHAR RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RASAM RICE</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹225/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>NORTH INDIAN</h1>
              <h1 className='menu-head'>SOUPS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIXED VEGETABLE SOUP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹205/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SHURUAAT</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEGETABLE PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ASSORTED PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER PAKORA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HARA BHARA KEBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ACHARI PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAWA CHANA KEBAB (WITH CURD DIP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI PINEAPPLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SOYA MALAI TIKKA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹345/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>PLATTER</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI PLATTER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹425/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>MAIN COURSE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAGAR SPECIAL YELLOW DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BHINDI DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIXED VEGETABLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> JEERA ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GOBHI MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ALOO GOBHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTER MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTER MALAI METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADHAI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER LABABDAR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PINDI CHANA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADHAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER MASALA CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> METHI PANEER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹385/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SANGI SAATHI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CGREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIXED RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PINEAPPLE RAITA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹145/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹185/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>TANDOOR SE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PUDINA PARATHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LACHHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MISSI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> Onion Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> Aloo Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEHSUNI MIRCHI PARANTHA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹45/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹55/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹100/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹105/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹90/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹90/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹100/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹95/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>RICE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> STEAMED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEGETABLE PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KASHMIRI PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PEAS PULAO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹185/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹255/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DESSERTS & BEVERAGES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SWEET LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SALTED LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GULAB JAMUN (TWO PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA KESARI - SMALL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAVA KESARI - FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GULAB JAMUN - SINGLE </label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹125/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹125/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹135/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹135/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹70/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Sandoz' className='main'>
        <div className="container-menu">
          <div className='inside-container'>
            <div className='main-main-menu'>
              <h1 className='menu-head'>SOUPS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HOT AND SOUR(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TALUMEIN(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SWEET CORN SOUP (VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEMON CORIANDER SOUP(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MANCHOW SOUP(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN CLEAR SOUP(VEG/NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEG STARTERS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MALAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ACHARI CHAAP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>ROLLS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN MALAI TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ACHARI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MALAI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA ROLL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>MUTTON MAIN COURSE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KEEMA MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ROGAN JOSH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HANDI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KEEMA CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KARACHI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MEAT SAAGWALA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEG STARTERS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MALAI CHAAP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEG MAIN COURSE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPL. DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> YELLOW DAL(ARHAR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPL. PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KARAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAWA CHAAP MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER MUSHROOM BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTER PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANEER BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIX VEGETABLE</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹360/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹330/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>RICE & BIRYANI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PLAIN RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DUM CHICKEN BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DUM MUTTON BIRYANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹140/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹280/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SALADS AND SIDES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CREAM SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GREEN SALAD + BOONDI RAITA(COMBO)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RAITA BOONDI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CURD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PAPAD</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹50/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹50/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHINESE(NON-VEG)</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLY CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN MANCHURIAN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEMON CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN IN HOT GARLIC SAUCE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SWEEET AND SOUR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GARLIC CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HONEY PAPPER CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLI CORIANDER CHICKEN</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹380/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHINESE(VEG)</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FRENCH FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CRISPY VEG.</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HONEY CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLI MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. MANCHURIAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CRISPY CORN</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>NON-VEG STARTERS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BHATTI CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BHATTI CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AFGHANI CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AFGHANI CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RESHMI KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BHATTI CHICKEN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN MALAI TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SEEKH KEBABA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹540/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹540/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹520/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹320/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>FISH</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEMON FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLI FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH MALAI TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FISH FRY AMRITSARI(PER PLATE)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹430/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>CHICKEN MAIN COURSE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BONELESS BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BONELESS BUTTER CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BONELESS BUTTER CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPL. BUBTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPL. BUBTTER CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SPL. BUBTTER CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUGHLAI BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUGHLAI BUTTER CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUGHLAI BUTTER CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HANDI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HANDI CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> HANDI CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SHAHI QORMA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SHAHI QORMA(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SHAHI QORMA(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADHAI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADHAI CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADHAI CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAWA CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAWA CHICKEN(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAWA CHICKEN(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN KALI MIRCH(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN KALI MIRCH(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN KALI MIRCH(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON SEEKH KEBAB(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON SEEKH KEBAB(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUTTON SEEKH KEBAB(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN CURRY(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN CURRY(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN CURRY(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN TIKKA MASALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN TIKKA MASALA(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN TIKKA MASALA(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SAAGWALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SAAGWALA(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN SAAGWALA(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MURG MUSALLAM(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MURG MUSALLAM(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MURG MUSALLAM(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> EGG CURRY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹360/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹500/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹500/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹220/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>BREADS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> RUMALI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LACHCHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BUTTER GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PUDINA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIRCHI PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> STUFFED PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AJWAIN PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KEEMA NAAN(WITH GRAVY)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹35/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹35/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹50/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹70/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹70/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹160/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>NOODLES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VEG. NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIX NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> EGG NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GINGER/GARLIC NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GINGER/GARLIC NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SINGAPUR STYLE NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SINGAPUR STYLE NOODLES(NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹240/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>RICE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SINGAPUR STYLE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SINGAPUR STYLE CHICKEN FRIED RICH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MIX FRIED RICE(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> EGG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GINGER/GARLIC FRIED RICE(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SCHEZWAN FRIED RICE(VEG/NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹260/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Varq' className='main'>
        <div className="container-menu">
          <div className='inside-container'>
            <div className='main-main-menu'>
              <h1 className='menu-head'>APPETIZER</h1>
              <h1 className='menu-head'>SEAFOOD, POULTRY AND MEAT</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> JASMINE AND GIN PRAWN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VARQUI CRAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CRUSTACEAN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ACHARI HALDI FISH TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MURG METHI MALAI SOUFFLÉ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN GALAWAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DHUNGAR PATTHAR KE KEBAB</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹2450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1650/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1530/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1530/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1530/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEGETARIAN</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FLOWER CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GULNAR PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CORN KE KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MUSHROOM MIRCH MALAI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GALOUTI THREE WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VARQUI KHUMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VARQ GARDEN GREEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHILLED MASALA POT</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1200/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SOUP</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHICKEN POTLI MASALA BROTH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LAMB AASH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DRUMSTICK LEAF SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KHUMB NIMBU KA RASSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹770/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹770/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>RAITA AND CURD</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ORGANIC VEGETABLE RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BASIL RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BURRANI RAITA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>BREAD SELECTION</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LEMON LEAF NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AMRITSARI KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CAMEMBERT AND TRUFFLE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GLUTEN FREE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KHAMEERI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BAJRA KI MISSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> NARANGI SHEERMAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> MANDUA ROTI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹250/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEDIC TISANE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AADHAVAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ARJUNA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ANASPHAL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>COFFEE SELECTION</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAJ ARTISIAN COFFEE BLEND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAJ FILTER COFFEE 100% ARABICA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>ENTRÉE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TIRFAL MASALA SEA BASS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DUCK CONFIT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PEPPER PRAWN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BAMBOO CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DILLI-6 CHICKEN CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GONGURA LAMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SAFEDA LAMB BIRYANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹4600/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹3600/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹2800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1920/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1920/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>VEGETARIAN</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BAIGAN KA BHARTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PANCHDHAAN KHICHADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHENNA PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> AMRITSARI WADI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BHINDI TWO WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ALOO GOBI BROCCOLI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAMATAR AUR JAITOON KE KOFTE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GUCCHI CHOLE PULAO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹1250/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>ACCOMPANIMENT</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LASOONI PALAK</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ALOO ROAST</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAL METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> LAL MOTH KI MAHARANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> PAPAD KA KHAZANA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹450/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DESSERT</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> DIFFERENT STROKES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> BADAM KA HALWA, KHURMANI KA MEETHA <br /> &nbsp;&nbsp;&nbsp;&nbsp;MILLE-FEUILE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> FLAVOURS OF YOGHURT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> ORANGE KHEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CRISPY KALAKAND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> SHAHI TUKDA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CHOICE OF SORBET</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TRIO OF INDIAN ICE CREAMS</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹750/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>TEA SELECTION</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> TAJ BLEND</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DESI CHAI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VARQUI SPECIAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> GINGER N LIME</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> CARDAMOM CREAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KESAR KI KAHANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>THE CLEANSER</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VARQUI KAPHILE GREEN TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> KADI PATTA CHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label for="Breakfast_Combo"> VAN GULAB</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label for="Breakfast_Combo">₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Menu;