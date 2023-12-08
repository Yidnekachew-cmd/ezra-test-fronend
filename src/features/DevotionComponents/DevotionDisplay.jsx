import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const DevotionDisplay = ({ devotions, handleDelete }) => {
  return (
    <div className="w-[70%] bg-gray-100 font-nokia-bold container flex-col mx-auto">
      {devotions.map((devotion, index) => (
        <div key={index} className="mt-6">
          <h1 className="font-customBold text-3xl text-accent-5">
            Daily Devotional
          </h1>

          <div className="flex space-x-12">
            {devotion.month !== "" || devotion.day !== "" ? (
              <div className="rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
                <div className="w-[95%] mx-auto flex flex-col justify-center items-center border-2 bg-secondary-6 p-3 rounded">
                  <p className="font-customBold text-3xl text-[#fff]">
                    {devotion.month}
                  </p>
                  <p className="text-7xl font-customBold text-[#fff]">
                    {devotion.day}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hidden rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
                <div className="w-[95%] mx-auto flex flex-col justify-center items-center border-2 bg-secondary-6 p-3 rounded">
                  <p className="font-customBold text-3xl text-[#fff]">
                    {devotion.month}
                  </p>
                  <p className="text-7xl font-customBold text-[#fff]">
                    {devotion.day}
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col w-[50%] space-y-2 mt-8">
              <div className="flex width: 100% space-x-12">
                <h1 className="font-customBold text-4xl text-justify text-secondary-6">
                  {devotion.title}
                </h1>
                <FaTrash
                  className="text-gray-700 text-xl cursor-pointer self-center"
                  onClick={() => handleDelete(devotion._id)}
                />
              </div>
              <h2 className="font-customBold text-lg text-accent-5">
                {devotion.chapter}
              </h2>
              {devotion.chapter !== "" ? (
                <hr className="border-accent-5" />
              ) : (
                <hr className="hidden border-secondary-6" />
              )}

              <p className="font-customBold text-1xl text-secondary-6">
                {devotion.verse}
              </p>

              {devotion.body.map((paragraph, paragraphIndex) => (
                <p
                  className="font-customLight text-sm text-justify text-secondary-6"
                  key={paragraphIndex}
                >
                  {paragraph}
                </p>
              ))}

              {devotion.prayer !== "" ? (
                <p className="font-customBold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                  {devotion.prayer}
                </p>
              ) : (
                <p className="hidden font-customBold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                  {devotion.prayer}
                </p>
              )}
            </div>

            <div className="w-[25%] mt-12 flex flex-col space-y-12">
              {/* {devotion.previewUrl && (
                <img src={devotion.previewUrl} alt="Preview" />
              )}
              {devotion.previewUrl !== "" ? (
                <img src={devotion.advertImage} alt="" className="" />
              ) : (
                <img src={devotion.advertImage} alt="" className="hidden" />
              )} */}

              <img
                src={`http://localhost:5100/images/${devotion.image}`}
                alt="Devotion Image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

DevotionDisplay.propTypes = {
  devotions: PropTypes.array.isRequired,
  handleDelete: PropTypes.any,
};

export default DevotionDisplay;