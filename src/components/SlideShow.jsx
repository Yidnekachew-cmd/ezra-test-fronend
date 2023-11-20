import { useState } from "react";
import SlideControl from './SlideControl';
import SlideView from './SlideView';
import SlideList from './SlideList';

function SlideShow() {
  const [slides, setSlides] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(null);

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
    <div className="container mx-auto py-8 grid grid-cols-3 gap-4">
    <SlideList slides={slides} setSelectedSlide={setSelectedSlide} />
      <SlideView selectedSlide={selectedSlide} slides={slides} />
      <SlideControl slides={slides} setSlides={setSlides} handleAddElement={handleAddElement} removeElement={removeElement} handleInputChange={handleInputChange} handleImageChange={handleImageChange} selectedType={selectedType} setSelectedType={setSelectedType} handleRemoveSlide={handleRemoveSlide}/>
      </div>
    
    </>
  );
                  }  
export default SlideShow;