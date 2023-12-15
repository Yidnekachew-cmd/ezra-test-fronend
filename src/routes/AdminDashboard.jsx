import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        {/* Add your admin routes here */}
        <Route path="/" element={<div>Admin Home</div>} />
        <Route path="/item-1" element={<div>Item 1 Page</div>} />
        <Route path="/item-2" element={<div>Item 2 Page</div>} />
        <Route path="/item-3" element={<div>Item 3 Page</div>} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
