import React, { useEffect, useMemo, useState } from "react";
import Input from "./Input";
import RichText from "./RichText";

const initForm = {
  content: "<p></p>\n",
  description: "",
  title: "",
  topic: "",
  type: "",
};

function ModalAgregarPublicacion() {
  const [form, setForm] = useState({ ...initForm });

  useEffect(() => {
    const myModalEl = document.getElementById("modalAgregarPublicacion");
    myModalEl?.addEventListener("hidden.bs.modal", (event) => {
      resetForm();
    });
  }, []);

  const resetForm = () => {
    setForm({ ...initForm });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const validateForm = useMemo(() => {
    const res = Object.values(form)
      .map((e) => (e === "<p></p>\n" ? "" : e))
      .filter((e) => !Boolean(e));
    return res.length !== 0;
  }, [form]);

  return (
    <div
      className="modal fade"
      id="modalAgregarPublicacion"
      tabIndex="-1"
      aria-labelledby="modalAgregarPublicacionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalAgregarPublicacionLabel">
              Agregar Publicación
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <Input
                label="Título"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                label="Descripción"
                isTextArea={true}
                name="description"
                value={form.description}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                label="Topico"
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className="mb-3"
              />
              <Input
                label="Tipo"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mb-3"
              />
              <RichText
                name="content"
                onChange={handleChange}
                initialValue={form.content}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              disabled={validateForm}
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAgregarPublicacion;
