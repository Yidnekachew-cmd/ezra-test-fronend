
function PhotoUploader( {handleFileChange, previewUrl}) {
  

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

export default PhotoUploader;