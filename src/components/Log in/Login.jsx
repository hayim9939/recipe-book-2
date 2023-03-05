import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { FcGoogle } from "react-icons/fc";
import { FaGhost } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase";
import { useContext } from "react";
import Dialog from '@mui/material/Dialog';
import LoginPas from "./LoginPas";
import { useState } from "react";
import { ContextData } from "../../App";


export default function Login() {
  const [open, setOpen] = useState(false);
  const { user, SetUser } = useContext(ContextData);


  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // console.log(result);
        SetUser(result);
      })
      .catch((erorr) => {
        // console.log(erorr);
        alert("error");
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        variant="outlined"
        sx={{ width: 320}}
        style={{ backgroundColor: "rgba(0, 0, 0,0.35)" }}
      >
        <h3>
          <b style={{ color: "black" }}>Welcome!</b>
        </h3>
        <p level="body2" style={{ color: "wheat" }}>
          Sign /Log in to continue.
        </p>
        <Button className="btn bg-primary mb-2" onClick={handleClickOpen}>
          <RiLoginCircleFill /> LogIn
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <LoginPas/>
      </Dialog>

        <Button onClick={signInWithGoogle} className="btn bg-primary mb-2">
          <h6>
            <FcGoogle /> Sign in with Google
          </h6>
        </Button>
        <Button className="btn bg-primary mb-2">
          <h6>
            <FaGhost /> Sign in as a Guest
          </h6>
        </Button>
      </Card>
    </div>
  );
}
