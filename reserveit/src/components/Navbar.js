import React, { Component } from "react";
import './Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <nav className="Navbar-items">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
                <h1 className="navbar-logo">ReserveIt</h1>
                <ul className="nav-menu">
                    <li className="log"><i class="fa-solid fa-house"></i>Home</li>
                    <li className="log"><i class="fa-solid fa-utensils"></i>Booking</li>
                    <li className="log"><i class="fa-solid fa-star"></i>Special</li>
                    <li className="log"><i class="fa-solid fa-users"></i>Contact Us</li>
                    <div class="search-box">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
                        <button class="btn-search"><i class="fa fa-search"></i></button>
                        <input type="text" class="input-search" placeholder="Type to Search..."></input>
                    </div>
                    <li className="log"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log In/Sign Up</li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;
