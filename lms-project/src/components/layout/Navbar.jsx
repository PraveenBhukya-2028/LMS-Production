import React from "react";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between"
    >

      <h4>Dashboard</h4>

      <div>

        Welcome,

        <strong>
          {" "}
          {user?.full_name}
        </strong>

      </div>

    </div>
  );
};

export default Navbar;