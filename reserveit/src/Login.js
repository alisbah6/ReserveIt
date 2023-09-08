import './Login.css';
function Login() {
    return (
        <div className='outer'>
            <div className='inner'>
                <iframe title="frame" align="left" className="frame">  
                    </iframe> 
                <div className="details">
                    <div>
                        <iframe title="frame" className="up">  
                        </iframe> 
                    </div>
                    <div className="padding">
                        <div className="edit-label">
                            <label>Username or Email</label>
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
                    </div>
                    <div className="button">
                        <button className="tweek-button"></button>         
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default Login;