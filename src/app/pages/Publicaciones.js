import React, { useEffect, useState } from "react";
import { CardPublicacion, Loader } from "../components";
import { PageLayout } from "../layouts";
import { getPublications } from "../services/firebase";

function Publicaciones() {
  const [publications, setPublications] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPublications();
        setPublications(res);
      } catch (error) {
        setPublications(null);
      }
    };

    load();
  }, []);

  const renderContent = () => {
    if (publications === undefined) return <Loader />;
    if (publications === null)
      return (
        <div class="alert alert-danger" role="alert">
          Ocurrio un error al cargar los servicios
        </div>
      );
    if (publications.length === 0)
      return (
        <div class="alert alert-secondary" role="alert">
          No hay publicaciones
        </div>
      );
    return publications.map((e, i) => <CardPublicacion key={i} {...e} />);
  };

  return (
    <PageLayout title="Publicaciones" classNameContent="row">
      {renderContent()}
    </PageLayout>
  );
}

export default Publicaciones;
