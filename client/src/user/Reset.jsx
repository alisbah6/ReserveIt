import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecoveryContext } from "../App";
import axios from 'axios';


const Reset = () => {
    const { email} = useContext(RecoveryContext);
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            // Make an API request to create a new user
            const response = await axios.post(
                "http://localhost:3500/user/reset_password",
                 {
                email,
                password,
                confirmpassword,
            }
            );
            if (response.status === 200) {
                // User reset was successful
                console.log("Reset successful");
                navigate('/Login');
            }
        } catch (error) {
            // Handle reset errors
            console.error("Error registering user:", error);
        }
    };
  return (
    <div>
        <form onSubmit={submit}>
            <label>Email</label>
            <input className="input" defaultValue={email} disabled/>
            <label>New Password</label>
            <input className="input" type="password" placeholder="Password" id="password" onChange={(e) => {setPassword(e.target.value);}}></input>
            <label>Confirm Password</label>
            <input className="input" type="password" placeholder="confirm password" id="confirmpassword" onChange={(e) => {setConfirmpassword(e.target.value);}}></input>
            <button type="submit">Reset Password</button>
        </form>
    </div>
  )
}

export default Reset;