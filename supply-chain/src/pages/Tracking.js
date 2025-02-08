// src/pages/Tracking.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../api/googleMapsApi";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

const center = {
    lat: 37.7749, // Example: San Francisco
    lng: -122.4194,
};

const Tracking = () => {
    return (
        <div>
            <h1>Welcome to the Tracking Page</h1>
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* Additional components like markers can go here */}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Tracking;
