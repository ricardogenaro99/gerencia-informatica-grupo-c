import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input, InputFile, RichText } from "../components";
import { useGlobal } from "../contexts/GlobalContext";
import { PageLayout } from "../layouts";
import {
  getPublicationById,
  updatePublication,
  uploadFile,
} from "../services/firebase";
import NotFound from "./NotFound";

function PublicacionEdit() {
  const { id } = useParams();
  const { setLoading } = useGlobal();
  const [form, setForm] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState("");
  const [errorPage, setErrorPage] = useState(false);
  const [content, setContent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getPublicationById(id);
        if (Object.keys(res).length === 0)
          throw Error("Publicación no encontrada.");
        // setContent(parseHtmlToReact(res?.content));
        setContent(res?.content);
        setForm(res);
      } catch (error) {
        setErrorPage(true);
      } finally {
        setLoading(false);
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleChange({ target: { name: "resourceName", value: file?.name || "" } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const urlResource = file ? await uploadFile(file) : form.urlResource;
      const payload = { ...form, urlResource, deleted: false };
      await updatePublication(id, payload);
      navigate("/publicaciones");
    } catch (e) {
      setError(e.message);
      console.error(e);
    } finally {
      setLoading(false);
      setTimeout(setError, 2000, "");
    }
  };

  const validateForm = useMemo(() => {
    if (!form) return;
    const tmp = { ...form };
    delete tmp.deleted;
    const res = Object.values(tmp)
      .map((e) => (e === "<p></p>\n" ? "" : e))
      .filter((e) => !Boolean(e));
    return res.length !== 0;
  }, [form]);

  if (errorPage) {
    return <NotFound />;
  }

  return (
    <PageLayout title="Editar Publicación">
      {form && (
        <form onSubmit={handleSubmit} className="row g-3">
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
              initialValueEdit={content}
            />
          </div>
          <div className="col-12 d-flex gap-2">
            <Link className="btn btn-secondary" to="/publicaciones">
              Cancelar
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={validateForm}
            >
              Guardar
            </button>
          </div>
        </form>
      )}
    </PageLayout>
  );
}

export default PublicacionEdit;
