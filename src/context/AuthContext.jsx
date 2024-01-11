import { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setAuthReady } from "../redux/authSlice";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        role: action.payload.role,
        firstName: action.payload.firstName,
      }; // Include firstName property
    case "LOGOUT":
      return { user: null, role: null, firstName: null }; // Reset firstName on logout
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const auth = useSelector((state) => state.auth); // get the auth state from Redux
  const dispatch = useDispatch(); // get the dispatch function from Redux

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(login(user)); // dispatch the login action from authSlice
    }
    dispatch(setAuthReady(true)); // dispatch the setAuthReady action
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ ...auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
