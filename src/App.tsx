// IMPORTS

// REACT

import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS

import { Home } from "./pages/Home/Home";
import { Flow } from "./pages/Flow/Flow";
import { ArtSingle } from "./pages/ArtSingle/ArtSingle";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle";
import { Checkout } from "./pages/Checkout/Checkout";
import { Authorization } from "./pages/Admin/Authorization/Authorization";
import { Add } from "./pages/Admin/Dashboard/Add/Add";

// SCSS

import "./scss/main.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:flowType" element={<Flow />} />
          <Route path="/exhibition/:id" element={<ArtSingle />} />
          <Route path="/shop/:id" element={<ShopSingle />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Authorization />} />
          <Route path="/admin/add/:type" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
