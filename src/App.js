import React from "react";
import "./App.scss"
import Homepage from "./Pages/Homepage/Homepage";
import Authpage from "./Pages/Authentication/Auth";
import Settings from "./Pages/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Password from "./components/Password/Password";
import PushNotifications from "./components/Push_Notifications/PushNotifications";
import Privacy from "./components/Settingpagecomp/Privacy/Privacy";
import Profilepage from "./Pages/Profilepage/Profilepage";
import Auth from "./Pages/Authentication/Auth";


const App=()=>{
  return(
    <>
    {/* <Profilepage/> */}
    {/* <Homepage/> */}
    {/* <Authpage/> */}
    <Settings/>
    </>
  )
}
export default App;