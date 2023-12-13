import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuthContext";

const DevotionDisplay = ({ devotions, handleDelete, startEditing }) => {
  const { role } = useAuthContext(); // get the authentication token
  // Sort the devotions array in descending order of creation date
  const [latestDevotion, ...previousDevotions] = devotions;

  return (
    <div className="w-[70%] bg-gray-100 font-nokia-bold container flex-col mx-auto">
      <h1 className="font-customBold text-3xl text-accent-5 mt-6">
        Daily Devotional
      </h1>

      <div className="mb-12">
        <div className="space-y-12">
          <div className="flex space-x-12">
            {latestDevotion &&
            (latestDevotion.month !== "" || latestDevotion.day !== "") ? (
              <div className="rounded-xl w-[20%] h-full border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
                <div className="w-[95%] h-[95%] mx-auto  flex flex-col justify-center items-center border-2 bg-secondary-6  rounded-xl my-1 leading-none  py-6">
                  <p className=" font-nokia-bold text-3xl text-[#fff]">
                    {latestDevotion.month}
                  </p>
                  <p className="text-5xl font-nokia-bold text-[#fff]">
                    {latestDevotion.day}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hidden rounded-xl w-[20%] h-full border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
                <div className="w-[90%] mx-auto h-[95%] flex flex-col justify-center items-center border-2 bg-secondary-6   rounded-xl my-1 leading-none py-6">
                  <p className="font-nokia-bold text-3xl text-[#fff]">
                    {latestDevotion && latestDevotion.month}
                  </p>
                  <p className="font-nokia-bold text-5xl text-[#fff]">
                    {latestDevotion && latestDevotion.day}
                  </p>
                </div>
              </div>
            )}

            <div className="font-nokia-bold flex flex-col w-[50%] space-y-2 mt-8">
              <div className="flex width: 100% space-x-12">
                <h1 className=" text-4xl text-justify text-secondary-6">
                  {latestDevotion && latestDevotion.title}
                </h1>
                {role === "Admin" && (
                  <>
                    <FaTrash
                      className="text-gray-700 text-xl cursor-pointer self-center"
                      onClick={() =>
                        handleDelete(latestDevotion && latestDevotion._id)
                      }
                    />
                    <FaEdit
                      className="text-gray-700 text-xl cursor-pointer self-center"
                      onClick={() =>
                        startEditing(latestDevotion && latestDevotion._id)
                      }
                    />
                  </>
                )}
              </div>
              <h2 className=" text-lg text-accent-5">
                {latestDevotion && latestDevotion.chapter}
              </h2>

              {latestDevotion && latestDevotion.chapter !== "" ? (
                <hr className="border-accent-5" />
              ) : (
                <hr className="hidden border-secondary-6" />
              )}

              <p className=" text-1xl text-secondary-6">
                {latestDevotion && latestDevotion.verse}
              </p>

              {latestDevotion &&
                latestDevotion.body.map((paragraph, paragraphIndex) => (
                  <p
                    className=" font-nokia-bold text-sm text-justify text-secondary-6"
                    key={paragraphIndex}
                  >
                    {paragraph}
                  </p>
                ))}

              {latestDevotion && latestDevotion.prayer !== "" ? (
                <p className="font-nokia-bold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                  {latestDevotion.prayer}
                </p>
              ) : (
                <p className="hidden font-nokia-bold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                  {latestDevotion && latestDevotion.prayer}
                </p>
              )}
            </div>

            <div className="w-[25%] mt-12 flex flex-col space-y-6">
              <img
                src={`http://localhost:5100/images/${
                  latestDevotion && latestDevotion.image
                }`}
                alt="Devotion Image"
              />

              {latestDevotion && latestDevotion.previewUrl && (
                <img src={latestDevotion.previewUrl} alt="Preview" />
              )}

              {latestDevotion && latestDevotion.previewUrl !== "" ? (
                <img src="../../src/assets/Advert-Image.svg" alt="" />
              ) : (
                <img
                  src="../../src/assets/Advert-Image.svg"
                  alt=""
                  className="hidden"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-12 mt-4">
          {previousDevotions.map((devotion) => (
            <div key={devotion._id}>
              <img
                src={`http://localhost:5100/images/${devotion.image}`}
                alt="Devotion"
                style={{ width: "150px", cursor: "pointer" }}
                onClick={() => {
                  // open the devotion on click
                }}
              />

              <div className="font-nokia-bold text-sm text-center mt-2">
                {devotion.title}
              </div>
              <div className="font-nokia-bold text-sm text-center mt-2">
                {devotion.month} {devotion.day}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DevotionDisplay.propTypes = {
  devotions: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
  startEditing: PropTypes.func,
};

export default DevotionDisplay;
