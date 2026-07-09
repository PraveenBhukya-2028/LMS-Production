import React, { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import CourseSearch from "../../components/course/CourseSearch";
import CourseList from "../../components/course/CourseList";

import courseService from "../../services/courseService";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Courses
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const response = await courseService.getAllCourses();

      setCourses(response.data);

    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>

      <h2 className="mb-4">
        My Courses
      </h2>

      <CourseSearch
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <div className="text-center mt-5">
          <h5>Loading Courses...</h5>
        </div>
      ) : (
        <CourseList
          courses={filteredCourses}
        />
      )}

    </DashboardLayout>
  );
};

export default Courses;