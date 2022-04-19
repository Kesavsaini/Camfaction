import React from "react";
import "./Homepage.scss"
import Navbar from "../../components/Navbar/Navbar";
import Aboutmebox from "../../components/Aboutmebox/Aboutme";
import Post from "../../components/Post/Post";
import NavButton from "../../components/NavButtons/NavButton";
import Infobox from "../../components/Infobox/Infobox";

const Homepage=()=>{
    return(
     <>
     <div className="homepage">
     <Navbar/>
     <div className="secnav">
     <Aboutmebox/>
     <div className="midpage">
     <NavButton/>
<<<<<<< HEAD
     <Post/>
     </div>
     <Infobox/> 
=======
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
>>>>>>> 44547146112370f98921064d2c7629a3d474a06d
     </div>
     
     </div>
     </>
    );
}
export default Homepage