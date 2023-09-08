import './Login.css';
function Register(){
    return(
        <div className='outer'>
            <div className='inner'>
                <iframe title="frame" align="left" className="frame">   
                    </iframe> 
                <div className="details">
                        <div className="up">Sign Up</div>
                        <div className="edit">
                            <label>Name</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit">
                            <label>Username</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit">
                            <label>Email</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit">
                            <label>Password</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit">
                            <label>Confirm Password</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                    </div> 
            </div>
        </div>
    );
}
export default Register;