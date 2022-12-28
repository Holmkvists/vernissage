// IMPORTS

import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Slideshow } from "./components/Slideshow/Slideshow";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Slideshow />
    </>
  );
};
