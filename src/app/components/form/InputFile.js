import React, { useEffect, useId, useRef } from "react";

function InputFile({ onChange, label, initialValue }) {
  const id = useId();
  const ref = useRef();

  useEffect(() => {
    if (initialValue === "") {
      ref.current.value = "";
    }
  }, [initialValue]);

  const handleChange = (e) => {
    onChange(e.target.files[0]);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type="file"
        id={id}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  );
}

export default InputFile;
