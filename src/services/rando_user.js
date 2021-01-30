import React from "react";
import axios from 'axios';
import React, { useState, useEffect } from "react";

const Pricing = () => {
    const [profileName, setProfileName] = useState("");
    const [profileCell, setProfileCell] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [profileEmail, setProfileEmail] = useState("");

    const profileData = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api/")
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    };
 
    useEffect(() => {
        profileData();
    }, []);

    return <div className="App">Random User App</div>;
};

export default Pricing; 
