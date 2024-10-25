import React from "react";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Kitchen from "./stores/components/Kitchen/Kitchen";
import MobilePage from "./stores/pages/MobilePage";
import "./App.css";
import Watch from "./stores/components/Watch/Watch";
import WatchPage from "./stores/pages/WatchPage";
import AcPage from "./stores/pages/AcPage";
import BooksPage from "./stores/pages/BooksPage";
import ComputerPage from "./stores/pages/ComputerPage";
import FridgePage from "./stores/pages/Fridge";
import FurnuturePage from "./stores/pages/FurnuturePage";
import Men from "./stores/components/Men/Men";
import { KitchenPage } from "./stores/pages/KitchenPage";
import MenPage from "./stores/pages/MenPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import WomenPage from "./stores/pages/WomenPage";
import TvPage from "./stores/pages/TvPage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./stores/UserCart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/book" element={<BooksPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/furnture" element={<FurnuturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/menwear" element={<MenPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/womenwear" element={<WomenPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
