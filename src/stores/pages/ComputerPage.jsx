import React from "react";
import Navbar from "../components/navbar/Navbar";
import { computerData } from "../components/data/computers";

const ComputerPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {computerData.map((item) => {
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
    </>
  );
};

export default ComputerPage;
