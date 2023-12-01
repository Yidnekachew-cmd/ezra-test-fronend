import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

// axios.defaults.baseURL = "https://ezra-seminary-api.onrender.com";
axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
