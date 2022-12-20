// IMPORTS

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter></BrowserRouter>
    </>
  );
}

export default App;
