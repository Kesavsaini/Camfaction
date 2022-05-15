import React from "react";
import Button from "./Button/Button";
import "./navbutton.scss";
const NavButton=()=>{
    return(
        <>
        <div className="navbutton">
        <Button text="New post"/>
        <Button text="Photos"/>
        <Button text="videos"/>
        <Button text="Event"/>
        </div>    
        </>
    )
}
export default NavButton;