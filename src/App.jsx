import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import LogIn from "./routes/LogIn";
import CreateAccount from "./routes/CreateAccount";
import NotMatch from "./routes/NotMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Footer from "./components/Footer";
import AddCourse from "./components/AddCourse";
import ChaptersDisplay from "./features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "./features/CourseComponents/SlidesDisplay";
import AdminChapter from "./features/CourseComponents/AdminChapter";
import AdminDashboard from "./routes/AdminDashboard";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              !user ? (
                <Login />
              ) : user.role === "Admin" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/course/create/add"
            element={
              user && user.role === "Admin" ? (
                <AddCourse />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route path="/sabbathSchool" element={<SabbathSchool />} />
          <Route path="/devotion" element={<Devotion />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/courses/get/:courseId" element={<ChaptersDisplay />} />
          <Route
            path="/courses/get/:courseId/chapter/:chapterId"
            element={<SlidesDisplay />}
          />
          <Route path="/courses/create/chapters" element={<AdminChapter />} />
          <Route path="/courses/create/add" element={<AddCourse />} />
          <Route path="*" element={<NotMatch />} />
          <Route
            path="/admin"
            element={
              user && user.role === "Admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
