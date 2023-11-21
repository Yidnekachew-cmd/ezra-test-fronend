import PropTypes from "prop-types";

const ChapterList = ({ courses, setSelectedChapter, selectedChapter }) => {
  return (
    <div className="text-center">
        {Object.keys(courses).map((chapter, index) => (
            <button className={`block w-1/2 mx-auto my-1 text-left ${selectedChapter === chapter? 'bg-gray-300' : ''}`} {...chapter} key={index} onClick={() => setSelectedChapter(chapter)} />
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

