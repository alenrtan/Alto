import React, {useState} from "react"
import Select from "react-select"
import '../styles/main.css'
import '../styles/form.css'

// list of states - taken from https://gist.github.com/NickFoden/2fdb2d7941bb166dd39c2b90910dc066
const states = [
    { value: "AL", label: "AL" },
    { value: "AK", label: "AK" },
    { value: "AZ", label: "AZ" },
    { value: "AR", label: "AR" },
    { value: "CA", label: "CA" },
    { value: "CO", label: "CO" },
    { value: "CT", label: "CT" },
    { value: "DE", label: "DE" },
    { value: "DC", label: "DC" },
    { value: "FL", label: "FL" },
    { value: "GA", label: "GA" },
    { value: "HI", label: "HI" },
    { value: "ID", label: "ID" },
    { value: "IL", label: "IL" },
    { value: "IN", label: "IN" },
    { value: "IA", label: "IA" },
    { value: "KS", label: "KS" },
    { value: "KY", label: "KY" },
    { value: "LA", label: "LA" },
    { value: "ME", label: "ME" },
    { value: "MD", label: "MD" },
    { value: "MA", label: "MA" },
    { value: "MI", label: "MI" },
    { value: "MN", label: "MN" },
    { value: "MS", label: "MS" },
    { value: "MO", label: "MO" },
    { value: "MT", label: "MT" },
    { value: "NE", label: "NE" },
    { value: "NV", label: "NV" },
    { value: "NH", label: "NH" },
    { value: "NJ", label: "NJ" },
    { value: "NM", label: "NM" },
    { value: "NY", label: "NY" },
    { value: "NC", label: "NC" },
    { value: "ND", label: "ND" },
    { value: "OH", label: "OH" },
    { value: "OK", label: "OK" },
    { value: "OR", label: "OR" },
    { value: "PA", label: "PA" },
    { value: "PR", label: "PR" },
    { value: "RI", label: "RI" },
    { value: "SC", label: "SC" },
    { value: "SD", label: "SD" },
    { value: "TN", label: "TN" },
    { value: "TX", label: "TX" },
    { value: "UT", label: "UT" },
    { value: "VT", label: "VT" },
    { value: "VI", label: "VI" },
    { value: "VA", label: "VA" },
    { value: "WA", label: "WA" },
    { value: "WV", label: "WV" },
    { value: "WI", label: "WI" },
    { value: "WY", label: "WY" }
];

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

    const handleStateChange = (selectedState) => {
        setAddressData((prevData) => ({
            ...prevData, state: selectedState.value
        }))
    }

    // for react-select state-dropdown
    const dropdownStyles = {
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "white",  // dropdown color
            color: "black",  // text color
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isSelected ? "white" : "black", // text when slected
            backgroundColor: state.isSelected ? "#5a8a94" : "white", // option colors
            "&:hover": {
                backgroundColor: "#4fbbd1", // hovers
                color: "#fff",
            },
            fontSize: "12px",
            padding: "4px 8px"
        }),
    };

    // actual form
    return (
        <form onSubmit={handleSubmit} className="address-form">
            <input className="street" type="text" name="street" placeholder="Street Address" value={addressData.street} onChange={handleChange} style={{height: '38px', fontSize: '12px', fontWeight: '600'}} required />
            <div className="city-state-container">
                <input className="city" type="text" name="city" placeholder="City" value={addressData.city} onChange={handleChange} required />           
                <Select className="states" styles={dropdownStyles} options={states} onChange={handleStateChange} placeholder="State" required/>
            </div>
            <div className="zipcode-container">  
                <input className="zip" type="text" name="zip" placeholder="Zip Code (optional)" value={addressData.zip} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddressForm;