import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import axios from 'axios';
import { useState } from 'react';
function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            // Make an API request to create a new user
            const response = await axios.post(
                "http://localhost:3500/user/signup",{
                name,
                username,
                email,
                password,
                confirmpassword,}
            );

            if(response.status === 201) {
                // User registration was successful
                console.log("User registered successfully");
                // Redirect or perform other actions as needed
                navigate("/Popup",{state:{name:name}});
            }
        } catch (error) {
            // Handle registration errors
            console.error("Error registering user:", error);
            navigate("/Popuperror", error)
        }
    };
    return (
        <div className='screen'>
            <div className='grid'>
                <div className="box-image-reg">
                </div>
                <div className="box-reg">
                    <img className="center-reg" src="https://media.discordapp.net/attachments/947184208491733032/1217469390509965342/key_1.webp?ex=660423ba&is=65f1aeba&hm=fcdb6fc1f90f178bfb74ab9a624c802a54d5a4cb380f8928c54ee36f066a00a0&=&format=webp&width=100&height=100" alt="Avatar"></img>
                    <form id='register-form'>
                        <label className="label-reg" htmlFor="name">Name</label>
                        <input className="input" type="text" placeholder="name" id="name" onChange={(e) => {
                            setName(e.target.value);
                        }}></input>
                        <label className="label-reg" htmlFor="email">Email</label>
                        <input className="input" type="text" placeholder="email" id="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                        <label className="label-reg" htmlFor="username">Username</label>
                        <input className="input" type="text" placeholder="Username" id="username" onChange={(e) => {
                            setUsername(e.target.value);
                        }}></input>
                        <label className="label-reg" htmlFor="password">Password</label>
                        <input className="input" type="password" placeholder="Password" id="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        <label className="label-reg" htmlFor="confirm password">Confirm Password</label>
                        <input className="input" type="password" placeholder="confirm password" id="confirmpassword" onChange={(e) => {
                            setConfirmpassword(e.target.value);
                        }}></input>
                        <button className="button-reg" onClick={submit}>Register</button>
                        <div className="extra-reg">
                            <Link to="/Login" className="log">Already have a account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;