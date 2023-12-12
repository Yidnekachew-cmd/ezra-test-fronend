import PropTypes from "prop-types";

const ChapterList = ({ courses, setSelectedChapter, selectedChapter }) => {
  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  return (
    <div className="col-span-1">
      <select
        className="block w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        value={selectedChapter}
        onChange={handleChapterChange}
      >
        <option value="">Select Chapter</option>
        {Object.keys(courses).map((chapter, index) => (
          <option value={chapter} key={index}>
            {chapter}
          </option>
        ))}
      </select>
    </div>
  );
};

ChapterList.propTypes = {
  courses: PropTypes.object.isRequired,
  setSelectedChapter: PropTypes.func.isRequired,
  selectedChapter: PropTypes.string
};

export default ChapterList;
