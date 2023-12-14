import PropTypes from "prop-types";

function PhotoUploader({ handleFileChange, previewUrl }) {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        value={previewUrl}
        onChange={handleFileChange}
      />
    </div>
  );
}

PhotoUploader.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  previewUrl: PropTypes.string,
};

export default PhotoUploader;