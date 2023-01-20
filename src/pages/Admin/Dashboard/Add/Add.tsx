import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuthorizedFromSessionStorage } from "../../../../utils/sessionStorage/sessionStorage";
import { Login } from "../../Login/Login";
import { AddItem } from "./AddItem/AddItem";

interface IAddProps {
  adminAuthorized: boolean;
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Add = (props: IAddProps) => {
  useEffect(() => {
    getAuthorizedFromSessionStorage(props.setAdminAuthorized);
  }, []);

  let params = useParams();

  return (
    <>
      {props.adminAuthorized ? (
        <AddItem type={params.type} />
      ) : (
        <Login setAdminAuthorized={props.setAdminAuthorized} />
      )}
    </>
  );
};
