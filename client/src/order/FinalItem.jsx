import React from 'react'
import './FinalItem.css'
import axios from "axios";
import {useRef } from "react";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
const FinalItem = () => {
  const pdfRef = useRef();
  const UserEmail = localStorage.getItem(1);
  const Restraunt= localStorage.getItem("restraunt");
  const BranchName=localStorage.getItem("branch name");
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
        "http://localhost:3500/user/submission", {
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

    const downloadpdf = () => {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) =>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf('p','mm','a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('Booking.pdf');
      });
    }
    const cancelorder=()=>{
      localStorage.removeItem("restraunt");
      localStorage.removeItem("branch name"); 
      localStorage.removeItem("seats");
       localStorage.removeItem("item");
   localStorage.removeItem("time");
  localStorage.removeItem("date");
  localStorage.removeItem("contact");

      // Redirect the user to the Home page
      window.location.href = '/Home';
    }

    return (
      <div className='items'>
        <form className='font' ref={pdfRef}>
          <h1 className='cart'>ORDER DETAILS</h1>
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
        <button className='book_button' onClick={downloadpdf}>Download Pdf</button>
        <button className='book_button' onClick={cancelorder} >Cancel</button>
      </div>
    )
  }

  export default FinalItem