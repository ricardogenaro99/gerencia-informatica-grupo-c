import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { savePublication, uploadFile } from "../../services/firebase";
import Input from "../Input";
import InputFile from "../InputFile";
import RichText from "../RichText";

const initForm = {
  content: "<p></p>\n",
  description: "",
  title: "",
  topic: "",
  type: "",
  resourceName: "",
};

function ModalAgregarPublicacion({ reload }) {
  const { setLoading } = useGlobal();
  const [form, setForm] = useState({ ...initForm });
  const [file, setFile] = useState();
  const [error, setError] = useState("");

  const closeRef = useRef();

  useEffect(() => {
    const myModalEl = document.getElementById("modalAgregarPublicacion");
    myModalEl?.addEventListener("hidden.bs.modal", (event) => {
      resetStates();
    });
  }, []);

  useEffect(() => {
    handleChange({ target: { name: "resourceName", value: file?.name || "" } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const resetStates = () => {
    setForm({ ...initForm });
    setFile();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const urlResource = await uploadFile(file);
      const payload = { ...form, urlResource, deleted: false };
      await savePublication(payload);
      await reload();
      closeRef.current.click();
    } catch (e) {
      setError(e.message);
      console.error(e);
    } finally {
      setLoading(false);
      setTimeout(setError, 2000, "");
    }
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
      <div className="modal-dialog" style={{ maxWidth: "1000px" }}>
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
              <InputFile
                label="Suba el recurso de la publicación"
                onChange={setFile}
                initialValue={form.resourceName}
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
              ref={closeRef}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
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
