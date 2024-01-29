import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevotions, selectDevotion } from "../../redux/devotionsSlice";
import CurrentDevotional from "./CurrentDevotional";
import PreviousDevotionals from "./PreviousDevotionals";
import Categories from "../CourseComponents/Categories";

const DevotionDisplay = ({ showControls }) => {
  const dispatch = useDispatch();
  const devotions = useSelector((state) => state.devotions.devotions);
  const selectedDevotion = useSelector(
    (state) => state.devotions.selectedDevotion
  );

  useEffect(() => {
    dispatch(fetchDevotions());
  }, [dispatch]);

  // Ensure devotions is defined and has at least one element
  if (!devotions || devotions.length === 0) {
    return <div>No devotions available</div>;
  }

  const devotionToDisplay = selectedDevotion || devotions[0];

  // Filter out the devotion to display from the previous devotions
  const previousDevotions = devotions.filter(
    (devotion) => devotion._id !== devotionToDisplay._id
  );
  const setSelectedDevotion = (devotion) => {
    dispatch(selectDevotion(devotion));
  };

  return (
    <div className="w-[100%] h-auto font-nokia-bold  flex flex-col mx-auto container space-y-12 mb-12">
      <CurrentDevotional
        devotionToDisplay={devotionToDisplay}
        showControls={showControls}
      />
      <PreviousDevotionals
        previousDevotions={previousDevotions}
        setSelectedDevotion={setSelectedDevotion}
      />
      <Categories title="Lessons Available" />
    </div>
  );
};

DevotionDisplay.propTypes = {
  showControls: PropTypes.bool.isRequired,
};

export default DevotionDisplay;
