import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

import CustomInput from "../layout/common/CustomInput";
import PasswordInput from "../layout/common/PasswordInput";
import CustomButton from "../layout/common/CustomButton";

import authService from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberEmail");

    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: rememberedEmail,
        rememberMe: true,
      }));
    }
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await authService.login({
        email: formData.email,
        password: formData.password,
      });

      if (response.success) {
        // Save JWT
        localStorage.setItem("token", response.data.token);

        // Save User
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        // Remember Email
        if (formData.rememberMe) {
          localStorage.setItem(
            "rememberEmail",
            formData.email
          );
        } else {
          localStorage.removeItem("rememberEmail");
        }

        navigate("/student/dashboard");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="fw-bold mb-2">
        Welcome Back 👋
      </h2>

      <p className="text-muted mb-4">
        Login to continue to EduLearn
      </p>

      <Form onSubmit={handleLogin}>
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          icon={<FaEnvelope />}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />

          <Link
            to="/forgot-password"
            className="text-decoration-none"
          >
            Forgot Password?
          </Link>
        </div>

        <CustomButton
          type="submit"
          text="Login"
          loading={loading}
        />

        <div className="text-center mt-4">
          <span className="text-muted">
            Don't have an account?{" "}
          </span>

          <Link
            to="/register"
            className="fw-bold text-decoration-none"
          >
            Sign Up
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;