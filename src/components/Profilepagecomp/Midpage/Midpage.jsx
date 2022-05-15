import React from "react";
import Post from "../../Post/Post";
import "./Midpage.scss";
const Midpage=()=>{
  return(
    <><div className="box">

        <div className="container">
            <Post/>
            <Post/>
            <Post/>
            <Post/> 
        </div>
    </div>
    </>
  )
}
export default Midpage;
