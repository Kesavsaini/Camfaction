import React from "react";
import Account from "../../components/Account/Account";
import "./Auth.scss";
import Login from "../../components/Login/Login";
import Signup from "../../components/SignUp/Signup";
const Auth=()=>{
    return(
      <>
       <div className="auth">
            <Signup/>
       </div>
      </>
    );
}
export default Auth;