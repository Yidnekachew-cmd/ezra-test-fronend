import PropTypes from "prop-types";

const ChapterList = ({ courses, setSelectedChapter, selectedChapter }) => {
  return (
    <div className="col-span-1">
      {Object.keys(courses).map((chapter, index) => (
        <button
          className={`block text-left px-4 py-1 rounded-md ${selectedChapter === chapter ? 'bg-blue-100 ' : ''}`}
          onClick={() => setSelectedChapter(chapter)}
          key={index}
        > 
          {chapter}
        </button>
      ))}
    </div>
  );
};

ChapterList.propTypes = {
  courses: PropTypes.object.isRequired,
  setSelectedChapter: PropTypes.func.isRequired,
  selectedChapter: PropTypes.string
};

export default ChapterList;

