import React from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import CourseBanner from "../../components/course/CourseBanner";
import CourseCurriculum from "../../components/course/CourseCurriculum";

const CourseDetails = () => {

  const navigate = useNavigate();

  const course = {
    id: 1,
    title: "React.js Fundamentals",
    description:
      "Master React from beginner to advanced with real-world projects.",
    instructor: "John Smith",
    duration: "12 Hours",
    level: "Intermediate",
  };

  const lessons = [
    { id: 1, title: "Introduction", duration: "10 min" },
    { id: 2, title: "Components", duration: "18 min" },
    { id: 3, title: "Props", duration: "22 min" },
    { id: 4, title: "State", duration: "30 min" },
    { id: 5, title: "Hooks", duration: "40 min" },
    { id: 6, title: "Routing", duration: "25 min" },
    { id: 7, title: "Redux", duration: "35 min" },
  ];

  const handleContinueLearning = () => {
    navigate(`/student/course/${course.id}/learn`);
  };

  return (
    <DashboardLayout>

      <CourseBanner
        course={course}
        onContinueLearning={handleContinueLearning}
      />

      <CourseCurriculum
        lessons={lessons}
      />

    </DashboardLayout>
  );
};

export default CourseDetails;