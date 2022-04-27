import React from "react";
import "./Toppage.scss"

const Toppage = () => {
    return (
        <>
            <div className="heading">
                <div className="img">
                    <img src={require('./yash.jpg')} />
                </div>
                <div className="name">
                    <h2>Yash Pokharna</h2>
                    <span>Chandigarh University</span>
                </div>
            </div>
        </>
    )
}
export default Toppage;