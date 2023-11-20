import PropTypes from 'prop-types';

const SlideList = ({ setSelectedSlide, slides }) => {
  return (
    <div className="col-span-1">
      {slides.map((slide, slideIndex) => (
        slide.length > 0 && slide[0].type === 'title' ? (
          <button
            className="block text-left"
            onClick={() => setSelectedSlide(slideIndex)}
            key={slideIndex} // Use slideIndex as the key
          >
            {slide[0].value}
          </button>
        ) : null
      ))}
    </div>
  );
};

SlideList.propTypes = {
  slides: PropTypes.array.isRequired,
  setSelectedSlide: PropTypes.array,
};

export default SlideList;