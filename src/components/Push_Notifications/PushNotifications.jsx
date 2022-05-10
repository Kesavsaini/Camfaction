import React from "react";
import "./PushNotifications.scss"

const PushNotifications = () => {
    return (
        <>

            <div className="section">
                <div className="updown">
                    < div className="s1">
                        <b>Upvote & Downvote:</b>
                    </div>
                    <input type="radio" id="off" name="vote" value="off" />
                    <label for="off"> Off</label><br></br>
                    <input type="radio" id="people" name="vote" value="people" />
                    <label for="people"> From People I Follow</label><br></br>
                    <input type="radio" id="everyone" name="vote" value="everyone" />
                    <label for="everyone"> From Everyone</label>
                </div>

                <div className="comment">
                <div className="s2">  
                <b>Comments:</b>
                </div>
                    <input type="radio" id="off" name="comment" value="off" />
                    <label for="off"> Off</label><br></br>
                    <input type="radio" id="people" name="comment" value="people" />
                    <label for="people"> From People I Follow</label><br></br>
                    <input type="radio" id="everyone" name="comment" value="everyone" />
                    <label for="everyone"> From Everyone</label>
                </div>

                <div className="request">
                <div className="s3">
                    <b>Accept Request:</b>
                    </div>
                    <input type="radio" id="off" name="request" value="off" />
                    <label for="off"> Off</label><br></br>
                    <input type="radio" id="everyone" name="request" value="everyone" />
                    <label for="everyone"> From Everyone</label>
                </div>


                <div className="chat">
                <div className="s4">
                    <b>Chats:</b>
                </div>
                    <input type="radio" id="off" name="chat" value="off" />
                    <label for="off"> Off</label><br></br>
                    <input type="radio" id="people" name="chat" value="people" />
                    <label for="people"> From People I Follow</label><br></br>
                    <input type="radio" id="everyone" name="chat" value="everyone" />
                    <label for="everyone"> From Everyone</label>
                </div>
                <div className="button1">
                <button>Save Changes</button>
                </div>
            </div>

        </>
    )
}

export default PushNotifications;