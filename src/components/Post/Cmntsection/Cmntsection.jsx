import React from "react";
import "./cmntsection.scss";
import Vote from "../vote/Vote";
const Cmntsection=()=>{
  return(
    <>
    <div className="cmntsection">
        <div className="wrap">
        <Vote/>
        <div className="prof">
            <img src="https://mumbaimirror.indiatimes.com/photo/73980084.cms" alt="" />
            <p>Abhishek Kumar</p>
        </div>
        </div>
        <div className="cmnt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequuntur quod tempore itaque ex in quam voluptate hic quas nihil impedit asperiores maxime aliquam eaque eum alias nam, eveniet corporis accusantium suscipit sed unde. Repellendus, delectus repellat et error hic adipisci molestias deserunt nulla ab quasi neque saepe dolorem facere nihil!
        </div>
    </div>
    </>
  )
}
export default Cmntsection;