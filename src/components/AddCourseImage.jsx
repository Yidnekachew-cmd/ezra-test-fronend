import PropTypes from "prop-types"

const AddCourseImage = () => {
  return (
    <div>Insert Image: <input type="text"></input></div>
  )
}
AddCourseImage.propTypes = {
    data: PropTypes.object.isRequired, // Specify the expected data prop as an object
    setData: PropTypes.func.isRequired, // Specify the expected setData prop as a function
  };
  
export default AddCourseImage
