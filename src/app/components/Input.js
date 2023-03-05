import React, { useEffect, useId, useState } from "react";
import { useLocation } from "react-router-dom";

function Input({
  className,
  type = "text",
  label,
  name,
  value,
  onChange,
  isTextArea = false,
}) {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setCount((c) => c + 1);
  }, [value]);

  const id = useId();

  const generateClassName = () => {
    if (!location.pathname.includes("auth")) return "form-control";
    let validate = "";
    try {
      value.trim();
      if (!value) validate = "is-invalid";
    } catch (error) {
      validate = "is-invalid";
    }
    return `form-control ${count <= 1 ? "" : validate}`;
  };

  return (
    <div className={`form-floating w-100 ${className}`}>
      {isTextArea ? (
        <textarea
          type={type}
          className={generateClassName()}
          id={id}
          placeholder="placeholder"
          name={name}
          value={value}
          onChange={onChange}
          style={{ height: "100px" }}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          className={generateClassName()}
          id={id}
          placeholder="placeholder"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      )}

      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Input;
