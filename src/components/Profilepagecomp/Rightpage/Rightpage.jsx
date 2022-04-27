import React from "react";
import "./Rightpage.scss"
import Comprof from "../../Comprof/Comprof";
const Rightpage = () => {
  return (
    <>
      <div className="rightpage">
        <div className="content">
          <div className="commname">
            <h2> Your Communities</h2>
          </div>
          <div className="containers">
          <div className="container1">
            <Comprof />
            <Comprof />
            <Comprof />
          </div>
          <div className="container2">
            <Comprof />
            <Comprof />
            <Comprof />
          </div>
          <div className="container3">
            <Comprof />
            <Comprof />
            <Comprof />
          </div>
          <div className="container4">
            <Comprof />
            <Comprof />
            <Comprof />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Rightpage;