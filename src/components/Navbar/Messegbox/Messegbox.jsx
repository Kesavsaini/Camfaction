import React from "react";
import "./Messegbox.scss"
import Chatcom from "./Chatcom/Chatcom";
const Messegbox=()=>{
  return(
    <>
    <div className="messegbox">
    <h3>Chats</h3>
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