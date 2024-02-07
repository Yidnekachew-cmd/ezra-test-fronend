import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSSLOfDayLessonQuery } from "./../../services/SabbathSchoolApi";
import parse from "html-react-parser";
import VersePopup from "./VersePopup"; // Import the VersePopup component

function DisplaySSLLesson() {
  const { quarter, id, day } = useParams();
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayLessonQuery({ path: quarter, id: id, day: day });

  const [selectedVerse, setSelectedVerse] = useState(null); // State to store the selected verse

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleVerseClick = (verseContent) => {
    setSelectedVerse(verseContent); // Set the selected verse content when a verse is clicked
  };

  const htmlWithClickHandler = parse(lessonDetails.content, {
    replace: (domNode) => {
      if (domNode.name === "a" && domNode.attribs.class === "verse") {
        return React.cloneElement(domNode, {
          onClick: () => handleVerseClick(domNode.children[0].data),
        });
      }
    },
  });

  return (
    <div>
      <div className="text-3xl mb-2 text-accent-6">{lessonDetails.title}</div>
      <div className="text-secondary-6 text-justify">
        {htmlWithClickHandler}
      </div>
      {selectedVerse && (
        <VersePopup
          content={selectedVerse}
          onClose={() => setSelectedVerse(null)}
        />
      )}{" "}
      {/* Render the VersePopup component if a verse is selected */}
    </div>
  );
}

export default DisplaySSLLesson;
