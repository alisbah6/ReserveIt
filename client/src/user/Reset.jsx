import React from 'react'
import { useContext, useState } from 'react';
import { RecoveryContext } from "../App";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Reset = () => {
    const { email } = useContext(RecoveryContext);
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


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
            <div className="otp-overlay">
                <form className="reset-main-box" onSubmit={submit}>
                    <div className='display-reset'>
                        <div className='form-reset'>
                            <label>Email</label>
                            <label>New Password</label>
                            <label>Confirm Password</label>
                        </div>
                        <div className='form-reset'>
                            <input defaultValue={email} disabled />
                            <input type="password" placeholder="Password" id="password" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <input type="password" placeholder="confirm password" id="confirmpassword" onChange={(e) => {
                                setConfirmpassword(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className='center-reset'>
                        <button className="verify_button " type="submit" disabled={loading}>{loading ? "Resetting..." : "Reset Password"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset;