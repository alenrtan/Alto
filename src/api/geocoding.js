import axios from "axios";

// this is to use Zippopotam.us | zip -> coordinate
// Structure: api.zippopotam.us/country/postal-code
export const getCoordinatesUsingZipcode = async (zipcode) => {
    let regex = /[a-zA-Z]/
    if (zipcode.length !== 5 || regex.test(zipcode)){
        console.error("Invalid zipcode")
        return null;
    }
    const ZIPPO_API_URL = `https://api.zippopotam.us/us/${zipcode}`

    try{
        console.log("getting zipcode data for: ", ZIPPO_API_URL)
        const response = await axios.get(ZIPPO_API_URL);
        
        if (response.data && response.data.places.length > 0){
            const places = response.data.places[0];
            return {lat: places.latitude, long: places.longitude}
        }else{
            console.error("Zipcode returned no results.")
        }
    }catch(error){
        console.error("Error converting zipcode to coordinates: ", error);
        return null;
    }
}

// US geocoder | address -> coordinate
export const getCoordinatesUsingAddress = async (address) =>{

    const VERCEL_BACKEND_URL = "https://alto-iota.vercel.app/api/geocoding"

    try{
        console.log("getting address data for: ", VERCEL_BACKEND_URL)
        const response = await axios.post(VERCEL_BACKEND_URL, {address});

        if (response.data && response.data.result.addressMatches.length > 0){
            const coords = response.data.result.addressMatches[0].coordinates;
            return {lat: coords.y.toFixed(4), long: coords.x.toFixed(4)} // return only first 4 decimal places (NWS requirement)
        }else{
            console.error("No address matched.")
        }
    }catch(error){
        console.error("Error converting address to coordinates: ", error);
        return null;
    }
}