import axios from "axios";
import PropTypes from "prop-types";

const SlideControl = ({slides, setSlides, courses, selectedChapter, handleInputChange, handleImageChange, selectedType, setSelectedType, handleRemoveSlide, handleAddElement}) => {

    const handleAddSlide = () => {
        const newSlide = [];
        setSlides([...slides, newSlide]);
    };
    
 
    
    const handleRemoveElement = (slideIndex, elementId) => {
        const updatedSlide = slides[slideIndex].filter((el) => el.id !== elementId);
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



    return (
      <div className="col-span-2 bg-white shadow-lg rounded-lg p-6 pt-8">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-semibold flex-grow">Slide {slideIndex + 1}</h3>
              <button
                onClick={() => handleRemoveSlide(slideIndex)}
                className="shadow-md bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
              >
                Remove Slide
              </button>
            </div>
            {slide.map((element) => (
              <div key={element.id} className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</label>
                {element.type === "img" ? (
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(slideIndex, element.id, e)}
                    className="shadow-sm border-gray-300 rounded px-2 py-1"
                  />
                ) : (
                  <input
                    type="text"
                    value={element.value}
                    onChange={(e) => handleInputChange(slideIndex, element.id, e.target.value, courses[selectedChapter])}
                    className="shadow-sm border-gray-300 rounded px-2 py-1"
                  />
                )}
                <button
                  onClick={() => handleRemoveElement(slideIndex, element.id)}
                  className="shadow-md bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <select
                onChange={(e) => setSelectedType(e.target.value)}
                className="shadow-sm border-gray-300 rounded px-2 py-1"
                value={selectedType}
              >
                <option value="">Select Type</option>
                <option value="title">Title</option>
                <option value="sub">Sub</option>
                <option value="img">Image</option>
              </select>
              <button
                onClick={() => handleAddElement(slideIndex)}
                className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-5">
          <button onClick={handleAddSlide} className="shadow-md bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Add Slide
          </button>
          <button onClick={handleSubmit} className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    );
    
    
}

SlideControl.propTypes = {
    slides: PropTypes.array.isRequired,
    setSlides: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    selectedChapter: PropTypes.array.isRequired,
    handleAddElement: PropTypes.func.isRequired,
    removeElement: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleImageChange: PropTypes.func.isRequired,
    selectedType: PropTypes.string.isRequired,
    setSelectedType: PropTypes.func.isRequired,
    handleRemoveSlide: PropTypes.func.isRequired,
  };

export default SlideControl;

