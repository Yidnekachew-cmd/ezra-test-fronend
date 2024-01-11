import { useEffect } from "react";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDevotions,
  deleteDevotion,
  startEditing,
} from "../redux/devotionsSlice"; // replace with the actual path to your devotions slice

const Devotion = () => {
  const { isAuthReady } = useSelector((state) => state.auth); // get the authentication readiness
  const devotions = useSelector((state) => state.devotions.devotions);
  const selectedDevotion = useSelector(
    (state) => state.devotions.selectedDevotion
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Is auth ready:", isAuthReady); // log the isAuthReady value
    if (isAuthReady) {
      dispatch(fetchDevotions()); // remove the token argument
    }
    console.log(devotions);
  }, [isAuthReady, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDevotion(id)); // remove the token argument
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
