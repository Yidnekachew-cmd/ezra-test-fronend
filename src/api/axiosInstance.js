import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

function useAxiosInstance() {
  const { user } = useAuthContext();
  const token = user?.token;

  const instance = axios.create({
    // baseURL: "http://localhost:5100",
    baseURL: "https://ezra-seminary-api.onrender.com",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return instance;
}

export default useAxiosInstance;
