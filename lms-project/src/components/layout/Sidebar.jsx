import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaVideo,
  FaStickyNote,
  FaTasks,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberEmail");

    navigate("/login");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <FaGraduationCap className="logo-icon" />
        <h4>EduLearn</h4>
      </div>

      <ul className="sidebar-menu">

        <li>
          <NavLink to="/student/dashboard">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/courses">
            <FaBook />
            <span>My Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/student/notes">
            <FaStickyNote />
            <span>Notes</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/assignments">
            <FaTasks />
            <span>Assignments</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/progress">
            <FaChartLine />
            <span>Progress</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/student/profile">
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>

    </div>
  );
};

export default Sidebar;