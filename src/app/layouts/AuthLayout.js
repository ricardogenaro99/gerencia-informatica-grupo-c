import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { Input } from "../components";

function AuthLayout({
  title,
  redirectOtherAuth,
  redirectOtherAuthLabel,
  submitCallback,
}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitCallback(form.email, form.password);
    } catch (e) {
      setError(e.code);
    } finally {
      setTimeout(setError, 2000, "");
    }
  };

  return (
    <div className="container">
      <form
        className="d-flex flex-column align-items-center m-auto"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        {error && (
          <div
            className="alert alert-danger alert-dismissible fade show w-100"
            role="alert"
          >
            <strong>Ocurrio un error:</strong> {error}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}

        <img
          className="mb-4 img-fluid rounded-start  object-fit-cover"
          src={logo}
          alt=""
          width="72"
        />
        <h1 className="h3 mb-4 fw-normal">{title}</h1>
        <Input
          type="email"
          label="Correo electrónico"
          className="mb-3"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Contraseña"
          className="mb-4"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="d-flex w-100 gap-3 flex-wrap justify-content-center mb-4">
          <button
            className="btn btn-lg btn-primary flex-fill flex-md-grow-0"
            type="submit"
          >
            {title}
          </button>
        </div>

        <Link className="text-center" to={redirectOtherAuth}>
          {redirectOtherAuthLabel}
        </Link>
      </form>
    </div>
  );
}

export default AuthLayout;
