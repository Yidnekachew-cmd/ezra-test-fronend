import PropTypes from "prop-types";

export const SlideItems = ({ item }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center bg-white">
      <div></div>
      {/* <img className="carousel-img" src={item.image} /> */}
      <div className="text-[1.15rem] font-bold mt-[10px] mb-[10px] px-[20px] whitespace-normal text-blue-500">
        {item.title}
      </div>
      <div className="text-[1.15rem] mt-[10px] mb-[10px] px-[20px] whitespace-normal text-gray-600">
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
