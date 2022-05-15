import React from "react";
import './Login.scss'
const Login=()=>{
    return(
        <>
        <div className="login">
            <div className="inp">
                <input type="text" placeholder="  Username/E-mail"/>
                <input type="password" placeholder="  Password" />
                <button>Log In</button>
            </div>
            
            <a href="">Forgot Password?</a>
        </div>
        </>
    )
}
export default Login