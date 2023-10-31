import PropTypes from "prop-types";

export const SlideItems = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      {/* <img className="carousel-img" src={item.image} /> */}
      <div className="carousel-item-text">{item.title}</div>
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

SlideItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.string.isRequired,
};
