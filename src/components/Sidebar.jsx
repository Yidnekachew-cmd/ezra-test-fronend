import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Graph } from "@phosphor-icons/react/dist/ssr";
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const SidebarMenu = ({ menuName, children, openMenu, handleMenuClick }) => (
    <div
      className={`px-4 py-5 cursor-pointer hover:bg-accent-6 ${
        openMenu === menuName ? "bg-accent-6" : ""
      }`}
      onClick={() => handleMenuClick(menuName)}
    >
      {/* Show menu label or icon based on `isCollapsed` */}
      {children}
    </div>
  );

  SidebarMenu.propTypes = {
    menuName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    openMenu: PropTypes.string.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  const handleMenuClick = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem); // Redirect to the selected sub-item's route
  };

  return (
    <div
      className={`flex flex-col text-white bg-accent-8 h-full ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ height: "100vh", transition: "width 0.3s" }}
    >
      <div className="font-Lato-Bold relative">
        <h1 className="text-center py-4">Dashboard</h1>
        <hr className="w-[100]" />
        <div
          className="absolute top-2 right-4 transform translate-x-full"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ArrowRight
              size={20}
              weight="bold"
              className="h-8 w-8 text-accent-8 border border-accent-8 bg-primary-1 rounded-full p-2"
            />
          ) : (
            <ArrowLeft
              size={20}
              weight="bold"
              className="h-8 w-8 text-accent-8 border border-accent-8 bg-primary-1 rounded-full p-2"
            />
          )}
        </div>
        <div
          className="flex gap-2 px-4 py-5 cursor-pointer hover:bg-accent-6"
          onClick={() => handleMenuClick("analytics")}
        >
          <Graph className="text-primary-1" size={24} />
          Analytics
          {openMenu === "analytics" && (
            <ul className="pl-4 mt-2 py-2">
              <li
                className="cursor-pointer hover:text-gray-300 mb-2"
                onClick={() => handleSubItemClick("")}
              >
                App Usage
              </li>
              <li
                className="cursor-pointer hover:text-gray-300 mb-2"
                onClick={() => handleSubItemClick("")}
              >
                Performace Dashboard
              </li>
              {/* Add more sub-items as needed */}
            </ul>
          )}
        </div>
        <hr className="w-[100]" />
        <div
          className="px-4 py-5 cursor-pointer hover:bg-accent-6"
          onClick={() => handleMenuClick("courses")}
        >
          Courses
          {openMenu === "courses" && (
            <ul className="pl-4 mt-2 py-2">
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={() => handleSubItemClick("/admin/courses/create")}
              >
                Create Course
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={() => handleSubItemClick("/admin/course/edit")}
              >
                Manage Courses
              </li>
              {/* Add more sub-items as needed */}
            </ul>
          )}
        </div>
        <hr />
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
        <hr />
        <div
          className="px-4 py-5 cursor-pointer  hover:bg-accent-6"
          onClick={() => handleMenuClick("devotion")}
        >
          Daily Devotional
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
                onClick={() => handleSubItemClick("/admin/devotion/manage")}
              >
                Manage Devotion
              </li>
              {/* Add more sub-items as needed */}
            </ul>
          )}
        </div>
        <hr />
        <div
          className="px-4 py-5 cursor-pointer hover:bg-accent-6"
          onClick={() => handleMenuClick("users")}
        >
          Users
          {openMenu === "users" && (
            <ul className="pl-4 mt-2 py-2">
              <li
                className="cursor-pointer hover:text-gray-300 mb-2"
                onClick={() => handleSubItemClick("")}
              >
                Profile Page
              </li>
            </ul>
          )}
        </div>
        <hr />
        <div
          className="px-4 py-5 cursor-pointer hover:bg-accent-6"
          onClick={() => handleMenuClick("feedback")}
        >
          Feedback Survey
          {openMenu === "feedback" && (
            <ul className="pl-4 mt-2 py-2">
              <li
                className="cursor-pointer hover:text-gray-300 mb-2"
                onClick={() => handleSubItemClick("")}
              >
                Give us Feedback
              </li>
            </ul>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
