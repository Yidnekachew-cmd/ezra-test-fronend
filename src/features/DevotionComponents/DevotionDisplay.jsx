import PropTypes from "prop-types";
import CurrentDevotional from "./CurrentDevotional";
import PreviousDevotionals from "./PreviousDevotionals";
import Categories from "../CourseComponents/Categories";

const DevotionDisplay = ({
  devotions,
  handleDelete,
  startEditing,
  setSelectedDevotion,
  selectedDevotion,
}) => {
  // If no devotion is selected, display the latest one
  const devotionToDisplay = selectedDevotion || devotions[0];

  // Filter out the devotion to display from the previous devotions
  const previousDevotions = devotions.filter(
    (devotion) => devotion._id !== devotionToDisplay._id
  );

  return (
    <div className="w-[100%] h-auto font-nokia-bold  flex flex-col mx-auto container space-y-12 mb-12">
      <CurrentDevotional
        devotionToDisplay={devotionToDisplay}
        handleDelete={handleDelete}
        startEditing={startEditing}
      />
      <PreviousDevotionals
        previousDevotions={previousDevotions}
        handleDelete={handleDelete}
        setSelectedDevotion={setSelectedDevotion}
      />
      <Categories title="Lessons Available" />

    </div>
);
};

DevotionDisplay.propTypes = {
  devotions: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  startEditing: PropTypes.func,
  setSelectedDevotion: PropTypes.func,
  selectedDevotion: PropTypes.object,
};

export default DevotionDisplay;
