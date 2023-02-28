import React from "react";
import { CardPublicacion } from "../components";
import { PageLayout } from "../layouts";

function Publicaciones() {
  const publicaciones = [
    {
      id: "1",
      type: "Tarea",
      title: "ITIL 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, in maiores corporis commodi, exercitationem natus tenetur nihil alias veritatis expedita autem? Ad deserunt maxime animi quasi aspernatur, hic commodi amet.",
      topic: "Semana 1",
    },
    {
      id: "2",
      type: "Tarea",
      title: "ITIL 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, in maiores corporis commodi, exercitationem natus tenetur nihil alias veritatis expedita autem? Ad deserunt maxime animi quasi aspernatur, hic commodi amet.",
      topic: "Semana 1",
    },
    {
      id: "3",
      type: "Tarea",
      title: "ITIL 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, in maiores corporis commodi, exercitationem natus tenetur nihil alias veritatis expedita autem? Ad deserunt maxime animi quasi aspernatur, hic commodi amet.",
      topic: "Semana 1",
    },
  ];
  return (
    <PageLayout title="Publicaciones" classNameContent="row">
      {publicaciones.map((e, i) => (
        <CardPublicacion key={i} {...e} />
      ))}
    </PageLayout>
  );
}

export default Publicaciones;
