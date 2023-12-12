import PropTypes from "prop-types";

export const SlideItems = ({ item }) => {
  return (
    <div className="flex flex-col justify-center py-52">
      {/* <img className="carousel-img" src={item.image} /> */}
      <h1 className="text-3xl text-[#fff] text-center font-nokia-bold">
        {item.title}
      </h1>
      <p className="text-[1.15rem] mt-[10px] mb-[10px] px-[20px] whitespace-normal text-white">
        {item.description}
      </p>
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
