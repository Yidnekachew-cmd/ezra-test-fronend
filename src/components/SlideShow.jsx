import { useState } from "react";
import SlideControl from './SlideControl';
import SlideView from './SlideView';
import SlideList from './SlideList';

function SlideShow() {
  const [slides, setSlides] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <>
    <div className="container mx-auto py-8 grid grid-cols-3 gap-4">
    <SlideList slides={slides} setSelectedSlide={setSelectedSlide} />
      <SlideView selectedSlide={selectedSlide} slides={slides} />
      <SlideControl slides={slides} handleAddElement={handleAddElement} removeElement={removeElement} handleInputChange={handleInputChange} handleImageChange={handleImageChange} selectedType={selectedType} setSelectedType={setSelectedType} handleRemoveSlide={handleRemoveSlide}/>
      </div>
    
    </>
  );
                  }  
export default SlideShow;