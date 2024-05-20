import React, { useState } from 'react';
import './order-popup.css'
import { } from 'react-router-dom'
import { useAuth } from '../user/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



function OrderPopup() {
    const { isLoggedIn } = useAuth();
    const [contact, setContact] = useState('+91');
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [message, setMessage] = useState('');

    const firebaseConfig = {
        apiKey: "AIzaSyCC3sbdu-YUV6Tokc-bdISrG7ceWpIxI7E",
        authDomain: "otpr-28466.firebaseapp.com",
        projectId: "otpr-28466",
        storageBucket: "otpr-28466.appspot.com",
        messagingSenderId: "562927401690",
        appId: "1:562927401690:web:af10f3c7418adc817e83e3"

    };

    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleSendCode = async () => {
        try {
            const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                size: 'invisible',
            });
            const confirmation = await firebase.auth().signInWithPhoneNumber(contact, recaptchaVerifier);
            setVerificationId(confirmation.verificationId);
            setMessage('Verification code sent to your phone.');
            localStorage.setItem("contact", contact);
        } catch (error) {
            console.error('Error sending code:', error);
            setMessage('Error sending code. Please try again.');
        }
    };

    const handleVerifyCode = async () => {
        try {
            const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
            await firebase.auth().signInWithCredential(credential);
            setMessage('Phone number verified successfully.');
            navigate(`/Selectionmenu`);
        } catch (error) {
            console.error('Error verifying code:', error);
            setMessage('Error verifying code. Please try again.');
        }
    };

    const seat = localStorage.getItem("seats");
    return (
        <div>
            <div id="popup1" class="overlay" >
                <div class="popup">
                    {isLoggedIn ? (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <a className="popup-close" href="##" onClick={(e) => { e.preventDefault(); window.history.go(-1); }}>&times;</a>
                            <p className='want'>Total No. Of Seats Selected</p>
                            <div classname="buttonIn">
                                <input type="number" disabled="disabled" className="seats-inbox" id='seats' value={seat} ></input>
                            </div>
                            <div id="recaptcha-container"></div>
                            <div>
                                <p className='want'>Enter Your Contact Number</p>
                                <div className='phone-sign'>
                                    <input className='phone-sign-input' type="tel"
                                        placeholder="Enter phone number"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)} />
                                    <div className='send-phone-otp'>
                                        <input type="text"
                                            placeholder="Enter code"
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)} />
                                        <button className='send-phone-otp-button' onClick={handleSendCode}>Send OTP</button>
                                    </div>
                                    <button className='send-phone-verify-button' onClick={handleVerifyCode}>Verify OTP</button>
                                    <p>{message}</p>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <p className='please-log'>Please login in this site for Booking.</p>
                    )}
                </div>
            </div >
        </div>

    )
}
export default OrderPopup