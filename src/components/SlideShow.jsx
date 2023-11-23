import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SlideControl from './SlideControl';
import SlideView from './SlideView';
import ChapterForm from './ChapterForm';
import ChapterList from './ChapterList';
import SlideList from "./SlideList";

function SlideShow({courseData}) {
  const [courses, setCourses] = useState({}); 
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [showChapterForm, setChapterForm] = useState(false);

  useEffect(() => {
    console.log(courseData);
}, [courseData]);


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
  
  return (
    <>
      <button onClick={() => setChapterForm(!showChapterForm)} className="bg-green-500 text-white px-4 py-2 rounded">
        { showChapterForm ? 'Hide Chapter Form' : 'Add Chapter' }
      </button>
      { showChapterForm ? 
        <ChapterForm handleAddChapter={handleAddChapter} /> :
        <div className="container mx-auto py-8 grid grid-cols-3 gap-4">
          <ChapterList courses={courses} setSelectedChapter={setSelectedChapter} selectedChapter={selectedChapter} />
          { selectedChapter ?
            <>
              <SlideView selectedSlide={selectedSlide} slides={courses[selectedChapter]} />
              {/* <div className="col-span-1"> */}
                <SlideList setSelectedSlide={setSelectedSlide} slides={courses[selectedChapter]} />
              {/* </div> */}
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
                courseData={courseData}
              />
            </>
            : null
          }
        </div>
      }
    </>
);
}  

SlideShow.propTypes = {
  courseData: PropTypes.object.isRequired,
}

export default SlideShow;