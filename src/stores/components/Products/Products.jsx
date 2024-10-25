import React from "react";
import "./Products.css";
import Mobiles from "../Mobiles/Mobiles";
import Computers from "../computers/Computers";

import Speaker from "../Speaker/Speaker";
import Kitchen from "../Kitchen/Kitchen";
import Furniture from "../Furniture/Furniture";
import Fridge from "../Fridge/Fridge";
import Women from "../Women/Women";
import Men from "../Men/Men";
import ProData from "../ProData/ProData";
import Ac from "../Ac/Ac";
import Books from "../Books/Books";
import Tv from "../Tv/Tv";
import Watch from "../Watch/Watch";

const Products = () => {
  return (
    <div>
      <Mobiles></Mobiles>
      <Computers></Computers>
      <Tv></Tv>

      <Speaker />
      <Kitchen />
      <Furniture />
      <Fridge />
      <Women />
      <Men />
      <ProData />
      <Ac />
      <Books />
      <Watch> </Watch>
    </div>
  );
};

export default Products;
