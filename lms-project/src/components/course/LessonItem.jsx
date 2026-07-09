import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const LessonItem = ({ lesson }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center border rounded p-3 mb-3"
    >

      <div>

        <FaPlayCircle className="text-primary me-2" />

        {lesson.title}

      </div>

      <span className="text-muted">
        {lesson.duration}
      </span>

    </div>
  );
};

export default LessonItem;