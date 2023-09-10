import './Style.css';
function Register(){
    return(
            <div className='outer1'>
                <div className='inner'>
                    <iframe title="frame" align="left" className="frame">   
                    </iframe> 
                    <div className="details1">
                        <div>
                        <iframe title="frame" className="upup">  
                        </iframe> 
                        </div>
                        <div className="padding1">
                        <div className="edit__label">
                        <label>Name</label>
                        </div>
                        <div>
                        <input className="edit-input"></input>
                        </div>
                        <div className="edit__label">
                        <label>Email</label>
                        </div>
                        <div>
                        <input className="edit-input"></input>
                        </div>
                        <div className="edit_label">
                        <label>Username</label>
                        </div>
                        <div>
                        <input className="edit-input"></input>
                        </div>
                        <div className="edit_label">
                        <label>Password</label>
                        </div>
                        <div>
                        <input className="edit-input"></input>
                        </div>
                        <div className="edit-label">
                        <label>Confirm Password</label>
                        </div>
                        <div>
                        <input className="edit-input"></input>
                        </div>
                        <div className='container'>
                        <button className="btnn">Register</button>
                        </div>
                        <div className='button1'>     
                        <div className='edit-button'>
                        <a href='/#'>Already Registered?</a>
                        </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
    );
}
export default Register;