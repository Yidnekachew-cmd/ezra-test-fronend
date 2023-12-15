import PropTypes from "prop-types";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
// import LogIn from "./routes/LogIn";
// import CreateAccount from "./routes/CreateAccount";
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

  // Private Route for Admin
  const PrivateAdminRoute = ({ children }) => {
    return user && user.role === "Admin" ? children : <Navigate to="/" />;
  };

  PrivateAdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // Public Route (redirect if logged in)

  const PublicRoute = ({ children }) => {
    return !user ? children : <Navigate to="/" />;
  };

  PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            user && user.role === "Admin" ? <Navigate to="/admin" /> : <Home />
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/sabbathSchool" element={<SabbathSchool />} />
        <Route path="/devotion" element={<Devotion />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/courses/get/:courseId" element={<ChaptersDisplay />} />
        <Route
          path="/courses/get/:courseId/chapter/:chapterId"
          element={<SlidesDisplay />}
        />
        <Route path="*" element={<NotMatch />} />

        {/* Protected Routes for Admin */}
        <Route
          path="/admin"
          element={
            <PrivateAdminRoute>
              <AdminDashboard />
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/course/create/add"
          element={
            <PrivateAdminRoute>
              <AddCourse />
            </PrivateAdminRoute>
          }
        />
        <Route
          path="/courses/create/chapters"
          element={
            <PrivateAdminRoute>
              <AdminChapter />
            </PrivateAdminRoute>
          }
        />

        {/* Public Routes (Redirect if logged in) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
