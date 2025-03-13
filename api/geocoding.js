import axios from "axios";

export default async function handler(req, res){
    const {address} = req.query;

    if (!address){
        return res.status(400).json({ error: "Missing address" });
    }
        const GEOCODER_API_URL = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${encodeURIComponent(address)}&benchmark=4&format=json`
        
        try{
            console.log("Getting geocoder data...", GEOCODER_API_URL)
            const response = await axios.get(GEOCODER_API_URL)
            res.json(response.data);
        }catch(error){
            console.error("Error fetching geocoding data", error)
        }
    
}