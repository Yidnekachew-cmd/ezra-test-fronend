import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CurrentDevotional from "./CurrentDevotional";
import PreviousDevotionals from "./PreviousDevotionals";
import Categories from "../CourseComponents/Categories";
import { useGetDevotionsQuery } from "../../redux/api-slices/apiSlice";

const DevotionDisplay = ({ showControls }) => {
  const [selectedDevotion, setSelectedDevotion] = useState(null);
  const { data: devotions, error, isLoading } = useGetDevotionsQuery();

  useEffect(() => {
    if (devotions && devotions.length > 0) {
      setSelectedDevotion(devotions[0]);
    }
  }, [devotions]);

  if (isLoading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  if (!devotions || devotions.length === 0) {
    return <div>No devotions available</div>;
  }

  const devotionToDisplay = selectedDevotion || devotions[0];

  const previousDevotions = devotions.filter(
    (devotion) => devotion._id !== devotionToDisplay._id
  );

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
