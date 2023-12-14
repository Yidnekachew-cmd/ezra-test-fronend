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
    <div className="w-[70%] h-auto bg-gray-100 font-nokia-bold container flex flex-col mx-auto gap-12  pb-12">
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
      <Categories 
      title="Lessons Available"
      />
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