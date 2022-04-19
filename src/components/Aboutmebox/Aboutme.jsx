import React from "react";
import "./Aboutme.scss"
import Comcomp from "./comcomp/Comcomp";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Aboutmebox=()=>{
    return(
     <>
      <div className="aboutmebox">
          <div className="profile">
          <img src={require('./yash.jpg')} />
          <h2>Yash Pokharna</h2>
          </div>
          <div className="com">
              <h3>Communities</h3>
              <Comcomp commname="Sports Community"/>
              <Comcomp commname="Dance Community"/>
              <Comcomp commname="coding Community"/>
              <Comcomp commname="keshav Community"/>
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