import React from "react";
import "./vote.scss";
import {KeyboardArrowDown,KeyboardArrowUp} from '@material-ui/icons';
const Vote=()=>{
  return(
    <>
    <div className="vote">
      <KeyboardArrowUp/>
        <h3>35</h3>
     <KeyboardArrowDown/>
    </div>

    </>
  )
}
export default Vote;