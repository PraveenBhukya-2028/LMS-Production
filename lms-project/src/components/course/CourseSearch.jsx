import React from "react";
import { Form } from "react-bootstrap";

const CourseSearch = ({ search, setSearch }) => {
  return (
    <Form.Control
      type="text"
      placeholder="Search Courses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="mb-4"
    />
  );
};

export default CourseSearch;