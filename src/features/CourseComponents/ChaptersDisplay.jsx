import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ChaptersDisplay() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unlockedIndex, setUnlockedIndex] = useState(0); // New state variable to track the unlocked index

  const { courseId } = useParams();

  //get single course
  useEffect(() => {
    axios
      .get(`/course/get/${courseId}`)
      .then((res) => {
        setData(res.data.chapters);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [courseId]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    if (newIndex > unlockedIndex) {
      setUnlockedIndex(newIndex); // Update the unlocked index
    }

    setActiveIndex(newIndex);
  };

  // slide number
  const currentDataNumber = activeIndex + 1;
  const totalDataNumber = data.length;

  const isSlideUnlocked = (index) => {
    return index <= unlockedIndex; // Check if the slide is unlocked based on the unlocked index
  };

  return (
    <div className="flex justify-center flex-col data-center h-screen">
      <div className="flex w-full">
        <div className="flex flex-col justify-evenly ml-6 bg-white p-4 rounded-lg">
          {/* slide number */}
          <div className="mt-4 border-b-4 border-orange-500 font-bold">
            CHAPTER {currentDataNumber}/{totalDataNumber}
          </div>
          <div className="flex flex-col justify-around data-center mt-[20px]">
            {data.map((chapter, index) => {
              const unlocked = isSlideUnlocked(index);
              return (
                <button
                  key={index}
                  className={`flex data-center border-b-2 border-orange-300 cursor-pointer py-2 ${
                    unlocked ? "text-black" : "text-gray-500"
                  }  ${index === activeIndex && "font-bold bg-[#FAE5C7]"}
                  `} // Locked slide to gray
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span>{chapter.chapter}</span>
                  {unlocked ? (
                    <span className="material-symbols-outlined text-orange-500 pl-4 text-xl">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-orange-500 pl-4 text-lg">
                      radio_button_unchecked
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        {/* slides */}
        <div className="overflow-hidden w-[70%] justify-center data-center mx-auto bg-[#955B09BA] rounded-lg">
          <div className="flex flex-col whitespace-nowrap transition-transform duration-300 shadow-md">
            <h1 className="text-white font-bold p-2">EZRA seminary</h1>
            {data.map((chapter, index) => {
              if (index === activeIndex) {
                return (
                  <div
                    key={index}
                    className="inline-flex flex-col justify-center h-[490px] border-y-2 border-orange-300"
                  >
                    <h1 className="text-[1.15rem] font-bold mt-[10px] mb-[10px] px-[20px] whitespace-normal text-white text-center">
                      {chapter.chapter}
                    </h1>
                    <button className="text-white text-center font-bold my-2 p-2 bg-orange-400 hover:bg-orange-500 w-[20%] rounded-3xl mx-auto">
                      <Link
                        to={`/courses/get/${courseId}/chapter/${chapter._id}`}
                      >
                        ትምህርቱን ጀምር
                      </Link>
                    </button>
                  </div>
                );
              } else {
                return null; // Hide the chapter if it doesn't match the activeIndex
              }
            })}
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ChaptersDisplay;
