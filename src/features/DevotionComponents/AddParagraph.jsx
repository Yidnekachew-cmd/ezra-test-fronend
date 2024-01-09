import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addParagraph,
  updateParagraph,
  deleteParagraph,
} from "./devotionsSlice";

const AddParagraph = () => {
  const dispatch = useDispatch();
  const paragraphs = useSelector((state) => state.devotions.form.paragraphs);

  const handleParaChange = (event, index) => {
    dispatch(updateParagraph({ index, value: event.target.value }));
  };

  const addPara = () => {
    dispatch(addParagraph());
  };

  const deletePara = (index) => {
    dispatch(deleteParagraph(index));
  };

  return (
    <div className="space-y-3">
      {paragraphs.map((para, paragraphIndex) => (
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

export default AddParagraph;
