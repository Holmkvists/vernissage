/* IMPORTS */

// REACT

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// MODELS

import { IShoppingBag } from "./models/IShoppingBag";

// COMPONENTS

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Flow } from "./pages/Flow/Flow";
import { ArtSingle } from "./pages/ArtSingle/ArtSingle";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation/OrderConfirmation";
import { Authorization } from "./pages/Admin/Authorization/Authorization";
import { Add } from "./pages/Admin/Dashboard/Add/Add";
import { Edit } from "./pages/Admin/Dashboard/Edit/Edit";

// SCSS

import "./scss/main.scss";

/* IMPORTS */

const App = () => {
  // GLOBAL STATES

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [adminAuthorized, setAdminAuthorized] = useState(true);
  const [shoppingBag, setShoppingBag] = useState<IShoppingBag[]>([]);

  // COMPONENTS STRUCTURE

  return (
    <>
      <BrowserRouter>
        <Header shoppingBag={shoppingBag} setShoppingBag={setShoppingBag} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:flowType" element={<Flow />} />
          <Route path="/exhibition/:id" element={<ArtSingle />} />
          <Route path="/shop/:id" element={<ShopSingle />} />
          <Route
            path="/shop/checkout"
            element={
              <Checkout
                setOrderPlaced={setOrderPlaced}
                shoppingBag={shoppingBag}
                setShoppingBag={setShoppingBag}
              />
            }
          />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmation orderPlaced={orderPlaced} />}
          />
          <Route
            path="/admin"
            element={
              <Authorization
                adminAuthorized={adminAuthorized}
                setAdminAuthorized={setAdminAuthorized}
              />
            }
          />
          <Route
            path="/admin/add/:type"
            element={
              <Add
                adminAuthorized={adminAuthorized}
                setAdminAuthorized={setAdminAuthorized}
              />
            }
          />
          <Route path="/admin/edit/:type" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
