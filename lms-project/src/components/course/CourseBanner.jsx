import React from "react";
import { Button } from "react-bootstrap";

const CourseBanner = ({
  course,
  onContinueLearning,
}) => {
  return (
    <div
      className="card border-0 shadow-sm mb-4"
      style={{
        background:
          "linear-gradient(90deg,#2563eb,#4f46e5)",
        color: "#fff",
      }}
    >
      <div className="card-body p-5">

        <h2 className="fw-bold">
          {course.title}
        </h2>

        <p className="mt-3">
          {course.description}
        </p>

        <div className="d-flex gap-4 mt-4">

          <span>
            👨‍🏫 {course.instructor}
          </span>

          <span>
            ⏰ {course.duration}
          </span>

          <span>
            ⭐ {course.level}
          </span>

        </div>

        <Button
          className="mt-4"
          variant="light"
          onClick={onContinueLearning}
        >
          Continue Learning
        </Button>

      </div>
    </div>
  );
};

export default CourseBanner;