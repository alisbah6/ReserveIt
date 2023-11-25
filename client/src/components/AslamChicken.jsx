import React, { useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { data, tableset } from './Restraunts';
import './Hotelpage.css';
import Table from '../assets/Table1.png';
import { Link, useParams, useNavigate } from 'react-router-dom';

var totalseats = 52;
var totalno;
function AslamChicken() {
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
      <form>
        <p>How Many seats Do you want?</p>
        <input type='number' id='seats' onChange={(e) => setseats(e.target.value)} ></input>
        <button onClick={() => handlesubmit()}>Confirm</button>
      </form>
      {resturant.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div className="branch-container">
              <div className='branch'>
                <p>Branches</p>
                <ul>
                  <Link to="/AslamChicken/6/ChandniChowk"><li>{item.b1}</li></Link>
                  <Link to="/AslamChicken/6/BatlaHouse"><li>{item.b2}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <div>
                <form onSubmit={(e)=>e.preventDefault()}>
                  <p>How Many seats Do you want?</p>
                  <input type='number' id='seats' onChange={(e) => setseats(e.target.value)} ></input>
                  <button onClick={() => handlesubmit()}>Confirm</button>
                </form>
                <button className='tablesetting' onClick={seatno} >
                  <img src={Table} className='tablesetting' alt='' />
                </button>
                <p className='loc'> Total No. Of Seats Available {totalseats}</p>
              </div>
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
            </div>
          </div>
        )
      })}
      <Footer />
    </div>
  );
}
export default AslamChicken;