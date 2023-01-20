// IMPORTS

import { Header } from "../../components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
};
