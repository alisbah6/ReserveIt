import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom';
import Navbar from '../nav-foot/Navbar';
import Footer from '../nav-foot/Footer';
import './Contact.css';
import moment from 'moment';
import axios from 'axios';
import { useState } from 'react';

function Contact() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to create a new user
      const response = await axios.post(
        "http://localhost:3500/user/feedback", {
        name,
        email,
        msg,
      }
      );
      if (response.status === 201) {
        // User registration was successful
        console.log("Feedback Successfull");
        console.log("Responded Data", response.data);
        navigate("/Popupcontact")
        // Redirect or perform other actions as needed
      }
    } catch (error) {
      // Handle registration errors
      console.error("Error in Feedback:", error);
      navigate("/Popupcontacterror", error)
    }
  };
  useEffect(() => {
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
    const interval = setInterval(() => {
      fetchFeedbackResponses()
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Navbar />
      <br></br>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='container-content'>
          <h1 className='heading-contact'>Contact Us</h1>
          <div className='feed-address'>
            <div className='contactInfo'>
              <div className='box-one'>
                <p className='font-user'><i class="fas fa-location"></i> Address</p>
                <p className='font-comment'>New Delhi 110013</p>
              </div>
              <div className='box-one'>
                <p className='font-user'><i className='fa fa-phone'></i> Phone</p>
                <p className='font-comment'>011 41827498</p>
              </div>
              <div className='box-one'>
                <p className='font-user'><i class="fa fa-envelope"></i> Email</p>
                <p className='font-comment'>alisbahhina@gmail.com</p>
              </div>
            </div>
            <div className='feedInfo'>
              <h3 className='send-feed'>Send Feedback/Message</h3>
              <input className='feed' placeholder='Full Name' id="name" onChange={(e) => { setName(e.target.value); }} />
              <input className='feed' placeholder='Email' id="email" onChange={(e) => { setEmail(e.target.value); }} />
              <textarea className='info' placeholder='Type your message' id="msg" onChange={(e) => { setMsg(e.target.value); }} />
              <button className='button_feed' onClick={submit}>Send</button>
            </div>
        </div>
        <ul className='feedback-comment'>
        <h1 className='heading-contact'>Feedbacks</h1>
          {records.slice().reverse().map(record => (
            <li className='comment' key={record.id}>
              <p className='font-user'><i class="fa-solid fa-circle-user"></i> {record.name}</p>
              <p className='font-time'>{moment(record.postedOn).fromNow()}</p>
              <p className='font-comment'>{record.msg}</p>
              </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
