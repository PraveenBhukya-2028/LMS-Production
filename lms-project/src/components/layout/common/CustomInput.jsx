import React from "react";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  icon,
  error,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">
        {label}
      </label>

      <div className="input-group">

        <span className="input-group-text bg-white">
          {icon}
        </span>

        <input
          type={type}
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />

      </div>

      {error && (
        <div className="text-danger mt-1 small">
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomInput;