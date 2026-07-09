import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  error,
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-3">

      <label className="form-label fw-semibold">
        {label}
      </label>

      <div className="input-group">

        <span className="input-group-text bg-white">
          <FaLock />
        </span>

        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

      </div>

      {error && (
        <div className="text-danger mt-1 small">
          {error}
        </div>
      )}

    </div>
  );
};

export default PasswordInput;