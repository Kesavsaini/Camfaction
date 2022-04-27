import React from "react";
import "./Comprof.scss"

const Comprof=()=>{
  return(
    <>
      <div className="comprof">
        <div className="profimg">
        <img src={require('./yash.jpg')} />
        </div>
        <div className="profname">
          <span>Rap Community</span>
        </div>
      </div>
    </>
  )
}
export default Comprof;