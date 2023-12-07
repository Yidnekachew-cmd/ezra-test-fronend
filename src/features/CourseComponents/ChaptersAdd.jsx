import { useDispatch, useSelector } from "react-redux";
import {
  setChapters,
  addChapter,
  addSlideToChapter,
} from "../../redux/courseSlice";

function ChaptersAdd() {
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.course.chapters);

  const updateChapter = (index, value) => {
    const newChapters = [...chapters];
    newChapters[index].chapter = value;
    dispatch(setChapters(newChapters));
  };

  const addSlide = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].slides.push({ slide: "" });
    dispatch(addSlideToChapter({ chapterIndex, slide: { slide: "" } }));
  };

  const updateSlide = (chapterIndex, slideIndex, value) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].slides[slideIndex].slide = value;
    dispatch(setChapters(newChapters));
  };

  return (
    <div className="bg-white w-[30%] p-6">
      <button
        className="flex justify-center items-center text-white bg-orange-400 hover:bg-orange-500 rounded-3xl mb-4 p-2"
        onClick={() => dispatch(addChapter())}
      >
        <span className="material-symbols-outlined">add</span>
        Add Chapter
      </button>
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex}>
          <input
            type="text"
            name={`chapter-${chapterIndex}`}
            placeholder="Chapter Title"
            autoComplete="off"
            className="w-full text-lg font-bold py-2 px-8 my-2"
            value={chapter.chapter}
            onChange={(e) => updateChapter(chapterIndex, e.target.value)}
          />
          <div className="ml-14 pl-1 border-l-2 border-gray-300">
            {chapter.slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex my-2">
                <input
                  type="text"
                  name={`slide-${chapterIndex}-${slideIndex}`}
                  placeholder="Slide Title"
                  autoComplete="off"
                  className="w-full text-sm font-bold px-3 py-1 my-2"
                  value={slide.slide}
                  onChange={(e) =>
                    updateSlide(chapterIndex, slideIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <button
              className="flex justify-between items-center text-white bg-gray-200 hover:bg-gray-300 p-1 rounded-lg"
              onClick={() => addSlide(chapterIndex)}
            >
              <p className="text-orange-500 px-2">New Slide</p>
              <span className="material-symbols-outlined t flex justify-center text-xl font-bold bg-orange-400 hover:bg-orange-500 rounded-3xl">
                add
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChaptersAdd;
