import { FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  addParagraph,
  updateParagraph,
  deleteParagraph,
  // selectParagraphs,
  // selectForm,
} from "../../redux/devotionsSlice";

const AddParagraph = ({ paragraphs, localParagraphs, setLocalParagraphs }) => {
  const dispatch = useDispatch();
  // const paragraphs = useSelector(selectForm);
  // console.log(paragraphs.body);

  useEffect(() => {
    if (paragraphs) {
      setLocalParagraphs(paragraphs);
    }
  }, [paragraphs]);

  const handleParaChange = (event, index) => {
    const newParagraphs = [...localParagraphs];
    newParagraphs[index] = event.target.value;
    setLocalParagraphs(newParagraphs);
    dispatch(updateParagraph({ index, text: event.target.value }));
  };

  const addPara = () => {
    const newParagraphs = Array.isArray(localParagraphs)
      ? [...localParagraphs, ""]
      : [""];
    setLocalParagraphs(newParagraphs);
    dispatch(addParagraph(newParagraphs));
  };

  const deletePara = (index) => {
    dispatch(deleteParagraph(index));
  };

  return (
    <div className="space-y-3">
      {Array.isArray(localParagraphs) &&
        localParagraphs.map((para, paragraphIndex) => (
          <div
            key={paragraphIndex}
            className="flex flex-col space-y-1 text-sm text-accent-6"
          >
            <label>Paragraph {paragraphIndex + 1}</label>
            <div className="flex ">
              <textarea
                type="text"
                name="para"
                id={`body-${paragraphIndex}`}
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
  paragraphs: PropTypes.array,
  localParagraphs: PropTypes.array.isRequired,
  setLocalParagraphs: PropTypes.func.isRequired,
};
export default AddParagraph;
