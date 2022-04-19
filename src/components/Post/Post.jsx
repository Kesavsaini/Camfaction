import React, { useState } from "react";
import "./post.scss"
<<<<<<< HEAD
import {KeyboardArrowDown,KeyboardArrowUp,Comment,Send,BookmarkBorder} from '@material-ui/icons';

=======
import Cmntsection from "./Cmntsection/Cmntsection";
import {Comment,Send,BookmarkBorder,Bookmark} from '@material-ui/icons';
import Vote from "./vote/Vote";
import Sharepost from "./Sharepost/Sharepost";
>>>>>>> 44547146112370f98921064d2c7629a3d474a06d
const Post =()=>{
    //js for showing and hiding profilebox
    const [postheigt,setpospostheigt]=useState({height: "500px"});
    const [cmntdis,setcmntdis]=useState({display:"none"});
    const opencmnt=()=>{
        if(postheigt.height==="500px"){
            setpospostheigt({height:"auto"});
        }else{
            setpospostheigt({height:"500px"});
        }
        if(cmntdis.display==="none"){
            setcmntdis({display:"block"});
        }else{
            setcmntdis({display:"none"});
        }
    }
    //js for changing bookmark state
    const [saved,setsaved]=useState(false);
    const saveit=()=>{
       setsaved(!saved);
    }    
    // js for showing send options
    const [senddis,setsend]=useState({display:"none"});
   const showsend=()=>{
     if(senddis.display==="none") setsend({display:"block"});
     else setsend({display:"none"});
   }
    return(
        <>
        <div className="post" style={postheigt}>
            <div className="wrap">
            <div className="avtar">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <span>Anmol Garg</span>
<<<<<<< HEAD
            <span><b> in </b> Coders Arena <br /></span>
            
            
=======
            <span><b> in </b> Coders Arena <br /></span> 
>>>>>>> 44547146112370f98921064d2c7629a3d474a06d
            </div>
            <div className="midpost">
            <Vote/>
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
                <div className="posticons" onClick={()=>opencmnt()}>
                <Comment/>
                </div>
                <div className="posticons sendicon" onClick={()=>showsend()}>
                 <Send/>
                 <div className="sendbox" style={senddis}>
                 <Sharepost/>
                 </div>
                 
                </div>
                <div className="posticons" onClick={()=>saveit()}>
                     {
                        !saved && <BookmarkBorder/>
                    }
                    {
                        saved && <Bookmark/>
                    }
                </div>
            </div>
            </div>
            <div className="cmntsec" style={cmntdis}>
            <Cmntsection/>
            <Cmntsection/>
            <Cmntsection/>
            </div>
        </div>
        </>
    )
}
export default Post;