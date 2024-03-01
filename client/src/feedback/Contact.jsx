import React, { useEffect } from 'react'
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
import './Contact.css';
import axios from 'axios';
import { useState } from 'react';

function Contact() {
  const [records,setRecords]=useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
        // Make an API request to create a new user
        const response = await axios.post(
            "http://localhost:3500/user/feedback",{
            name,
            email,
            msg,}
        );
        if (response.status === 201) {
            // User registration was successful
            console.log("Feedback Successfull");
            console.log("Responded Data",response.data);
            // Redirect or perform other actions as needed
        }
    } catch (error) {
        // Handle registration errors
        console.error("Error in Feedback:", error);
    }
};
useEffect(()=>{
  const fetchFeedbackResponses = async () => {
    try {
        const response = await axios.get("http://localhost:3500/user/feedbacks");
        if (response.status === 200) {
            // Return the array of feedback responses
            setRecords(response.data);
            localStorage.setItem('feedbackRecords', JSON.stringify(response.data));
        }
    } catch (error) {
        console.error("Error fetching feedback responses:", error);
    }
  };
  const cachedRecords = localStorage.getItem('feedbackRecords');
    if (cachedRecords) {
      // If cached records exist, parse and set them into state
      setRecords(JSON.parse(cachedRecords));
    } else {
      // If no cached records, fetch them
      fetchFeedbackResponses();
    }
  const interval=setInterval(()=>{
     fetchFeedbackResponses()
      },100)
  return()=>clearInterval(interval)   
},[])


  return (
    <div className='bg'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Navbar />
      <div className='container-content'>
        <div style={{ backgroundImage: 'url("client/src/assets/contact.jpg")' }}>
          <h1 className='heading-contact'>Contact Us</h1>
          <div className='contact-deatils'>
            <div className='contactInfo'>
              <div className='box-one'>
                <h4><i class="fas fa-location"></i>Address</h4>
                <p>New Delhi 110013</p>
              </div>
              <div className='box-one'>
                <h4><i className='fa fa-phone'></i>Phone</h4>
                <p>011 41827498</p>
              </div>
              <div className='box-one'>
                <h4><i class="fa fa-envelope"></i>Email</h4>
                <p>alisbahhina@gmail.com</p>
              </div>
            </div>
            <div>
            </div>
            <ul>
        {records.map(record => (
          <li key={record.id}>{record.msg}</li>
        ))}
      </ul>
            <div className='feedInfo'>
              <div className='box-two'>
                <h4>Send Feedback/Message</h4>
                <br />
                <input className='feed' placeholder='Full Name' id="name" onChange={(e)=>{ setName(e.target.value);}} />
                <br />
                <input className='feed' placeholder='Email' id="email" onChange={(e)=>{setEmail(e.target.value);}} />
                <br />
                <input className='info' placeholder='Type your message' id="msg" onChange={(e)=>{setMsg(e.target.value);}}/>
                <br />
                <button className='send' onClick={submit}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
export default Contact;
