import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "./Password.scss"

const Password = () => {
    return (
        <>

            <div className="section2">
                <div className="opassword">
                    <p>Old Password</p>
                    <input type="password" />
                </div>
                <div className="npassword">
                    <p>New Password</p>
                    <input type="password" />
                </div>
                <div className="cpassword">
                    <p>Confirm Password</p>
                    <input type="password" />
                </div>
                <div className="button3">
                <button>Save Changes</button>
                </div>
            </div>

        </>
    )
}

export default Password;