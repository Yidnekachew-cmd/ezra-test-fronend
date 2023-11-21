import { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ChapterForm = ({ handleAddChapter }) => {
  const [title, setTitle] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    title && handleAddChapter(title);
    setTitle('');
  }

  return (
    <>
    <Card className="w-[350px] my-4">
      <CardHeader>
        <CardTitle>Create chapter</CardTitle>
        <CardDescription>Create a new chapter for the course.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <label>Chapter Title: </label>
            <Input type="text" className="w-64" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Button variant="outline" type="submit" className="my-2"> Add Chapter </Button>
        </form>
      </CardContent>
    </Card>
    </>
  );
};

ChapterForm.propTypes = {
  handleAddChapter: PropTypes.func.isRequired
};

export default ChapterForm;
