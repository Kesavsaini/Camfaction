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
<<<<<<< HEAD
     <Post/>
     </div>
     <Infobox/> 
=======
=======
>>>>>>> 64c5f521253e839012b4cc7fa99ba6868487d8c1
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
     <Post/> 
<<<<<<< HEAD
>>>>>>> 44547146112370f98921064d2c7629a3d474a06d
=======
>>>>>>> 64c5f521253e839012b4cc7fa99ba6868487d8c1
     </div>
     
     </div>
     </>
    );
}
export default Homepage