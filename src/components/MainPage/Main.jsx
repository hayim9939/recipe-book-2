import React from "react";
import Nav from "../nav/Nav";
import RecipeList from "./RecipeList";
import RecipeView from "./RecipeView";
import "./Main.css"
export default function Main() {

  return (
    <>
    <div className="bgImg">
      <Nav />
      <div className="d-lg-flex flex-row">
        <div className="col-lg-8 col-12 ">
          <RecipeView />
        </div>
        <div className="col-lg-4 col-12 pl-lg-0">
          <RecipeList />
        </div>
      </div>
    </div>
   </>
  );
}
