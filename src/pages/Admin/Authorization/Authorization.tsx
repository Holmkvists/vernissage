import { useState } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";

interface IAuthorizationProps {
  adminAuthorized: boolean;
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Authorization = (props: IAuthorizationProps) => {
  return (
    <div>
      {props.adminAuthorized ? (
        <Dashboard />
      ) : (
        <Login setAdminAuthorized={props.setAdminAuthorized} />
      )}
    </div>
  );
};
