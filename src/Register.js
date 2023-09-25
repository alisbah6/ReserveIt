import './Style.css';
function Register(){
    return(
        <div className='screen'>
            <div className='grid'>
                <div className="box-image-reg">
                </div>
                <div className="box-reg">
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
                        <a href='/#' className="log">Already have a account?</a>
                        <a href='/#' className="log">Forget Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;