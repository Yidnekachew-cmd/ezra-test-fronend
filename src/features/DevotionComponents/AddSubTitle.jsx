import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const AddSubTitle = ({
    handleSubTitleChange,
    handleAddSubtitle,
  subTitles,
  deleteSubTitle,
}) => {
  return (
    <div className="space-y-3">
      
      {subTitles.map((subtitle, subtitleIndex) => (
        <div key={subtitleIndex} className="flex flex-col space-y-1 text-sm text-accent-6">
          <label>
            Sub Title {subtitleIndex + 1}
          </label>
          <div className="flex">
            <textarea
              type="text"
              name="subtitles"
              id={`body-${subtitleIndex}`}
              // placeholder={`paragraph-${paragraphIndex}`}
              placeholder="subtitle"
              className="w-full border-2 border-accent-6 outline-accent-7 rounded-lg text-accent-6 px-2 py-1 placeholder-accent-4"
              value={subtitle}
              onChange={(e) => handleSubTitleChange(e, subtitleIndex)}
            />
            <FaTrash
              onClick={() => deleteSubTitle(subtitleIndex)}
              className=" text-gray-700 text-xl cursor-pointer self-center"
            />
          </div>
        </div>
      ))}
     <button
   type="button"
   onClick={handleAddSubtitle}
   className="bg-accent-6 hover:bg-accent-7 text-[#fff] px-4 py-1 rounded-full cursor-pointer"
>
   Add Subtitle
</button>
    </div>
  );
};

AddSubTitle.propTypes = {
  handleSubTitleChange: PropTypes.func.isRequired,
    handleAddSubtitle: PropTypes.func.isRequired,
//   addSubTitle: PropTypes.func.isRequired,
  subTitles: PropTypes.array.isRequired,
  deleteSubTitle: PropTypes.func.isRequired,
};

export default AddSubTitle;
