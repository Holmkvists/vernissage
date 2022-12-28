// IMPORTS

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Exhibition } from "./pages/Exhibition/Exhibition";
import { ArtSingle } from "./pages/ArtSingle/ArtSingle";
import { Shop } from "./pages/Shop/Shop";
import { ShopSingle } from "./pages/ShopSingle/ShopSingle";
import "./scss/main.scss";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
