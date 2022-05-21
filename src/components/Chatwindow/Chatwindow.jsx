import React from "react";
import "./Chatwindow.scss";
import Convocomp from "../convocomp/Convocomp";
import {SendSharp} from "@material-ui/icons"
const Chatwindow=()=>{
  return(
    <>
    <div className="chatwindow">
      <div className="topwindow">
      <div className="profnav">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <h2>Abhishek Kumar</h2>
      </div>
      </div>
      <div className="midconvo">
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
        <Convocomp/>
        <Convocomp own={true}/>
      </div>
      <div className="bottomconvo">
      <div className="sendmsg">
      <textarea name="" id="" cols="50" rows="2" className="sendtext" placeholder="Write here..."></textarea>
        <button className="msgsendbtn">
          <SendSharp style={{fontSize:"35px"}}/>
        </button>
      </div>
      </div>
    </div>
    </>
  )
}
export default Chatwindow;