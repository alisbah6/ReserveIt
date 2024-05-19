import React, { useState } from 'react';
import './order-popup.css'
import { } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../user/AuthContext';

function OrderPopup() {
    const { isLoggedIn } = useAuth();
    const [contact, setcontact] = useState('+91');
    const [otp, setOtp] = useState('');
    console.log(typeof(seats));
    const [serverOtp, setServerOtp] = useState(null); 
    const sendOtp = async () => {
        const res = await axios.post('http://localhost:3500/sendotp', { contact: contact });
        alert('OTP has Sent to your phone number');
        setServerOtp(res.data.otp); // Save OTP for verification
    };

    const verifyOtp = () => {
        if (Number(otp) === serverOtp) {
            alert('Phone number verified!');
        } else {
            alert('Invalid OTP');
        }
    };
    const seat=localStorage.getItem("seats");
    return (
        <div>
            <div id="popup1" class="overlay" >
                <div class="popup">
                    {isLoggedIn ? (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <p className='want'>Total No. Of Seats Selected</p>
                            <div classname="buttonIn">
                                <input type="number" disabled="disabled" className="seats-inbox" id='seats' value={seat} ></input>
                            </div>
                            <div>
                                <p className='want'>Enter Your Contact Number</p>
                                <div className='phone-sign'>
                                    <input className='phone-sign-input' type="text"
                                        value={contact} onChange={(e) => setcontact(e.target.value)} placeholder="Enter phone number" />
                                    <div className='send-phone-otp'>
                                        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
                                        <button className='send-phone-otp-button' onClick={sendOtp}>Send OTP</button>
                                    </div>
                                    <button className='send-phone-verify-button' onClick={verifyOtp}>Verify OTP</button>
                                </div>
                            </div>
                            <a className="popup-close" href="##" onClick={(e) => { e.preventDefault(); window.history.go(-1); }}>&times;</a>
                        </form>
                    ) :  (
                          <p className='please-log'>Please login in this site for Booking.</p> 
                     ) }
                </div>
            </div >
        </div>

    )
}
export default OrderPopup