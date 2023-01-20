// IMPORTS

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
  // CHECKS IF ADMIN IS AUTHORIZED FROM SESSION STORAGE

  useEffect(() => {
    getAuthorizedFromSessionStorage(props.setAdminAuthorized);
  }, []);

  // SENDS PARAMETER TYPE TO RENDER CORRECT FORM

  let params = useParams();

  // RENDERS LOGIN IF ADMIN IS NOT SIGNED IN

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
