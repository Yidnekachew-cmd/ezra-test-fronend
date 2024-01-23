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
  showControls,
}) => {
  // Ensure devotions is defined and has at least one element
  if (!devotions || devotions.length === 0) {
    return <div>No devotions available</div>;
  }

  const devotionToDisplay = selectedDevotion || devotions[0];

  // Filter out the devotion to display from the previous devotions
  const previousDevotions = devotions.filter(
    (devotion) => devotion._id !== devotionToDisplay._id
  );

  return (
    <div className="w-[100%] h-auto font-nokia-bold  flex flex-col mx-auto container space-y-12 mb-12">
      <CurrentDevotional
        devotionToDisplay={devotionToDisplay}
        handleDelete={showControls ? handleDelete : () => {}}
        startEditing={showControls ? startEditing : () => {}}
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
  devotions: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  startEditing: PropTypes.func,
  setSelectedDevotion: PropTypes.func,
  selectedDevotion: PropTypes.object,
  showControls: PropTypes.bool,
};

export default DevotionDisplay;
