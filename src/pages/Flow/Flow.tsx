// IMPORTS

import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Exhibition } from "./Exhibition/Exhibition";
import { Shop } from "./Shop/Shop";

export const Flow = () => {
  // RENDERS SHOP OR EXHIBITION BASED ON PARAMETER

  let params = useParams();

  return (
    <>
      <Header />
      <div id="flow-container">
        {params.flowType === "shop" ? <Shop /> : <Exhibition />}
      </div>
      <Footer />
    </>
  );
};
