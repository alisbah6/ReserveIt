import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import logo from '../assets/key_1.webp';
import { useContext } from 'react';
import { RecoveryContext } from '../App';
function Login() {
  const { setEmail, email, setOTP } = useContext(RecoveryContext);
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function submit(e) {
    if (email === "admin" && password === "0987654321") {
      e.preventDefault();
      login();
      navigate("/AdminPage");
    }
    else {
      e.preventDefault();
      try {
        await axios
          .get("http://localhost:3500/user/login", {
            params: {
              email,
              password,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              login();
              navigate("/Home");
            }
          });
      } catch (err) {
        if (err.request.status === 401) {
          alert(err.response.data.message);
        } else if (err.request.status === 500) {
          alert("something went wrong");
        }
        navigate("/Popuperrorl", err)
      }
    }
    localStorage.setItem(1, email);
  }

  function navigateToOtp() {
    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
      axios
        .post("http://localhost:3500/send_recovery_email", {
          OTP,
          recipient_email: email,
        })
        .then(() => navigate('/OTPinput'))
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }



  return (
    <div className='grid'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="box-image">
        <a href="/Home"><button class="round"><i class="fa-solid fa-arrow-left"></i></button></a>
      </div>
      <div className="box">
        <img className="center" src={logo} alt="Avatar"></img>
        <form>
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="text" name='email' autoComplete='off' placeholder="Email Id" id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label className="label" type="password" htmlFor='password'>Password</label>
          <input className="input" type="password" placeholder="Password" id="password" onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
          <button className="button" onClick={submit} >Log In</button>
          <div className="extra">
            <Link to="/Register" className="log">Register?</Link>
            <Link className="log" onClick={() => navigateToOtp()}>Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
