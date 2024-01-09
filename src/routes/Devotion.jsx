import { useEffect } from "react";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDevotions,
  deleteDevotion,
  startEditing,
} from "../redux/devotionsSlice"; // replace with the actual path to your devotions slice

const Devotion = () => {
  const { token, isAuthReady } = useAuthContext(); // get the authentication token
  const devotions = useSelector((state) => state.devotions.devotions);
  const selectedDevotion = useSelector(
    (state) => state.devotions.selectedDevotion
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthReady) {
      dispatch(fetchDevotions(token));
    }
  }, [isAuthReady, token, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDevotion({ token, id }));
  };

  const handleStartEditing = (devotion) => {
    dispatch(startEditing(devotion));
  };

  return (
    <div className=" flex h-auto mt-12 w-[100%] mx-auto">
      <DevotionDisplay
        devotions={devotions}
        selectedDevotion={selectedDevotion}
        handleDelete={handleDelete}
        startEditing={handleStartEditing}
      />
    </div>
  );
};

export default Devotion;
