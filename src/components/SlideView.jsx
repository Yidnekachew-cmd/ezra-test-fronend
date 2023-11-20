import PropTypes from 'prop-types';

const SlideView = ({selectedSlide, slides}) => {

    const displaySlide = (slide) => (
        slide.map((element, idx) => (
          <div key={idx}>
            <h3> {element.type}:</h3>
            <p>{element.value}</p>
          </div>
        ))
      );
   return (
   <div className="col-span-2 border border-gray-300 p-4 rounded-lg"> {/* middle column */}
    <div className="flex justify-center w-full">
      <div className="w-3/4">
        {selectedSlide !== null && slides[selectedSlide] ? displaySlide(slides[selectedSlide]) : null }
      </div>
    </div>
  </div>)
}

SlideView.propTypes = {
    slides: PropTypes.array.isRequired,
    selectedSlide: PropTypes.array,
  };

export default SlideView;

