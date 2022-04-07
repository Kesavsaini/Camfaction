import React from "react";
import "./profilebox.scss";
import { Settings,Feedback,ExitToApp,Bookmarks} from "@material-ui/icons";
const Profilebox=()=>{
  return(
    <>
    <div className="profilebox">
        <div className="prof">
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
         <span className="info">
             <h4>Example Saini</h4>
             <p>Example University</p>
         </span>
        </div>
        <div className="elements">
          <div className="setting ele">
             <Settings/>
             <span>Settings</span>
          </div>
          <div className="feedback ele">
             <Feedback/>
             <span>Feedback</span>
          </div>
          <div className="saved ele">
             <Bookmarks/>
             <span>Saved items</span>
          </div>
          <div className="feedback ele">
             <ExitToApp/>
             <span>Logout</span>
          </div>
        </div>
    </div>
    </>
  )
}
export default Profilebox;