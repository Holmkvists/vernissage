// IMPORTS

import { useEffect, useState } from "react";
import { Login } from "../Login/Login";
import { Dashboard } from "../Dashboard/Dashboard";
import { getAuthorizedFromSessionStorage } from "../../../utils/sessionStorage/sessionStorage";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";

export const Authorization = () => {
  const [adminAuthorized, setAdminAuthorized] = useState(false);

  // CHECKS IF ADMIN IS AUTHORIZED FROM SESSION STORAGE

  useEffect(() => {
    getAuthorizedFromSessionStorage(setAdminAuthorized);
  }, []);

  // RENDERS LOGIN IF ADMIN IS NOT SIGNED IN

  return (
    <>
      <Header />
      {adminAuthorized ? (
        <Dashboard />
      ) : (
        <Login setAdminAuthorized={setAdminAuthorized} />
      )}
      <Footer />
    </>
  );
};
