import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components";
import { getPublicationById } from "../services/firebase";

function Publicacion() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPublicationById(id);
        setData(res);
      } catch (error) {}
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === undefined) return <Loader />;
  if (data === null)
    return (
      <div className="alert alert-danger" role="alert">
        Ocurrio un error al cargar los servicios
      </div>
    );

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            <Link to="/publicaciones">Publicaciones</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {data?.title}
          </li>
        </ol>
      </nav>
      <div className="d-flex gap-1 mb-4">
        <span className="badge text-bg-primary">{data?.topic}</span>
        <span className="badge text-bg-success">{data?.type}</span>
      </div>
      <h3>{data?.title}</h3>
      {data?.urlDocument && (
        <a href={data?.urlDocument} target="_blank" rel="noreferrer">
          Descargar recurso
        </a>
      )}
      <div className="mt-4">{data?.description}</div>
    </div>
  );
}

export default Publicacion;
