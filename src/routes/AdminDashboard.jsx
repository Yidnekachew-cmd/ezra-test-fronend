// AdminDashboard.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Courses from "../routes/Courses";
import SabbathSchool from "../routes/SabbathSchool";
import CreateDevotion from "./CreateDevotion";
import ManageDevotion from "./ManageDevotion";
import Devotion from "../routes/Devotion";
// import AddCourse from "../components/AddCourse";
import AdminChapter from "../features/CourseComponents/AdminChapter";
import EditCourse from "../components/admin/EditCourse";
import ManageCourse from "../components/admin/ManageCourse";
import CreateCourse from "@/components/CreateCourse";
import EditCourseFirst from "@/components/admin/EditCourseFirst";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-admin-dashboard">
      <div className="fixed top-0 left-0 z-10 h-screen ">
        <Sidebar />
      </div>
      <div className="col-span-4 ml-64">
        <Routes>
          <Route path="/" element={<div>Admin Home</div>} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="sabbathSchool" element={<SabbathSchool />} />
          <Route path="devotion" element={<Devotion />} />
          <Route path="devotion/create" element={<CreateDevotion />} />
          <Route path="devotion/manage" element={<ManageDevotion />} />
          <Route path="courses/create/chapters" element={<AdminChapter />} />
          <Route path="course/edit" element={<ManageCourse />} />
          <Route path="edit/course/:id" element={<EditCourseFirst />} />
          <Route path="edit/course/:id/chapters" element={<EditCourse />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
