
import PropTypes from 'prop-types';

function PhotoUploader({ handleFileChange }) {
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

PhotoUploader.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
};

export default PhotoUploader;
