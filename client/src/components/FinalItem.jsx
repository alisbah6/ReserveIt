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
            "http : //localhost : 3500/user/submission",{
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
      <form className='font' id='makepdf'>
      <h1 className='cart'>ORDER DETAILS</h1>
      <div className='book_lable'>
      <label>Email : {UserEmail}</label>
      </div>
      <div className='book_lable'>
      <label>No.of.Seats : {Seat}</label>
      </div>
      <div className='book_lable'>
      <label>Items :  {item}</label>
      </div>
      <div className='book_lable'>
      <label>Time : {time}</label>
      </div>
      <div className='book_lable'>
      <label>Day : {date.substring(0, 16)}</label>
      </div>
      <div className='book_lable'>
      <label>Contact Number : {contact}</label>
      </div>
      <hr />
      <div className='book_lable'>
      <label>Please read the Terms And Conditon Below</label>
      </div>
      <div className='book_lable'>
      <input type='checkbox' id="myCheckbox" />
      <label className='book_lable'>The seats will be reserved for only 15-20 mins after that they will be cancelled.</label>
      </div>
      <div className='book_lable'>
      <input type='checkbox' id="myCheckbox2" />
      <label className='book_lable'>The amount will be paid at the restraunt only,no online payment available.</label>
      </div>
      <div className='book_lable'>
      <label>click the check box to confirm Terms And Conditon.</label>
      </div>
      </form>
      <button className='book_button' onClick={submit}>Book Now</button>
      <button className='book_button'>Download Pdf</button>
      <Link to='/Home'><button className='book_button' >Cancel</button></Link>
    </div>
  )
}

export default FinalItem