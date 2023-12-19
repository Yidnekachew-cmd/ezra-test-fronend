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
    <div className="flex flex-col bg-gray-800 text-white h-full w-1/5">
      <div
        className="px-4 py-3 cursor-pointer hover:bg-gray-700"
        onClick={() => handleMenuClick("courses")}
      >
        Courses
        {openMenu === "courses" && (
          <ul className="pl-4 mt-2">
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/courses")}
            >
              Create Course
            </li>
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/courses/create")}
            >
              Manage Courses
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-3 cursor-pointer hover:bg-gray-700"
        onClick={() => handleMenuClick("sabbathSchool")}
      >
        Sabbath School
        {openMenu === "sabbathSchool" && (
          <ul className="pl-4 mt-2">
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/sabbathSchool")}
            >
              View Sabbath School
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-3 cursor-pointer hover:bg-gray-700"
        onClick={() => handleMenuClick("devotion")}
      >
        Devotion
        {openMenu === "devotion" && (
          <ul className="pl-4 mt-2">
            <li
              className="cursor-pointer hover:text-gray-300"
              onClick={() => handleSubItemClick("/admin/devotion")}
            >
              View Devotion
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
