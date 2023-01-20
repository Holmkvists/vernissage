// IMPORTS

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../../../components/Footer/Footer";
import { Header } from "../../../../components/Header/Header";
import { getAuthorizedFromSessionStorage } from "../../../../utils/sessionStorage/sessionStorage";
import { Login } from "../../Login/Login";
import { AddItem } from "./AddItem/AddItem";

export const Add = () => {
  const [adminAuthorized, setAdminAuthorized] = useState(false);

  // CHECKS IF ADMIN IS AUTHORIZED FROM SESSION STORAGE

  useEffect(() => {
    getAuthorizedFromSessionStorage(setAdminAuthorized);
  }, []);

  // SENDS PARAMETER TYPE TO RENDER CORRECT FORM

  let params = useParams();

  // RENDERS LOGIN IF ADMIN IS NOT SIGNED IN

  return (
    <>
      <Header />
      {adminAuthorized ? (
        <AddItem type={params.type} />
      ) : (
        <Login setAdminAuthorized={setAdminAuthorized} />
      )}
      <Footer />
    </>
  );
};
