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
        <div className="flex flex-col items-start justify-center mx-auto px-4 py-2 my-2 border border-gray-300 bg-white max-w-md rounded-lg overflow-hidden shadow-lg">
            {selectedSlide !== null && slides[selectedSlide] ? displaySlide(slides[selectedSlide]) : 'Select a slide to display'}
        </div>
    );


}

SlideView.propTypes = {
    slides: PropTypes.array.isRequired,
    selectedSlide: PropTypes.array,
  };

export default SlideView;

