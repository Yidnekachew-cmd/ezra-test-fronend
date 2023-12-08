import { useDispatch, useSelector } from "react-redux";
import {
  selectChapters,
  selectAllSlides,
  addChapter,
  updateChapter,
  addSlide,
  updateSlide,
} from "../../redux/courseSlice";

function ChaptersAdd() {
  const dispatch = useDispatch();
  const chapters = useSelector(selectChapters) || []; // useSelector hook to get the 'chapters' from the state
  // const slides = useSelector((state) => selectSlides(state, chapterIndex));
  const allSlides = useSelector(selectAllSlides);

  const addChapterHandler = () => {
    dispatch(addChapter());
  };

  const updateChapterHandler = (index, value) => {
    dispatch(updateChapter({ chapterIndex: index, value }));
  };

  const addSlideHandler = (chapterIndex) => {
    dispatch(addSlide({ chapterIndex }));
  };

  const updateSlideHandler = (chapterIndex, slideIndex, value) => {
    dispatch(updateSlide({ chapterIndex, slideIndex, value }));
  };

  console.log(chapters);

  return (
    <div className="bg-white w-[30%] p-6">
      <button
        className="flex justify-center items-center text-white bg-orange-400 hover:bg-orange-500 rounded-3xl mb-4 p-2"
        onClick={addChapterHandler}
      >
        <span className="material-symbols-outlined">add</span>
        Add Chapter
      </button>
      {chapters.map((chapter, chapterIndex) => {
        const slides = allSlides[chapterIndex] || [];
        return (
          <div key={chapterIndex}>
            <input
              type="text"
              name={`chapter-${chapterIndex}`}
              placeholder="Chapter Title"
              autoComplete="off"
              className="w-full text-lg font-bold py-2 px-8 my-2"
              value={chapter.chapter}
              onChange={(e) =>
                updateChapterHandler(chapterIndex, e.target.value)
              }
            />
            <div className="ml-14 pl-1 border-l-2 border-gray-300">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex my-2">
                  <input
                    type="text"
                    name={`slide-${chapterIndex}-${slideIndex}`}
                    placeholder="Slide Title"
                    autoComplete="off"
                    className="w-full text-sm font-bold px-3 py-1 my-2"
                    value={slide.slide}
                    onChange={(e) =>
                      updateSlideHandler(
                        chapterIndex,
                        slideIndex,
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
              <button
                className="flex justify-between items-center text-white bg-gray-200 hover:bg-gray-300 p-1 rounded-lg"
                onClick={() => addSlideHandler(chapterIndex)}
              >
                <p className="text-orange-500 px-2">New Slide</p>
                <span className="material-symbols-outlined t flex justify-center text-xl font-bold bg-orange-400 hover:bg-orange-500 rounded-3xl">
                  add
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChaptersAdd;
