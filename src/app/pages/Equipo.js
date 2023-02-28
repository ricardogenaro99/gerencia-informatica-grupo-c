import React from "react";
import { BsGithub, BsGlobe2, BsLinkedin } from "react-icons/bs";
import { CardEquipo } from "../components";
import { PageLayout } from "../layouts";

function Equipo() {
  const equipo = [
    {
      names: "Ricardo Alberto Genaro",
      surnames: "Choquehuanca Palli",
      school: "Ingenieria de Sistemas",
      description:
        "Estudiante de la carrera de Ingenieria de Sistemas en la Universidad Nacional Mayor de San Marcos. Con experiencia en el rubro de desarrollo de software, conocimiento en el manejo de bases de datos tanto relacionales como no relacionales y Soporte de TI. Actualmente trabajando en Chazki como lider del equipo de Soporte de TI y colaborando con distintos equipos tech (Grow, Integraciones, Devops, etc).",
      links: [
        {
          url: "https://ricardo-genaro-portfolio.vercel.app/",
          icon: <BsGlobe2 />,
          color: "btn-success",
          label: "Portafolio",
        },
        {
          url: "https://www.linkedin.com/in/ricardogenaro/",
          icon: <BsLinkedin />,
          color: "btn-primary",
          label: "Linkedin",
        },
        {
          url: "https://github.com/ricardogenaro99",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
      ],
    },
  ];

  return (
    <PageLayout title="Equipo">
      {equipo.map((e, i) => (
        <CardEquipo key={i} {...e} />
      ))}
    </PageLayout>
  );
}

export default Equipo;
