import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import NotMatch from "./routes/NotMatch";
import ChaptersDisplay from "./features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "./features/CourseComponents/SlidesDisplay";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sabbathSchool" element={<SabbathSchool />} />
        <Route path="/devotion" element={<Devotion />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courses/get/:courseId" element={<ChaptersDisplay />} />
        <Route
          path="/courses/get/:courseId/chapter/:chapterId"
          element={<SlidesDisplay />}
        />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
