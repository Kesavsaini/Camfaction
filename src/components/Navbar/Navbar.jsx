import React, { useState } from "react";
import "./Navbar.scss";
import Profilebox from "./Profilebox/Profilebox";
import {Search,ChatBubble,PeopleAlt,Notifications} from '@material-ui/icons';
import Messegbox from "./Messegbox/Messegbox";
const Navbar=()=>{
    const [dis,setdis]=useState({display:"none"});
    const showbox=()=>{
        if(dis.display==="none") setdis({display:"block"});
        else setdis({display:"none"})
    }
    const [dischat,setdischat]=useState({display:"none"});
    const showchatbox=()=>{
        if(dischat.display==="none") setdischat({display:"block"});
        else setdischat({display:"none"})
    }
    return (
        <>
         <div className="navbar">
             <div className="left">
                 <span className="navitem">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/CF_Athletic_Logo-01-01_%283%29.png" alt="" />
                 <h1>CamFaction</h1>
                 </span>
                 <span className="search navitem">
                     <span className="inp">
                     <input type="text" placeholder="Search"/>
                     <Search/>
                     </span>
                 </span>
             </div>
             <div className="right">
                 <div className="icon"><PeopleAlt style={{ fontSize: 33 }}/></div>
                 <div className="icon chat" onClick={()=>showchatbox()}>
                     <div className="chaticon">
                     <ChatBubble style={{ fontSize: 31 }}/>
                     <span className="notno">+1</span>
                     </div>
                      <div className="chatbox" style={dischat}>
                     <Messegbox/>
                     </div>
                    </div>
                 <div className="icon"><Notifications style={{ fontSize: 33 }}/>
                 <span className="notno dot"></span>
                 </div>
                 <div className="profile">
                     <div className="faceblock" onClick={()=>showbox()}>
                     <img src="https://www.w3schools.com/howto/img_avatar.png" />
                     </div>
                 <div className="profclickbox" style={dis}>
                    <Profilebox/>
                 </div>
                 </div>
                 
             </div>
         </div>
        </>
    )
}
export default Navbar;