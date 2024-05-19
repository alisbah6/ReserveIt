import React, { useState, useEffect,useRef } from 'react';
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
import { data, tableset } from '../components/Restraunts';
import './Hotelpage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../user/AuthContext';
import axios from 'axios';
import { auth } from './firebase.config';
import { RecaptchaVerifier } from "firebase/auth";

var totalseats = 52;
var totalno;
function AslamChicken() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  const bname = params.bname;
  const branches = tableset.filter(branch => branch.bname === bname);
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [seats, setseats] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [restaurantName, setRestaurantName] = useState(null);
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const { isLoggedIn } = useAuth();
  const initialSelection = useRef(true);
  const [contact, setContact] = useState("+91");
  const [OTP, setOTP] = useState('');


  // const submit=()=>{
  //   navigate("/OrderPopup",{state:{seats}})
  //   console.log(seats)
  // }

  const onCaptchverify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
        },
        'expired-callback': () => {
        }

      }, auth);
    }
  }


  const onChange = (date) => {
    setDate(date);
    setShowCalendar(false);
  }
  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  

  useEffect(() => {
    // Find the restaurant data corresponding to the id
    const restaurant = data.find(res => res.id === params.id);
    if (restaurant) {
      setRestaurantName(restaurant.name);
    }
  }, [params.id]);

  const handleChange = (e) => {
    if (initialSelection.current) {
      initialSelection.current = false;
    } else {
      window.location.reload();
    }
    setSelectedValue(e.target.value);
  };

  const handlesubmit = () => {
    const result = window.confirm(`Do you Confirm ${seats} seats`);
    if (result === true) {
      totalno = totalseats - seats;
      totalseats = totalno;
      if (totalseats >= 0) {
        navigate(`/Selectionmenu/${seats}`);
      } else {
        alert("Sorry,Booking is Full \n SEE YOU NEXT BYE");
      }
      localStorage.setItem("restraunt", restaurantName);
      localStorage.setItem("branch name", bname);
      localStorage.setItem("seats", seats);
      localStorage.setItem("time", selectedValue);
      localStorage.setItem("date", date);
      localStorage.setItem("contact", contact);
    }
  }
  const [selectedSeat, setSelectedSeat] = useState([]);
  const settingItems=()=>{
    localStorage.setItem("restraunt", restaurantName);
      localStorage.setItem("branch name", bname);
      localStorage.setItem("time", selectedValue);
      localStorage.setItem("seats", seats);
      localStorage.setItem("date", date);
  }
// Fetch bookings whenever selectedDate or selectedTime changes

const fetchAllResponses = async () => {
  try {
    const response = await axios.get("http://localhost:3500/user/Allrecords");
    if (response.status === 200) {
      // Return the array of feedback responses
      setEntries(response.data);
      localStorage.setItem('AllResponses', JSON.stringify(response.data));
    }
  } catch (error) {
    console.error("Error fetching All responses:", error);
  }
};
useEffect(() => {
  fetchAllResponses()
}, [])
const groupOrdersByDate = () => {
  const groupedOrders = {};
  entries.forEach(order => {
    const rest_name=order.Restraunt;
    const branch=order.BranchName;
    const orderDate = new Date(order.date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const inputDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'short', 
      month: 'short',   
      day: 'numeric',   
      year: 'numeric'  
    });
    const seatbooked=[order.id];
    const orderTime = order.time;
    if (rest_name === restaurantName && branch === bname &&orderDate === inputDate && orderTime===selectedValue) {
      if (!groupedOrders[orderDate]) {
        groupedOrders[orderDate] = [];
      }
      groupedOrders[orderDate].push(order);
      console.log(seatbooked);
      const seatElements = document.querySelectorAll(`[id="${seatbooked}"]`);
      if (seatElements.length > 0) {
        seatElements.forEach(seatEl=> {
          seatEl.classList.add("disabled"); // a CSS class to disable the seat
        })
      };
    }
});
return { groupedOrders};
};
const isSeatDisabled = (id) => {
  const seatElement = document.getElementById(id);
  return seatElement && seatElement.classList.contains("disabled");
};
const TableSelected = (id, seat_value) => {
  if (isSeatDisabled(id)) {
    return false; // Seat is disabled, return false
  }
  setSelectedSeat((prevSelectedSeats) => {
    if (prevSelectedSeats.includes(id)) {
      // If already selected, remove it (deselect)
      setseats(prevTotalSeats => prevTotalSeats - seat_value);
      localStorage.removeItem("id");
      return prevSelectedSeats.filter(seat => seat !== id);
    } else {
      // If not selected, add it to the array (select)
      // Here, you could also enforce a limit on the number of selectable seats
      setseats(prevTotalSeats => prevTotalSeats + seat_value);
      localStorage.setItem("id", id);
      return [...prevSelectedSeats, id];
    }
  });

  return true; // Seat is not disabled, return true
};
useEffect(()=>{  groupOrdersByDate()
})

const seatStyle = (seatId) => ({
  backgroundColor: selectedSeat.includes(seatId) ? 'green' : '',
});
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
                <nav className='nav'>
                  <NavLink activeClassName='active' className='branch_sub' to="/AslamChicken/6/ChandniChowk">{item.b1}</NavLink>
                  <NavLink className='branch_sub' to="/AslamChicken/6/BatlaHouse">{item.b2}</NavLink>
                </nav>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <div className='fliter-time-date'>
                <div>
                  <button className='calender' onClick={handleClick}>{showCalendar ? 'Select the date' : (date ? date.toDateString() : "-- Select the date --")}
                    {/* show the selected date on the button */}</button>
                  {showCalendar && (
                    <Calendar
                      onChange={onChange}
                      minDate={new Date()}
                      value={date || new Date()}
                    />
                  )}
                </div>
                <div>
                  <select className="combobox" id="comboBox" value={selectedValue} onChange={handleChange}  disabled={!date}>
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
              </div>
              <div>
              </div>
              <div className='hotel-design'>
                <div className='face back-face'>
                  <div className='seating'>
                    <div className='eight-flex'>
                      <div className='eight-one'>
                        <div className='order-booking' onClick={() => TableSelected('seatA', 8)}>
                          <div className='top-flex'>
                            <div className='chair-top' id="seatA" style={seatStyle('seatA')}></div>
                            <div className='chair-top' id="seatA" style={seatStyle('seatA')}></div>
                            <div className='chair-top' id="seatA" style={seatStyle('seatA')}></div>
                          </div>
                          <div className='flex'>
                            <div>
                              <div className='chair-left' id="seatA" style={seatStyle('seatA')}></div>
                            </div>
                            <div>
                              <div className='table-eight' id="seatA" style={seatStyle('seatA')}></div>
                            </div>
                            <div>
                              <div className='chair-right' id="seatA" style={seatStyle('seatA')}></div>
                            </div>
                          </div>
                          <div className='bottom-flex'>
                            <div className='chair-bottom' id="seatA" style={seatStyle('seatA')}></div>
                            <div className='chair-bottom' id="seatA" style={seatStyle('seatA')}></div>
                            <div className='chair-bottom' id="seatA" style={seatStyle('seatA')}></div>
                          </div>
                        </div>
                        <div className='wall-one'></div>
                        <div className='order-booking' onClick={() => TableSelected('seatE', 8)}>
                          <div className='top-flex'>
                            <div className='chair-top' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                          </div>
                          <div className='flex'>
                            <div>
                              <div className='chair-left' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='table-eight' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='chair-right' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='bottom-flex'>
                            <div className='chair-bottom' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatE" style={{ backgroundColor: selectedSeat.includes('seatE') ? 'green' : '' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className='gate'></div>
                      <div className='eight-two'>
                        <div className='order-booking' onClick={() => TableSelected('seatI', 8)}>
                          <div className='top-flex'>
                            <div className='chair-top' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                          </div>
                          <div className='flex'>
                            <div>
                              <div className='chair-left' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='table-eight' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='chair-right' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='bottom-flex'>
                            <div className='chair-bottom' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatI" style={{ backgroundColor: selectedSeat.includes('seatI') ? 'green' : '' }}></div>
                          </div>
                        </div>
                        <div className='wall'></div>
                        <div className='order-booking' onClick={() => TableSelected('seatJ', 8)}>
                          <div className='top-flex'>
                            <div className='chair-top' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                          </div>
                          <div className='flex'>
                            <div>
                              <div className='chair-left' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='table-eight' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='chair-right' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='bottom-flex'>
                            <div className='chair-bottom' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatJ" style={{ backgroundColor: selectedSeat.includes('seatJ') ? 'green' : '' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='middel-flex'>
                      <div>
                        <div className='four-wall'>
                          <div className='order-booking' onClick={() => TableSelected('seatB', 6)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                              <div className='chair-top' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-six' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                              <div className='chair-bottom' id="seatB" style={{ backgroundColor: selectedSeat.includes('seatB') ? 'green' : '' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className='four-wall'>
                          <div className='order-booking' onClick={() => TableSelected('seatF', 6)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                              <div className='chair-top' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-six' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                              <div className='chair-bottom' id="seatF" style={{ backgroundColor: selectedSeat.includes('seatF') ? 'green' : '' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className='four-wall-down'>
                          <div className='order-booking' onClick={() => TableSelected('seatG', 6)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                              <div className='chair-top' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-six' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                              <div className='chair-bottom' id="seatG" style={{ backgroundColor: selectedSeat.includes('seatG') ? 'green' : '' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='three-seat'>
                        <div className='three-seat-center'>
                          <div className='order-booking-four' onClick={() => TableSelected('seatC', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatC" style={{ backgroundColor: selectedSeat.includes('seatC') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatC" style={{ backgroundColor: selectedSeat.includes('seatC') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatC" style={{ backgroundColor: selectedSeat.includes('seatC') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatC" style={{ backgroundColor: selectedSeat.includes('seatC') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatC" style={{ backgroundColor: selectedSeat.includes('seatC') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='order-booking-four' onClick={() => TableSelected('seatK', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatK" style={{ backgroundColor: selectedSeat.includes('seatK') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatK" style={{ backgroundColor: selectedSeat.includes('seatK') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatK" style={{ backgroundColor: selectedSeat.includes('seatK') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatK" style={{ backgroundColor: selectedSeat.includes('seatK') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatK" style={{ backgroundColor: selectedSeat.includes('seatK') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='order-booking-four' onClick={() => TableSelected('seatL', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatL" style={{ backgroundColor: selectedSeat.includes('seatL') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatL" style={{ backgroundColor: selectedSeat.includes('seatL') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatL" style={{ backgroundColor: selectedSeat.includes('seatL') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatL" style={{ backgroundColor: selectedSeat.includes('seatL') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatL" style={{ backgroundColor: selectedSeat.includes('seatL') ? 'green' : '' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className='wall-wall'></div>
                        <div className='three-seat-center'>
                          <div className='order-booking-four' onClick={() => TableSelected('seatM', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatM" style={seatStyle('seatM')}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatM" style={seatStyle('seatM')}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatM" style={seatStyle('seatM')}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatM" style={seatStyle('seatM')}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatM" style={seatStyle('seatM')}></div>
                            </div>
                          </div>
                          <div className='order-booking-four' onClick={() => TableSelected('seatN', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatN" style={{ backgroundColor: selectedSeat.includes('seatN') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatN" style={{ backgroundColor: selectedSeat.includes('seatN') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatN" style={{ backgroundColor: selectedSeat.includes('seatN') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatN" style={{ backgroundColor: selectedSeat.includes('seatN') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatN" style={{ backgroundColor: selectedSeat.includes('seatN') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='order-booking-four' onClick={() => TableSelected('seatO', 4)}>
                            <div className='top-flex'>
                              <div className='chair-top' id="seatO" style={{ backgroundColor: selectedSeat.includes('seatO') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatO" style={{ backgroundColor: selectedSeat.includes('seatO') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatO" style={{ backgroundColor: selectedSeat.includes('seatO') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatO" style={{ backgroundColor: selectedSeat.includes('seatO') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatO" style={{ backgroundColor: selectedSeat.includes('seatO') ? 'green' : '' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className='three-seat-two'>
                          <div className='three-seat-center'>
                            <div className='order-booking-four' onClick={() => TableSelected('seatP', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatP" style={{ backgroundColor: selectedSeat.includes('seatP') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatP" style={{ backgroundColor: selectedSeat.includes('seatP') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatP" style={{ backgroundColor: selectedSeat.includes('seatP') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatP" style={{ backgroundColor: selectedSeat.includes('seatP') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatP" style={{ backgroundColor: selectedSeat.includes('seatP') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatQ', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatQ" style={{ backgroundColor: selectedSeat.includes('seatQ') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatQ" style={{ backgroundColor: selectedSeat.includes('seatQ') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatQ" style={{ backgroundColor: selectedSeat.includes('seatQ') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatQ" style={{ backgroundColor: selectedSeat.includes('seatQ') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatQ" style={{ backgroundColor: selectedSeat.includes('seatQ') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatR', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatR" style={{ backgroundColor: selectedSeat.includes('seatR') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatR" style={{ backgroundColor: selectedSeat.includes('seatR') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatR" style={{ backgroundColor: selectedSeat.includes('seatR') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatR" style={{ backgroundColor: selectedSeat.includes('seatR') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatR" style={{ backgroundColor: selectedSeat.includes('seatR') ? 'green' : '' }}></div>
                              </div>
                            </div>
                          </div>
                          <div className='wall-wall'></div>
                          <div className='three-seat-center'>
                            <div className='order-booking-four' onClick={() => TableSelected('seatS', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatS" style={{ backgroundColor: selectedSeat.includes('seatS') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatS" style={{ backgroundColor: selectedSeat.includes('seatS') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatS" style={{ backgroundColor: selectedSeat.includes('seatS') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatS" style={{ backgroundColor: selectedSeat.includes('seatS') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatS" style={{ backgroundColor: selectedSeat.includes('seatS') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatT', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatT" style={{ backgroundColor: selectedSeat.includes('seatT') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatT" style={{ backgroundColor: selectedSeat.includes('seatT') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatT" style={{ backgroundColor: selectedSeat.includes('seatT') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatT" style={{ backgroundColor: selectedSeat.includes('seatT') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatT" style={{ backgroundColor: selectedSeat.includes('seatT') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatW', 4)}>
                              <div className='top-flex'>
                                <div className='chair-top' id="seatW" style={{ backgroundColor: selectedSeat.includes('seatW') ? 'green' : '' }}></div>
                              </div>
                              <div className='flex'>
                                <div>
                                  <div className='chair-left' id="seatW" style={{ backgroundColor: selectedSeat.includes('seatW') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-four' id="seatW" style={{ backgroundColor: selectedSeat.includes('seatW') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right' id="seatW" style={{ backgroundColor: selectedSeat.includes('seatW') ? 'green' : '' }}></div>
                                </div>
                              </div>
                              <div className='bottom-flex'>
                                <div className='chair-bottom' id="seatW" style={{ backgroundColor: selectedSeat.includes('seatW') ? 'green' : '' }}></div>
                              </div>
                            </div>
                          </div>
                          <div className='flex-for-two'>
                            <div className='order-booking-four' onClick={() => TableSelected('seatD', 2)}>
                              <div className='flex-two'>
                                <div>
                                  <div className='chair-left' id="seatD" style={{ backgroundColor: selectedSeat.includes('seatD') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-two' id="seatD" style={{ backgroundColor: selectedSeat.includes('seatD') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right-two' id="seatD" style={{ backgroundColor: selectedSeat.includes('seatD') ? 'green' : '' }}></div>
                                </div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatU', 2)}>
                              <div className='flex-two'>
                                <div>
                                  <div className='chair-left' id="seatU" style={{ backgroundColor: selectedSeat.includes('seatU') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-two' id="seatU" style={{ backgroundColor: selectedSeat.includes('seatU') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right-two' id="seatU" style={{ backgroundColor: selectedSeat.includes('seatU') ? 'green' : '' }}></div>
                                </div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatV', 2)}>
                              <div className='flex-two'>
                                <div>
                                  <div className='chair-left' id="seatV" style={{ backgroundColor: selectedSeat.includes('seatV') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-two' id="seatV" style={{ backgroundColor: selectedSeat.includes('seatV') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right-two' id="seatV" style={{ backgroundColor: selectedSeat.includes('seatV') ? 'green' : '' }}></div>
                                </div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatX', 2)}>
                              <div className='flex-two'>
                                <div>
                                  <div className='chair-left' id="seatX" style={{ backgroundColor: selectedSeat.includes('seatX') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-two' id="seatX" style={{ backgroundColor: selectedSeat.includes('seatX') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right-two' id="seatX" style={{ backgroundColor: selectedSeat.includes('seatX') ? 'green' : '' }}></div>
                                </div>
                              </div>
                            </div>
                            <div className='order-booking-four' onClick={() => TableSelected('seatY', 2)}>
                              <div className='flex-two'>
                                <div>
                                  <div className='chair-left' id="seatY" style={{ backgroundColor: selectedSeat.includes('seatY') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='table-two' id="seatY" style={{ backgroundColor: selectedSeat.includes('seatY') ? 'green' : '' }}></div>
                                </div>
                                <div>
                                  <div className='chair-right-two' id="seatY" style={{ backgroundColor: selectedSeat.includes('seatY') ? 'green' : '' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='group-room'>
                      <div className='washroom'>
                        <h3>Washroom</h3>
                      </div>
                      <div className='wall'></div>
                      <div className='kitchen'>
                        <h3>Kitchen</h3>
                      </div>
                    </div>
                  </div>
                </div>
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
              <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
              <button onClick={""}>Send OTP</button>
              <input type="text" value={OTP} onChange={(e) => setOTP(e.target.value)} />
              <button onClick={""}>Verify OTP</button>
              {/* <Link className='book_button' to={{pathname:"/OrderPopup",state:{seats:seats}}}>Seat Reservation</Link> */}
              <a className="popup-open" href="#popup-open">Seat Reservation</a>
              <div id="popup-open" className="modal">
                <div className="popup_booking">
                  {isLoggedIn ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                      <p className='want'>Total No. Of Seats Selected</p>
                      <div classname="buttonIn">
                        <input type="number" disabled="disabled" className="seats-inbox" id='seats' value={seats}></input>
                      </div>
                      <div>
                        {/* <p className='want'>Enter Your Contact Number</p>
                        <div className='phone-sign'>
                          <input className='phone-sign-input' type="text"
                            value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter phone number" />
                          <div className='send-phone-otp'>
                            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
                            <button className='send-phone-otp-button'>Send OTP</button>
                          </div>
                          <button className='send-phone-verify-button' onClick={verifyOtp}>Verify OTP</button>
                        </div> */}
                      </div>
                      <button type="submit" className='seat-button' onClick={handlesubmit}>Confirm</button>
                      <a className="popup-close" href="#popup-close">&times;</a>
                    </form>
                  ) : (
                    <p className='please-log'>Please login in this site for Booking.</p>
                  )}
                  <a className="popup-close" href="#popup-close">&times;</a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <Footer />
    </div >
  );
}
export default AslamChicken
