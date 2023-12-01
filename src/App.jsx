import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import NotMatch from "./routes/NotMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import AddCourse from "./components/AddCourse";
import ChaptersDisplay from "./features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "./features/CourseComponents/SlidesDisplay";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        {user ? <Header /> : <Navbar />}
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
        <Route path="/course/create/add" element={<AddCourse />} />
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
