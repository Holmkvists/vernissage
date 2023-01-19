import { useParams } from "react-router-dom";
import { Login } from "../../Login/Login";
import { AddArt } from "./AddArt/AddArt";
import { AddProduct } from "./AddProduct/AddProduct";

interface IAddProps {
  adminAuthorized: boolean;
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Add = (props: IAddProps) => {
  let params = useParams();

  if (props.adminAuthorized === true) {
    if (params.type === "art") {
      return <AddArt />;
    }
    return <AddProduct />;
  }

  return <Login setAdminAuthorized={props.setAdminAuthorized} />;
};
