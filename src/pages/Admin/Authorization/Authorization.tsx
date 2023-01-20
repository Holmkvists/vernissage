// IMPORTS

import { useEffect } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import { getAuthorizedFromSessionStorage } from "../../../utils/sessionStorage/sessionStorage";

interface IAuthorizationProps {
  adminAuthorized: boolean;
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Authorization = (props: IAuthorizationProps) => {
  // CHECKS IF ADMIN IS AUTHORIZED FROM SESSION STORAGE

  useEffect(() => {
    getAuthorizedFromSessionStorage(props.setAdminAuthorized);
  }, []);

  // RENDERS LOGIN IF ADMIN IS NOT SIGNED IN

  return (
    <>
      {props.adminAuthorized ? (
        <Dashboard />
      ) : (
        <Login setAdminAuthorized={props.setAdminAuthorized} />
      )}
    </>
  );
};
