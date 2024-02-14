// App.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setAuthReady } from "./redux/authSlice";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
import Home from "./routes/Home";
import SabbathSchool from "./routes/SabbathSchool";
import Devotion from "./routes/Devotion";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import NotMatch from "./routes/NotMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import AdminDashboard from "./routes/AdminDashboard";
import CoursesAvailable from "./features/CourseComponents/CoursesAvailable";
import ChaptersDisplay from "./features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "./features/CourseComponents/SlidesDisplay";
import SSLQuarter from "./features/SabbathSchoolComponent/SSLQuarter";
import SSLDay from "./features/SabbathSchoolComponent/SSLDay";
import DisplaySSLLesson from "./features/SabbathSchoolComponent/DisplaySSLLesson";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthReady = useSelector((state) => state.auth.isAuthReady);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(login(user)); // Dispatch the login action
    }

    dispatch(setAuthReady(true)); // Dispatch the setAuthReady action
  }, [dispatch]);

  if (!isAuthReady) {
    return <div>Loading...</div>; // Or a  loading spinner
  }

  // Private Route for Admin
  const PrivateAdminRoute = ({ children }) => {
    if (user && user.role === "Admin") {
      return children;
    } else {
      return <Navigate to="/" replace={true} />;
    }
  };

  PrivateAdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Public Route (redirect if logged in)
  const PublicRoute = ({ children }) => {
    if (user && user.role === "Admin") {
      return <Navigate to="/admin" replace={true} />;
    }
    return !user ? children : <Navigate to="/" replace={true} />;
  };

  PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const isCurrentRouteAdminDashboard = () => {
    if (user && user.role === "Admin") {
      return true;
    }
  };
  return (
    <BrowserRouter b>
      {isCurrentRouteAdminDashboard && <Header />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses/get/:courseId" element={<ChaptersDisplay />} />
        <Route
          path="/courses/get/:courseId/chapter/:chapterId"
          element={<SlidesDisplay />}
        />
        <Route path="/sabbathSchool" element={<SabbathSchool />} />
        <Route path="/sabbathSchool/:quarter" element={<SSLQuarter />} />
        <Route path="/sabbathSchool/:quarter/lessons/:id" element={<SSLDay />}>
          <Route path="days/:day/read" element={<DisplaySSLLesson />} />
        </Route>
        <Route path="/devotion" element={<Devotion />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/courses" element={<CoursesAvailable />} />

        {/* Protected Routes */}
        <Route
          path="/admin/*"
          element={
            <PrivateAdminRoute>
              <AdminDashboard />
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

        {/* Not Found Route */}
        <Route path="*" element={<NotMatch />} />
      </Routes>
      {!isCurrentRouteAdminDashboard && <Footer />}
    </BrowserRouter>
  );
}

export default App;
