import React from "react";
import Navbar from "../components/navbar/Navbar";
import { fridgeData } from "../components/data/fridge";

const Fridge = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {fridgeData.map((item) => {
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

export default Fridge;
