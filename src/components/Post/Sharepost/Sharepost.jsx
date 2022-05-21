import { FileCopy, People } from "@material-ui/icons";
import React, { useState } from "react";
import "./sharepost.scss";
import Friendlist from "./Friendlist/Friendlist";
const Sharepost=()=>{
  const [sharestyle,setsharestyle]=useState({display:"block"});
  const [friendliststyle,setfriendliststyle]=useState({display:"none"});
  const showfriend=()=>{
    setsharestyle({display:"none"});
    setfriendliststyle({display:"flex"})
  }
  return(
    <>
    <div className="sharepost">
  <div className="Shareoption" style={sharestyle} >
   <div className="copy send"><FileCopy/> Copy Link</div>
   <div className="stof send" onClick={()=>showfriend()}><People/> Share to Friend </div>
   </div>
   <div className="showfriendlist" style={friendliststyle}>
     <Friendlist/>
   </div>
  </div>
 </>
) 
}
export default Sharepost;