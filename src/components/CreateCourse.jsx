import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setDescription, setImage } from "../redux/courseSlice";

function CreateCourse() {
  const dispatch = useDispatch();
  const { title, description, image } = useSelector((state) => state.course);

  const handleImageChange = (e) => {
    const file = e.target.files[[1]];
    dispatch(setImage(file));
  };

  return (
    <div className="h-screen pt-9 px-20">
      <h2 className="text-orange-500 text-2xl font-bold border-b-4 border-gray-300 pb-1">
        Create Course
      </h2>
      <p className="font-nokia-bold text-sm text-accent-5"> Check Text</p>
      <form className="grid grid-cols-1 gap-3 w-1/2 mx-auto mt-3">
        <div className="col-span-12 mx-auto">
          <input
            type="file"
            className="w-full p-24 text-orange-500 font-bold leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="image"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div className="col-span-12">
          <label className="block text-orange-500 font-bold">
            Course Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="title"
            placeholder="Untitled Course"
            autoComplete="off"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div className="col-span-12">
          <label className="block text-orange-500 font-bold">Description</label>
          <input
            type="text"
            className="w-full px-3 pt-2 pb-12 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            name="description"
            placeholder="Add a description"
            autoComplete="off"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </div>
        <div className="col-span-12">
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
          >
            <Link to="/courses/create/chapters">Create</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;