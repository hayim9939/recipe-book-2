import React from "react";
import { IoMdReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Pro.css"
export default function Pro() {
  return (
    <>
    <div className="bgImg">
    <Link to={"/main"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30}/></div>
          </div>
        </Link>
      <div className="d-flex h3 justify-content-center align-items-center mb-5 mt-5">ברוכים הבאים לגרסת הפרמיום</div>
    <div className="d-flex row justify-content-center align-items-center">
    <div class=" border rounded bc-card bc-card mr-2 mt-2 mt-sm-5" style={{width: "13rem",height: "19rem"}}>
        <div className="bg-pro rounded d-flex justify-content-center align-items-center" style={{height: "4rem"}}>Pro</div>
       <div class="card-body">
    <h2 class="d-flex justify-content-center align-items-center">10$</h2>
    <div className="mt-3 mb-3 c">
    <span className="d-flex justify-content-center">   יותר מ50 מתכונים *</span>
   <span className="d-flex justify-content-center"> ללא פרסומות *</span>
   <span className="d-flex justify-content-center">n</span>
   <span className="d-flex justify-content-center">n</span>
    </div>
  <Link to={"/main/pro/creditcard"} className="col-12 btn border bg-danger">קנה עכשיו</Link>
  </div>
</div>
    <div class=" border rounded bc-card bc-card mr-2 mt-2 " style={{width: "13rem",height: "19rem"}}>
        <div className="bg-pro rounded d-flex justify-content-center align-items-center" style={{height: "4rem"}}>Pro</div>
       <div class="card-body">
    <h2 class="d-flex justify-content-center align-items-center">10$</h2>
    <div className="mt-3 mb-3 c">
    <span className="d-flex justify-content-center">   יותר מ50 מתכונים *</span>
   <span className="d-flex justify-content-center"> ללא פרסומות *</span>
   <span className="d-flex justify-content-center">n</span>
   <span className="d-flex justify-content-center">n</span>
    </div>
    <Link to={"/main/pro/creditcard"} className="col-12 btn border bg-danger">קנה עכשיו</Link>
  </div>
</div>
    <div class=" border rounded bc-card bc-card mr-2 mt-2 mt-sm-5" style={{width: "13rem",height: "19rem"}}>
        <div className="bg-pro rounded d-flex justify-content-center align-items-center" style={{height: "4rem"}}>Pro</div>
       <div class="card-body">
    <h2 class="d-flex justify-content-center align-items-center">10$</h2>
    <div className="mt-3 mb-3 c">
    <span className="d-flex justify-content-center">   יותר מ50 מתכונים *</span>
   <span className="d-flex justify-content-center"> ללא פרסומות *</span>
   <span className="d-flex justify-content-center">n</span>
   <span className="d-flex justify-content-center">n</span>
    </div>
    <Link to={"/main/pro/creditcard"} className="col-12 btn border bg-danger">קנה עכשיו</Link>
  </div>
</div>
</div>
</div>
    </>
  );
}
