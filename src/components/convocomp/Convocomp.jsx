import React from "react";
import "./Convocomp.scss"
const Convocomp=({own})=>{
  let js,bc;
  if(own){
   js={justifyContent: "flex-end"}
   bc={backgroundColor:"rgb(180, 178, 178)",color:"black"}
  }
  return(
    <>
    <div className="convocomp" style={js}>
       <div className="msgwrapper">
        <div className="mainmsg" style={bc}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum, nisi modi eaque enim beatae rem ea iure harum placeat ratione facilis cumque, tempora cupiditate eos. Sint et possimus quisquam?
        </p>
        </div>
        <div className="time">
            1:20 pm
        </div>
        </div>
    </div>
    </>
  )
}
export default Convocomp;