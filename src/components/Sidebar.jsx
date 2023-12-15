import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  const handleSubItemClick = (subItem) => {
    if (subItem === "Create course") {
      navigate("/courses");
    } else if (subItem === "Create SSL") {
      navigate("/sabbathSchool");
    } else if (subItem === "Create Devotional") {
      navigate("/devotion");
    } else if (subItem === "App usage") {
      navigate("/analytics");
    }
  };

  const sidebarItems = [
    { name: "Analytics", subItems: ["App usage", "Performance dashboard"] },
    { name: "Course", subItems: ["Create course", "Manage course"] },
    { name: "Sabbath School", subItems: ["Create SSL", "Manage SSL"] },
    {
      name: "Daily Devotional",
      subItems: ["Create Devotional", "Manage Devotional"],
    },
    { name: "Users", subItems: [] },
    { name: "Feedback Survey", subItems: [] },
  ];

  return (
    <div className="w-1/4 flex flex-col h-screen bg-white text-gray-800 p-4 border-r border-gray-700">
      {sidebarItems.map((item) => (
        <div key={item.name} className="mb-2">
          <button
            onClick={() => handleMenuClick(item.name)}
            className="w-full text-left hover:text-accent-1 hover:bg-accent-6"
          >
            {item.name}
          </button>

          {item.subItems.length > 0 && openMenu === item.name && (
            <div className="mt-2 bg-white shadow rounded">
              {item.subItems.map((subItem) => (
                <button
                  key={subItem}
                  onClick={() => handleSubItemClick(subItem)}
                  className="block w-full text-left px-4 py-2 hover:bg-accent-6"
                >
                  {subItem}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
