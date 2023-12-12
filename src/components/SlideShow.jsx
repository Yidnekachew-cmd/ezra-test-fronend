import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SlideControl from "./SlideControl";
import SlideView from "./SlideView";
import ChapterForm from "./ChapterForm";
import ChapterList from "./ChapterList";
import SlideList from "./SlideList";
// import { addChapter, addElementToSlide, removeSlide,updateSlideElement,removeSlideElement,updateSlideImage } from "../redux/courseSlice";

function SlideShow() {
  const [courses, setCourses] = useState({});
  const [selectedSlide, setSelectedSlide] = useState(null);
  const dispatch = useDispatch();
  const [showChapterForm, setChapterForm] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const selectedChapter = useSelector((state) => state.course.chapters);
  const selectedChapterRedux = useSelector(
    (state) => state.course.selectedChapter
  );
  const slides = selectedChapter ? selectedChapter.slides : [];

  const handleSetSelectedChapter = (chapterId) => {
    dispatch(selectedChapterRedux(chapterId)); // Dispatch action to update selected chapter in Redux
    // Other logic related to the selected chapter if needed
  };

  const handleAddChapter = (chapterTitle) => {
    dispatch(addChapter(chapterTitle));
    setChapterForm(false);
  };
  const handleAddElement = (slideIndex) => {
    if (!selectedType || !selectedChapter) return;

    const newElement = {
      type: selectedType,
      id: `${selectedType}-${slideIndex + 1}-${
        slides[slideIndex].elements.length + 1
      }`,
      value: "",
    };

    // dispatch(addElementToSlide({ chapterIndex: selectedChapter, slideIndex, element: newElement }));
  };

  const handleInputChange = (slideIndex, elementId, value) => {
    // dispatch(updateSlideElement({ slideIndex, elementId, value }));
  };

  const handleRemoveElement = (slideIndex, elementId) => {
    // dispatch(removeSlideElement({ slideIndex, elementId }));
  };

  const handleImageChange = (slideIndex, elementId, e) => {
    const file = e.target.files[0];
    if (!file || !selectedChapter) return;

    const imageUrl = URL.createObjectURL(file);

    // dispatch(updateSlideImage({ slideIndex, elementId, imageUrl }));
  };
  const handleRemoveSlide = (index) => {
    // dispatch(removeSlide(index));
  };

  const { title, description, image, chapters } = useSelector(
    (state) => state.course
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("chapters", chapters);

    axios
      .post("/course/create", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen w-[100%]">
      <div className="flex justify-between border-gray-200 border-2 p-1">
        <button className="text-white font-bold text-3xl bg-orange-400 hover:bg-accent-6 rounded-[50%]">
          <Link to="/courses/create">
            <span className="material-symbols-outlined t">arrow_left</span>
          </Link>
        </button>
        <button
          onSubmit={handleSubmit}
          className="px-2 font-semibold text-white bg-accent-6 rounded-md hover:bg-orange-600"
        >
          Publish
        </button>
      </div>
      <button
        onClick={() => setChapterForm(!showChapterForm)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {showChapterForm ? "Hide Chapter Form" : "Add Chapter"}
      </button>
      {showChapterForm ? (
        <ChapterForm handleAddChapter={handleAddChapter} />
      ) : (
        <div className="container mx-auto py-8 grid grid-cols-6 gap-2">
          <div className="col-span-1 bg-accent-3 w-[100%]">
            <ChapterList
              courses={courses}
              setSelectedChapter={handleSetSelectedChapter}
              selectedChapter={selectedChapter}
            />
            {selectedChapter ? (
              <SlideList
                setSelectedSlide={setSelectedSlide}
                slides={courses[selectedChapter]}
              />
            ) : null}
          </div>
          {selectedChapter ? (
            <>
              <div className="col-span-3 bg-accent-3 w-[100%]">
                <SlideView
                  selectedSlide={selectedSlide}
                  slides={courses[selectedChapter]}
                />
              </div>
              <div className="col-span-2 bg-accent-3 w-[100%]">
                <SlideControl
                  courses={courses}
                  selectedChapter={selectedChapter}
                  slides={courses[selectedChapter]}
                  setSlides={(updatedSlides) =>
                    setCourses({ ...courses, [selectedChapter]: updatedSlides })
                  }
                  handleAddElement={handleAddElement}
                  removeElement={handleRemoveElement}
                  handleInputChange={handleInputChange}
                  handleImageChange={handleImageChange}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  handleRemoveSlide={handleRemoveSlide}
                />
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default SlideShow;
