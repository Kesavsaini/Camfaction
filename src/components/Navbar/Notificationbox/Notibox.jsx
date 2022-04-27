import React from "react";
//  import "./Notibox.scss"
import NotificationsActiveIcon from "@material-ui/icons/NotificationImportant"
const Notibox=()=>{
  return(
    <>
    <div className="notibox">
        <div className="noti">
            <span className="heading">
                <h4>Notifications</h4>
            </span>
        </div>
        <div className="content">
          <div className="first">
          <NotificationsActiveIcon/>
          <span>You may know Yash Pokharna , visit their profile</span>
          </div>
          <div className="second">
          <NotificationsActiveIcon/>
          <span>You may know Yash pokharna , visit their profile</span>
          </div>
          <div className="third">
          <NotificationsActiveIcon/>
          <span>You may know Yash Pokharna , visit their profile</span>
          </div>
          <div className="fourth">
          <NotificationsActiveIcon/>
          <span>You may know Yash Pokharna , visit their profile</span>
          </div>
          <div className="fifth">
          <NotificationsActiveIcon/>
          <span>You may know Yash Pokharna , visit their profile</span>
          </div>
        </div>
    </div>
    </>
  )
}
export default Notibox;