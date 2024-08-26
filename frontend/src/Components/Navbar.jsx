import React from "react";
import './Navbar.css'
import DarkModeButton from "./DarkModeButton";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">Jensen News Page</div>
            <div className="nav-buttons">
                <button><a href="/">Home </a></button>
                <button><a href="/privacy">Privacy</a></button>
                <button><a href="/login">Log in</a></button>
                <button><a href="/register">Register</a></button>
            </div>
            <DarkModeButton />
        </nav>
    )
}

export default Navbar;