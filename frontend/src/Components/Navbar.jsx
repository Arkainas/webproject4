import React from "react";
import './Navbar.css'
import DarkModeButton from "./DarkModeButton";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">Jensen News Page</div>
            <div className="nav-buttons">
                <button>Home</button>
                <button>Privacy</button>
            </div>
        <DarkModeButton />
        </nav>
    )
}

export default Navbar;