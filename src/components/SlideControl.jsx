// import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { Trash } from "@phosphor-icons/react";
// // import {
// //   addElementToSlide,
// //   removeSlideElement,
// //   updateSlideElement,
// //   updateSlideImage,
// // } from "../redux/courseSlice";

// const SlideControl = () => {
//   const dispatch = useDispatch();
//   const slides = useSelector((state) => state.course.chapters); // Assuming slides are stored in the chapters array in the store
//   const selectedChapter = useSelector((state) => state.course.selectedChapter);
//   const selectedType = useSelector((state) => state.course.selectedType);

//   const handleAddElement = (slideIndex) => {
//     if (!selectedType || !selectedChapter) return;

//     const newElement = {
//       type: selectedType,
//       id: `${selectedType}-${slideIndex + 1}-${slides[slideIndex].elements.length + 1}`,
//       value: "",
//     };

//     // dispatch(addElementToSlide({ chapterIndex: selectedChapter, slideIndex, element: newElement }));
//   };

//   const handleInputChange = (slideIndex, elementId, value) => {
//     // dispatch(updateSlideElement({ slideIndex, elementId, value }));
//   };

//   const handleRemoveElement = (slideIndex, elementId) => {
//     // dispatch(removeSlideElement({ slideIndex, elementId }));
//   };

//   const handleImageChange = (slideIndex, elementId, e) => {
//     const file = e.target.files[0];
//     if (!file || !selectedChapter) return;

//     const imageUrl = URL.createObjectURL(file);

//     // dispatch(updateSlideImage({ slideIndex, elementId, imageUrl }));
//   };

//     const handleSubmit = (event) => {
//       event.preventDefault();

//       const dataToSend = Object.entries(courses).map(([chapter, slides]) => {
//         const chapterData = {
//           chapter: chapter,
//           slides: slides.map((slide) => {
//             const slideData = {
//               slide: slide[0].type === 'title' ? slide[0].value : '', // Assuming the first element in each slide is the title
//               elements: slide.slice(1).map((element) => {
//                 const elementData = {
//                   type: element.type,
//                   id: element.id,
//                   value: element.value,
//                   subslides: [] // You may add logic here to handle subslides if needed
//                 };
//                 return elementData;
//               })
//             };
//             return slideData;
//           })
//         };
//         return chapterData;
//       });

//       const finalData = { chapters: dataToSend };
//       console.log(JSON.stringify(finalData, null, 2));

//       // For the actual submission to an API endpoint (using Axios), uncomment the code below:
//       // axios.post("/course/create", finalData)
//       //   .then((res) => {
//       //     console.log(res);
//       //   })
//       //   .catch((err) => console.log(err));
//     };

//     return (
//       <div className=" shadow-lg rounded-lg p-6 pt-8">
//         {slides.map((slide, slideIndex) => (
//           <div key={slideIndex} className="border-t border-gray-200 pt-4">
//             <div className="flex items-center mb-4">
//               <h3 className="text-lg font-semibold flex-grow">Slide {slideIndex + 1}</h3>
//               <Trash
//                 onClick={() => handleRemoveSlide(slideIndex)}
//                 className="w-8 h-8 p-1 bg-accent-6 hover:bg-red-60 rounded-md text-white hover:bg-accent-8"
//               >
//               </Trash>
//             </div>
//             {slide.map((element) => (
//               <div key={element.id} className="flex items-center justify-between mb-3">
//                 <label className="text-sm font-semibold">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</label>
//                 {element.type === "img" ? (
//                   <input
//                     type="file"
//                     onChange={(e) => handleImageChange(slideIndex, element.id, e)}
//                     className="shadow-sm border-gray-300 rounded px-2 py-1"
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     value={element.value}
//                     onChange={(e) => handleInputChange(slideIndex, element.id, e.target.value, courses[selectedChapter])}
//                     className="shadow-sm border-gray-300 rounded px-2 py-1"
//                   />
//                 )}
//                 <Trash
//                   onClick={() => handleRemoveElement(slideIndex, element.id)}
//                   className="w-8 h-8 p-1 bg-accent-6 hover:bg-red-60 rounded-md text-white hover:bg-accent-8"
//                   >
//                   Remove
//                 </Trash>
//               </div>
//             ))}
//             <div className="flex items-center space-x-4">
//               <select
//                 onChange={(e) => setSelectedType(e.target.value)}
//                 className="shadow-sm border-gray-300 rounded px-2 py-1"
//                 value={selectedType}
//               >
//                 <option value="">Type</option>
//                 <option value="title">Title</option>
//                 <option value="sub">Sub</option>
//                 <option value="img">Image</option>
//               </select>
//               <button
//                 onClick={() => handleAddElement(slideIndex)}
//                 className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="flex justify-between mt-5">
//           <button onClick={handleAddSlide} className="shadow-md bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
//             Add
//           </button>
//           <button onClick={handleSubmit} className="shadow-md bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
//             Submit
//           </button>
//         </div>
//       </div>
//     );

// }

// SlideControl.propTypes = {
//     slides: PropTypes.array.isRequired,
//     setSlides: PropTypes.func.isRequired,
//     courses: PropTypes.array.isRequired,
//     selectedChapter: PropTypes.array.isRequired,
//     handleAddElement: PropTypes.func.isRequired,
//     removeElement: PropTypes.func.isRequired,
//     handleInputChange: PropTypes.func.isRequired,
//     handleImageChange: PropTypes.func.isRequired,
//     selectedType: PropTypes.string.isRequired,
//     setSelectedType: PropTypes.func.isRequired,
//     handleRemoveSlide: PropTypes.func.isRequired,
//   };

// export default SlideControl;
