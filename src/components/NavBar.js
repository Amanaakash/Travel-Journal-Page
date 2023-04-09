import React from "react"
import logo from "./images/logo.png";


export default function NavBar(){
    return(
        <nav className="navBar">
            <img src={logo} alt="logo" className="logo"/>
            <p className="text">My travel journal</p>
        </nav>
    )
}