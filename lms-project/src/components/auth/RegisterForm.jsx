import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";

import CustomInput from "../layout/common/CustomInput";
import PasswordInput from "../layout/common/PasswordInput";
import CustomButton from "../layout/common/CustomButton";
import authService from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "student",
    terms: false,
  });

  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name.trim())
      newErrors.full_name = "Full Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile Number is required";

    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid mobile number";

    if (!formData.password)
      newErrors.password = "Password is required";

    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.terms)
      newErrors.terms = "Please accept Terms & Conditions";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
        full_name: formData.full_name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
        role: formData.role,
      };

      const response = await authService.register(payload);

      alert(response.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="fw-bold mb-2">Create Account</h2>

      <p className="text-muted mb-4">
        Register to continue to EduLearn
      </p>

      <Form onSubmit={handleRegister}>

        <CustomInput
          label="Full Name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Enter Full Name"
          icon={<FaUser />}
          error={errors.full_name}
        />

        <CustomInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          icon={<FaEnvelope />}
          error={errors.email}
        />

        <CustomInput
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
          icon={<FaPhone />}
          error={errors.mobile}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          error={errors.password}
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
        />

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>

          <Form.Select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Admin</option>
          </Form.Select>
        </Form.Group>

        <Form.Check
          type="checkbox"
          className="mb-2"
          label="I agree to the Terms & Conditions"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        {errors.terms && (
          <div className="text-danger mb-3">
            {errors.terms}
          </div>
        )}

        <CustomButton
          type="submit"
          text="Create Account"
          loading={loading}
        />

        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </div>

      </Form>
    </>
  );
};

export default RegisterForm;