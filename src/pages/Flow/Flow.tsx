import { useParams } from "react-router-dom";
import { Exhibition } from "./Exhibition/Exhibition";
import { Shop } from "./Shop/Shop";

export const Flow = () => {
  let params = useParams();

  if (params.flowType === "shop") {
    return <Shop />;
  }

  return <Exhibition />;
};
