import React from "react";
import { Link } from "react-router-dom"
import '../styles/main.css'

export default function Options(){

    // return page
    return (
        <div className="main-container">
            <div className="header-container">Options</div>
            <div className="subheader-container">
                <Link to="/about" className="links">About</Link>
                <Link to="/options" className="links">Options</Link>
                <Link to="/about" className="links">About</Link>
            </div>
        </div>
    )
}