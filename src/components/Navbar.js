import React, { Component } from "react";
import './Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <nav className="Navbar-items">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
                <h1 className="navbar-logo">ReserveIt</h1>
                <ul className="nav-menu">
                    <a href="/#"className="log"><i class="fa-solid fa-house"></i>Home</a>
                    <a href="/#"className="log"><i class="fa-solid fa-utensils"></i>Booking</a>
                    <a href="/#"className="log"><i class="fa-solid fa-star"></i>Special</a>
                    <a href="/#"className="log"><i class="fa-solid fa-users"></i>Contact Us</a>
                    <div class="search-box">
                        <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <input type="text" class="input-search" placeholder="Type to Search..."></input>
                    </div>
                    <div className="get-in">
                        <a href="/#"className="log"><i class="fa-solid fa-user"></i>SignIn</a>
                        <li className="log">|</li>
                        <a href="/#" className="log">SignUp</a>
                    </div>
                </ul>
            </nav>
        );
    }
}
export default Navbar;
