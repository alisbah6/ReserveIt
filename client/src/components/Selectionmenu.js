import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './Selectionmenu.css';
// import axios from 'axios';
document.querySelectorAll('nav a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))


function change(n) {
  let panels = document.querySelectorAll('main div')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')
}


function Selectionmenu() {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const getItem = (e) => {
    const { value, checked } = e.target
    console.log(`${value} is ${checked}`);
    if (checked) {
      setItem([...item, value]);
    }
    else {
      setItem(item.filter((e) => e !== value));
    }
  }

  function finalitem() {
    // console.log(item);
    navigate('/FinalItem');
    // , { state: { item: item } }
    localStorage.setItem("item",item);
  }
  // async function finalitem(e){
  //   e.preventDefault();
  //   const response=await axios.post("http://localhost:3500/user/menu",
  //   {
  //     item
  //   })
  // }
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN KABAB (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN KEBAB (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHIKEN KABAB (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH (QUARTER)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH (QUARTER)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEERTIKKA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEERTIKKA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA (HALF)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹410/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹400/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹200/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>DESSERTS & BEVERAGES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="WATERBOTTLE" onChange={(e) => { getItem(e) }}></input>
                    <label> WATER BOTTLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KULADKHEER" onChange={(e) => { getItem(e) }}></input>
                    <label> KULAD KHEER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹20/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹60/-</label>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN(FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN  (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN(HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN(QUARTER)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN (QUARTER)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKENKABAB(FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN KABAB(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKENKABAB(HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHIKEN KABAB(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH(FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH(HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH(QUARTER)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH (QUARTER)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANNER(FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER(FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER(HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER(HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="EXTRAGRAVY" onChange={(e) => { getItem(e) }}></input>
                    <label> EXTRA GRAVY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹550/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹280/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹730/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹400/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹50/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
        </div>
      </section>
      <section id='Bukhara' className='main'>
        <div className="container-menu">

        </div>
      </section>
      <section id='Gulati' className='main'>
        <div className="container-menu">
          <div className='inside-container'>
            <div className='main-main-menu'>
              <h1 className='menu-head'>SOUPS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SHORBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN CLEAR SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HARYALI SHORBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CREAM OF TOMATO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CREAM OF MUSHROOM</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SALAD AUR DAHI KA DAUR</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PINEAPPLE RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAITA OF YOUR CHOICE<br />&nbsp;&nbsp;&nbsp;&nbsp;(MINT,BOONDI,POTATO,CUCUMBER,MIX &nbsp;&nbsp;&nbsp;&nbsp;VEG,BOORANI)</label>
                  </div>

                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN CURD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KHATTI MEETHI DAHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GREEN SALAD</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label></label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>BEVERAGES</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHAACH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LASSI<br />&nbsp;&nbsp;&nbsp;&nbsp;(MANGO,SWEET,SALTED,GULKAND,<br />&nbsp;&nbsp;&nbsp;&nbsp;PEANUT BUTTER BANANA)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AAM KA PANNA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> JALJEERA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NIMBU SHIKANJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PHALSA KI SHIKANJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FRESH LIME SODA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LEMON ICED TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PEACH ICED TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MASALA COKE/ THUMPS UP/ DIET COKE/ SPRITE </label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MOCKTAILS<br />&nbsp;&nbsp;&nbsp;&nbsp;(PAAN GULKAND MOJITO /VIRGIN MOJITO/ <br />&nbsp;&nbsp;&nbsp;&nbsp;BLUE LAGOON/ FRUIT PUNCH/<br />&nbsp;&nbsp;&nbsp;&nbsp;MASALA VIRGIN MOJITO/ TROPICAL FIZZ)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHOCOLATE OREO SHAKE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> THANDAI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <br />
                  <br />
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹199/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹199/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹199/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
        </div>
      </section>
      <section id='Karim' className='main'>
        <div className="container-menu">
          <div className='inside-container'>
            <div className='main-main-menu'>
              <h1 className='menu-head'>NAAN & ROTI</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> QEEMA NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BAQARKHANI KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ROGHNI NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RUMALI ROTI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>INDIAN BREADS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LACHHA PARATHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER ROTI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹85/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹50/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>MITHAAS</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KHEER BENAZEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GULAB JAMUN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GAJAR KA HALWA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI TUKDA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹125/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹160/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹155/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>BHARATIA PATTAL</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SUBZ-E-KHAZANA(MIX VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIX RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GREEN SALAD</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹310/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹175/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹165/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹115/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>PULAO & RICE</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH BIRYANI ANARKALI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON BIRYANI BAHISHTI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VMURGH BIRYANI ANARKALI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON BIRYANI BAHISHTI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEGETABLE PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> STEAMED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> JEERA RICE</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹545/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹510/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹735/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹235/-</label>
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
                    <label> KARIM ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FISH TIKKA ROLL(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BOTI ROTI ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAMI KEBAB ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH MALAI TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SOYA CHAAP ROLL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹410/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹365/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹235/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>KEBAB</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DIL PASAND SEEKH KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DIL PASAND SEEKH KEBAB(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BEMISAL SHAMI KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BEMISAL SHAMI KEBAB(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SEEKH KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SEEKH KEBAB(4PCS.)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹555/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹555/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>BAHAAR-E-SHORBA</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH KA SHORBA(CHICKEN SOUP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GOSHT KA SHORBA(MUTTON SOUP)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹219/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main-main-menu'>
              <h1 className='menu-head'>SHAHI DASTAR KHWAN</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AKBARI MURGH MASALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AKBARI MURGH MASALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI MURGH DOPYAZA(STEW) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI MURGH DOPYAZA(STEW) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LAZEEZ SAAG MURGH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LAZEEZ SAAG MURGH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER CHICKEN BONELESS (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER CHICKEN BONELESS (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN MUGHLAI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN MUGHLAI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN JAHANGIRI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN JAHANGIRI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN QORMA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN QORMA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN HANDI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN HANDI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TUKKHM-E-MURGH MASALA(EGG CURRY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON MUGHLAI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON MUGHLAI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FIRDAUSI QORMA(ROGHAN JODH) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FIRDAUSI QORMA(ROGHAN JODH) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DIL BAHAR DOPYAZA(STEW) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DIL BAHAR DOPYAZA(STEW) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NARGISI KOFTA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NARGISI KOFTA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NAYAB MUGHZ MASALA(BRAIN CURRY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI GOSHT (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI GOSHT (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON NIHARI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON NIHARI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SAAG WALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SAAG WALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KEEMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KEEMA KALEJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON HANDI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON HANDI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KEEMA MATAR</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹525/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹520/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹520/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹595/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹835/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹550/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹545/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹545/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹550/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹575/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹575/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹695/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹485/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹795/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹475/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹475/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹695/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹475/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>SHAN-E-TANDOOR</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI MURGH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI MURGH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI RAAN(ORDER BEFORE 24HRS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI FISH(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON BURRA(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON BURRA(8PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH BURRA(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH BURRA(8PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURGH MALAI TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER MALAI TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHAAP MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHAAP MALAI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FISH TIKKA(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARIM'S ASSORTED KEBAB PLATTER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹595/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1950/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹545/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹840/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹625/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹495/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹520/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹395/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹310/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹695/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹945/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
              <h1 className='menu-head'>BAHAAR-E-SHORBA</h1>
              <div className='main-menu'>
                <div className='Breakfast_Combos'>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SUBZI KA GARAM RAS(VEG. SOUP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAMATAR KA GARAM RAS(TOMATO SOUP)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹219/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
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
                    <label> 8 RICE IDLI + 8 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> 4 RICE IDLI + 4 MEDU VADA + 2 MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> 4 RICE IDLI + 4 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> 2 RICE IDLI + 2 MEDU VADA + 1 MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹749/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹749/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹429/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹429/-</label>
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
                    <label> MASALA DOSA COMBO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA MASALA DOSA COMBO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
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
                    <label> SAGAR SPECIAL THALI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹335/-</label>
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
                    <label> EXECUTIVE THALI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DELUXE THALI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹355/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
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
                    <label> MEDU VADA (FOUR PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL VADA (4 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAHI VADA SINGLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAHI VADA(TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RASAM VADA (4 PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> IDLIS (2 PCS) + VADA (1 PC)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> IDLI (1 PC) + VADA (2 PCS)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹195/-</label>
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
                    <label> RICE IDLI (TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MADRAS IDLI FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MINI IDLIS DIPPED IN SAMBHAR (TWELVE PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> IDLI CHAAT - SMALL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹160/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹190/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹120/-</label>
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
                    <label> PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PAPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MYSORE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GHEE ROAST PLAIN DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹195/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
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
                    <label> MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label>  PAPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GHEE ROAST MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
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
                    <label> RAVA VEGETABLE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA COCONUT PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA COCONUT MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA VEGETABLE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA MYSORE ONION MASALA DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹280/-</label>
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
                    <label> PODI GHEE ROAST PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHETTINAD PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GHEE ROAST GARLIC PEPPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PODI GHEE ROAST MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHETTINAD MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GHEE ROAST GARLIC PEPPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHETTINAD PANEER DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
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
                    <label> SPRING ROLL DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HOT GARLIC DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SAGAR SPECIAL PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA ONION PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEGETABLE CHEESE DOSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹280/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
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
                    <label> SWEET CORN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HOT AND SOUR SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG MANCHOW SOUP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹215/-</label>
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
                    <label> VEG SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HONEY CHILLI POTATOES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CRISPY VEG SALT & PEPPER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GOBHI MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER MANCHURIAN DRY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
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
                    <label> MUSHROOM CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG. MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GOBHI MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER MANCHURIAN -- GRAVY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹305/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
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
                    <label> VEG SINGAPORE CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GARLIC GINGER CHILLI CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG HAKKA NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG SCHEZWAN FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG SINGAPORE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG SCHEZWAN NOODLES</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹265/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹275/-</label>
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
                    <label> APLAM (SOUTH INDIAN PAPAD)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RASAM (SMALL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RASAM  (FULL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> UPMA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹145/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹155/-</label>
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
                    <label> PLAIN UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TOMATO UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> COCONUT UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TOMATO ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIXED VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TOMATO COCONUT UTTAPAM</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
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
                    <label> LEMON RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CURD RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> POORI BHAJI WITH KURMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEGETABLE BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SAMBHAR RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RASAM RICE</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹215/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
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
                    <label> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIXED VEGETABLE SOUP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹205/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹205/-</label>
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
                    <label> VEGETABLE PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ASSORTED PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER PAKORA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG. SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HARA BHARA KEBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ACHARI PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAWA CHANA KEBAB (WITH CURD DIP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI PINEAPPLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SOYA MALAI TIKKA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹235/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹285/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹295/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹345/-</label>
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
                    <label> TANDOORI PLATTER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹425/-</label>
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
                    <label> SAGAR SPECIAL YELLOW DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BHINDI DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIXED VEGETABLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> JEERA ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GOBHI MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ALOO GOBHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTER MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTER MALAI METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADHAI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER LABABDAR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PINDI CHANA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADHAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER MASALA CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> METHI PANEER</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹335/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹325/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹375/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹385/-</label>
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
                    <label> PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CGREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIXED RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PINEAPPLE RAITA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹145/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹185/-</label>
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
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PUDINA PARATHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LACHHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MISSI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> Onion Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> Aloo Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LEHSUNI MIRCHI PARANTHA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹45/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹55/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹100/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹105/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹90/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹90/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹100/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹95/-</label>
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
                    <label> STEAMED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEGETABLE PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KASHMIRI PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PEAS PULAO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹185/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹245/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹255/-</label>
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
                    <label> SWEET LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SALTED LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GULAB JAMUN (TWO PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA KESARI - SMALL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAVA KESARI -  FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GULAB JAMUN - SINGLE </label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹125/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹125/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹135/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹75/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹135/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹70/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
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
                    <label> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HOT AND SOUR(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TALUMEIN(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG. SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SWEET CORN SOUP (VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LEMON CORIANDER SOUP(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MANCHOW SOUP(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN CLEAR SOUP(VEG/NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
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
                    <label> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ACHARI CHAAP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
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
                    <label> CHICKEN TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN MALAI TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ACHARI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA ROLL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
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
                    <label> KEEMA MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ROGAN JOSH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HANDI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KEEMA CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARACHI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MEAT SAAGWALA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹350/-</label>
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
                    <label> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI CHAAP</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹290/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
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
                    <label> SPL. DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> YELLOW DAL(ARHAR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SPL. PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KARAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAWA CHAAP MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER MUSHROOM BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTER PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANEER BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIX VEGETABLE</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹275/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹360/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹330/-</label>
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
                    <label> PLAIN RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG. PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DUM CHICKEN BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DUM MUTTON BIRYANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹140/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹150/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹280/-</label>
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
                    <label> GREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CREAM SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GREEN SALAD + BOONDI RAITA(COMBO)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RAITA BOONDI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CURD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PAPAD</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹120/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹50/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹50/-</label>
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
                    <label> CHILLY CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN MANCHURIAN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LEMON CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN IN HOT GARLIC SAUCE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SWEEET AND SOUR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GARLIC CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HONEY PAPPER CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLI CORIANDER CHICKEN</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹380/-</label>
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
                    <label> FRENCH FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CRISPY VEG.</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HONEY CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLI MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VEG. MANCHURIAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CRISPY CORN</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹180/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
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
                    <label> BHATTI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BHATTI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AFGHANI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AFGHANI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RESHMI KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BHATTI CHICKEN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN MALAI TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SEEKH KEBABA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹540/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹540/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹520/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹330/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹320/-</label>
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
                    <label> LEMON FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLI FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FISH TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FISH MALAI TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FISH FRY AMRITSARI(PER PLATE)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹430/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹430/-</label>
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
                    <label> BONELESS BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BONELESS BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BONELESS BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SPL. BUBTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SPL. BUBTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SPL. BUBTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUGHLAI BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUGHLAI BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUGHLAI BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HANDI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HANDI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> HANDI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SHAHI QORMA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SHAHI QORMA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SHAHI QORMA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADHAI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADHAI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADHAI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAWA CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAWA CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAWA CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN KALI MIRCH(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN KALI MIRCH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN KALI MIRCH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SEEKH KEBAB(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SEEKH KEBAB (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUTTON SEEKH KEBAB (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN CURRY(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN CURRY (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN CURRY (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN TIKKA MASALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN TIKKA MASALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN TIKKA MASALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SAAGWALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SAAGWALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN SAAGWALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURG MUSALLAM(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURG MUSALLAM (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURG MUSALLAM (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> EGG CURRY</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹360/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹500/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹480/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹780/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹340/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹500/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹790/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹220/-</label>
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
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> RUMALI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LACHCHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BUTTER GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PUDINA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIRCHI PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> STUFFED PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AJWAIN PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KEEMA NAAN(WITH GRAVY)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹35/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹40/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹35/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹50/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹60/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹65/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹70/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹70/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹80/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹160/-</label>
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
                    <label> VEG. NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIX NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> EGG NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GINGER/GARLIC NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GINGER/GARLIC NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SINGAPUR STYLE NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SINGAPUR STYLE NOODLES(NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹210/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹240/-</label>
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
                    <label> SINGAPUR STYLE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SINGAPUR STYLE CHICKEN FRIED RICH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MIX FRIED RICE(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> EGG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GINGER/GARLIC FRIED RICE(VEG/NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SCHEZWAN FRIED RICE(VEG/NON-VEG)</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹220/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹240/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹260/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
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
                    <label> JASMINE AND GIN PRAWN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VARQUI CRAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CRUSTACEAN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ACHARI HALDI FISH TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MURG METHI MALAI SOUFFLÉ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHICKEN GALAWAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DHUNGAR PATTHAR KE KEBAB</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹2450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1650/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1530/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1530/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1530/-</label>
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
                    <label> FLOWER CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GULNAR PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CORN KE KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MUSHROOM MIRCH MALAI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GALOUTI THREE WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VARQUI KHUMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VARQ GARDEN GREEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHILLED MASALA POT</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹1350/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1200/-</label>
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
                    <label> CHICKEN POTLI MASALA BROTH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LAMB AASH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DRUMSTICK LEAF SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KHUMB NIMBU KA RASSA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹770/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹770/-</label>
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
                    <label> ORGANIC VEGETABLE RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BASIL RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BURRANI RAITA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
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
                    <label> LEMON LEAF NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AMRITSARI KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CAMEMBERT AND TRUFFLE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GLUTEN FREE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KHAMEERI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BAJRA KI MISSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> NARANGI SHEERMAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> MANDUA ROTI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹270/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹230/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹300/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹250/-</label>
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
                    <label> AADHAVAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ARJUNA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SAMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ANASPHAL</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
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
                    <label> TAJ ARTISIAN COFFEE BLEND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAJ FILTER COFFEE 100% ARABICA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
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
                    <label> TIRFAL MASALA SEA BASS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DUCK CONFIT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PEPPER PRAWN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BAMBOO CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DILLI-6 CHICKEN CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GONGURA LAMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SAFEDA LAMB BIRYANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹4600/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹3600/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹2800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1830/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1920/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1920/-</label>
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
                    <label> BAIGAN KA BHARTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PANCHDHAAN KHICHADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHENNA PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> AMRITSARI WADI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BHINDI TWO WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ALOO GOBI BROCCOLI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TAMATAR AUR JAITOON KE KOFTE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GUCCHI CHOLE PULAO</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹1250/-</label>
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
                    <label> LASOONI PALAK</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ALOO ROAST</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> LAL MOTH KI MAHARANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> PAPAD KA KHAZANA</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹450/-</label>
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
                    <label> DIFFERENT STROKES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> BADAM KA HALWA, KHURMANI KA MEETHA<br />&nbsp;&nbsp;&nbsp;&nbsp;MILLE-FEUILE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> FLAVOURS OF YOGHURT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> ORANGE KHEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CRISPY KALAKAND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> SHAHI TUKDA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CHOICE OF SORBET</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> TRIO OF INDIAN ICE CREAMS</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label></label>
                  </div>
                  <div className='text-menu'>
                    <label>₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹800/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹750/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹750/-</label>
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
                    <label> TAJ BLEND</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹700/-</label>
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
                    <label> VARQUI SPECIAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> GINGER N LIME</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> CARDAMOM CREAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KESAR KI KAHANI</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
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
                    <label> VARQUI KAPHILE GREEN TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> KADI PATTA CHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Breakfast_Combo"></input>
                    <label> VAN GULAB</label>
                  </div>
                </div>
                <div className="amount">
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹700/-</label>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="button_menu"onClick={finalitem}>Book</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Selectionmenu;
