import React from "react";
import "./Messegbox.scss"
import Chatcom from "./Chatcom/Chatcom";
const Messegbox=()=>{
  return(
    <>
    <div className="messegbox">
    <h3 className="chathead">Chats</h3>
    <Chatcom/>
    <Chatcom/>
    <Chatcom/>
    <Chatcom/>
    <Chatcom/>
    <Chatcom/>
    </div>
    </>
  )
}
export default Messegbox;