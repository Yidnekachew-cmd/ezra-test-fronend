
const SlideView = ({setSelectedSlide, slides}) => {
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
}

export default SlideView;

