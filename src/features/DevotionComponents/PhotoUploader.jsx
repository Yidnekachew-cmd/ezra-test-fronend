import PropTypes from "prop-types";

function PhotoUploader({ handleFileChange, previewUrl }) {
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

PhotoUploader.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  previewUrl: PropTypes.string,
};

export default PhotoUploader;
