import React, { useState } from 'react';
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
import { data, tableset } from '../components/Restraunts';
import './Hotelpage.css';
import Table from '../assets/Table1.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../user/AuthContext';
import Calendar from 'react-calendar';
var totalseats = 52;
var totalno;
function SagarRatna() {
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
    setDate(newDate);
  }
  const handlesubmit = () => {
    const result = window.confirm(`Do you Confirm ${seats} seats`);
    if (result === true) {
      totalno = totalseats - seats;
    }
    totalseats = totalno;
    if (totalseats >= 0) {
      navigate(`/Selectionmenu/${seats}`);
    }
    else {
      alert("Sorry,Booking is Full \n SEE YOU NEXT BYE");
    }
    localStorage.setItem("seats", seats);
    localStorage.setItem("time", selectedValue);
    localStorage.setItem("date", date);
    localStorage.setItem("contact", contact);
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
                <p className='b'>Branches</p>
                <ul>
                  <Link className='branch_sub' to="/SagarRatna/1/DefenceColony"><li>{item.b1}</li></Link>
                  <Link className='branch_sub' to="/SagarRatna/1/PreetVihar"><li>{item.b2}</li></Link>
                  <Link className='branch_sub' to="/SagarRatna/1/MasjidMoth"><li>{item.b3}</li></Link>
                  <Link className='branch_sub' to="/SagarRatna/1/NarainaVihar"><li>{item.b4}</li></Link>
                  <Link className='branch_sub' to="/SagarRatna/1/PaschimVihar"><li>{item.b5}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <button className='tablesetting'>
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
                      <p className='available'> Total No. Of Seats Available {totalseats}</p>
                      <br />
                      <br />
                      <div className='calender'>
                        <Calendar
                          onChange={onChange}
                          value={date} />
                      </div>
                      <p className='text-center'>
                        <span className='bold'>Selected Date:</span>{' '}
                        {date.toDateString()}
                      </p>
                      <div>
                        <select className="combobox" id="comboBox" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                          <option value="">-- Select a timing --</option>
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
                        <p className='want'>Enter Your Contact Number</p>
                        <input className="seats-inbox" id='contact' onChange={(e) => { setContact(e.target.value); if (!pattern.test(e.target.value) && e.target.value.length >= 10) alert("Enter valid number"); }} />
                      </div>
                      <button type="submit" className='seat-button' onClick={handlesubmit}>Confirm</button>
                      <a className="popup-close" href="#popup-close">&times;</a>
                    </form>
                  ) : (
                    <p>Please login in this site for Booking.</p>
                  )}
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
export default SagarRatna;