import React, { useEffect, useState } from "react";
import {
  CardPublicacion,
  Loader,
  ModalAgregarPublicacion
} from "../components";
import { useGlobal } from "../contexts/GlobalContext";
import { PageLayout } from "../layouts";
import { getPublications } from "../services/firebase";

function Publicaciones() {
  const { user } = useGlobal();
  const [publications, setPublications] = useState();

  const load = async () => {
    try {
      const res = await getPublications();
      setPublications(res.filter((e) => !e.deleted));
    } catch (error) {
      setPublications(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const renderContent = () => {
    if (publications === undefined) return <Loader />;
    if (publications === null)
      return (
        <div className="alert alert-danger" role="alert">
          Ocurrio un error al cargar los servicios
        </div>
      );
    if (publications.length === 0)
      return (
        <div className="alert alert-secondary" role="alert">
          No hay publicaciones
        </div>
      );
    return publications.map((e, i) => <CardPublicacion key={i} {...e} />);
  };

  return (
    <PageLayout
      title="Publicaciones"
      classNameContent="row"
      controllers={
        user ? (
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#modalAgregarPublicacion"
            data-bs-whatever="@mdo"
          >
            Agregar Publicación
          </button>
        ) : null
      }
    >
      {user && <ModalAgregarPublicacion reload={load} />}
      {renderContent()}
    </PageLayout>
  );
}

export default Publicaciones;
