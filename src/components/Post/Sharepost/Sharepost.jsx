import { FileCopy, People } from "@material-ui/icons";
import React from "react";
import "./sharepost.scss";
const Sharepost=()=>{
  return(
    <>
     <div className="Sharepost">
      <div className="copy send"><FileCopy/> Copy Link</div>
      <div className="stof send"><People/> Share to Friend</div>
     </div>
    </>
  ) 
}
export default Sharepost;