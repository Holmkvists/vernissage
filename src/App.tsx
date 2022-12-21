// IMPORTS

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
