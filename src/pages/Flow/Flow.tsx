// IMPORTS

import { useParams } from "react-router-dom";
import { Exhibition } from "./Exhibition/Exhibition";
import { Shop } from "./Shop/Shop";

export const Flow = () => {
  // RENDERS SHOP OR EXHIBITION BASED ON PARAMETER

  let params = useParams();

  return (
    <div id="flow-container">
      {params.flowType === "shop" ? <Shop /> : <Exhibition />}
    </div>
  );
};
