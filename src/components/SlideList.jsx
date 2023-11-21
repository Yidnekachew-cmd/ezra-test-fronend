import PropTypes from 'prop-types';
// import { Button } from "@/components/ui/button"

const SlideList = ({ setSelectedSlide, slides }) => {
  return (
    <div className="grid justify-items-stretch">
        {slides.map((slide, slideIndex) => (
            slide.length > 0 && slide[0].type === 'title' ? (
            <button className={`justify-self-center mx-auto my-1 text-center ${setSelectedSlide === slide? 'bg-gray-300' : ''}`} {...slide[0].value} key={slideIndex} onClick={() => setSelectedSlide(slideIndex)} />
            ):null
        ))}
    </div>
);


};

SlideList.propTypes = {
  slides: PropTypes.array.isRequired,
  setSelectedSlide: PropTypes.array,
};

export default SlideList;