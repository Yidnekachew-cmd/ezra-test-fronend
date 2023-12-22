import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5100/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json);

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
        return json;
      }
    } catch (error) {
      setIsLoading(false);
      setError("Failed to connect. Please check your network and try again.");
    }
  };
  return { login, error, isLoading };
};
