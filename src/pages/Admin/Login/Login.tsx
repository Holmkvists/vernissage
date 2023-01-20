// IMPORTS

import { useState } from "react";
import { saveAuthorizedToSessionStorage } from "../../../utils/sessionStorage/sessionStorage";

interface ILoginProps {
  setAdminAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login = (props: ILoginProps) => {
  const [password, setPassword] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  // POSTS TO BACKEND AND AUTHORIZES ADMIN IF PASSWORD IS CORRECT

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/authorize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.status === 200) {
        return saveAuthorizedToSessionStorage(props.setAdminAuthorized);
      }

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="admin-password">Admin password</label>
        <input
          id="admin-password"
          type="password"
          onChange={(e) => handleInput(e)}
          required
        />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};
