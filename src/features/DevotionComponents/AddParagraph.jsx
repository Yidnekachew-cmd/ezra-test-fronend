import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const AddParagraph = ({
  handleParaChange,
  addPara,
  paragraphs,
  deletePara,
}) => {
  return (
    <div className="space-y-3">
      
      {paragraphs.map((para, paragraphIndex) => (
        <div key={paragraphIndex} className="flex flex-col space-y-1 text-sm text-accent-6">
          <label>
            Paragraph {paragraphIndex + 1}
          </label>
          <div className="flex ">
            <textarea
              type="text"
              name="para"
              id={`body-${paragraphIndex}`}
              // placeholder={`paragraph-${paragraphIndex}`}
              placeholder="paragraph"
              className="w-full border-2 border-accent-6 outline-accent-7 rounded-lg text-accent-6 px-2 py-1 placeholder-accent-4"
              value={para}
              onChange={(e) => handleParaChange(e, paragraphIndex)}
            />
            <FaTrash
              onClick={() => deletePara(paragraphIndex)}
              className=" text-gray-700 text-xl cursor-pointer self-center"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPara}
        className="bg-accent-6 hover:bg-accent-7 text-[#fff] px-4 py-1 rounded-full cursor-pointer"
      >
        Add Paragraph
      </button>
    </div>
  );
};

AddParagraph.propTypes = {
  handleParaChange: PropTypes.func.isRequired,
  addPara: PropTypes.func.isRequired,
  paragraphs: PropTypes.array.isRequired,
  deletePara: PropTypes.func.isRequired,
};

export default AddParagraph;
