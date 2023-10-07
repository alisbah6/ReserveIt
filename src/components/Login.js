//import { useState } from 'react';
import './Style.css';
function Login() {
    return (
            <div className='grid'>
                <div className="box-image">
                </div>
                <div className="box">
                        <img className="center" src="https://cdn.discordapp.com/attachments/947184208491733032/1155862457751982151/key_1.png" alt="Avatar"></img>
                        <label className="label" for="username">Username</label>
                        <input className="input" type="text" placeholder="Username" id="username"></input>
                        <label className="label" for="password">Password</label>
                        <input className="input" type="password" placeholder="Password" id="password"></input>
                        <button className="button">Log In</button>
                    <div class="extra">
                        <a href='/#' className="log">Register?</a>
                        <a href='/#' className="log">Forget Password?</a>
                    </div>
                </div>
            </div>
    );
}
export default Login;
                    
        