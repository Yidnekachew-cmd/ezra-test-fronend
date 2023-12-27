import { FaTrash } from "react-icons/fa";

import PropTypes from "prop-types";

export const DevotionDisplay = ({ devotions, handleDelete }) => {
  // Sort the devotions array in descending order of creation date
  const sortedDevotions = [...devotions].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  // Set the latest devotion as the first item in the sorted array
  const latestDevotion = sortedDevotions.shift();

  return (
    <div className="w-[70%] font-nokia-bold bg-gray-100 container mx-auto">
      {/* Display the latest devotion */}
      <div className="mt-6">
        <h1 className="font-customBold text-3xl text-[#EA9215]">
          Daily Devotional
        </h1>

        <div className="flex space-x-12">
          {latestDevotion.month !== "" || latestDevotion.day !== "" ? (
            <div className="rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-[#EA9215] mt-8 text-[#3A4750]">
              <div className="w-[95%] mx-auto flex flex-col justify-center items-center border-2 bg-[#3A4750] p-3 rounded">
                <p className="font-customBold text-3xl text-[#fff]">
                  {latestDevotion.month}
                </p>
                <p className="text-7xl font-customBold text-[#fff]">
                  {latestDevotion.day}
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden rounded w-[20%] h-36 my-1 border-2 bg-[#fff] border-[#EA9215] mt-8 text-[#3A4750]">
              <div className="w-[95%] mx-auto flex flex-col justify-center items-center border-2 bg-[#3A4750] p-3 rounded">
                <p className="font-customBold text-3xl text-[#fff]">
                  {latestDevotion.month}
                </p>
                <p className="text-7xl font-customBold text-[#fff]">
                  {latestDevotion.day}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col w-[50%] space-y-2 mt-8">
            <div className="flex width: 100% space-x-12">
              <h1 className="font-customBold text-4xl text-justify text-[#3A4750]">
                {latestDevotion.title}
              </h1>
              <FaTrash
                className="text-gray-700 text-xl cursor-pointer self-center"
                onClick={() => handleDelete(latestDevotion._id)}
              />
            </div>
            <h2 className="font-customBold text-lg text-[#EA9215]">
              {latestDevotion.chapter}
            </h2>
            {latestDevotion.chapter !== "" ? (
              <hr className="border-[#EA9215]" />
            ) : (
              <hr className="hidden border-[#3A4750]" />
            )}

            <p className="font-customBold text-1xl text-[#3A4750]">
              {latestDevotion.verse}
            </p>

            {latestDevotion.body.map((paragraph, paragraphIndex) => (
              <p
                className="font-customLight text-sm text-justify text-[#3A4750]"
                key={paragraphIndex}
              >
                {paragraph}
              </p>
            ))}

            {latestDevotion.prayer !== "" ? (
              <p className="font-customBold text-1xl text-center border-2 border-[#EA9215] p-2 rounded text-[#EA9215]">
                {latestDevotion.prayer}
              </p>
            ) : (
              <p className="hidden font-customBold text-1xl text-center border-2 border-[#EA9215] p-2 rounded text-[#EA9215]">
                {latestDevotion.prayer}
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
              src={`https://ezra-seminary-api.onrender.com/images/${latestDevotion.image}`}
              alt="Devotion Image"
            />
          </div>
        </div>
      </div>
      {/* Display the other devotions as thumbnails */}
      <div className="flex flex-wrap justify-center">
        {sortedDevotions.map((devotion, index) => (
          <div key={index} className="w-1/4 p-4 thumbnail">
            <div className="rounded w-full h-40 border-2 bg-[#fff] border-[#EA9215] text-[#3A4750]">
              <img
                src={`https://ezra-seminary-api.onrender.com/images/${devotion.image}`}
                alt="Devotion Image"
                className="h-[50%] w-[50%] mx-auto"
              />
              <h1 className="font-customBold text-2xl text-justify mt-2">
                {devotion.title}
              </h1>
              <div className="flex justify-between items-center mt-2">
                <h2 className="font-customBold text-lg text-[#EA9215]">
                  {devotion.chapter}
                </h2>
                <FaTrash
                  className="text-gray-700 text-xl cursor-pointer"
                  onClick={() => handleDelete(devotion._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

DevotionDisplay.propTypes = {
  devotions: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
