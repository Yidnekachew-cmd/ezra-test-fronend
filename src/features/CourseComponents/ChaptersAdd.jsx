import { useDispatch } from "react-redux";
import { addChapter } from "../../redux/courseSlice";

function ChaptersAdd() {
  const dispatch = useDispatch();

  const handleAddChapter = () => {
    // The initial chapter structure can be more complex depending on your needs
    const newChapter = {
      title: "",
      slides: [],
    };
    dispatch(addChapter(newChapter));
  };
  return (
    <div className="bg-white w-[16%] p-6">
      <div className="flex justify-between">
        <h2 className="text-orange-500 font-bold rounded-xl px-2">Lessons </h2>
        <button
          onClick={handleAddChapter}
          className="flex justify-center text-white font-bold text-xl bg-orange-400 hover:bg-orange-500 rounded-3xl"
        >
          <span className="material-symbols-outlined t">add</span>
        </button>
      </div>
      <div className="col-span-12 my-2">
        <input
          type="text"
          className="w-full px-3 py-1 text-orange-500 leading-tight border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
          name="chapter"
          placeholder="add chapter"
          autoComplete="off"
          // onChange={(e) => setData({ ...data, chapter: e.target.value })}
        />
      </div>
    </div>
  );
}

export default ChaptersAdd;
