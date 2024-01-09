import { useSelector, useDispatch } from "react-redux";
import { updateFile } from "../../redux/devotionsSlice"; // replace with the actual path to your devotions slice

function PhotoUploader() {
  const previewUrl = useSelector((state) => state.devotions.form.photo);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    dispatch(updateFile(event.target.files[0]));
  };

  return (
    <div>
      <label className=" bg-accent-6 text-[#fff] hover:bg-accent-7 rounded-full px-4 py-1  cursor-pointer text-sm  font-nokia-bold w-[27%]">
        <span className="placeholder-secondary-6">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          value={previewUrl}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default PhotoUploader;
