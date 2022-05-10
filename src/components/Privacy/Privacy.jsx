import React from "react";
import "./Privacy.scss"

const Privacy = () => {
    return (
        <>

            <div className="section">
                <div className="visibility">
                    <div className="s1">
                     <b>Profile Visibilty:</b>
                    </div>
                    <input type="checkbox" id="private" name="visibility" value="private" />
                    <label for="private"> Private</label><br></br>
                    <input type="checkbox" id="private" name="visibility" value="public" />
                    <label for="public"> Public</label>
                </div>

                <div className="mentions">
                    <div className="s2">
                        <b>Mentions (Allow @ mentions from):</b>
                    </div>
                    <input type="radio" id="everyone" name="mentions" value="everyone" />
                    <label for="everyone"> Everyone</label><br></br>
                    <input type="radio" id="people" name="mentions" value="people" />
                    <label for="people"> People You Follow</label><br></br>
                    <input type="radio" id="no_one" name="mentions" value="no_one" />
                    <label for="no_one"> No One</label>
                </div>

                <div className="posts">
                    <div className="s3">
                        <b>Posts:</b>
                    </div>
                    <input type="checkbox" id="updown" name="posts" value="updown" />
                    <label for="updown"> Hide Upvote & Downvote</label><br></br>
                    <input type="checkbox" id="comments" name="posts" value="comments" />
                    <label for="comments"> Hide Comments</label>
                </div>

                <div className="tags">
                    <div className="s4">
                        <b>Allows Tags From:</b>
                    </div>
                    <input type="radio" id="everyone" name="tags" value="everyone" />
                    <label for="off"> Everyone</label><br></br>
                    <input type="radio" id="people" name="tags" value="people" />
                    <label for="people"> People You Follow</label><br></br>
                    <input type="radio" id="no_one" name="tags" value="no_one" />
                    <label for="no_one"> No One</label>
                </div>
                <div className="button1">
                <button>Save Changes</button>
                </div>
            </div>

        </>

    )
}

export default Privacy;