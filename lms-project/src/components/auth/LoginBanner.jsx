import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const LoginBanner = () => {
  return (
    <div className="login-banner">

      <div className="brand">

        <FaGraduationCap className="logo-icon" />

        <h1>EduLearn</h1>

        <p>Your Gateway to Quality Education</p>

      </div>

      <div className="banner-image">

        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Student"
        /> */}

      </div>

      <div className="quote">

        <p>
          "Education is the most powerful weapon which you can use to change the world."
        </p>

        <h6>— Nelson Mandela</h6>

      </div>

    </div>
  );
};

export default LoginBanner;