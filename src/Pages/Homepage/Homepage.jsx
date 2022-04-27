import React from "react";
import "./Homepage.scss"
import Navbar from "../../components/Navbar/Navbar";
import Aboutmebox from "../../components/Aboutmebox/Aboutme";
import Post from "../../components/Post/Post";
import NavButton from "../../components/NavButtons/NavButton";

const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <Navbar />
                <div className="secnav">
                    <Aboutmebox />
                    <div className="midpage">
                        <NavButton />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>

                </div>
            </div>
        </>
    );
}
export default Homepage