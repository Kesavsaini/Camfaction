import React from "react";
import "./comcomp.scss";

const comcomp=(prop)=>{
    return(
        <>
        <div className="comcomp">
            <div className="comname">
            <img src="https://media.istockphoto.com/vectors/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-vector-id1141191007?k=20&m=1141191007&s=612x612&w=0&h=CXC28y_ZRV1KvjISumj5w20bYn649HVi4yYTPWsKaZI=" alt="" />
            <p>{prop.commname}</p>
            
            </div>
        </div>
        </>
    )
}
export default comcomp;