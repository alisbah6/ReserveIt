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
        <div className="hotel"><a className="tag" href="#Varq ">Varq</a></div>
      </div>
      <section id='Aslamchicken' className='main'>
        <div className="container-menu">
          
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
            </div>
            <div className='main-main-menu'>
            <h1 className='menu-head'>MEAL COMBO</h1>
              <div className='main-menu-1'>
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
              <div className='main-menu-2'>
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
              <div className='main-menu-3'>
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
            </div>
          </div>

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
    </div>
  )
}

export default Menu;