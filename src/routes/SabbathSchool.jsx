import SSLHome from "@/features/SabbathSchoolComponent/SSLHome";
import CurrentSSL from "@/features/SabbathSchoolComponent/CurrentSSL";

const SabbathSchool = () => {
  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <CurrentSSL />
      <div className="my-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p>Explore quarterly lessons</p>
            <p className="text-2xl text-accent-6">
              Lessons of previous quarters
            </p>
          </div>
          <div></div>
        </div>
        <div className="border border-b-accent-6 " />
      </div>
      <SSLHome />
    </div>
  );
};

export default SabbathSchool;
