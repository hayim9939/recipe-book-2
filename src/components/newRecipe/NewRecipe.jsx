import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import "./NewRecipe.css";
import RecipeData from "../../Classes/ClassNewRecipe";
import InputFile from "../../inputFile/InputFile";
import Dialog from "@mui/material/Dialog";
import { useAuth, db, storage } from "../../Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { ref, uploadBytes } from "@firebase/storage";
import { useContext } from "react";
import { ContextData } from "../../App";
import { v4 } from "uuid";
import { IoMdReturnRight } from "react-icons/io";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Carousel } from "react-responsive-carousel";

export default function NewRecipe() {
  const { previewUrl, setPreviewUrl, imgFile, setImgFile, setCurrentOpen } =
    useContext(ContextData);
  const user = useAuth();
  console.log(user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const refName = useRef();
  const refIngredients = useRef();
  const refInstructions = useRef();
  useEffect(() => {
    setCurrentOpen(null);
  }, []);

  let set = function setRecipe() {
    let name = refName.current.value;
    let ingredients = refIngredients.current.value;
    let instructions = refInstructions.current.value;

    ingredients = ingredients.split("\n");
    instructions = instructions.split("\n");

    let newRecipeData = new RecipeData(
      name,
      ingredients,
      instructions,
      user.uid
    );
    newRecipeData.docId = v4();
    console.log(newRecipeData);
    const docRef = setDoc(doc(db, "recepis", `${newRecipeData.docId}`), {
      ...newRecipeData,
    });

    if (previewUrl == null) {
      navigate("/main");
    } else {
      for (let index = 0; index < imgFile.length; index++) {
        const imageRef = ref(
          storage,
          `${newRecipeData.docId}/${imgFile[index].file.name}`
        );
        uploadBytes(imageRef, imgFile[index].file).then((e) => {
          console.log(e);
        });
      }
      setImgFile([]);
      setPreviewUrl(null);
      navigate("/main");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <div className="bgImg">
      <div dir="rtl" className="d-flex justify-content-center m-3">
        <Link to={"/main"}>
          <div className="btn back-button">
            <div>
              <IoMdReturnRight size={30} />
            </div>
          </div>
        </Link>
        <div className="newRecipeForm p-md-5  col-12 col-md-9  border flex-column d-flex justify-content-center my-5">
          <h1 className="d-flex justify-content-center myFont">מתכון חדש</h1>
          <div className="d-flex justify-content-center">
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <Box
                  component="form"
                  className="col-11"
                  sx={{ "& .MuiTextField-root": { m: 2, width: "160ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <div className="d-flex justify-content-center">
                      <TextField
                        id="outlined-multiline-flexible"
                        className="bgInpot"
                        label="שם מתכון"
                        placeholder="שם מתכון"
                        color="error"
                        inputRef={refName}
                      />
                    </div>
                    <div className="d-flex justify-content-end  row mr-3 m-1" dir="ltr" >
                      <div className="col-12 nl-2 col-lg-6 ">
                      <Carousel showThumbs={false}  autoPlay={true}  transitionTime={3} infiniteLoop={true} showStatus={true}>            
              {previewUrl.map((item, i) => (
                  <img key={i} className="imgCarouselNew " src={item} />
                ))}
              </Carousel>
                      </div>
                      <div className="btn col-12 d-flex col-lg-4 justify-content-center" style={{ color: "black", cursor: "pointer", height:"100px" }}>
                        <div className="d-flex align-items-center" onClick={handleClickOpen} >
                          <b> הוסף תמונה </b>
                          <lord-icon
                            src="https://cdn.lordicon.com/ynwbvguu.json"
                            trigger="hover"
                            colors="primary:#c71f16"
                            style={{ width: "60px", height: "60px" }}
                          ></lord-icon>
                        </div>
                      </div>
                      <Dialog open={open} onClose={handleClose}>
                        <InputFile />
                      </Dialog>
                    </div>
                    <div className="d-flex justify-content-center">
                      <TextField
                        id="outlined-textarea"
                        className="bgInpot"
                        label="מרכיבים"
                        placeholder="מרכיבים"
                        color="error"
                        multiline
                        inputRef={refIngredients}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <TextField
                        id="outlined-multiline-static"
                        label="אופן הכנה"
                        placeholder="אופן הכנה"
                        className="bgInpot"
                        multiline
                        color="error"
                        rows={5}
                        inputRef={refInstructions}
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        onClick={set}
                        type="button"
                        className="btn d-flex btn-color m-3 "
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/wfadduyp.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                        <div className="mr-1"> הוסף </div>
                      </button>
                    </div>
                  </div>
                </Box>
              </ThemeProvider>
            </CacheProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
