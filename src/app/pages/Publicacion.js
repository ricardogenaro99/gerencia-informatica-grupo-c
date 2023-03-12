import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../components";
import { getPublicationById } from "../services/firebase";
import { parseHtmlToReact } from "../utils/generalFunctions";

const Container = styled.div`
max-width: 750px; 
margin: 0 auto;
`

const ContentPublication = styled.div`
  * {
    font-size: inherit !important;
    font-family: inherit !important;
    text-align: justify !important;
  }

  img {
    width: 100% !important;
    object-fit: cover !important;
  }
`;

function Publicacion() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPublicationById(id);
        setContent(parseHtmlToReact(res?.content));
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
    <Container>
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
      {data?.urlResource && (
        <a href={data?.urlResource} target="_blank" rel="noreferrer">
          Descargar recurso
        </a>
      )}
      {content ? (
        <ContentPublication
          className="mt-4 content-publication"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      ) : (
        <div className="mt-4 content-publication">{data?.description}</div>
      )}
    </Container>
  );
}

export default Publicacion;
