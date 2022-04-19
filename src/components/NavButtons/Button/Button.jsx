import React from "react";
import "./button.scss"
const Button=(prop)=>{
    return(
        <>
         <div className="button">
             <button className="tab">
               {prop.text}
             </button>
         </div>
        </>
    )
}
export default Button;