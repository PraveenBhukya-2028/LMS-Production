import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberEmail");

    navigate("/login");
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center">

        <div>
          <h2>Welcome {user?.full_name} 👋</h2>
          <p className="text-muted">
            Login Successful
          </p>
        </div>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <hr />

      <div className="row mt-4">

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>📚 My Courses</h5>
              <p>0 Courses Enrolled</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>📝 Notes</h5>
              <p>0 Notes Created</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>📈 Progress</h5>
              <p>0% Completed</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;