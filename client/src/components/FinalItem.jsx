import React from 'react'
import './FinalItem.css'
import { Link } from 'react-router-dom';
import axios from "axios";
const FinalItem = () => {
  const UserEmail=localStorage.getItem(1);
  const Seat = localStorage.getItem("seats");
  const item = localStorage.getItem("item");
  const time = localStorage.getItem("time");
  const date = localStorage.getItem("date");
  const contact = localStorage.getItem("contact");
  const submit = async (e) => {
    e.preventDefault();
    try {
        // Make an API request to create a new user
        const response = await axios.post(
            "http://localhost:3500/user/submission",{
            UserEmail,
            Seat,
            item,
            time,
            date,
            contact,
          }
        );

        if (response.status === 201) {
            // User registration was successful
            console.log("Data Submitted Successfull");
            // Redirect or perform other actions as needed
        }
    } catch (error) {
        // Handle registration errors
        console.error("Error in Submission", error);
    }
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
};

  return (
    <div className='items'>
      <form>
      <p>Email:{UserEmail}</p>
      <p>No.of.Seats:{Seat}</p>
      <p>Items: {item}</p>
      <p>Time:{time}</p>
      <p>Day:{date.substring(0, 16)}</p>
      <p>Contact Number:{contact}</p>
      <p>Please read the Terms And Conditon Below</p>
      <hr />
      <input type='checkbox' id="myCheckbox" />
      <p>The seats will be reserved for only 15-20 mins after that they will be cancelled</p>
      <input type='checkbox' id="myCheckbox2" />
      <p>The amount will be paid at the restraunt only,no online payment available</p>
      <p>As a comment click the check box to confirm</p>
      </form>
      <button onClick={submit}>Book Now</button>
      <Link to='/Home'><button>Cancel</button></Link>

    </div>
  )
}

export default FinalItem