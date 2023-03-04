import React from "react";
import { BsGithub, BsGlobe2, BsLinkedin } from "react-icons/bs";
import { foto_genaro } from "../../assets";
import { CardEquipo } from "../components";
import { PageLayout } from "../layouts";

function Equipo() {
  const equipo = [
    {
      names: "Joseph Joey",
      surnames: "Bellido Suica",
      school: "Ingenieria de Sistemas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      links: [
        {
          url: "https://github.com/JosephJBS",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
      ],
    },
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
      img: foto_genaro,
    },
    {
      names: "Max Antony",
      surnames: "Ñiquen Velasquez",
      school: "Ingenieria de Sistemas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      links: [
        {
          url: "https://github.com/Antony13558",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
      ],
    },
    {
      names: "Jorge Eugenio",
      surnames: "Rubina Saldaña",
      school: "Ingenieria de Sistemas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      links: [],
    },
    {
      names: "Uceda Malca",
      surnames: "Argenis David",
      school: "Ingenieria de Sistemas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      links: [
        {
          url: "https://github.com/argenis-uceda-malca",
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
