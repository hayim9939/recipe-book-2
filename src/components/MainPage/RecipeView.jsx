import React, { useContext, useEffect, useState } from "react";
import "./RecipeView.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContextData } from "../../App";
import Plus from "./Plus";
import { getDownloadURL, listAll, ref } from "@firebase/storage";
import { storage } from "../../Firebase";

export default function RecipeView() {
  const [data, setData] = useState(undefined);

  const { currentOpen ,previewUrl, setPreviewUrl, imgFile, setImgFile  } = useContext(ContextData);

  useEffect(() => {
    setData(currentOpen);
    setImgFile([]);
    setPreviewUrl([])
    if (currentOpen!=null){
      const imagesListRef = ref(storage, `${currentOpen.docId==null?"":currentOpen.docId}`);
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          setImgFile((imgFile) => [...imgFile, item])
          getDownloadURL(item).then((url) => {
            setPreviewUrl((previewUrl) => [...previewUrl, url]);
          });
        });
      });
    }
  
  }, [currentOpen]);

    
  
  let datal = [
   " https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
  ];

  return (
    <div className="my-2 d-flex  ">
      {data == undefined || currentOpen == undefined ? (
        <div className="RecipeViewContiner shadow col-12 imgLogo_container">
          <img
            className="imgLogo "
            src="https://i.imagesup.co/images2/eb71cc96839f80c8a1e3f35783f6b28984ca90d2.png"
            alt="logo"
          />
        </div>
      ) : (
        <div className="RecipeViewContiner shadow col-12 ">
          <h2 className="d-flex justify-content-center">{currentOpen.name}</h2>
          <div className="row">
            <div className="img_div col-12 col-sm-6">
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={true}
              >
                {previewUrl.length==0?(datal.map((item, i) => (
                  <img key={i} className="imgCarousel " src={item} />
                ))):(previewUrl.map((item, i) => (
                  <img key={i} className="imgCarousel " src={item} />
                )))
                
                }
              </Carousel>
            </div>
            <div className="col-12 col-sm-6 ">
              <h3 className="col-12 d-flex justify-content-center">מרכיבים</h3>
              {currentOpen.ingredients.map((item, i) => (
                <div
                  dir="rtl"
                  className="d-flex col-12 justify-content-start ing_style"
                  key={i}
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>
          <div className="plus">
            <Plus />
          </div>
          <h3 className=" d-flex justify-content-center justify-content-start ">
            אופן הכנה
          </h3>
          {currentOpen.instructions.map((item, i) => (
            <div
              dir="rtl"
              className="d-flex col-12 text-break ing_style"
              key={i}
            >
              {i + 1} . {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
