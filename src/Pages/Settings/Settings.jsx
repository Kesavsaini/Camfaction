import React from "react";
import "./Settings.scss"
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import Privacy from "../../components/Privacy/Privacy";
import PushNotifications from "../../components/Push_Notifications/PushNotifications";
import Password from "../../components/Password/Password";


const Settings = () => {
    return (
        <>
        <div className="navbar">
            <Navbar/>

        </div>
        
            <div className="settingwrap">
                
                <div className="leftbox">            
                <div className="box1">
                </div>
                <div className="box2">
                </div>
                <div className="box3">
                </div>
                <div className="box4">
                </div>
                </div> 
                <Privacy/>
                </div>

            
        </>
    )
}

export default Settings;