import { useState } from "react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");

  const handleMenuClick = (menuName) => {
    if (openMenu === menuName) {
      setOpenMenu("");
    } else {
      setOpenMenu(menuName);
    }
  };

  return (
    <div className="sidebar">
      <div onClick={() => handleMenuClick("analytics")}>
        Analytics
        {openMenu === "analytics" && (
          <ul>
            <li>App usage</li>
            <li>Performance dashboard</li>
          </ul>
        )}
      </div>
      <div onClick={() => handleMenuClick("course")}>
        Course
        {openMenu === "course" && (
          <ul>
            <li>Create course</li>
            <li>Manage course</li>
          </ul>
        )}
      </div>
      <div onClick={() => handleMenuClick("sabbathSchool")}>
        Sabbath School
        {openMenu === "sabbathSchool" && (
          <ul>
            <li>Create SSL</li>
            <li>Manage SSL</li>
          </ul>
        )}
      </div>
      <div onClick={() => handleMenuClick("dailyDevotional")}>
        Daily Devotional
        {openMenu === "dailyDevotional" && (
          <ul>
            <li>Create Devotional</li>
            <li>Manage Devotional</li>
          </ul>
        )}
      </div>
      <div onClick={() => handleMenuClick("users")}>Users</div>
      <div onClick={() => handleMenuClick("feedbackSurvey")}>
        Feedback Survey
      </div>
    </div>
  );
};

export default Sidebar;
