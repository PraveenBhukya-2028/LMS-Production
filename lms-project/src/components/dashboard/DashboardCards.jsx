import React from "react";
import {
  FaBook,
  FaStickyNote,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
  return (
    <div className="row">
      <DashboardCard
        title="Courses"
        value="12"
        icon={<FaBook />}
        bgColor="primary"
      />

      <DashboardCard
        title="Notes"
        value="25"
        icon={<FaStickyNote />}
        bgColor="success"
      />

      <DashboardCard
        title="Assignments"
        value="8"
        icon={<FaTasks />}
        bgColor="warning"
      />

      <DashboardCard
        title="Progress"
        value="75%"
        icon={<FaChartLine />}
        bgColor="info"
      />
    </div>
  );
};

export default DashboardCards;