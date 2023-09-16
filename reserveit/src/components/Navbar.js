import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
class Navbar extends Component{
    render(){
        return(
            <nav className="Navbar-items">
                <h1 className="navbar-logo">ReserveIt</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item,index)=>{return(
                         <li key={index}><a className={item.cName} href="/">{item.title}</a></li>
                    );})}
                    <li><input type="text"></input></li>
                    <li><button className="btn">Search</button></li>
                    <li className="log"><img  src="https://cdn.discordapp.com/attachments/947184208491733032/1152660931369779210/log-in.png"></img>Log In/Sign Up</li>
                </ul>
        </nav>
        );
    }
}
export default Navbar;