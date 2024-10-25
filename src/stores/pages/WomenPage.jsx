import React from "react";
import Navbar from "../components/navbar/Navbar";
import { womanData } from "../components/data/woman";

const WomenPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {womanData.map((item) => {
          return (
            <div key={item.id}>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WomenPage;
