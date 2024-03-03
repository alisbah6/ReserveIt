import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function submit(e) {
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
      navigate("/Popuperrorl", err)
      if (err.request.status === 401) {
        alert(err.response.data.message);
      } else if (err.request.status === 500) {
        alert("something went wrong");
      }
    }
    localStorage.setItem(1, email);
  }

  return (
    <div className='grid'>
      <div className="box-image">
      </div>
      <div className="box">
        <img className="center" src="https://media.discordapp.net/attachments/947184208491733032/1155862457751982151/key_1.png?ex=65ef0acc&is=65dc95cc&hm=167c12390bb123936a330120f9fb8617b94ba7f372a614c95d8f2a37641af647&=&format=webp&quality=lossless&width=160&height=160" alt="Avatar"></img>
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
            <Link className="log">Forget Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
