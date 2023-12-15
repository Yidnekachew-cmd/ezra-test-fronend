import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const handleMenuClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
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
    <div className="sidebar">
      {sidebarItems.map((item) => (
        <div key={item.name}>
          <Link
            to={`/admin/${item.name.toLowerCase().replace(" ", "-")}`}
            onClick={() => handleMenuClick(item.name)}
          >
            {item.name}
          </Link>
          {openMenu === item.name && item.subItems.length > 0 && (
            <ul>
              {item.subItems.map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
