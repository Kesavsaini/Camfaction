import React from "react";
import "./Navbar.scss";
import {Search,ChatBubble,PeopleAlt,Notifications} from '@material-ui/icons';
const Navbar=()=>{
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
                     <input type="text" placeholder="  Search"/>
                     <Search/>
                     </span>
                 </span>
             </div>
             <div className="right">
                 <div className="icon"><PeopleAlt style={{ fontSize: 33 }}/></div>
                 <div className="icon">
                     <ChatBubble style={{ fontSize: 31 }}/>
                     <span className="notno">+1</span>
                     </div>
                 <div className="icon"><Notifications style={{ fontSize: 33 }}/>
                 <span className="notno dot"></span>
                 </div>
                 <img src="https://www.w3schools.com/howto/img_avatar.png" />
             </div>
         </div>
        </>
    )
}
export default Navbar;