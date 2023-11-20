import { useState } from "react";
import axios from "axios";

function SlideShow() {
  const [slides, setSlides] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(null);

  const displaySlide = (slide) => (
    slide.map((element, idx) => (
      <div key={idx}>
        <h3> {element.type}:</h3>
        <p>{element.value}</p>
      </div>
    ))
  );
  
  const handleAddSlide = () => {
    const newSlide = [];
    setSlides([...slides, newSlide]);
  };

  const handleRemoveSlide = (index) => {
    const updatedSlides = slides.filter((_, slideIndex) => slideIndex !== index);
    setSlides(updatedSlides);
  };

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

  const handleRemoveElement = (slideIndex, elementId) => {
    const updatedSlide = slides[slideIndex].filter((el) => el.id !== elementId);
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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const dataToSend = slides.map((slide) => {
    let slideData = {};
    slide.forEach((element) => {
    slideData = { ...slideData, [element.type]: slideData[element.type] ? [...slideData[element.type], element.value] : [element.value] };
    });
    return slideData;
    });
    
    console.log(JSON.stringify(dataToSend));
    
    axios
    .post("/course/create", dataToSend)
    .then((res) => {
    console.log(res);
    })
    .catch((err) => console.log(err));
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

  return (
    <>
    <div className="container mx-auto py-8 grid grid-cols-3 gap-4">
    <div className="col-span-1"> 
      {
        slides.map((slide, slideIndex) => (
          slide.length > 0 && slide[0].type == 'title' ? (
            <button className="block text-left" onClick={() => setSelectedSlide(slideIndex)} key={slide[0].title}> 
              {slide[0].value}
            </button>
          ) : null
        ))
      }
    </div>

    <div className="col-span-2 border border-gray-300 p-4 rounded-lg"> {/* middle column */}
      <div className="flex justify-center w-full">
        <div className="w-3/4">
          {selectedSlide !== null && slides[selectedSlide] ? displaySlide(slides[selectedSlide]) : null }
        </div>
      </div>
    </div>

    <div className="col-span-1 border border-gray-300 p-4 rounded-lg"> 
          <div className="grid grid-cols-1 gap-4">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="border border-gray-300 p-4 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Slide {slideIndex + 1}</h3>
                  <button
                    onClick={() => handleRemoveSlide(slideIndex)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove Slide
                  </button>
                </div>
                <div className="space-y-4">
                  {slide.map((element) => (
                    <div key={element.id} className="flex items-center">
                      <label className="mr-2">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</label>
                      {element.type === "img" ? (
               <input
               type="file"
               onChange={(e) => handleImageChange(slideIndex, element.id, e)}
               className="border border-gray-300 rounded px-2 py-1"
             />
             
              ) : (
                <input
                  type="text"
                  value={element.value}
                  onChange={(e) => handleInputChange(slideIndex, element.id, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                />
              )}
                      <button
                        onClick={() => handleRemoveElement(slideIndex, element.id)}
                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center space-x-4">
                    <select
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                      value={selectedType}
                    >
                      <option value="">Select Type</option>
                      <option value="title">Title</option>
                      <option value="sub">Sub</option>
                      <option value="img">Image</option>
                    </select>
                    <button
                      onClick={() => handleAddElement(slideIndex)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleAddSlide} className="bg-green-500 text-white px-4 py-2 rounded">
              Add Slide
            </button>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
                  }  
export default SlideShow;