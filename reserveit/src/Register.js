import './Login.css';
function Register(){
    return(
        <div className='outer'>
            <div className='inner'>
                <iframe title="frame" align="left" className="frame">   
                    </iframe> 
                <div className="details">
                        <div>
                            <iframe title="frame" className="up">  
                            </iframe> 
                        </div>
                        <div className="edit_label">
                        <div className="">
                            <label>Name</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit_label">
                            <label>Username</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit_label">
                            <label>Email</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit_label">
                            <label>Password</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                        <div className="edit-label">
                            <label>Confirm Password</label>
                            </div>
                        <div>
                            <input></input>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Register;