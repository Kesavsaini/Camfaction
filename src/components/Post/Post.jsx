import React from "react";
import "./post.scss"
import {KeyboardArrowDown,KeyboardArrowUp,Comment,Send,BookmarkBorder} from '@material-ui/icons';
const Post =()=>{
    return(
        <>
        <div className="post">
            <div className="avtar">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <span>Abhishek </span>
            <span><b>  in </b> Coders Arena <br /></span>
            
            </div>
            <div className="midpost">
            <div className="vote">
                <KeyboardArrowUp/>
                <h3>35</h3>
                <KeyboardArrowDown/>
            </div>
            <div className="details">
            <p>Dear Members,<br />
            Deep learning | Advance project ideas

            </p>
            <div className="image">
                <img src="https://www.kdnuggets.com/wp-content/uploads/Thakur-Fig1-20-ml-datasets-for-projects.jpg" alt="" />
            </div>
            </div>
            </div>
            <div className="symbols">
                <div className="posticons">
                <Comment/>
                </div>
                <div className="posticons">
                <Send/>
                </div>
                <div className="posticons">
                <BookmarkBorder/>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default Post