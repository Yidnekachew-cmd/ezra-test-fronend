import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChatCircle,
  Cross,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import { Graph } from "@phosphor-icons/react/dist/ssr";
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  const menuItems = [
    {
      label: "Analytics",
      icon: Graph,
      subItems: [
        { label: "App Usage", path: "/admin/analytics/usage" },
        { label: "Performance Dashboard", path: "/admin/analytics/dashboard" },
      ],
    },
    {
      label: "Courses",
      icon: BookOpen,
      subItems: [
        { label: "Create Course", path: "/admin/courses/create" },
        { label: "Manage Courses", path: "/admin/course/edit" },
      ],
    },
    {
      label: "Sabbath School",
      icon: Cross,
      subItems: [{ label: "SSL Section", path: "/admin/sabbathSchool" }],
    },
    {
      label: "Devotion",
      icon: CalendarCheck,
      subItems: [
        { label: "Create Devotion", path: "/admin/devotion/create" },
        { label: "Manage Devotion", path: "/admin/devotion/manage" },
      ],
    },
    {
      label: "Users",
      icon: UserCircle,
      subItems: [
        { label: "Create User", path: "/admin/users/create" },
        { label: "Manage Users", path: "/admin/users/manage" },
      ],
    },
    {
      label: "Feedback Center",
      icon: ChatCircle,
      subItems: [{ label: "Feedback", path: "/admin/feedback" }],
    },
  ];
  const SidebarItem = ({ icon: Icon, label, active, children, onClick }) => {
    return (
      <div
        className={`px-4 py-5 cursor-pointer hover:bg-accent-6 ${
          active ? "bg-accent-6" : ""
        }`}
        onClick={onClick}
      >
        <div className={`flex ${!isCollapsed ? "gap-2" : ""}`}>
          <Icon className="text-primary-1" size={24} weight="fill" />
          {!isCollapsed && <span>{label}</span>}
        </div>
        {children}
      </div>
    );
  };
  const SidebarMenu = ({ menuName, children, openMenu, handleMenuClick }) => (
    <div
      className={`px-2 cursor-pointer hover:bg-accent-6 ${
        openMenu === menuName ? "bg-accent-6" : ""
      }`}
      onClick={() => handleMenuClick(menuName)}
    >
      {children}
    </div>
  );

  SidebarItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
  };

  SidebarMenu.propTypes = {
    menuName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    openMenu: PropTypes.string.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
  };

  const handleItemClick = (item, event) => {
    if (item.subItems.length === 1) {
      // Navigate directly if there's only one subItem
      navigate(item.subItems[0].path);
    } else {
      // Toggle active menu otherwise
      setActiveMenu(activeMenu !== item.label ? item.label : "");
      event.stopPropagation(); // Prevent Sidebar from closing on clicking
    }
  };

  // This function is now only responsible for sub-item navigation.
  const handleSubItemClick = (path, event) => {
    event.stopPropagation(); // Prevents triggering the parent's onClick event.
    navigate(path);
  };
  return (
    <div
      className={`flex flex-col text-white bg-accent-8 h-full pt-12 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{
        height: "100vh",
        transition: "width 0.3s",
      }}
    >
      <div className="font-Lato-Bold relative">
        <h1 className="text-center py-4">Dashboard</h1>
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
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={isActive(item.label.toLowerCase())}
            onClick={(event) => {
              if (isCollapsed) {
                // When collapsed, navigate to the path of the first subitem
                navigate(item.subItems[[0]].path);
              } else {
                // When not collapsed, handle the item click normally
                handleItemClick(item, event);
              }
            }}
          >
            {!isCollapsed &&
              activeMenu === item.label &&
              item.subItems.map((subItem) => (
                <div
                  key={subItem.path}
                  className="pl-8 menu-item py-1 hover:bg-accent-8 rounded-lg transition-all"
                  onClick={(e) => handleSubItemClick(subItem.path, e)}
                >
                  {subItem.label}
                </div>
              ))}
          </SidebarItem>
        ))}
      </div>
      <div>
        <UserCircle
          size={28}
          className="text-primary-1 absolute bottom-8 left-4 cursor-pointer hover:bg-accent-6 rounded-full transition-all"
        />
      </div>
    </div>
  );
};

export default Sidebar;
