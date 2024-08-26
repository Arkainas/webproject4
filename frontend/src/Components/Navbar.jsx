import React from "react";
import './Navbar.css'
import DarkModeButton from "./DarkModeButton";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">Jensen News Page</div>
            <div className="nav-buttons">
                <a href="/">Home</a>
                <a href="/privacy">Privacy</a>
            </div>
            <DarkModeButton />
        </nav>
    )
}

export default Navbar;