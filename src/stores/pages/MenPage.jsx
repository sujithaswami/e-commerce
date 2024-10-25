import React from "react";
import Navbar from "../components/navbar/Navbar";
import { menData } from "../components/data/men";

const MenPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {menData.map((item) => {
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

export default MenPage;
