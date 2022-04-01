import React from "react";
import "./Aboutme.scss"
import Comcomp from "./comcomp/Comcomp";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Aboutmebox=()=>{
    return(
     <>
      <div className="aboutmebox">
          <div className="profile">
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <h2>Yash Pokharna</h2>
          </div>
          <div className="com">
              <h3>Communities</h3>
              <Comcomp/>
              <Comcomp/>
              <Comcomp/>
              <Comcomp/>
              <div className="showmore">
                <KeyboardArrowDownIcon/>
                <span>Show more</span>
              </div>
          </div>
      </div>
     </>
    );
}
export default Aboutmebox