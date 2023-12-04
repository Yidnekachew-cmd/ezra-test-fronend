import Hero from "@/features/HomePageComponents/Hero";
import Intro from "@/features/HomePageComponents/Intro";

const Home = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-">
      <Hero />
      <Intro />
    </div>
  );
};

export default Home;