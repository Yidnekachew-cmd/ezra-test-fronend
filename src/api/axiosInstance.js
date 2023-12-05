import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

function useAxiosInstance() {
  const { user } = useAuthContext();
  const token = user?.token;

  const instance = axios.create({
    baseURL: "http://localhost:6000",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return instance;
}

export default useAxiosInstance;
