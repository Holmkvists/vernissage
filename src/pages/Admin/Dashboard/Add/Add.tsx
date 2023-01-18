import { useParams } from "react-router-dom";
import { AddArt } from "./AddArt/AddArt";
import { AddProduct } from "./AddProduct/AddProduct";

export const Add = () => {
  let params = useParams();

  if (params.type === "art") {
    return <AddArt />;
  }

  return <AddProduct />;
};
