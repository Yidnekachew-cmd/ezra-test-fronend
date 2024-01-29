import { useEffect } from "react";
import DevotionForm from "../features/DevotionComponents/DevotionForm";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDispatch } from "react-redux";
import { fetchDevotions } from "@/redux/devotionsSlice"; // replace with the actual path to your slice

const ManageDevotion = () => {
  const { isAuthReady } = useAuthContext(); // get the authentication token
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthReady) {
      dispatch(fetchDevotions());
    }
  }, [dispatch, isAuthReady]);

  return (
    <div className=" flex h-auto mt-12 w-[100%] mx-auto">
      <DevotionDisplay showControls={true} />
      <DevotionForm />
    </div>
  );
};

export default ManageDevotion;
