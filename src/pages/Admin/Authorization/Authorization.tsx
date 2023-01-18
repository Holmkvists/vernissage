import { useState } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";

export const Authorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div>
      {isAuthorized ? (
        <Dashboard />
      ) : (
        <Login setIsAuthorized={setIsAuthorized} />
      )}
    </div>
  );
};
