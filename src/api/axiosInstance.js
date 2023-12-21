import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

function useAxiosInstance() {
  const { user } = useAuthContext();
  const token = user?.token;

  const instance = axios.create({
    baseURL: "http://localhost:5354",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
}

export default useAxiosInstance;
