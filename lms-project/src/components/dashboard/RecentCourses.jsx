import React from "react";

const RecentCourses = () => {
  const courses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      instructor: "John Smith",
      progress: 80,
    },
    {
      id: 2,
      title: "Node.js & Express",
      instructor: "David Wilson",
      progress: 45,
    },
    {
      id: 3,
      title: "MySQL Database",
      instructor: "Sarah Johnson",
      progress: 60,
    },
  ];

  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <h5 className="mb-3">
          Recent Courses
        </h5>

        {courses.map((course) => (
          <div
            key={course.id}
            className="mb-3"
          >
            <div className="d-flex justify-content-between">

              <strong>{course.title}</strong>

              <span>{course.progress}%</span>

            </div>

            <small className="text-muted">
              {course.instructor}
            </small>

            <div className="progress mt-2">

              <div
                className="progress-bar"
                style={{
                  width: `${course.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentCourses;