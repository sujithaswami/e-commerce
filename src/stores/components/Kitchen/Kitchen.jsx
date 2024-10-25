import React from "react";
import { kitchenData } from "../data/kitchen";
import "./Kitchen.css";

const Kitchen = () => {
  const firstFiveImages = kitchenData.slice(0, 5);
  return (
    <>
      <h2>Kitchen</h2>
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

export default Kitchen;
