import React from "react";
import "./AboutUs.css";
import "../newRecipe/NewRecipe.css"
import { IoMdReturnRight } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="bgImg ">
      <Link to={"/"}>
          <div className="btn back-button">
            <div><IoMdReturnRight size={30}/></div>
          </div>
        </Link>
        <div className="container-fluid w-100 d-flex justify-content-center">
          <div className="aboutUs mt-5 col-9">
            <div>
              <h1 className="d-flex mt-4 justify-content-center ">קצת עלינו</h1>
              <p className="d-flex mt-4 justify-content-center text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores aperiam nisi eaque libero ullam impedit laudantium
                similique quaerat ratione ex quae, inventore at quidem
                recusandae quibusdam officiis optio? Tempora, soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
