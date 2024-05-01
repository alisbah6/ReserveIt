import React, { useState } from 'react';
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SHORBA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SHORBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN CLEAR SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CLEAR SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HARYALI SHORBA" onChange={(e) => { getItem(e) }}></input>
                    <label> HARYALI SHORBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CREAM OF TOMATO" onChange={(e) => { getItem(e) }}></input>
                    <label> CREAM OF TOMATO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CREAM OF MUSHROOM" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PATTA CHAAT" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PINEAPPLE RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> PINEAPPLE RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MINT RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>MINT RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BOONDI RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="POTATO RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>POTATO RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CUCUMBER RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>CUCUMBER RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIX VEG RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>MIX VEG RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BOORANI RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label>BOORANI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PLAIN CURD" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN CURD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KHATTI MEETHI DAHI" onChange={(e) => { getItem(e) }}></input>
                    <label> KHATTI MEETHI DAHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GREEN SALAD" onChange={(e) => { getItem(e) }}></input>
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
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹315/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>315</label>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHAACH" onChange={(e) => { getItem(e) }}></input>
                    <label> CHAACH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MANGO LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label>MANGO LASSI </label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SWEET LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label>SWEET LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" SALTED LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label> SALTED LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GULKAND LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label> GULKAND LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PEANUT BUTTER BANANA LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label> PEANUT BUTTER BANANA LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AAM KA PANNA" onChange={(e) => { getItem(e) }}></input>
                    <label> AAM KA PANNA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JALJEERA" onChange={(e) => { getItem(e) }}></input>
                    <label> JALJEERA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="NIMBU SHIKANJI" onChange={(e) => { getItem(e) }}></input>
                    <label> NIMBU SHIKANJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PHALSA KI SHIKANJI" onChange={(e) => { getItem(e) }}></input>
                    <label> PHALSA KI SHIKANJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FRESH LIME SODA" onChange={(e) => { getItem(e) }}></input>
                    <label> FRESH LIME SODA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON ICED TEA" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON ICED TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PEACH ICED TEA" onChange={(e) => { getItem(e) }}></input>
                    <label> PEACH ICED TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MASALA COKE" onChange={(e) => { getItem(e) }}></input>
                    <label> MASALA COKE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="THUMPS UP" onChange={(e) => { getItem(e) }}></input>
                    <label> THUMPS UP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DIET COKE" onChange={(e) => { getItem(e) }}></input>
                    <label> DIET COKE </label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPRITE" onChange={(e) => { getItem(e) }}></input>
                    <label> SPRITE </label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PAAN GULKAND MOJITO" onChange={(e) => { getItem(e) }}></input>
                    <label> PAAN GULKAND MOJITO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VIRGIN MOJITO" onChange={(e) => { getItem(e) }}></input>
                    <label> VIRGIN MOJITO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BLUE LAGOON" onChange={(e) => { getItem(e) }}></input>
                    <label> BLUE LAGOON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FRUIT PUNCH" onChange={(e) => { getItem(e) }}></input>
                    <label>MASALA VIRGIN MOJITO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FRUIT PUNCH" onChange={(e) => { getItem(e) }}></input>
                    <label> MASALA VIRGIN MOJITO/ TROPICAL FIZZ)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FRUIT PUNCH" onChange={(e) => { getItem(e) }}></input>
                    <label>TROPICAL FIZZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHOCOLATE OREO SHAKE" onChange={(e) => { getItem(e) }}></input>
                    <label> CHOCOLATE OREO SHAKE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="THANDAI" onChange={(e) => { getItem(e) }}></input>
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
                    <label>₹175/-</label>
                  </div>
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
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹170/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
                  <div className='text-menu'>
                    <label>₹225/-</label>
                  </div>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="QEEMA NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> QEEMA NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BAQARKHANI KULCHA" onChange={(e) => { getItem(e) }}></input>
                    <label> BAQARKHANI KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ROGHNI NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> ROGHNI NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PLAIN NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RUMALI ROTI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GARLIC NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LACHHA PARATHA" onChange={(e) => { getItem(e) }}></input>
                    <label> LACHHA PARATHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER ROTI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KHEER BENAZEER" onChange={(e) => { getItem(e) }}></input>
                    <label> KHEER BENAZEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GULAB JAMUN" onChange={(e) => { getItem(e) }}></input>
                    <label> GULAB JAMUN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GAJAR KA HALWA" onChange={(e) => { getItem(e) }}></input>
                    <label> GAJAR KA HALWA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" SHAHI TUKDA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SUBZ-E-KHAZANA(MIX VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SUBZ-E-KHAZANA(MIX VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" KARAHI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MALAI KOFTA" onChange={(e) => { getItem(e) }}></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PALAK PANEER" Change={(e) => { getItem(e) }}></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAL TADKA"onChange={(e) => { getItem(e) }}></input>
                    <label> DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAL MAKHANI" onChange={(e) => { getItem(e) }}></input>
                    <label> DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MIX RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> MIX RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" BOONDI RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GREEN SALAD" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH BIRYANI ANARKALI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH BIRYANI ANARKALI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON BIRYANI BAHISHTI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON BIRYANI BAHISHTI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" VMURGH BIRYANI ANARKALI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> VMURGH BIRYANI ANARKALI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUTTON BIRYANI BAHISHTI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON BIRYANI BAHISHTI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE PULAO" onChange={(e) => { getItem(e) }}></input>
                    <label> VEGETABLE PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="STEAMED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> STEAMED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JEERA RICE" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARIM ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> KARIM ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH SEEKH ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH TIKKA ROLL(WINTER SEASON)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH TIKKA ROLL(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH TIKKA ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" BOTI ROTI ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> BOTI ROTI ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAMI KEBAB ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAMI KEBAB ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MURGH MALAI TIKKA ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH MALAI TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" SOYA CHAAP ROLL" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DIL PASAND SEEKH KEBAB(2PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> DIL PASAND SEEKH KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DIL PASAND SEEKH KEBAB(4PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> DIL PASAND SEEKH KEBAB(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BEMISAL SHAMI KEBAB(2PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> BEMISAL SHAMI KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BEMISAL SHAMI KEBAB(4PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> BEMISAL SHAMI KEBAB(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SEEKH KEBAB(2PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SEEKH KEBAB(2PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SEEKH KEBAB(4PCS.)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MURGH KA SHORBA(CHICKEN SOUP)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH KA SHORBA(CHICKEN SOUP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GOSHT KA SHORBA(MUTTON SOUP)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AKBARI MURGH MASALA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> AKBARI MURGH MASALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AKBARI MURGH MASALA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> AKBARI MURGH MASALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI MURGH DOPYAZA(STEW) (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI MURGH DOPYAZA(STEW) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI MURGH DOPYAZA(STEW) (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI MURGH DOPYAZA(STEW) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" LAZEEZ SAAG MURGH (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> LAZEEZ SAAG MURGH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LAZEEZ SAAG MURGH (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> LAZEEZ SAAG MURGH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" KARAHI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARAHI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER CHICKEN BONELESS (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER CHICKEN BONELESS (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER CHICKEN BONELESS (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER CHICKEN BONELESS (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN MUGHLAI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN MUGHLAI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN MUGHLAI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN MUGHLAI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN JAHANGIRI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN JAHANGIRI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN JAHANGIRI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN JAHANGIRI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHICKEN QORMA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN QORMA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN QORMA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN QORMA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN HANDI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN HANDI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHICKEN HANDI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN HANDI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TUKKHM-E-MURGH MASALA(EGG CURRY)" onChange={(e) => { getItem(e) }}></input>
                    <label> TUKKHM-E-MURGH MASALA(EGG CURRY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON MUGHLAI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON MUGHLAI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUTTON MUGHLAI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON MUGHLAI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FIRDAUSI QORMA(ROGHAN JODH) (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> FIRDAUSI QORMA(ROGHAN JODH) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FIRDAUSI QORMA(ROGHAN JODH) (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> FIRDAUSI QORMA(ROGHAN JODH) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DIL BAHAR DOPYAZA(STEW) (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> DIL BAHAR DOPYAZA(STEW) (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DIL BAHAR DOPYAZA(STEW) (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> DIL BAHAR DOPYAZA(STEW) (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" NARGISI KOFTA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> NARGISI KOFTA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="NARGISI KOFTA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> NARGISI KOFTA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" NAYAB MUGHZ MASALA(BRAIN CURRY)" onChange={(e) => { getItem(e) }}></input>
                    <label> NAYAB MUGHZ MASALA(BRAIN CURRY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARAHI GOSHT (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI GOSHT (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARAHI GOSHT (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI GOSHT (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON NIHARI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON NIHARI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUTTON NIHARI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON NIHARI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SAAG WALA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SAAG WALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SAAG WALA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SAAG WALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" KEEMA" onChange={(e) => { getItem(e) }}></input>
                    <label> KEEMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KEEMA KALEJI" onChange={(e) => { getItem(e) }}></input>
                    <label> KEEMA KALEJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON HANDI (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON HANDI (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON HANDI (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON HANDI (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KEEMA MATAR" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI MURGH (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI MURGH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI MURGH (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI MURGH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" TANDOORI RAAN(ORDER BEFORE 24HRS)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI RAAN(ORDER BEFORE 24HRS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI FISH(WINTER SEASON)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI FISH(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON BURRA(4PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON BURRA(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON BURRA(8PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON BURRA(8PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH BURRA(4PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH BURRA(4PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH BURRA(8PCS.)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH BURRA(8PCS.)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURGH TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MURGH MALAI TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> MURGH MALAI TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PANEER TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER MALAI TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER MALAI TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHAAP MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHAAP MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHAAP MALAI" onChange={(e) => { getItem(e) }}></input>
                    <label> CHAAP MALAI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH TIKKA(WINTER SEASON)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH TIKKA(WINTER SEASON)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARIM'S ASSORTED KEBAB PLATTER" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SUBZI KA GARAM RAS(VEG. SOUP)" onChange={(e) => { getItem(e) }}></input>
                    <label> SUBZI KA GARAM RAS(VEG. SOUP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAMATAR KA GARAM RAS(TOMATO SOUP)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="8 RICE IDLI + 8 MEDU VADA" onChange={(e) => { getItem(e) }}></input>
                    <label> 8 RICE IDLI + 8 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" 4 RICE IDLI + 4 MEDU VADA + 2 MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> 4 RICE IDLI + 4 MEDU VADA + 2 MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="4 RICE IDLI + 4 MEDU VADA" onChange={(e) => { getItem(e) }}></input>
                    <label> 4 RICE IDLI + 4 MEDU VADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" 2 RICE IDLI + 2 MEDU VADA + 1 MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MASALA DOSA COMBO" onChange={(e) => { getItem(e) }}></input>
                    <label> MASALA DOSA COMBO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA MASALA DOSA COMBO" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAGAR SPECIAL THALI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="EXECUTIVE THALI" onChange={(e) => { getItem(e) }}></input>
                    <label> EXECUTIVE THALI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DELUXE THALI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MEDU VADA (FOUR PCS)" onChange={(e) => { getItem(e) }}></input>
                    <label> MEDU VADA (FOUR PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DAL VADA (4 PIECES)" onChange={(e) => { getItem(e) }}></input>
                    <label> DAL VADA (4 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DAHI VADA SINGLE" onChange={(e) => { getItem(e) }}></input>
                    <label> DAHI VADA SINGLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAHI VADA(TWO PIECES)" onChange={(e) => { getItem(e) }}></input>
                    <label> DAHI VADA(TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" RASAM VADA (4 PCS)" onChange={(e) => { getItem(e) }}></input>
                    <label> RASAM VADA (4 PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="IDLIS (2 PCS) + VADA (1 PC)" onChange={(e) => { getItem(e) }}></input>
                    <label> IDLIS (2 PCS) + VADA (1 PC)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="IDLI (1 PC) + VADA (2 PCS)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RICE IDLI (TWO PIECES)" onChange={(e) => { getItem(e) }}></input>
                    <label> RICE IDLI (TWO PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MADRAS IDLI FRIES" onChange={(e) => { getItem(e) }}></input>
                    <label> MADRAS IDLI FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MINI IDLIS DIPPED IN SAMBHAR (TWELVE PCS)" onChange={(e) => { getItem(e) }}></input>
                    <label> MINI IDLIS DIPPED IN SAMBHAR (TWELVE PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" IDLI CHAAT - SMALL" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PAPER PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> PAPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ONION PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MYSORE PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> MYSORE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GHEE ROAST PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PAPER MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label>  PAPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ONION MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MYSORE MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GHEE ROAST MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" RAVA VEGETABLE PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA VEGETABLE PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA COCONUT PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA COCONUT PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA ONION PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA ONION PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" RAVA ONION MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA ONION MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA COCONUT MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA COCONUT MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA VEGETABLE MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA VEGETABLE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" RAVA MYSORE MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA MYSORE MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA MYSORE ONION MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PODI GHEE ROAST PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> PODI GHEE ROAST PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHETTINAD PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHETTINAD PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" GHEE ROAST GARLIC PEPPER PLAIN DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> GHEE ROAST GARLIC PEPPER PLAIN DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PODI GHEE ROAST MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> PODI GHEE ROAST MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHETTINAD MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHETTINAD MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GHEE ROAST GARLIC PEPPER MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> GHEE ROAST GARLIC PEPPER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHETTINAD PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPRING ROLL DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> SPRING ROLL DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HOT GARLIC DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> HOT GARLIC DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER BUTTER MASALA DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER BUTTER MASALA DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAGAR SPECIAL PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> SAGAR SPECIAL PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MYSORE PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA ONION PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA ONION PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA MYSORE PANEER DOSA" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA MYSORE PANEER DOSA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE CHEESE DOSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SWEET CORN SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> SWEET CORN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HOT AND SOUR SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> HOT AND SOUR SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG MANCHOW SOUP" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" VEG SPRING ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HONEY CHILLI POTATOES" onChange={(e) => { getItem(e) }}></input>
                    <label> HONEY CHILLI POTATOES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CRISPY VEG SALT & PEPPER" onChange={(e) => { getItem(e) }}></input>
                    <label> CRISPY VEG SALT & PEPPER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM CHILLI DRY" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG MANCHURIAN DRY" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GOBHI MANCHURIAN DRY" onChange={(e) => { getItem(e) }}></input>
                    <label> GOBHI MANCHURIAN DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER CHILLI DRY" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER CHILLI DRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER MANCHURIAN DRY" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM CHILLI GRAVY" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. MANCHURIAN GRAVY" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" GOBHI MANCHURIAN GRAVY" onChange={(e) => { getItem(e) }}></input>
                    <label> GOBHI MANCHURIAN GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER CHILLI GRAVY" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER CHILLI GRAVY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER MANCHURIAN -- GRAVY" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG SINGAPORE CHOWMEIN" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG SINGAPORE CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GARLIC GINGER CHILLI CHOWMEIN" onChange={(e) => { getItem(e) }}></input>
                    <label> GARLIC GINGER CHILLI CHOWMEIN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG HAKKA NOODLES" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG HAKKA NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG SCHEZWAN FRIED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG SCHEZWAN FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" VEG SINGAPORE FRIED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG SINGAPORE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG FRIED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG SCHEZWAN NOODLES" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" APLAM (SOUTH INDIAN PAPAD)" onChange={(e) => { getItem(e) }}></input>
                    <label> APLAM (SOUTH INDIAN PAPAD)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" RASAM (SMALL) + APLAM" onChange={(e) => { getItem(e) }}></input>
                    <label> RASAM (SMALL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RASAM  (FULL) + APLAM" onChange={(e) => { getItem(e) }}></input>
                    <label> RASAM  (FULL) + APLAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="UPMA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TOMATO UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> TOMATO UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ONION UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="COCONUT UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> COCONUT UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TOMATO ONION UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> TOMATO ONION UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIXED VEGETABLE UTTAPAM" onChange={(e) => { getItem(e) }}></input>
                    <label> MIXED VEGETABLE UTTAPAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TOMATO COCONUT UTTAPAM" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CURD RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> CURD RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="POORI BHAJI WITH KURMA" onChange={(e) => { getItem(e) }}></input>
                    <label> POORI BHAJI WITH KURMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE BIRYANI" onChange={(e) => { getItem(e) }}></input>
                    <label> VEGETABLE BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAMBHAR RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> SAMBHAR RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RASAM RICE" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TOMATO SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MIXED VEGETABLE SOUP" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE PAKORAS" onChange={(e) => { getItem(e) }}></input>
                    <label> VEGETABLE PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ASSORTED PAKORAS" onChange={(e) => { getItem(e) }}></input>
                    <label> ASSORTED PAKORAS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER PAKORA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER PAKORA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. SEEKH KEBAB" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HARA BHARA KEBA" onChange={(e) => { getItem(e) }}></input>
                    <label> HARA BHARA KEBA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI ALOO" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ACHARI PANEER TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> ACHARI PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAWA CHANA KEBAB (WITH CURD DIP)" onChange={(e) => { getItem(e) }}></input>
                    <label> TAWA CHANA KEBAB (WITH CURD DIP)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI PINEAPPLE" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI PINEAPPLE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SOYA MALAI TIKKA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI PLATTER" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAGAR SPECIAL YELLOW DAL TADKA" onChange={(e) => { getItem(e) }}></input>
                    <label> SAGAR SPECIAL YELLOW DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DAL MAKHANI" onChange={(e) => { getItem(e) }}></input>
                    <label> DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BHINDI DO PYAZA" onChange={(e) => { getItem(e) }}></input>
                    <label> BHINDI DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIXED VEGETABLES" onChange={(e) => { getItem(e) }}></input>
                    <label> MIXED VEGETABLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JEERA ALOO" onChange={(e) => { getItem(e) }}></input>
                    <label> JEERA ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" GOBHI MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> GOBHI MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHANA MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DUM ALOO" onChange={(e) => { getItem(e) }}></input>
                    <label> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ALOO GOBHI" onChange={(e) => { getItem(e) }}></input>
                    <label> ALOO GOBHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="NAVRATAN KORMA" onChange={(e) => { getItem(e) }}></input>
                    <label> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MALAI KOFTA" onChange={(e) => { getItem(e) }}></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUTTER MUSHROOM" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTER MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUTTER MALAI METHI" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTER MALAI METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER DO PYAZA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER DO PYAZA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" KADHAI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> KADHAI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER LABABDAR" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER LABABDAR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER BUTTER MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PINDI CHANA" onChange={(e) => { getItem(e) }}></input>
                    <label> PINDI CHANA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM HARA PYAAZ" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KADHAI CHAAP" onChange={(e) => { getItem(e) }}></input>
                    <label> KADHAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER MASALA CHAAP" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER MASALA CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER HARA PYAAZ" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER HARA PYAAZ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="METHI PANEER" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PAPAD" onChange={(e) => { getItem(e) }}></input>
                    <label> PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CGREEN SALAD" onChange={(e) => { getItem(e) }}></input>
                    <label> CGREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIXED RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> MIXED RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BOONDI RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> BOONDI RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PINEAPPLE RAITA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" TANDOORI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI BUTTER ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="STUFFED NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GARLIC NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PUDINA PARATHA" onChange={(e) => { getItem(e) }}></input>
                    <label> PUDINA PARATHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LACHHA PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> LACHHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MISSI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> MISSI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Onion Kulcha" onChange={(e) => { getItem(e) }}></input>
                    <label> Onion Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="Aloo Kulcha" onChange={(e) => { getItem(e) }}></input>
                    <label> Aloo Kulcha</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER KULCHA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEHSUNI MIRCHI PARANTHA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="STEAMED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> STEAMED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JEERA RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEGETABLE PULAO" onChange={(e) => { getItem(e) }}></input>
                    <label> VEGETABLE PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KASHMIRI PULAO" onChange={(e) => { getItem(e) }}></input>
                    <label> KASHMIRI PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PEAS PULAO" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SWEET LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label> SWEET LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SALTED LASSI" onChange={(e) => { getItem(e) }}></input>
                    <label> SALTED LASSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GULAB JAMUN (TWO PCS)" onChange={(e) => { getItem(e) }}></input>
                    <label> GULAB JAMUN (TWO PCS)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA KESARI - SMALL" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA KESARI - SMALL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAVA KESARI -  FULL" onChange={(e) => { getItem(e) }}></input>
                    <label> RAVA KESARI -  FULL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GULAB JAMUN - SINGLE " onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TOMATO SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> TOMATO SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HOT AND SOUR(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> HOT AND SOUR(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HOT AND SOUR(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> HOT AND SOUR (NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" TALUMEIN(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> TALUMEIN(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TALUMEIN(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> TALUMEIN(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SWEET CORN SOUP (VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SWEET CORN SOUP (VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SWEET CORN SOUP (NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SWEET CORN SOUP (NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON CORIANDER SOUP(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON CORIANDER SOUP(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON CORIANDER SOUP(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON CORIANDER SOUP(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MANCHOW SOUP(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> MANCHOW SOUP(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MANCHOW SOUP(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> MANCHOW SOUP(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN CLEAR SOUP(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CLEAR SOUP(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN CLEAR SOUP(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CLEAR SOUP(NON-VEG)</label>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAHI KE SHALAY" onChange={(e) => { getItem(e) }}></input>
                    <label> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PATTA CHAAT" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MALAI CHAAP" onChange={(e) => { getItem(e) }}></input>
                    <label> MALAI CHAAP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA PAPAD" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA PAPAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ACHARI CHAAP" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN TIKKA ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHICKEN SEEKH ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SEEKH ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SEEKH ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN MALAI TIKKA ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN MALAI TIKKA ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ACHARI CHAAP ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> ACHARI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MALAI CHAAP ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> MALAI CHAAP ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA ROLL" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KEEMA MUTTON" onChange={(e) => { getItem(e) }}></input>
                    <label> KEEMA MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" ROGAN JOSH" onChange={(e) => { getItem(e) }}></input>
                    <label> ROGAN JOSH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON CURRY" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HANDI MUTTON" onChange={(e) => { getItem(e) }}></input>
                    <label> HANDI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KEEMA CURRY" onChange={(e) => { getItem(e) }}></input>
                    <label> KEEMA CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARACHI MUTTON" onChange={(e) => { getItem(e) }}></input>
                    <label> KARACHI MUTTON</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MEAT SAAGWALA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAHI KE SHALAY" onChange={(e) => { getItem(e) }}></input>
                    <label> DAHI KE SHALAY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PATTA CHAAT" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MALAI CHAAPs" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPL. DAL MAKHANI" onChange={(e) => { getItem(e) }}></input>
                    <label> SPL. DAL MAKHANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="YELLOW DAL(ARHAR)" onChange={(e) => { getItem(e) }}></input>
                    <label> YELLOW DAL(ARHAR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPL. PANEER BUTTER MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> SPL. PANEER BUTTER MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KARAHI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> KARAHI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MALAI KOFTA" onChange={(e) => { getItem(e) }}></input>
                    <label> MALAI KOFTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="NAVRATAN KORMA" onChange={(e) => { getItem(e) }}></input>
                    <label> NAVRATAN KORMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAWA CHAAP MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> TAWA CHAAP MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER TIKKA MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER TIKKA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DUM ALOO" onChange={(e) => { getItem(e) }}></input>
                    <label> DUM ALOO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" PANEER MUSHROOM BHURJI" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER MUSHROOM BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTER PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTER PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHANA MASALA" onChange={(e) => { getItem(e) }}></input>
                    <label> CHANA MASALA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANEER BHURJI" onChange={(e) => { getItem(e) }}></input>
                    <label> PANEER BHURJI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIX VEGETABLE" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JEERA RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> JEERA RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. PULAO" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. PULAO</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DUM CHICKEN BIRYANI" onChange={(e) => { getItem(e) }}></input>
                    <label> DUM CHICKEN BIRYANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DUM MUTTON BIRYANI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GREEN SALAD" onChange={(e) => { getItem(e) }}></input>
                    <label> GREEN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CREAM SALAD" onChange={(e) => { getItem(e) }}></input>
                    <label> CREAM SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GREEN SALAD + BOONDI RAITA(COMBO)" onChange={(e) => { getItem(e) }}></input>
                    <label> GREEN SALAD + BOONDI RAITA(COMBO)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RAITA BOONDI" onChange={(e) => { getItem(e) }}></input>
                    <label> RAITA BOONDI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CURD" onChange={(e) => { getItem(e) }}></input>
                    <label> CURD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PAPAD" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHILLY CHICKEN(DRY/GRAVY)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHILLY CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN MANCHURIAN(DRY/GRAVY)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN MANCHURIAN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON CHICKEN(DRY/GRAVY)" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON CHICKEN(DRY/GRAVY)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN IN HOT GARLIC SAUCE" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN IN HOT GARLIC SAUCE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SWEEET AND SOUR" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SWEEET AND SOUR</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GARLIC CHICKEN" onChange={(e) => { getItem(e) }}></input>
                    <label> GARLIC CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HONEY PAPPER CHICKEN" onChange={(e) => { getItem(e) }}></input>
                    <label> HONEY PAPPER CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHILLI CORIANDER CHICKEN" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FRENCH FRIES" onChange={(e) => { getItem(e) }}></input>
                    <label> FRENCH FRIES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CRISPY VEG." onChange={(e) => { getItem(e) }}></input>
                    <label> CRISPY VEG.</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HONEY CHILLI POTATOE" onChange={(e) => { getItem(e) }}></input>
                    <label> HONEY CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHILLI POTATOE" onChange={(e) => { getItem(e) }}></input>
                    <label> CHILLI POTATOE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHILLI MUSHROOM" onChange={(e) => { getItem(e) }}></input>
                    <label> CHILLI MUSHROOM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHILLI PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> CHILLI PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. MANCHURIAN" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. MANCHURIAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPRING ROLL" onChange={(e) => { getItem(e) }}></input>
                    <label> SPRING ROLL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CRISPY CORN" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BHATTI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> BHATTI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BHATTI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> BHATTI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AFGHANI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> AFGHANI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" AFGHANI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> AFGHANI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" TANDOORI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RESHMI KEBAB" onChange={(e) => { getItem(e) }}></input>
                    <label> RESHMI KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BHATTI CHICKEN TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> BHATTI CHICKEN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SEEKH KEBAB" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SEEKH KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN MALAI TIKKA(8 PIECES)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN MALAI TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN TIKKA(8 PIECES)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN TIKKA(8 PIECES)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SEEKH KEBABA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON FISH" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHILLI FISH" onChange={(e) => { getItem(e) }}></input>
                    <label> CHILLI FISH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH TIKKA(PER PLATE)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH MALAI TIKKA(PER PLATE)" onChange={(e) => { getItem(e) }}></input>
                    <label> FISH MALAI TIKKA(PER PLATE)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FISH FRY AMRITSARI(PER PLATE)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BONELESS BUTTER CHICKEN(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> BONELESS BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BONELESS BUTTER CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> BONELESS BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BONELESS BUTTER CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> BONELESS BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BONELESS BUTTER CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> BONELESS BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPL. BUBTTER CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> SPL. BUBTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SPL. BUBTTER CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> SPL. BUBTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUGHLAI BUTTER CHICKEN(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUGHLAI BUTTER CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUGHLAI BUTTER CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUGHLAI BUTTER CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" MUGHLAI BUTTER CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUGHLAI BUTTER CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HANDI CHICKEN(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> HANDI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HANDI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> HANDI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="HANDI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> HANDI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SHAHI QORMA(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SHAHI QORMA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SHAHI QORMA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SHAHI QORMA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SHAHI QORMA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SHAHI QORMA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KADHAI CHICKEN(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> KADHAI CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KADHAI CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> KADHAI CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KADHAI CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> KADHAI CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAWA CHICKEN(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> TAWA CHICKEN(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAWA CHICKEN (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> TAWA CHICKEN (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAWA CHICKEN (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> TAWA CHICKEN (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN KALI MIRCH(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN KALI MIRCH(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN KALI MIRCH (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN KALI MIRCH (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN KALI MIRCH (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN KALI MIRCH (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SEEKH KEBAB(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SEEKH KEBAB(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SEEKH KEBAB (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SEEKH KEBAB (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUTTON SEEKH KEBAB (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MUTTON SEEKH KEBAB (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN CURRY(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CURRY(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN CURRY (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CURRY (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHICKEN CURRY (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN CURRY (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN TIKKA MASALA(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN TIKKA MASALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN TIKKA MASALA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN TIKKA MASALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN TIKKA MASALA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN TIKKA MASALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SAAGWALA(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SAAGWALA(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SAAGWALA (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SAAGWALA (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN SAAGWALA (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN SAAGWALA (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURG MUSALLAM(QTR)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURG MUSALLAM(QTR)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURG MUSALLAM (HALF)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURG MUSALLAM (HALF)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURG MUSALLAM (FULL)" onChange={(e) => { getItem(e) }}></input>
                    <label> MURG MUSALLAM (FULL)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="EGG CURRY" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="RUMALI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> RUMALI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PLAIN NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> PLAIN NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LACHCHA PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> LACHCHA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BUTTER GARLIC NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> BUTTER GARLIC NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PUDINA PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> PUDINA PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIRCHI PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> MIRCHI PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="STUFFED PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> STUFFED PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AJWAIN PARANTHA" onChange={(e) => { getItem(e) }}></input>
                    <label> AJWAIN PARANTHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="STUFFED NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> STUFFED NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KEEMA NAAN(WITH GRAVY)s" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VEG. NOODLES" onChange={(e) => { getItem(e) }}></input>
                    <label> VEG. NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN NOODLES" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN NOODLES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIX NOODLES(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> MIX NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="EGG NOODLES(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> EGG NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GINGER/GARLIC NOODLES(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> GINGER/GARLIC NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GINGER/GARLIC NOODLES(NON-VEG)s" onChange={(e) => { getItem(e) }}></input>
                    <label> GINGER/GARLIC NOODLES(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SINGAPUR STYLE NOODLES(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SINGAPUR STYLE NOODLES(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SINGAPUR STYLE NOODLES(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SINGAPUR STYLE FRIED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> SINGAPUR STYLE FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SINGAPUR STYLE CHICKEN FRIED RICH" onChange={(e) => { getItem(e) }}></input>
                    <label> SINGAPUR STYLE CHICKEN FRIED RICH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MIX FRIED RICE(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> MIX FRIED RICE(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" EGG FRIED RICE" onChange={(e) => { getItem(e) }}></input>
                    <label> EGG FRIED RICE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GINGER/GARLIC FRIED RICE(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> GINGER/GARLIC FRIED RICE(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GINGER/GARLIC FRIED RICE(sNON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> GINGER/GARLIC FRIED RICE(NON-VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SCHEZWAN FRIED RICE(VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SCHEZWAN FRIED RICE(VEG)</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SCHEZWAN FRIED RICE(NON-VEG)" onChange={(e) => { getItem(e) }}></input>
                    <label> SCHEZWAN FRIED RICE(NON-VEG)</label>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="JASMINE AND GIN PRAWN TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> JASMINE AND GIN PRAWN TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VARQUI CRAB" onChange={(e) => { getItem(e) }}></input>
                    <label> VARQUI CRAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CRUSTACEAN SALAD" onChange={(e) => { getItem(e) }}></input>
                    <label> CRUSTACEAN SALAD</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ACHARI HALDI FISH TIKKA" onChange={(e) => { getItem(e) }}></input>
                    <label> ACHARI HALDI FISH TIKKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MURG METHI MALAI SOUFFLÉ" onChange={(e) => { getItem(e) }}></input>
                    <label> MURG METHI MALAI SOUFFLÉ</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN GALAWAT" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN GALAWAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DHUNGAR PATTHAR KE KEBAB" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FLOWER CHAAT" onChange={(e) => { getItem(e) }}></input>
                    <label> FLOWER CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PALAK PATTA CHAAT" onChange={(e) => { getItem(e) }}></input>
                    <label> PALAK PATTA CHAAT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" GULNAR PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> GULNAR PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CORN KE KEBAB" onChange={(e) => { getItem(e) }}></input>
                    <label> CORN KE KEBAB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MUSHROOM MIRCH MALAI" onChange={(e) => { getItem(e) }}></input>
                    <label> MUSHROOM MIRCH MALAI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GALOUTI THREE WAYS" onChange={(e) => { getItem(e) }}></input>
                    <label> GALOUTI THREE WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VARQUI KHUMB" onChange={(e) => { getItem(e) }}></input>
                    <label> VARQUI KHUMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VARQ GARDEN GREEN" onChange={(e) => { getItem(e) }}></input>
                    <label> VARQ GARDEN GREEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHILLED MASALA POT" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHICKEN POTLI MASALA BROTH" onChange={(e) => { getItem(e) }}></input>
                    <label> CHICKEN POTLI MASALA BROTH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LAMB AASH" onChange={(e) => { getItem(e) }}></input>
                    <label> LAMB AASH</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DRUMSTICK LEAF SOUP" onChange={(e) => { getItem(e) }}></input>
                    <label> DRUMSTICK LEAF SOUP</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KHUMB NIMBU KA RASSA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ORGANIC VEGETABLE RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> ORGANIC VEGETABLE RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BASIL RAITA" onChange={(e) => { getItem(e) }}></input>
                    <label> BASIL RAITA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BURRANI RAITA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LEMON LEAF NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> LEMON LEAF NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AMRITSARI KULCHA" onChange={(e) => { getItem(e) }}></input>
                    <label> AMRITSARI KULCHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CAMEMBERT AND TRUFFLE NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> CAMEMBERT AND TRUFFLE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" GLUTEN FREE NAAN" onChange={(e) => { getItem(e) }}></input>
                    <label> GLUTEN FREE NAAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KHAMEERI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> KHAMEERI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BAJRA KI MISSI" onChange={(e) => { getItem(e) }}></input>
                    <label> BAJRA KI MISSI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TANDOORI ROTI" onChange={(e) => { getItem(e) }}></input>
                    <label> TANDOORI ROTI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="NARANGI SHEERMAL" onChange={(e) => { getItem(e) }}></input>
                    <label> NARANGI SHEERMAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MANDUA ROTI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AADHAVAN" onChange={(e) => { getItem(e) }}></input>
                    <label> AADHAVAN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ARJUNA" onChange={(e) => { getItem(e) }}></input>
                    <label> ARJUNA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAMA" onChange={(e) => { getItem(e) }}></input>
                    <label> SAMA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" ANASPHAL" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAJ ARTISIAN COFFEE BLEND" onChange={(e) => { getItem(e) }}></input>
                    <label> TAJ ARTISIAN COFFEE BLEND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAJ FILTER COFFEE 100% ARABICA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TIRFAL MASALA SEA BASS" onChange={(e) => { getItem(e) }}></input>
                    <label> TIRFAL MASALA SEA BASS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DUCK CONFIT" onChange={(e) => { getItem(e) }}></input>
                    <label> DUCK CONFIT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PEPPER PRAWN" onChange={(e) => { getItem(e) }}></input>
                    <label> PEPPER PRAWN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BAMBOO CHICKEN" onChange={(e) => { getItem(e) }}></input>
                    <label> BAMBOO CHICKEN</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DILLI-6 CHICKEN CURRY" onChange={(e) => { getItem(e) }}></input>
                    <label> DILLI-6 CHICKEN CURRY</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GONGURA LAMB" onChange={(e) => { getItem(e) }}></input>
                    <label> GONGURA LAMB</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SAFEDA LAMB BIRYANI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" BAIGAN KA BHARTA" onChange={(e) => { getItem(e) }}></input>
                    <label> BAIGAN KA BHARTA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PANCHDHAAN KHICHADA" onChange={(e) => { getItem(e) }}></input>
                    <label> PANCHDHAAN KHICHADA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CHENNA PANEER" onChange={(e) => { getItem(e) }}></input>
                    <label> CHENNA PANEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="AMRITSARI WADI" onChange={(e) => { getItem(e) }}></input>
                    <label> AMRITSARI WADI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="BHINDI TWO WAYS" onChange={(e) => { getItem(e) }}></input>
                    <label> BHINDI TWO WAYS</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ALOO GOBI BROCCOLI" onChange={(e) => { getItem(e) }}></input>
                    <label> ALOO GOBI BROCCOLI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAMATAR AUR JAITOON KE KOFTE" onChange={(e) => { getItem(e) }}></input>
                    <label> TAMATAR AUR JAITOON KE KOFTE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GUCCHI CHOLE PULAO" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LASOONI PALAK" onChange={(e) => { getItem(e) }}></input>
                    <label> LASOONI PALAK</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ALOO ROAST" onChange={(e) => { getItem(e) }}></input>
                    <label> ALOO ROAST</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DAL METHI" onChange={(e) => { getItem(e) }}></input>
                    <label> DAL METHI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" DAL TADKA" onChange={(e) => { getItem(e) }}></input>
                    <label> DAL TADKA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="LAL MOTH KI MAHARANI" onChange={(e) => { getItem(e) }}></input>
                    <label> LAL MOTH KI MAHARANI</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="PAPAD KA KHAZANA" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="DIFFERENT STROKES" onChange={(e) => { getItem(e) }}></input>
                    <label> DIFFERENT STROKES</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" BADAM KA HALWA" onChange={(e) => { getItem(e) }}></input>
                    <label> BADAM KA HALWA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KHURMANI KA MEETHA" onChange={(e) => { getItem(e) }}></input>
                    <label>KHURMANI KA MEETHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="MILLE-FEUILE" onChange={(e) => { getItem(e) }}></input>
                    <label>MILLE-FEUILE</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="FLAVOURS OF YOGHURT" onChange={(e) => { getItem(e) }}></input>
                    <label> FLAVOURS OF YOGHURT</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="ORANGE KHEER" onChange={(e) => { getItem(e) }}></input>
                    <label> ORANGE KHEER</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CRISPY KALAKAND" onChange={(e) => { getItem(e) }}></input>
                    <label> CRISPY KALAKAND</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="SHAHI TUKDA" onChange={(e) => { getItem(e) }}></input>
                    <label> SHAHI TUKDA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value=" CHOICE OF SORBET" onChange={(e) => { getItem(e) }}></input>
                    <label> CHOICE OF SORBET</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TRIO OF INDIAN ICE CREAMS" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="TAJ BLEND" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VARQUI SPECIAL" onChange={(e) => { getItem(e) }}></input>
                    <label> VARQUI SPECIAL</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="GINGER N LIME" onChange={(e) => { getItem(e) }}></input>
                    <label> GINGER N LIME</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="CARDAMOM CREAM" onChange={(e) => { getItem(e) }}></input>
                    <label> CARDAMOM CREAM</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KESAR KI KAHANI" onChange={(e) => { getItem(e) }}></input>
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
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VARQUI KAPHILE GREEN TEA" onChange={(e) => { getItem(e) }}></input>
                    <label> VARQUI KAPHILE GREEN TEA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="KADI PATTA CHA" onChange={(e) => { getItem(e) }}></input>
                    <label> KADI PATTA CHA</label>
                  </div>
                  <div className='text-menu'>
                    <input type="checkbox" id="Breakfast_Combo" name="fav_language" value="VAN GULAB" onChange={(e) => { getItem(e) }}></input>
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
