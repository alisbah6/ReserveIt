import React, { Component } from "react";
import './Navbar.css';
import { NavLink,Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
                <nav className="Navbar-items">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <h1 className="navbar-logo">ReserveIt</h1>
                    <ul className="nav-menu">
                        <NavLink to="/" className="log"><i class="fa-solid fa-house"></i>Home</NavLink>
                        <NavLink to="/Booking" className="log"><i class="fa-solid fa-utensils"></i>Booking</NavLink>
                        <NavLink to="/Menu" className="log"><i class="fa-solid fa-table"></i>Menu</NavLink>
                        <NavLink to="/Contact" className="log"><i class="fa-solid fa-users"></i>Contact Us</NavLink>
                        <div class="search-box">
                            <button class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                            <input type="text" class="input-search" placeholder="Type to Search..."></input>
                        </div>
                        <div className="get-in">
                            <Link to="/Register" className="log"><i class="fa-solid fa-user"></i>SignIn</Link>
                            <li className="log">|</li>
                            <Link to="/Login" className="log">SignUp</Link>
                        </div>
                    </ul>
                </nav>
        );
    }
}
export default Navbar;
