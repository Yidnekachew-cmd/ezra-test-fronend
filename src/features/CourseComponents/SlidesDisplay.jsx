import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SlidesDisplay() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unlockedIndex, setUnlockedIndex] = useState(0); // New state variable to track the unlocked index

  const { courseId, chapterId } = useParams(); // Note the two separate parameters

  //get all courses
  useEffect(() => {
    axios
      .get(`/course/get/${courseId}`) // Assuming you will change the endpoint as needed
      .then((res) => {
        // Now we need to find the specific chapter within the course
        const chapter = res.data.chapters.find(
          (chap) => chap._id === chapterId
        );
        if (chapter) {
          setData(chapter.slides);
        } else {
          console.log("Chapter not found");
        }
      })
      .catch((err) => console.log(err));
  }, [courseId, chapterId]);

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
            SLIDE {currentDataNumber}/{totalDataNumber}
          </div>
          <div className="flex flex-col justify-around data-center mt-[20px]">
            {data.map((slides, index) => {
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
                  disabled={!unlocked} // Disable the button if the slide is locked
                >
                  <span>{slides.slide}</span>
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
          <Link to={`/courses/get/${courseId}`}>
            <div className="flex justify-between">
              <button className="text-white font-bold bg-orange-400 hover:bg-orange-500 rounded-xl px-2">
                ዘግተህ ውጣ
              </button>
              <button className="text-white font-bold text-3xl bg-orange-400 hover:bg-orange-500 rounded-[50%] w-[25%] mx-auto">
                <span className="material-symbols-outlined t">arrow_left</span>
              </button>
            </div>
          </Link>
        </div>
        {/* slides */}
        <div className="overflow-hidden w-[70%] justify-center data-center mx-auto bg-[#955B09BA] rounded-lg">
          <div className="flex flex-col transition-transform duration-300 shadow-md">
            <h1 className="text-white font-bold p-2">EZRA seminary</h1>
            {data.map((slides, index) => {
              if (index === activeIndex) {
                return (
                  <div
                    key={index}
                    className="inline-flex flex-col justify-center h-[490px] border-y-2 border-orange-300"
                  >
                    <h1 className="text-3xl font-bold mt-[10px] mb-[10px] px-[20px] whitespace-normal text-white text-center">
                      {slides.slide}
                    </h1>
                    {slides.elements.map((element) => {
                      // Check the type of the element and render it accordingly
                      if (element.type === "title") {
                        return (
                          <li
                            key={element._id}
                            className="text-white text-2xl font-bold pl-20"
                          >
                            {element.value}
                          </li>
                        );
                      } else if (element.type === "sub") {
                        return (
                          <h2
                            key={element._id}
                            className="text-white font-bold pl-20"
                          >
                            {element.value}
                          </h2>
                        );
                      } else if (element.type === "img") {
                        return (
                          <img
                            key={element._id}
                            // src={`https://ezra-seminary-api.onrender.com/images/${element.value}`}
                            src={`http://localhost:5000/images/${element.value}`}
                            alt={element.id}
                            className="w-[15%]"
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                );
              } else {
                return null; // Hide the slide if it doesn't match the activeIndex
              }
            })}
            <button
              className={`text-white font-bold my-2 bg-orange-400 hover:bg-orange-500 w-[10%] rounded-xl mx-auto ${
                activeIndex === data.length - 1 ? "hidden" : "block"
              }`} // hidding the next button for the last slide
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              ቀጥል
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default SlidesDisplay;
