import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextData } from "../../App";
import { useAuth } from "../../Firebase";
import Card from "../Card/Card";
import NewCard from "../Card/NewCard";
import "./RecipeList.css";
import { UserRecipes } from "../../Firebase";

export default function RecipeList() {
  const { SetUser, user, currentOpen } = useContext(ContextData);
  const [userRecipe, setUserRecipe] = useState(null);

  const [filter, setfilter] = useState(null);

  const currentUser = useAuth();

  const [favCol, setFavoCol] = useState(false);

  useEffect(() => {
    if (currentUser) SetUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (user != undefined) {
      UserRecipes(user.uid, setUserRecipe);
    }
  }, [currentOpen]);

  if (user != undefined && userRecipe == null) {
    UserRecipes(user.uid, setUserRecipe);
  }

  async function favorite() {
    if (user != undefined) {
      await UserRecipes(user.uid, setUserRecipe);
      setFavoCol(!favCol);
    }
  }

  return (
    <>
      <div className="col-12 mt-2 px-0 ">
        <div className="overrecipe col-12">
          <div className="d-flex">
            <form className="search-bar pt-2 pb-2 pr-0 pl-3">
              <input
                className="inputStyle"
                type="search"
                placeholder=" שם מתכון:"
                pattern=".*\S.*"
                required
                dir="rtl"
                onChange={(e) => setfilter(e.target.value)}
              />
              <div className="search-btn "></div>
            </form>
            <div className="d-flex align-items-center actheart" onClick={favorite}>
              <lord-icon
                src="https://cdn.lordicon.com/hqrgkqvs.json"
                trigger="hover"
                colors={
                  favCol
                    ? "primary:#e83a30,secondary:#000000"
                    : "primary:#242424,secondary:#fad3d1"
                }
                style={{ width: "60px", height: "60px", cursor: "pointer" }}
              ></lord-icon>
            </div>
          </div>
          <div className="col-12">
            <NewCard />
            {userRecipe == null
              ? ""
              : favCol
              ? userRecipe
                  .filter((recipe) => recipe.favorite)
                  .map((item, i) => (
                    <div key={i}>
                      <Card item={item} />
                    </div>
                  ))
              : filter == null
              ? userRecipe.map((item, i) => (
                  <div key={i}>
                    <Card item={item} />
                  </div>
                ))
              : userRecipe
                  .filter((recipe) => recipe.name.startsWith(filter))
                  .map((item, i) => (
                    <div key={i}>
                      <Card item={item} />
                    </div>
                  ))}
          </div>
        </div>
      </div>
    </>
  );
}
