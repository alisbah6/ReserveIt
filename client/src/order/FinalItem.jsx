import React, { useState, useEffect } from 'react'
import './FinalItem.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useRef } from "react";
import {useNavigate } from 'react-router-dom';

const FinalItem = () => {
  const pdfRef = useRef();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({ 
     Restraunt: localStorage.getItem("restraunt"),
   BranchName : localStorage.getItem("branch name"),
   Seat : localStorage.getItem("seats"),
   item : localStorage.getItem("item"),
   time : localStorage.getItem("time"),
   date : localStorage.getItem("date"),
   contact : localStorage.getItem("contact")});

  const [OrderId, setOrderId] = useState('');
  // Function to generate a random 10-digit number
  function generateOrderId() {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    setOrderId(randomNumber.toString());
  }
  useEffect(() => {
    generateOrderId();
  }, []);
  const UserEmail = localStorage.getItem(1);
  const Restraunt = localStorage.getItem("restraunt");
  const BranchName = localStorage.getItem("branch name");
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
        "http://localhost:3500/user/booking", {
        OrderId,
        Restraunt,
        BranchName,
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
        alert("Booking has been confirmed");
        const emailResponse = await axios.post('http://localhost:3500/send_ticket_email', { userEmail: UserEmail, ticket });
        console.log(emailResponse.data);
        navigate(`/Done`);
      }
    } catch (error) {
      // Handle registration errors
      console.error("Error in Submission", error);
      alert("Server is low");
    }
    var checkbox = document.getElementById('myCheckbox');
    var checkboxtwo = document.getElementById('myCheckbox2');

    if (checkbox.checked && checkboxtwo.checked) {
      // alert("Booking has been confirmed")
      //pdf function over here
      checkbox.checked = false;
      checkboxtwo.checked = false;
    } else {
      window.confirm("Please agree to T&C to proceed");
    }

  };
  // const done=async(e)=>{
  //   e.preventDefault();
  //   try {
  //     const emailResponse = await axios.post('http://localhost:3500/send_ticket_email', { userEmail: UserEmail, ticket });
  //       console.log(emailResponse.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className='items'>
      <form className='font' ref={pdfRef} >
        <h1 className='cart'>ORDER DETAILS</h1>
        <div className='book_lable'>
          <label>OrderId: #{OrderId}</label>
        </div>
        <div className='book_lable'>
          <label>{Restraunt}</label>
        </div>
        <div className='book_lable'>
          <label>Branch: {BranchName}</label>
        </div>
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
      </form>
      <form>
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
      {/* <button className='book_button' onClick={done}>Done</button> */}
      <Link to='/Home'><button className='book_button' >Cancel</button></Link>
    </div>
  )
}

export default FinalItem
