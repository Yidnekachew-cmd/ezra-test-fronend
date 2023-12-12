import { useState } from "react";
import { SlideItems } from "./SlideItems";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unlockedIndex, setUnlockedIndex] = useState(0); // New state variable to track the unlocked index
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

    if (newIndex > unlockedIndex) {
      setUnlockedIndex(newIndex); // Update the unlocked index
    }

    setActiveIndex(newIndex);
  };

  // slide number
  const currentDataNumber = activeIndex + 1;
  const totalDataNumber = items.length;

  const isSlideUnlocked = (index) => {
    return index <= unlockedIndex; // Check if the slide is unlocked based on the unlocked index
  };

  return (
    <div className="flex justify-center items-center w-[80%] mx-auto">
      <div className="flex w-[100%] justify-center items-center h-screen">
        {/* buttons */}
        <div className="flex flex-col justify-start items-center md:w-[30%] h-[80%] shadow-2xl  rounded-lg border-2 border-accent-5 ">
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
            disabled={activeIndex === 0} // Disable the "Up" button when at the first slide
          >
            <span className="material-symbols-outlined t font-bold text-3xl">
              arrow_upward
            </span>
          </button>
          {/* slide number */}
          <div className="flex flex-col mt-6 border-accent-5 border-1">
            <h1 className=" font-Lato-Black pb-1">
              SLIDE {currentDataNumber}/{totalDataNumber}
            </h1>
            <hr className="border-accent-5 border-1 w-[100%] mx-auto"/>
          </div>
          <div className="flex flex-col  mt-[20px]">
            {items.map((item, index) => {
              const unlocked = isSlideUnlocked(index);
              return (
                <button
                  key={index}
                  className={`flex justify-between items-center text-sm font-nokia-bold border-b-2 border-accent-5 px-4  cursor-pointer py-2 ${
                    unlocked ? "text-black" : "text-gray-500"
                  }`} // Locked slide to gray
                  onClick={() => {
                    updateIndex(index);
                  }}
                  disabled={!unlocked} // Disable the button if the slide is locked
                >
                  <span
                    className={`${
                      index === activeIndex && "text-orange-500 font-bold"
                    }`}
                  >
                    {item.title}
                  </span>
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
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
            disabled={activeIndex === items.length - 1} // Disable the "Next" button when at the last slide
          >
            <span className="material-symbols-outlined t font-bold text-3xl">
              arrow_downward
            </span>
          </button>
        </div>
        {/* slides */}
        <div className="md:w-[70%] justify-start items-center mx-auto h-[80%]  bg-chapter-img-1 bg-no-repeat bg-cover bg-center rounded-lg ">
          <div className="flex flex-col w-[100%]">
          <div className="w-[90%] pt-4 pb-2 flex justify-between mx-auto items-center">
              <h1 className="text-[#fff] text-sm font-Lato-Black">EZRA seminary</h1>
              <img src="../../src/assets/close-icon.svg" className="w-[3%] z-40 cursor-pointer" alt="" />
            </div>
            <hr className="border-accent-5 border-1 w-[90%] mx-auto"/>
            <SlideItems item={items[activeIndex]} />
            <button
              className={`text-white text-center font-nokia-bold mt-2 py-2 px-4 bg-accent-6 hover:bg-accent-7 w-[20%] rounded-3xl mx-auto text-2xl  ${
                activeIndex === items.length - 1 ? "hidden" : "block"
              }`} // hidding the next button for the last slide
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
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
