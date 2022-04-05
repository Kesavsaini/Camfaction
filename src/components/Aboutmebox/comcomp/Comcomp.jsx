import React from "react";
import "./comcomp.scss";

const comcomp=(prop)=>{
    return(
        <>
        <div className="comcomp">
            <div className="comname">
            <img src="https://img.jagranjosh.com/imported/images/institute/CHANDIGARH-UNIVERSITY-365x240.jpg" alt="" />
            <p>{prop.commname}</p>
            
            </div>
        </div>
        </>
    )
}
export default comcomp;