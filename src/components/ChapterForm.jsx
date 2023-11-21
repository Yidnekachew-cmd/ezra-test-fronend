import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


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
      <Input type="text" className="w-64" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Button variant="outline" type="submit" className="my-2"> Add Chapter </Button>
    </form>
  );
};

ChapterForm.propTypes = {
  handleAddChapter: PropTypes.func.isRequired
};

export default ChapterForm;
