import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="row">

      {courses.map((course) => (

        <div
          className="col-lg-4 col-md-6 mb-4"
          key={course.id}
        >

          <CourseCard
            course={course}
          />

        </div>

      ))}

    </div>
  );
};

export default CourseList;