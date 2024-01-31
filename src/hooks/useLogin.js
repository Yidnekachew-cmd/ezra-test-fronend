import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/authSlice"; // import the login action from your authSlice

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); // get the dispatch function from Redux

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://ezra-seminary-api.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch(loginAction(json)); // dispatch the login action from authSlice

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
