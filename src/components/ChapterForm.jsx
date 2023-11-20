import { useState } from "react";
import PropTypes from "prop-types";

const ChapterForm = ({ handleAddChapter }) => {
  const [title, setTitle] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    title && handleAddChapter(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Chapter Title: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="submit" value="Add Chapter" />
    </form>
  );
};

ChapterForm.propTypes = {
  handleAddChapter: PropTypes.func.isRequired
};

export default ChapterForm;
