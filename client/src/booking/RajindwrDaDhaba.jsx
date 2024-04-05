import React, { useState,useEffect } from 'react';
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
function RajindwrDaDhaba() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  const bname = params.bname;
  const branches = tableset.filter(branch => branch.bname === bname);
  const navigate = useNavigate();
  const [seats, setseats] = useState();
  const [restaurantName, setRestaurantName] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [contact, setContact] = useState();
  const pattern = new RegExp(/^\d{1,10}$/);
  const [date, setDate] = useState(new Date());
  const { isLoggedIn } = useAuth();
  const onChange = (newDate) => {
    setDate(newDate);}
    useEffect(() => {
      // Find the restaurant data corresponding to the id
      const restaurant = data.find(res => res.id === params.id);
      if (restaurant) {
        setRestaurantName(restaurant.name);
      }
    }, [params.id]);
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
    localStorage.setItem("restraunt",restaurantName);
      localStorage.setItem("branch name",bname);
    localStorage.setItem("seats", seats);
    localStorage.setItem("time", selectedValue);
    localStorage.setItem("date", date);
    localStorage.setItem("contact",contact);
  }

  const [selectedSeat, setSelectedSeat] = useState([]);

  const TableSelected = (id, seat_value) => {
    setSelectedSeat((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(id)) {
        // If already selected, remove it (deselect)
        setseats(prevTotalSeats => prevTotalSeats - seat_value);
        return prevSelectedSeats.filter(seat => seat !== id);
      } else {
        // If not selected, add it to the array (select)
        // Here, you could also enforce a limit on the number of selectable seats
        setseats(prevTotalSeats => prevTotalSeats + seat_value);
        return [...prevSelectedSeats, id];
      }
    });
    console.log(seat_value);
  };
 
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
                  <Link className='branch_sub'  activeClassName='is-active' to="/RajinderDaDhaba/4/Safdarjung"><li>{item.b1}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <div className='hotel-design'>
                <div className='face back-face'>
                  <div className='seating'>
                    <div className='eight-flex'>
                      <div className='eight-one'>
                        <div className='order-booking' onClick={() => TableSelected('seatA', 8)}>
                          <div className='top-flex'>
                            <div className='chair-top' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            <div className='chair-top' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                          </div>
                          <div className='flex'>
                            <div>
                              <div className='chair-left' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='table-eight' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            </div>
                            <div>
                              <div className='chair-right' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            </div>
                          </div>
                          <div className='bottom-flex'>
                            <div className='chair-bottom' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
                            <div className='chair-bottom' id="seatA" style={{ backgroundColor: selectedSeat.includes('seatA') ? 'green' : '' }}></div>
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
                              <div className='chair-top' id="seatM" style={{ backgroundColor: selectedSeat.includes('seatM') ? 'green' : '' }}></div>
                            </div>
                            <div className='flex'>
                              <div>
                                <div className='chair-left' id="seatM" style={{ backgroundColor: selectedSeat.includes('seatM') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='table-four' id="seatM" style={{ backgroundColor: selectedSeat.includes('seatM') ? 'green' : '' }}></div>
                              </div>
                              <div>
                                <div className='chair-right' id="seatM" style={{ backgroundColor: selectedSeat.includes('seatM') ? 'green' : '' }}></div>
                              </div>
                            </div>
                            <div className='bottom-flex'>
                              <div className='chair-bottom' id="seatM" style={{ backgroundColor: selectedSeat.includes('seatM') ? 'green' : '' }}></div>
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
export default RajindwrDaDhaba;