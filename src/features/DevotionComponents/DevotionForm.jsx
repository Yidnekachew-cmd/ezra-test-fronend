// import Devotion from "@/routes/Devotion";
import AddParagraph from "./AddParagraph";
import PhotoUploader from "./PhotoUploader";
import PropTypes from "prop-types";

const DevotionForm = ({
  form,
  handleChange,
  handleSubmit,
  addPara,
  handleParaChange,
  paragraphs,
  handleFileChange,
  deletePara,
}) => {
  return (
    <div className="flex border-2 shadow-lg rounded-l-2xl h-[100%] font-nokia-bold ">
      <form onSubmit={handleSubmit} className="w-[90%] mx-auto py-6 space-y-3 ">
        <div>
          <select
            className="border-2 border-accent-6 bg-[#fff] outline-accent-7  rounded-md px-2 py-1 text-secondary-6 cursor-pointer text-xs  mr-6"
            name="month"
            value={form.month}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Month
            </option>
            <option value="መስከረም">መስከረም</option>
            <option value="ጥቅምት">ጥቅምት</option>
            <option value="ህዳር">ህዳር</option>
            <option value="ታህሳስ">ታህሳስ</option>
            <option value="ጥር">ጥር</option>
            <option value="የካቲት">የካቲት</option>
            <option value="መጋቢት">መጋቢት</option>
            <option value="ሚያዚያ">ሚያዚያ</option>
            <option value="ግንቦት">ግንቦት</option>
            <option value="ሰኔ">ሰኔ</option>
            <option value="ሐምሌ">ሐምሌ</option>
            <option value="ነሀሴ">ነሀሴ</option>
          </select>
          <input
            type="number"
            name="day"
            min="1"
            max="30"
            placeholder="Day"
            className="border-2 border-accent-6 bg-[#fff] outline-accent-7  rounded-md px-2 py-1 text-secondary-6 cursor-pointer text-xs font-nokia-bold w-[27%] placeholder-secondary-6 focus:placeholder-secondary-4"
            value={form.day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1 text-sm text-accent-6">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full border-2 border-accent-6 outline-accent-7 rounded-lg text-accent-6 px-2 py-1 placeholder-accent-4"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1 text-sm text-accent-6">
          <label>Chapter to be read</label>
          <input
            type="text"
            name="chapter"
            placeholder="chapter"
            className="w-full border-2 text-accent-6 border-accent-6 outline-accent-7 rounded-lg px-2 py-1 placeholder-accent-4"
            value={form.chapter}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1 text-sm text-accent-6">
          <label>Main Verse</label>
          <input
            type="text"
            name="verse"
            placeholder="verse"
            className="w-full border-2 text-accent-6 border-accent-6 outline-accent-7 rounded-lg px-2 py-1 placeholder-accent-4"
            value={form.verse}
            onChange={handleChange}
            required
          />
        </div>
        <AddParagraph
          form={form}
          handleChange={handleChange}
          required
          paragraphs={paragraphs}
          addPara={addPara}
          handleParaChange={handleParaChange}
          deletePara={deletePara}
        />
        <div className="space-y-1 text-sm text-accent-6">
          <label>Prayer</label>
          <textarea
            type="text"
            name="prayer"
            placeholder="prayer"
            className="w-full border-2 text-accent-6 border-accent-6 outline-accent-7 rounded-lg px-2 py-1 placeholder-accent-4 "
            value={form.prayer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <PhotoUploader
            handleFileChange={handleFileChange}
            form={form}
            required
          />
          <div className="space-y-1 text-sm text-accent-6">
            <button
              type="submit"
              className=" bg-accent-6 hover:bg-accent-7 text-[#fff] px-6 py-1 rounded-full cursor-pointer "
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

DevotionForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addPara: PropTypes.func.isRequired,
  handleParaChange: PropTypes.func.isRequired,
  paragraphs: PropTypes.array.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  deletePara: PropTypes.func.isRequired,
};

export default DevotionForm;
