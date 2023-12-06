import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { data, tableset } from './Restraunts';
import './Hotelpage.css';
import Table from '../assets/Table1.png';
import { Link, useParams, useNavigate } from 'react-router-dom';

var totalseats = 52;
var totalno;
function Varq() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  const bname = params.bname;
  const branches = tableset.filter(branch => branch.bname === bname);
  const navigate = useNavigate();
  const [seats, setseats] = useState();
  const handlesubmit = () => {
    const result = window.confirm(`Do you Confirm ${seats} seats`);
    if (result === true) {
      totalno = totalseats - seats;
    }
    totalseats = totalno;
    if (totalseats >= 0) {
      navigate(`/Menu/${seats}`);
    }
    else {
      alert("Sorry,Booking is Full \n SEE YOU NEXT BYE");
    }

  }
  const seatno = () => {

  }

  return (
    <div>
      <Navbar />
      <br></br>
      {resturant.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div className="branch-container">
            <div className='branch'>
                <p>Branches</p>
                <ul>
                  <Link to="/Varq/7/TajMahal"><li>{item.b1}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <button className='tablesetting' onClick={seatno} >
                <img src={Table} className='tablesetting' alt='' />
              </button>
              {branches.map((item, index) => {
                return (
                  <div className='container-desc' key={index}>
                    <p className='loc'>
                      Location:{item.loc}
                      <br />
                      Hours:{item.hr}
                      <br />
                      Contact:{item.ph}
                    </p>
                  </div>
                )
              })}
              <a className="popup-open" href="#popup-open">Seat Reservation</a>
              <div id="popup-open" className="modal">
                <div className="popup_booking">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <p className='want'>How Many seats Do you want?</p>
                    <div classname="buttonIn">
                      <input type="number" className="seats-inbox" id='seats' onChange={(e) => setseats(e.target.value)} ></input>
                      <button type="submit" className='seat-button' onClick={() => handlesubmit()}>Confirm</button>
                    </div>
                  </form>
                  <p className='available'> Total No. Of Seats Available {totalseats}</p>
                  <a className="popup-close" href="#popup-close">&times;</a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <Footer />
    </div>
  );
}
export default Varq;