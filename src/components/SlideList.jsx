import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button"

const SlideList = ({ setSelectedSlide, slides }) => {
  return (
    <div className="col-span-1">
      {slides.map((slide, slideIndex) => (
        slide.length > 0 && slide[0].type === 'title' ? (
          <Button
            className="w-26 my-2 flex flex-col"
            variant="outline"
            onClick={() => setSelectedSlide(slideIndex)}
            key={slideIndex}
          >
            {slide[0].value}
          </Button>
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