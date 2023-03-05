import React, { useContext, useState, useEffect } from "react";
import "./Nav.css";
import Burger from "./Burger";
import { ContextData } from "../../App";
import Avatar from "@mui/material/Avatar";

export default function Nav() {
  const [burger, sutBurger] = useState(false);
  const {user} = useContext(ContextData);

  function hideBurger() {
    sutBurger(!burger);
  }

    // if (burger) {
    //   document.getElementById("e").addEventListener("click", () =>{
    //     console.log("click");
    //     hideBurger()});
    //   console.log("om");
    // }


  return (
    <div id="e" className="container-fluid sticky-top">
      <div className="myNav row ">
        <div className="col-2 d-flex align-items-center">
          <div className="logoNav">
            <img
              className="logoNavImg"
              src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-6 col-5 pr-0 pl-0 d-flex justify-content-center align-items-center">
          <h2 className="myFont">המתכונים שלי</h2>
        </div>
        <div className="col-3 fst-italic fs-2 pr-0 pl-0 d-flex justify-content-center align-items-center">
          {!burger ? (
            <div className="name d-flex align-content-center">
              <div className="mt-2 mr-3">{user==undefined?" ":`${user.displayName}`}</div>
              <Avatar className="border " alt="User Name" src={user==undefined?" ":`${user.photoURL}`} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-sm-1 col-2 pr-0 pl-0 d-flex justify-content-center">
          <div className="" onClick={hideBurger}>
            <div className="thebur">
              <lord-icon
                src="https://cdn.lordicon.com/phtfmmnb.json"
                trigger="morph"
                colors="primary:#545454,secondary:#000000"
                stroke="100"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
      </div>
      {burger ? (
        <div>
          <div className="d-flex justify-content-end">
            <Burger />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
