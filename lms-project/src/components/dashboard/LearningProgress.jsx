import React from "react";

const LearningProgress = () => {
  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h5 className="mb-3">
          Learning Progress
        </h5>

        <h1 className="text-primary">
          75%
        </h1>

        <div className="progress mb-3">

          <div
            className="progress-bar bg-success"
            style={{
              width: "75%",
            }}
          />

        </div>

        <p className="text-muted">
          Great work! Keep learning to reach 100%.
        </p>

      </div>

    </div>
  );
};

export default LearningProgress;