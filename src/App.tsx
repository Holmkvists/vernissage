/* IMPORTS */

// REACT ROUTER

import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Flow } from "./pages/Flow/Flow";
import { ArtSingle } from "./pages/ArtSingle/ArtSingle";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle";
import { Authorization } from "./pages/Admin/Authorization/Authorization";
import { Add } from "./pages/Admin/Dashboard/Add/Add";
import { Edit } from "./pages/Admin/Dashboard/Edit/Edit";

// SCSS

import "./scss/main.scss";
import { Checkout } from "./pages/Checkout/Checkout";

// COMPONENTS STRUCTURE

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:flowType" element={<Flow />} />
          <Route path="/exhibition/:id" element={<ArtSingle />} />
          <Route path="/shop/:id" element={<ShopSingle />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Authorization />} />
          <Route path="/admin/add/:type" element={<Add />} />
          <Route path="/admin/edit/:type" element={<Edit />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
