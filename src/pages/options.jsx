import React from "react";
import { Link, useNavigate } from "react-router-dom"
import FooterItems from "../components/FooterItems";
import '../styles/main.css'

export default function Options(){
    const navigate = useNavigate();

    const resetAddress = () =>{
        if (localStorage.getItem("userAddress")){
            localStorage.removeItem("userAddress");
            alert("Resetting Address") // maybe change alerts to page text?
            navigate('/'); // navigate back to main. landing page should have logic for new address
        }else{
            alert("No address found. Please enter an address.");
            navigate('/');
        }
    }
    
    const optOut = () => {
        alert("To be implemented");
    }
    // return page
    return (
        <div className="main-container">
            <div className="header-container">Options</div>
            <div className="subheader-container">
                <Link to="/" className="links">Home</Link>
                <Link to="/options" className="links">Options</Link>
                <Link to="/about" className="links">About</Link>
            </div>

            {/* add button for changing location - send back to home page */}
            <div className="content-container">
                <div className="text-container">
                    If you would like to get weather for a different location, please reset your location below
                </div>
                <button type="button" onClick={resetAddress}>Reset Location</button>

                {/* add option to opt out */}
                {/* To be implemented. Maybe store/export a useState for this then check for exported state in other areas? */}
                <div className="text-container">
                    If you would like opt-out from Alto locally storing addresses, you may do so using the button below.
                    Please note that you will need to enter an address/zipcode every time when using Alto
                </div>
                <button type="button" onClick={optOut}>Opt-Out</button> 
                
            </div>

            
            <FooterItems/>
        </div>
    )
}