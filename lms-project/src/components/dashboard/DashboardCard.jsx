import React from "react";

const DashboardCard = ({
  title,
  value,
  icon,
  bgColor = "primary",
}) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className={`card border-0 shadow-sm bg-${bgColor} text-white`}>
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center">

            <div>
              <h6>{title}</h6>

              <h3 className="fw-bold">
                {value}
              </h3>
            </div>

            <div style={{ fontSize: "40px" }}>
              {icon}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardCard;