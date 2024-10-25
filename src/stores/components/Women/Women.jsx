import React from "react";
import "./Women.css";
import { womanData } from "../data/woman";

const Women = () => {
  const firstFiveImages = womanData.slice(0, 5);
  return (
    <>
      <h2>Women</h2>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <img className="proImage" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Women;
