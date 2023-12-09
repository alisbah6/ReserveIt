import React from 'react'
import './FinalItem.css'
import { Link } from 'react-router-dom';
const FinalItem = () => {
  const User=localStorage.getItem(1);
  const Seat = localStorage.getItem("seats");
  const item = localStorage.getItem("item");
  const time = localStorage.getItem("time");
  const date = localStorage.getItem("date");
  const contact = localStorage.getItem("contact");

  const confirmsubmit = () => {
    var checkbox = document.getElementById('myCheckbox');
    var checkboxtwo = document.getElementById('myCheckbox2');

    if (checkbox.checked && checkboxtwo.checked) {
      alert("Booking has been confirmed")
      //pdf function over here
      checkbox.checked = false;
      checkboxtwo.checked = false;
    } else {
      window.confirm("Please agree to T&C to proceed");
    }
  }

  return (
    <div className='items'>
      <form>
      <p>Email:{User}</p>
      <p>Contact Number:{contact}</p>
      <p>Day:{date.substring(0, 16)}</p>
      <p>Time:{time}</p>
      <p>No.of.Seats:{Seat}</p>
      <p>Items: {item}</p>
      <p>Please read the Terms And Conditon Below</p>
      <hr />
      <input type='checkbox' id="myCheckbox" />
      <p>The seats will be reserved for only 15-20 mins after that they will be cancelled</p>
      <input type='checkbox' id="myCheckbox2" />
      <p>The amount will be paid at the restraunt only,no online payment available</p>
      <p>As a comment click the check box to confirm</p>
      </form>
      <button onClick={confirmsubmit}>Book Now</button>
      <Link to='/Home'><button>Cancel</button></Link>

    </div>
  )
}

export default FinalItem