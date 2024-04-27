import React from 'react'
import { useContext,useState } from 'react';
import { RecoveryContext } from "../App";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Reset = () => {
    const { email} = useContext(RecoveryContext);
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();


    const submit = async (e) => {
        e.preventDefault();
        try {
            // Make an API request to create a new user
            const response = await axios.post(
                "http://localhost:3500/user/reset_password", {
                email,
                password,
                confirmpassword,
            }
            );

            if (response.status === 201) {
                // User registration was successful
                console.log("Reset successful");
                // Redirect or perform other actions as needed
                navigate("/Login");
            }
        } catch (error) {
            // Handle registration errors
            console.error("Error registering user:", error);
        }
        finally {
            setLoading(false);
        }
    };
  return (
    <div>
        <form onSubmit={submit}>
            <label>Email</label>
            <input defaultValue={email} disabled/>
            <label>New Password</label>
            <input type="password" placeholder="Password" id="password" onChange={(e) => {
            setPassword(e.target.value);}}/>
            <label>Confirm Password</label>
            <input type="password" placeholder="confirm password" id="confirmpassword" onChange={(e) => {
            setConfirmpassword(e.target.value);}}/>
            <button type="submit"disabled={loading}>{loading ? "Resetting..." : "Reset Password"}</button>
        </form>
    </div>
  )
}

export default Reset;