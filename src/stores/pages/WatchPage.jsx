import React from "react";
import { watchData } from "../components/data/watch";
import Navbar from "../components/navbar/Navbar";

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {watchData.map((item) => {
          return (
            <div>
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

export default WatchPage;
