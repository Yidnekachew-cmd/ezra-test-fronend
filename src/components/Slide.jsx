import { useState } from "react";
import { SlideItems } from "./SlideItems";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "slide1",
      description: "this is slide1",
    },
    {
      title: "slide2",
      description: "this is slide2",
    },
    {
      title: "slide3",
      description: "this is slide3",
    },
    {
      title: "slide4",
      description: "this is slide4",
    },
    {
      title: "slide5",
      description: "this is slide5",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  //slide number
  const currentDataNumber = activeIndex + 1;
  const totalDataNumber = items.length;

  const isSlideActive = (index) => {
    return index <= activeIndex;
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="flex w-full">
        {/* buttons */}
        <div className="flex flex-col justify-evenly ml-6 bg-white p-4 rounded-lg">
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span className="material-symbols-outlined t font-bold text-3xl">
              arrow_upward
            </span>
          </button>
          {/* slide number */}
          <div className="mt-4 border-b-4 border-orange-500 font-bold">
            SLIDE {currentDataNumber}/{totalDataNumber}
          </div>
          <div className="flex flex-col justify-around items-center mt-[20px]">
            {items.map((item, index) => {
              return (
                <button
                  key={index}
                  className="border-b-2 border-orange-300 cursor-pointer py-2"
                  onClick={() => {
                    updateIndex(index);
                  }}
                  disabled={!isSlideActive(index)}
                >
                  <span
                    className={`${
                      index === activeIndex && "text-orange-500 font-bold"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            disabled={activeIndex === items.length - 1}
          >
            <span className="material-symbols-outlined t font-bold text-3xl">
              arrow_downward
            </span>
          </button>
        </div>
        {/* slides */}
        <div className="overflow-hidden w-[70%] justify-center items-center mx-auto bg-[#955B09BA] rounded-lg">
          <div className="flex flex-col whitespace-nowrap transition-transform duration-300 shadow-md">
            <h1 className="text-white font-bold p-2">EZRA seminary</h1>
            <SlideItems item={items[activeIndex]} />
            <button
              className="text-white font-bold my-2 bg-orange-400 w-[10%] rounded-xl mx-auto"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              disabled={activeIndex === items.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
