import './Login.css';
function Login() {
    return (
        <div className='outer'>
            <div className='inner'>
                <div className='row'>
                    <div className='column left'>
                    </div>
                    <div className='column right'>
                        <h1>Sign In</h1>
                        <div>
                            <label>Username</label>
                            <input></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;