import React from "react";
import {
  FaBook,
  FaStickyNote,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h2 className="mb-4">
        Student Dashboard
      </h2>

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

      <div className="card shadow-sm mt-4">

        <div className="card-body">

          <h4>
            Welcome to EduLearn 🎓
          </h4>

          <p className="text-muted">
            This is your dashboard.
            Here you'll see courses, notes,
            assignments and learning progress.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;