import React from "react";
import "./Chatpage.scss"
import Chatcombox from "../../components/Chatcombox/Chatcombox";
import Chatwindow from "../../components/Chatwindow/Chatwindow";
const Chatpage=()=>{
  return(
    <>
    <div className="chatpage">
        <div className="chatlist">
          <div className="chattitlebox">
          <h1 className="chattitle">Chats</h1>
          <input type="text" placeholder="Serach" className="searchchat"/>
          </div>
        
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        <Chatcombox/>
        </div>
        <div className="chating">
          <Chatwindow/>
        </div>
    </div>
    </>
  )
}
export default Chatpage;