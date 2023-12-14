import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, role: action.payload.role };
    case "LOGOUT":
      return { user: null, role: null };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    role: null,
  });
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    setIsAuthReady(true); // Set this to true after checking localStorage
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, isAuthReady, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
