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
      <button
        type="button"
        onClick={addPara}
        className="bg-gray-500 p-1 rounded-sm cursor-pointer"
      >
        Add Paragraph
      </button>
      {paragraphs.map((para, paragraphIndex) => (
        <div key={paragraphIndex} className="flex">
          <textarea
            type="text"
            name="para"
            id={`body-${paragraphIndex}`}
            placeholder={`para-${paragraphIndex}`}
            className="w-full border-2 border-amber-950  rounded-md px-2 py-1"
            value={para}
            onChange={(e) => handleParaChange(e, paragraphIndex)}
          />
          <FaTrash
            onClick={() => deletePara(paragraphIndex)}
            className=" text-gray-700 text-xl cursor-pointer self-center"
          />
          {/* <button  onClick={() => deletePara(paragraphIndex)} className='bg-gray-500 p-1  rounded-sm cursor-pointer '>
            Delete
        </button> */}

          <br />
        </div>
      ))}
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
