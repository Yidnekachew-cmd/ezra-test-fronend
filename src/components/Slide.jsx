import { useState } from "react";
import { SlideItems } from "./SlideItems";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-blue-300">
      <div className="flex">
        {/* buttons */}
        <div className="flex flex-col justify-evenly ml-6">
          <button
            className="bg-transparent border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex - 1);
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
                    updateIndex(index);
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
              updateIndex(activeIndex + 1);
            }}
          >
            <span className="material-symbols-outlined text-white font-bold text-3xl">
              arrow_downward
            </span>
          </button>
        </div>
        {/* slides */}
        <div className="overflow-hidden w-[70%] flex flex-col justify-center items-center mx-auto">
          <div
            className="whitespace-nowrap transition-transform duration-300 shadow-md"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => {
              return <SlideItems key={index} item={item} width={"100%"} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
