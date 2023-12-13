import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectSlides } from "../../redux/courseSlice";

function SlideDataDisplay({ selectedSlideIndex }) {
  const slides = useSelector((state) =>
    selectSlides(state, selectedSlideIndex.chapter)
  );
  const selectedSlide = slides[selectedSlideIndex.slide];
  return (
    <div className="p-6">
      {selectedSlide && (
        <div>
          {selectedSlide.elements && (
            <div>
              <h4>Elements:</h4>
              <ul>
                {selectedSlide.elements.map((element, index) => (
                  <li key={index}>{element.value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

SlideDataDisplay.propTypes = {
  selectedSlideIndex: PropTypes.shape({
    chapter: PropTypes.number.isRequired,
    slide: PropTypes.number.isRequired,
  }).isRequired,
};

export default SlideDataDisplay;
