import React from "react";
import "./Speaker.css";
import { speakerData } from "../data/speaker";

const Speaker = () => {
  const firstFiveImages = speakerData.slice(0, 5);
  return (
    <>
      <h2> Speakers</h2>
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

export default Speaker;
