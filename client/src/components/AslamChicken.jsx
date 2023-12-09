import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { data, tableset } from './Restraunts';
import './Hotelpage.css';
import Calendar from 'react-calendar';
import Table from '../assets/Table1.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

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
  const [selectedValue, setSelectedValue] = useState('');
  const [contact, setContact] = useState();
  const pattern = new RegExp(/^\d{1,10}$/);
  const [date, setDate] = useState(new Date());
  const { isLoggedIn } = useAuth();
  const onChange = (newDate) => {
    setDate(newDate);}
  const handlesubmit = () => {
    const result = window.confirm(`Do you Confirm ${seats} seats`);
    if (result === true) {
      totalno = totalseats - seats;
      totalseats = totalno;
      if (totalseats >= 0) {
        navigate(`/Menu/${seats}`);
      }
      else {
        alert("Sorry,Booking is Full \n SEE YOU NEXT BYE");
      }
      localStorage.setItem("seats", seats);
      localStorage.setItem("time", selectedValue);
      localStorage.setItem("date", date);
      localStorage.setItem("contact",contact);
    }
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
                  <Link to="/AslamChicken/6/ChandniChowk"><li>{item.b1}</li></Link>
                  <Link to="/AslamChicken/6/BatlaHouse"><li>{item.b2}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <button className='tablesetting' >
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
                {isLoggedIn ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                    <p className='want'>How Many seats Do you want?</p>
                    <div classname="buttonIn">
                      <input type="number" className="seats-inbox" id='seats' onChange={(e) => setseats(e.target.value)} ></input>
                    </div>
                    <br/>
                    <br/>
                    <div>
                      <Calendar
                        onChange={onChange}
                        value={date}/>
                    </div>
                    <div>
                      <select id="comboBox" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                        <option value="">-- Select a day --</option>
                        <option value="8am-9am">8am-9am</option>
                        <option value="9am-10am">9am-10am</option>
                        <option value="10am-11am">10am-11am</option>
                        <option value="11am-12am">11am-12am</option>
                        <option value="12am-1pm">12am-1pm</option>
                        <option value="1pm-2pm">1pm-2pm</option>
                        <option value="2pm-3pm">2pm-3pm</option>
                        <option value="3pm-4pm">3pm-4pm</option>
                        <option value="4pm-5pm">4pm-5pm</option>
                        <option value="5pm-6pm">5pm-6pm</option>
                        <option value="6pm-7pm">6pm-7pm</option>
                        <option value="7pm-8pm">7pm-8pm</option>
                      </select>
                    </div>
                    <div>
                    <p>Please Enter Your Contact Number</p>
                    <input type='number' id='contact' onChange={(e)=>{setContact(e.target.value);if(!pattern.test(e.target.value)&&e.target.value.length>=10)alert("Enter valid number");}}/>
                    </div>
                    <button type="submit" className='seat-button' onClick={handlesubmit}>Confirm</button>
                  </form>
                   ) : (
                    <p>Please log in to access this page.</p>
                  )}
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
export default AslamChicken