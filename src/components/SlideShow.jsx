import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SlideControl from './SlideControl';
import SlideView from './SlideView';
import ChapterForm from './ChapterForm';
import ChapterList from './ChapterList';
import SlideList from "./SlideList";

function SlideShow() {
  const [courses, setCourses] = useState({}); 
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [showChapterForm, setChapterForm] = useState(false);

  const handleAddChapter = (chapterTitle) => {
    setCourses({...courses, [chapterTitle]: []});
    setChapterForm(false);
  }

  const handleAddElement = (slideIndex) => {
    if (!selectedType || !selectedChapter) return;
  
    const selectedCourse = courses[selectedChapter];
  
    const updatedSlide = selectedCourse[slideIndex].concat({
      type: selectedType,
      id: `${selectedType}-${slideIndex + 1}-${selectedCourse[slideIndex].length + 1}`,
      value: '',
    });
    const updatedSlides = [...selectedCourse];
    updatedSlides[slideIndex] = updatedSlide;
  
    setCourses((courses) => ({
      ...courses,
      [selectedChapter]: updatedSlides,
    }));
  };
  
  const handleInputChange = (slideIndex, elementId, value, courseSlides) => {
    const updatedSlide = courseSlides[slideIndex].map((el) =>
        el.id === elementId ? { ...el, value: value } : el
    );
    const updatedSlides = [...courseSlides];
    updatedSlides[slideIndex] = updatedSlide;
    setCourses((courses) => ({
      ...courses,
      [selectedChapter]: updatedSlides,
    }));
  };

  const handleRemoveElement = (slideIndex, elementId) => {
    const selectedCourse = courses[selectedChapter];
    const updatedSlide = selectedCourse[slideIndex].filter((el) => el.id !== elementId);
    const updatedSlides = [...selectedCourse];
    updatedSlides[slideIndex] = updatedSlide;
    setCourses((courses) => ({
      ...courses,
      [selectedChapter]: updatedSlides,
    }));
  };

  const handleImageChange = (slideIndex, elementId, e) => {
    const file = e.target.files[0];
    if (!file || !selectedChapter) return;
    
    const selectedCourse = courses[selectedChapter];
    const updatedSlide = selectedCourse[slideIndex].map((el) =>
        el.id === elementId ? { ...el, value: file.name } : el
    );
    
    const updatedSlides = [...selectedCourse];
    updatedSlides[slideIndex] = updatedSlide;
    setCourses((courses) => ({
      ...courses,
      [selectedChapter]: updatedSlides,
    }));
  };

  const handleRemoveSlide = (index) => {
    const updatedSlides = courses[selectedChapter].filter((_, slideIndex) => slideIndex !== index);
    setCourses({ ...courses, [selectedChapter]: updatedSlides });
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
        <button className="text-white font-bold text-3xl bg-orange-400 hover:bg-orange-500 rounded-[50%]">
          <Link to="/courses/create">
            <span className="material-symbols-outlined t">arrow_left</span>
          </Link>
        </button>
        <button
          onSubmit={handleSubmit}
          className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Publish
        </button>
      </div>
      <button onClick={() => setChapterForm(!showChapterForm)} className="bg-green-500 text-white px-4 py-2 rounded">
        { showChapterForm ? 'Hide Chapter Form' : 'Add Chapter' }
      </button>
      { showChapterForm ? 
        <ChapterForm handleAddChapter={handleAddChapter} /> :
        <div className="container mx-auto py-8 grid grid-cols-6 gap-2">
          <div className="col-span-1 bg-accent-3 w-[100%]">
          
          <ChapterList courses={courses} setSelectedChapter={setSelectedChapter} selectedChapter={selectedChapter} />
          <SlideList setSelectedSlide={setSelectedSlide} slides={courses[selectedChapter]} />
          </div>
          { selectedChapter ?
            <>
            <div className="col-span-4 bg-accent-3 w-[100%]">
              <SlideView selectedSlide={selectedSlide} slides={courses[selectedChapter]} />
              </div>
              <div className="bg-accent-3 w-[100%]">
              <SlideControl
                courses={courses}
                selectedChapter={selectedChapter}
                slides={courses[selectedChapter]}
                setSlides={(updatedSlides) => setCourses({ ...courses, [selectedChapter]: updatedSlides })}
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
            : null
          }
        </div>
      }
    </div>
);
}  

export default SlideShow;