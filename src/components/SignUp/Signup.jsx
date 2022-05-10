import React from "react";
import './Signup.scss'
const Signup = () => {
    return (
        <>
            <div className="signup">
                <div className="namebox">
                    <input type="fname" placeholder="  First Name" />
                    <input type="lname" placeholder="  Last Name" />
                    </div>
                    <div className="userbox">
                        <input type="email" placeholder="  E-mail" />
                        <input type="username" placeholder="  Username" />
                    </div>
                    <div className="passwordbox">
                        <input type="password" placeholder="  Password " />
                        <input type="password" placeholder="  Confirm Password" />
                    </div>
                    <div className="idbox">
                        <input type="clg" placeholder="  College/University" />
                    </div>
                    <button>Sign Up</button>                
                </div>
                
        </>

    )
}
export default Signup