import React from "react";
import { acData } from "../components/data/ac";
import Navbar from "../components/navbar/Navbar";

const AcPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {acData.map((item) => {
          return (
            <div key={item.id}>
              <div className="pageImg">
                <img src={item.image} alt="" />
              </div>
              <div className="proModel">
                {item.company}, {item.model}, {item.price}
              </div>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
};

export default AcPage;
