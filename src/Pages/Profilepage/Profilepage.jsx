import React from "react";
import Midpage from "../../components/Profilepagecomp/Midpage/Midpage";
import Rightpage from "../../components/Profilepagecomp/Rightpage/Rightpage";
import Toppage from "../../components/Profilepagecomp/Toppage/Toppage";
import "./Profilepage.scss"

const Profilepage = () => {
    return (
        <>
            <div className="whole">
                <div className="toppage">
                    <Toppage />
                </div>
                <div className="commmidpage">
                    <Midpage />
                    <Rightpage />
                </div>
            </div>
        </>
    )
}
export default Profilepage;