import React from "react";
import LessonItem from "./LessonItem";

const CourseCurriculum = ({ lessons }) => {
  return (
    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h4 className="mb-4">
          Course Curriculum
        </h4>

        {lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
          />
        ))}

      </div>

    </div>
  );
};

export default CourseCurriculum;