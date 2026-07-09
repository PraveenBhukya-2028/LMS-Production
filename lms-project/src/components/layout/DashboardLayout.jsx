import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../../assets/styles/sidebar.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        <Navbar />

        <div className="p-4">

          {children}

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;