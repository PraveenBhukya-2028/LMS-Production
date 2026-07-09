import React from "react";

const DashboardHeader = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";

    return "Good Evening";
  };

  return (

    <div className="mb-4">

      <h2 className="fw-bold">
        {getGreeting()}, {user?.full_name} 👋
      </h2>

      <p className="text-muted">
        Welcome back to EduLearn. Continue your learning journey.
      </p>

    </div>

  );
};

export default DashboardHeader;