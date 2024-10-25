import React from "react";
import Navbar from "../components/navbar/Navbar";
import { furnitureData } from "../components/data/furniture";

const FurnuturePage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {furnitureData.map((item) => {
          return (
            <div key={item.id}>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div className="proModel">
                {item.company},{item.model},{item.price}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FurnuturePage;
