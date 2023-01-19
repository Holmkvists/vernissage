import { useParams } from "react-router-dom";
import { EditArt } from "./EditArt/EditArt";
import { EditProduct } from "./EditProduct/EditProduct";

export const Edit = () => {
  let params = useParams();

  if (params.type === "art") {
    return <EditArt />;
  }

  return <EditProduct />;
};
