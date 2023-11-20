
const SlideControl = ({slides, handleAddElement, removeElement, handleInputChange, handleImageChange, selectedType, setSelectedType, handleRemoveSlide}) => {
 
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
}

export default SlideControl;

