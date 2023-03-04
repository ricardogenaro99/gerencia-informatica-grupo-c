import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components";
import { getPublicationById } from "../services/firebase";

function Publicacion() {
  const { id } = useParams();

  // // const [textDocument, setTextDocument] = useState("");
  const [data, setData] = useState();

  // // const readDocument = async (document) => {
  // //   const response = await fetch(document);
  // //   const text = await response.text();
  // //   return text;
  // // };

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPublicationById(id);
        setData(res);
        // // await getStorageByName(res.urlDocument)
        // // const text = await readDocument(res.urlDocument);
        // // console.log(text);
        // // setTextDocument(text);
      } catch (error) {}
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data === undefined) return <Loader />;
  if (data === null)
    return (
      <div class="alert alert-danger" role="alert">
        Ocurrio un error al cargar los servicios
      </div>
    );

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <Link to="/publicaciones">Publicaciones</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
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
