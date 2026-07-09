import React from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { FaClock, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Img
        variant="top"
        src={course.thumbnail}
        style={{
          height: "180px",
          objectFit: "cover",
        }}
      />

      <Card.Body>
        <Card.Title className="fw-bold">{course.title}</Card.Title>

        <Card.Text className="text-muted">{course.description}</Card.Text>

        <div className="d-flex justify-content-between mb-2">
          <small>
            <FaUserGraduate /> {course.instructor}
          </small>

          <small>
            <FaClock /> {course.duration}
          </small>
        </div>

        <ProgressBar
          now={course.progress}
          label={`${course.progress}%`}
          className="mb-3"
        />

        <Button
          variant="primary"
          className="w-100"
          onClick={() => navigate(`/student/course/${course.id}`)}
        >
          Continue Learning
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
