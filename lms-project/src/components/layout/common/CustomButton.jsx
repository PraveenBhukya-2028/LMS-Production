import React from "react";

const CustomButton = ({
  text,
  type = "button",
  loading,
}) => {

  return (

    <button
      type={type}
      className="btn btn-primary w-100"
      disabled={loading}
    >

      {loading ? "Please Wait..." : text}

    </button>

  );

};

export default CustomButton;