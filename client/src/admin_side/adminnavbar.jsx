import React from 'react'
import { Link } from 'react-router-dom';
import '../nav-foot/Navbar.css';
const adminnavbar = () => {
  const UserEmail=localStorage.getItem(1);
  const handleLogout = () => {
    // Remove the user's token from local storage
    localStorage.clear();    
    // Redirect the user to the Home page
    window.location.href = '/Login';
  };
  return (
    <nav className="Navbar-items">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <h1 className="navbar-logo">ReserveIt</h1>
    <form>
                    <div class="search-box">
                        <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" class="input-search" placeholder="Type to Search..."></input>
                    </div>
                </form>
                <div className="get-in">
                    {UserEmail === null ? <Link to='/Login' className='log'><i class="fa-solid fa-user"></i>Log In</Link> :
                        <>
                            <p className="userlogo" style={{backgroundColor:'grey', color:'white',paddingRight:"5px",paddingLeft:"5px", fontSize:"20px", fontFamily: 'Times New Roman'}}>
                              Hello,{UserEmail.charAt(0).toUpperCase() + UserEmail.slice(1)}</p>
                              <Link className='log' onClick={handleLogout}>Log out</Link>
                        </>
                        
                        }
                </div>
                
    </nav>
  )
}

export default adminnavbar