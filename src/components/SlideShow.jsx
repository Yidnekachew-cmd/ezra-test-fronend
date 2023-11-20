import { useState } from "react";
import SlideControl from './SlideControl';
import SlideView from './SlideView';
import ChapterForm from './ChapterForm';
import ChapterList from './ChapterList';

function SlideShow() {
  const [slides, setSlides] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const [courses, setCourses] = useState({}); 
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSlide] = useState(null);
  const [showChapterForm, setChapterForm] = useState(false);
  
  const handleAddChapter = (chapterTitle) => {
    setCourses({...courses, [chapterTitle]: []});
    setChapterForm(false);
  }
  const handleAddElement = (slideIndex) => {
    if (!selectedType) return;
  
    const updatedSlide = slides[slideIndex].concat({
        type: selectedType,
        id: `${selectedType}-${slideIndex + 1}-${slides[slideIndex].length + 1}`,
        value: '',
    });
  
    const updatedSlides = [...slides];
    updatedSlides[slideIndex] = updatedSlide;
    setSlides(updatedSlides);
};

const handleInputChange = (slideIndex, elementId, value) => {
  const updatedSlide = slides[slideIndex].map((el) =>
      el.id === elementId ? { ...el, value: value } : el
  );
  const updatedSlides = [...slides];
  updatedSlides[slideIndex] = updatedSlide;
  setSlides(updatedSlides);
};

const removeElement = (slideIndex, elementId) => {
  const updatedSlide = slides[slideIndex].filter((el) => el.id !== elementId);
  const updatedSlides = [...slides];
  updatedSlides[slideIndex] = updatedSlide;
  setSlides(updatedSlides);
};

const handleImageChange = (slideIndex, elementId, e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const updatedSlide = slides[slideIndex].map((el) =>
      el.id === elementId ? { ...el, value: file.name } : el
  );
  
  const updatedSlides = [...slides];
  updatedSlides[slideIndex] = updatedSlide;
  setSlides(updatedSlides);
};

const handleRemoveSlide = (index) => {
  const updatedSlides = slides.filter((_, slideIndex) => slideIndex !== index);
  setSlides(updatedSlides);
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
              <SlideControl slides={courses[selectedChapter]} setSlides={setSlides} handleAddElement={handleAddElement} removeElement={removeElement} handleInputChange={handleInputChange} handleImageChange={handleImageChange} selectedType={selectedType} setSelectedType={setSelectedType} handleRemoveSlide={handleRemoveSlide}/>
</>
            : null
          }
        </div>
      }
    </>
  );
}  
export default SlideShow;