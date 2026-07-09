import React from "react";
import {
  FaBook,
  FaStickyNote,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import RecentCourses from "../../components/dashboard/RecentCourses";
import LearningProgress from "../../components/dashboard/LearningProgress";

const Dashboard = () => {
  return (
    <DashboardLayout>

      {/* Header */}
      <DashboardHeader />

      {/* Dashboard Cards */}
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

      {/* Bottom Section */}
      <div className="row mt-4">

        <div className="col-lg-8">
          <RecentCourses />
        </div>

        <div className="col-lg-4">
          <LearningProgress />
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;