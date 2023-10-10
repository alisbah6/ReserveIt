import { Link } from 'react-router-dom';
import './Style.css';
function Register(){
    return(
        <div className='screen'>
            <div className='grid'>
                <div className="box-image-reg">
                </div>
                <div className="box-reg">
                        <img className="center-reg" src="https://cdn.discordapp.com/attachments/1143205844058656780/1150113358830383144/key_2.png?ex=6513b6c8&is=65126548&hm=6e6057865b2a58f1490e4063fa351b4416005f5587473bb21b31c9915e620ffd&" alt="Avatar"></img>
                        <label className="label-reg" for="name">Name</label>
                        <input className="input" type="text" placeholder="name" id="name"></input>
                        <label className="label-reg" for="email">Email</label>
                        <input className="input" type="text" placeholder="email" id="email"></input>
                        <label className="label-reg" for="username">Username</label>
                        <input className="input" type="text" placeholder="Username" id="username"></input>
                        <label className="label-reg" for="password">Password</label>
                        <input className="input" type="password" placeholder="Password" id="password"></input>
                        <label className="label-reg" for="confirm password">Confirm Password</label>
                        <input className="input" type="password" placeholder="confirm password" id="confirm password"></input>
                        <button className="button-reg">Register</button>
                    <div class="extra-reg">
                        <Link to="/Login" className="log">Already have a account?</Link>
                        <a href='/#' className="log">Already have a account?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;