import { useEffect, useState } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import { getAuthorizedFromSessionStorage } from "../../../utils/sessionStorage/sessionStorage";

interface IAuthorizationProps {
  adminAuthorized: boolean;
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Authorization = (props: IAuthorizationProps) => {
  useEffect(() => {
    getAuthorizedFromSessionStorage(props.setAdminAuthorized);
  }, []);

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
