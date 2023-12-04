import ChaptersAdd from "./ChaptersAdd";
import ElementsAdd from "./ElementsAdd";

function AdminChapter() {
  return (
    <div>
      <div className="flex justify-between border-gray-200 border-2 p-1">
        <button className="text-white font-bold text-3xl bg-orange-400 hover:bg-orange-500 rounded-[50%]">
          <span className="material-symbols-outlined t">arrow_left</span>
        </button>
        <button className="px-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600">
          Publish
        </button>
      </div>
      <div className="flex justify-between h-screen w-full bg-[#F1F1F1]">
        <ChaptersAdd />
        <ElementsAdd />
      </div>
    </div>
  );
}

export default AdminChapter;
