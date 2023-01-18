/* IMPORTS */

// REACT ROUTER

import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Exhibition } from "./pages/Exhibition/Exhibition";
import { ArtSingle } from "./pages/ArtSingle/ArtSingle";
import { Shop } from "./pages/Shop/Shop";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle";
import { Authorization } from "./pages/Admin/Authorization/Authorization";
import { Add } from "./pages/Admin/Dashboard/Add/Add";
import { Edit } from "./pages/Admin/Dashboard/Edit/Edit";

// SCSS

import "./scss/main.scss";

// COMPONENTS STRUCTURE

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/exhibition/:name" element={<ArtSingle />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name" element={<ShopSingle />} />
          <Route path="/admin" element={<Authorization />} />
          <Route path="/admin/add/:type" element={<Add />} />
          <Route path="/admin/edit/:type" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
