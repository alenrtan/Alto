import { React, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import FooterItems from "../components/FooterItems"
import AddressForm from "../components/AddressForm"
import '../styles/main.css'

export default function App() {

    // check if first-time user
    const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

    useEffect(() => {
        // check local storage 
        localStorage.getItem(["userAddress"], (result) => {
            if (result.userAddress) {
                setIsFirstTimeUser(false);
            }
        });
    }, [])

    // locally storing user address
    const handleAddressFormSubmit = (addressData) => {
        localStorage.setItem({userAddress: addressData}, () => {
            console.log("Address saved locally.");
            setIsFirstTimeUser(false);
        })
    }

    // returning the actual page
    return (
        <div className="main-container">
            <div className="header-container">
                Alto
            </div>
            <div className="subheader-container">
                <Link to="/" className="links">Home</Link>
                <Link to="/options" className="links">Options</Link>
                <Link to="/about" className="links">About</Link>
            </div>

            <div className="form-container">
                {
                    // checking for first time user & displaying forms if needed
                    isFirstTimeUser ? (
                        <AddressForm onSubmit={handleAddressFormSubmit} />
                    ) : (
                        <div>Weather Data will be here</div>
                    )
                }
            </div>
            <FooterItems />
        </div>
    )
}