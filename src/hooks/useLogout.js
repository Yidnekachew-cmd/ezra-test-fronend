import { useAuthContext } from "./useAuthContext";
// import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    // remove user from storage
    localStorage.removeItem("user");
    // remove workouts from storage
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
