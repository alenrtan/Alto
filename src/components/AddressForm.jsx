import {React, useState} from "react"

import '../styles/main.css'
import '../styles/form.css'

const AddressForm = ({onSubmit}) => {
    const[addressData, setAddressData] = useState({
        street: "",
        city: "",
        state: "",
        zip: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit){
            onSubmit(addressData);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAddressData((prevData) => ({
            ...prevData, [name]: value
        }))
    }
    // actual form
    return (
        <form onSubmit={handleSubmit} className="address-form">
            <input type="text" name="street" placeholder="Street Address" value={addressData.street} onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" value={addressData.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={addressData.state} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="Zip Code" value={addressData.zip} onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddressForm;