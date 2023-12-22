import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem); // Redirect to the selected sub-item's route
  };

  return (
    <div className="flex flex-col bg-gray-800 text-white h-screen">
      <div
        className="px-4 py-5 cursor-pointer hover:bg-accent-6"
        onClick={() => handleMenuClick("courses")}
      >
        Courses
        {openMenu === "courses" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/courses/create/add")}
            >
              Create Course
            </li>
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/course")}
            >
              Manage Courses
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer  hover:bg-accent-6"
        onClick={() => handleMenuClick("sabbathSchool")}
      >
        Sabbath School
        {openMenu === "sabbathSchool" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/sabbathSchool")}
            >
              Create Sabbath School
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer  hover:bg-accent-6"
        onClick={() => handleMenuClick("devotion")}
      >
        Devotion
        {openMenu === "devotion" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/devotion/create")}
            >
              Add Devotion
            </li>

            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/devotion")}
            >
              Manage Devotion
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default Sidebar;
