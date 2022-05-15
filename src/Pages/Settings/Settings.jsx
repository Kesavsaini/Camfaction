import React from "react";
import "./Settings.scss"
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";
import Privacy from "../../components/Settingpagecomp/Privacy/Privacy";
import PushNotifications from "../../components/Push_Notifications/PushNotifications";
import Password from "../../components/Password/Password";
import Left from "../../components/Settingpagecomp/Left";


const Settings = () => {
    return (
        <>
           <div className="setting">
              <Navbar/>
              <div className="midsetting">
                  <Left/>
                  <Privacy/>
              </div>
           </div>
        </>
    )
}

export default Settings;