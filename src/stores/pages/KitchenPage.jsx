import React from "react";

import Navbar from "../components/navbar/Navbar";
import { kitchenData } from "../components/data/kitchen";

export const KitchenPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {kitchenData.map((item) => {
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
