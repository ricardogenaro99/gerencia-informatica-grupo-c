import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  CardPublicacion,
  Loader,
  ModalAgregarPublicacion,
} from "../components";
import { useGlobal } from "../contexts/GlobalContext";
import { PageLayout } from "../layouts";
import {
  deletePublication,
  getPublications,
  showHidePublication,
} from "../services/firebase";

function Publicaciones() {
  const { user, setLoading } = useGlobal();
  const [publications, setPublications] = useState();

  const load = useCallback(async () => {
    try {
      const res = await getPublications();
      setPublications(user ? res : res.filter((e) => !e.deleted));
    } catch (error) {
      setPublications(null);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  const handleClickDelete = async (data) => {
    try {
      const resultDialog = await Swal.fire({
        title: "¿Seguro que quieres eliminar esta publicación?",
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#dc3545",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      });

      if (resultDialog.isDismissed) return;
      if (!resultDialog.isConfirmed) return;

      try {
        setLoading(true);
        await deletePublication(data.id);
        await load();
        Swal.fire({
          title: "Publicación eliminada",
          icon: "info",
        });
      } catch (error) {
        Swal.fire({
          title: error.message,
          confirmButtonColor: "#0d6efd",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    } catch (error) {}
  };

  const handleClickShowHide = async (data) => {
    try {
      setLoading(true);
      const tmp = { ...data };
      delete tmp.id;
      await showHidePublication(data.id, tmp);
      await load();
      Swal.fire({
        title: !tmp.deleted ? "Publicación ocultada" : "Publicación publicada",
        icon: "info",
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

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
    return publications.map((e, i) => (
      <CardPublicacion
        key={i}
        {...e}
        clickDelete={() => handleClickDelete(e)}
        clickShowHide={() => handleClickShowHide(e)}
      />
    ));
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
