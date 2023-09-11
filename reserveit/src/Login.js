import { useState } from 'react';
import './Style.css';
function Login() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Name : ${name} , Password : ${password}');
    }
    return (
            <div className='outer'>
                <div className='inner'>
                    <iframe title="frame" align="left" className="frame">  
                    </iframe> 
                    <div className="details">
                        <form action='' onSubmit={e=>handleSubmit(e)}>
                        <div>
                        <iframe title="frame" className="up">  
                        </iframe> 
                        </div>
                        <div className="padding">
                        <div className="edit-label">
                        <label htmlFor='uname'>Username or Email</label>
                        </div>
                        <div>
                        <input className="edit-input" type='text' name='uname' id='uname' onChange={e=>setName(e.target.value)}></input>
                        </div>
                        <div className="edit_label">
                        <label htmlFor='password'>Password</label>
                        </div>
                        <div>
                        <input className="edit-input" type='password' name='password' id='password' onChange={e=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="container">                       
                        <button className="btn">Login</button>
                        </div>
                        <div className='button'>     
                        <div className='edit-button'>
                        <a href='/#'>Register?</a>
                        </div>
                        <div className='edit-button' >
                        <a href='/#'>Forget Password?</a>
                        </div>
                        </div>
                        </div>
                        </form>
                    </div> 
                </div>
            </div>
    );
}
export default Login;