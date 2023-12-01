import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChapter, updateChapterTitle } from "../../redux/courseSlice";

function ChaptersAdd() {
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.course.chapters);
  const [newChapterTitle, setNewChapterTitle] = useState("");

  const handleAddChapter = () => {
    if (newChapterTitle) {
      dispatch(addChapter({ chapter: newChapterTitle, slides: [] }));
      setNewChapterTitle(""); // Reset the input field after adding
    }
  };
  return (
    <div className="bg-white w-[16%] p-6">
      {/* <div className="flex justify-between">
        <h2 className="text-orange-500 font-bold rounded-xl px-2">Chapters</h2>
        <button className="flex justify-center text-white font-bold text-xl bg-orange-400 hover:bg-orange-500 rounded-3xl">
          <span className="material-symbols-outlined t">add</span>
        </button>
      </div> */}
      {chapters.map((chapter, index) => (
        <div key={index} className="flex justify-between my-2">
          <input
            type="text"
            value={chapter.chapter}
            onChange={(e) =>
              dispatch(
                updateChapterTitle({
                  chapterIndex: index,
                  title: e.target.value,
                })
              )
            }
            className="w-full px-3 py-1 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Chapter Title"
          />
        </div>
      ))}
      {/* <button className="flex justify-between text-white hover:bg-gray-200 p-1 rounded-lg">
        <p className="text-orange-500 rounded-xl px-2">New Slide</p>
        <span className="material-symbols-outlined t flex justify-center text-xl font-bold bg-orange-400 hover:bg-orange-500 rounded-3xl">
          add
        </span>
      </button> */}
      <div className="flex justify-between my-2">
        <input
          type="text"
          value={newChapterTitle}
          onChange={(e) => setNewChapterTitle(e.target.value)}
          className="w-full px-3 py-1 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Add New Chapter"
        />
        <button
          onClick={handleAddChapter}
          className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ChaptersAdd;
