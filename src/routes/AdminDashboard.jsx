// AdminDashboard.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Courses from "../routes/Courses";
import SabbathSchool from "../routes/SabbathSchool";
import CreateDevotion from "../routes/CreateDevotion";
// import DevotionForm from "../features/DevotionComponents/DevotionForm";
import AddCourse from "../components/AddCourse";
import ChaptersDisplay from "../features/CourseComponents/ChaptersDisplay";
import SlidesDisplay from "../features/CourseComponents/SlidesDisplay";
import AdminChapter from "../features/CourseComponents/AdminChapter";
// import DevotionDisplay from "@/features/DevotionComponents/DevotionDisplay";
import Devotion from "./Devotion";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar />
      <div className="col-span-4">
        <Routes>
          <Route path="/" element={<Devotion />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/create/add" element={<AddCourse />} />
          <Route path="sabbathSchool" element={<SabbathSchool />} />
          <Route path="devotion" element={<Devotion />} />
          <Route path="devotion/create" element={<CreateDevotion />} />
          <Route path="courses/get/:courseId" element={<ChaptersDisplay />} />
          <Route
            path="courses/get/:courseId/chapter/:chapterId"
            element={<SlidesDisplay />}
          />
          <Route path="courses/create/chapters" element={<AdminChapter />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
