import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import NotMatch from "./routes/NotMatch";

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
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
