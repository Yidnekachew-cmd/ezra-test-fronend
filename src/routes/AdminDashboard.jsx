import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Courses from "../routes/Courses";
import SabbathSchool from "../routes/SabbathSchool";
import Devotion from "../routes/Devotion";
import AddCourse from "../components/AddCourse";
import ChaptersDisplay from "../features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "../features/CourseComponents/SlidesDisplay";
import AdminChapter from "../features/CourseComponents/AdminChapter";

const AdminDashboard = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<div>Admin Home</div>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/create/add" element={<AddCourse />} />
        <Route path="/sabbathSchool" element={<SabbathSchool />} />
        <Route path="/devotion" element={<Devotion />} />
        <Route path="/courses/get/:courseId" element={<ChaptersDisplay />} />
        <Route
          path="/courses/get/:courseId/chapter/:chapterId"
          element={<SlidesDisplay />}
        />
        <Route path="/courses/create/chapters" element={<AdminChapter />} />
        <Route path="/courses/create/add" element={<AddCourse />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default AdminDashboard;
