import CurrentDevotional from "./CurrentDevotional";
import PreviousDevotionals from "./PreviousDevotionals";
import Categories from "../CourseComponents/Categories";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteDevotion,
  startEditing,
  selectDevotion,
} from "../../redux/devotionsSlice";

const DevotionDisplay = () => {
  const dispatch = useDispatch();
  const devotions = useSelector((state) => state.devotions.devotions) || [];
  const selectedDevotion = useSelector(
    (state) => state.devotions.selectedDevotion
  );

  const devotionToDisplay =
    devotions.length > 0 ? selectedDevotion || devotions[0] : undefined;
  const previousDevotions =
    devotions.length > 0
      ? devotions.filter((devotion) => devotion._id !== devotionToDisplay._id)
      : [];

  const handleDelete = (id) => {
    dispatch(deleteDevotion(id));
  };

  const startEditingDevotion = (devotion) => {
    dispatch(startEditing(devotion));
  };

  const setSelectedDevotion = (devotion) => {
    dispatch(selectDevotion(devotion));
  };

  return (
    <div className="w-[100%] h-auto font-nokia-bold  flex flex-col mx-auto container space-y-12 mb-12">
      <CurrentDevotional
        devotionToDisplay={devotionToDisplay}
        handleDelete={handleDelete}
        startEditing={startEditingDevotion}
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

export default DevotionDisplay;
