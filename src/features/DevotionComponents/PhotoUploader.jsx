import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function PhotoUploader({ handleFileChange, previewUrl, editingDevotion }) {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setShowInput(editingDevotion !== null);
  }, [editingDevotion]);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      {showInput ? (
        <input type="file" accept="image/*" onChange={handleFileChange} />
      ) : (
        <button onClick={handleClick}>
          {editingDevotion !== null ? "Choose Image" : "Change Image"}
        </button>
      )}
    </div>
  );
}

PhotoUploader.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
  previewUrl: PropTypes.string,
  editingDevotion: PropTypes.object,
};

export default PhotoUploader;
