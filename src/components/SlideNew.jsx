import { useState, useRef, useEffect } from "react";
import { SlideItems } from "./SlideItems";

const SlideNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
    },
  ];

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="flex justify-center flex-col items-center bg-blue-300">
      <div className="flex">
        {/* buttons */}
        <div className="flex flex-col justify-evenly ml-6">
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex((prevIndex) => prevIndex - 1);
            }}
          >
            <span className="material-symbols-outlined text-white font-bold text-3xl">
              arrow_upward
            </span>
          </button>
          <div className="flex flex-col justify-around items-center mt-[20px]">
            {items.map((item, index) => {
              return (
                <button
                  key={index}
                  className="border-none cursor-pointer bg-white my-2 p-2"
                  onClick={() => {
                    updateIndex(() => index);
                  }}
                >
                  <span
                    className={`${
                      index === activeIndex
                        ? "text-blue-500 font-bold"
                        : "text-gray-900"
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
              updateIndex((prevIndex) => prevIndex + 1);
            }}
          >
            <span className="material-symbols-outlined text-white font-bold text-3xl">
              arrow_downward
            </span>
          </button>
        </div>
        {/* slides */}
        <div className="overflow-hidden h-screen w-screen flex flex-col justify-center items-center mx-auto">
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            {items.map((item, index) => {
              return (
                <div
                  ref={(el) => (itemRefs.current[index] = el)}
                  key={index}
                  className={`absolute top-0 left-0 h-full w-full transition-transform duration-300 ${
                    index === activeIndex ? "block" : "hidden"
                  }`}
                >
                  <SlideItems item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNew;
