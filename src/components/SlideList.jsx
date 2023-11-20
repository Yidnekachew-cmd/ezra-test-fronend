
const SlideView = ({selectedSlide, slides}) => {
   return (
   <div className="col-span-2 border border-gray-300 p-4 rounded-lg"> {/* middle column */}
    <div className="flex justify-center w-full">
      <div className="w-3/4">
        {selectedSlide !== null && slides[selectedSlide] ? displaySlide(slides[selectedSlide]) : null }
      </div>
    </div>
  </div>)
}

export default SlideView;

