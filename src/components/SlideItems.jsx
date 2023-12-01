import PropTypes from "prop-types";

export const SlideItems = ({ item }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center h-[490px] border-y-2 border-orange-300">
      {/* <img className="carousel-img" src={item.image} /> */}
      <div className="text-[1.15rem] font-bold mt-[10px] mb-[10px] px-[20px] whitespace-normal text-white">
        {item.title}
      </div>
      <div className="text-[1.15rem] mt-[10px] mb-[10px] px-[20px] whitespace-normal text-white">
        {item.description}
      </div>
    </div>
  );
};

SlideItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
};
