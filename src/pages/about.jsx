import React from "react";
import { Link } from "react-router-dom"
import FooterItems from "../components/FooterItems";
import '../styles/main.css'

export default function About(){
    
    // return page
    return (
        <div className="main-container">
            <div className="header-container">About</div>
            <div className="subheader-container">
                <Link to="/" className="links">Home</Link>
                <Link to="/options" className="links">Options</Link>
                <Link to="/about" className="links">About</Link>
            </div>

            <div className="text-container">
                <div className="header-container">
                    Hi there!
                </div>
                <div className="text-container">
                    Alto is a simple and lightweight weather extension that utilizes the 
                    National Weather Service (NWS) API - Currently only available in the U.S.
                    <br/>
                    <br/>
                    Designed to keep things simple - no account needed! Nothing is stored on the developer's side - all data stays
                    on your computer! Location data is never shared, offering you piece of mind. 
                </div>
            </div>

           <FooterItems/>
        </div>
    )
}