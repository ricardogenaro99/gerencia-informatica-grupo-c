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
        "Soy un estudiante de ingeniería de sistemas de la Universidad Nacional Mayor de San Marcos. Estoy interesado en aplicar la tecnología para resolver problemas empresariales y sociales. Me especializo en programación, gestión de bases de datos, redes de computadoras, inteligencia artificial y seguridad informática.",
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
        "Soy un estudiante de ingeniería de sistemas de la Universidad Nacional Mayor de San Marcos. Estoy interesado en aplicar la tecnología para resolver problemas empresariales y sociales. Me especializo en programación, gestión de bases de datos, redes de computadoras, inteligencia artificial y seguridad informática.",
      links: [
        {
          url: "https://github.com/Antony13558",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
        {
          url: "https://www.linkedin.com/in/max-niquen-velasquez-7a9086229/",
          icon: <BsLinkedin />,
          color: "btn-primary",
          label: "Linkedin",
        },
      ],
    },
    {
      names: "Jorge Eugenio",
      surnames: "Rubina Saldaña",
      school: "Ingenieria de Sistemas",
      description:
        "Analista Programador formado en UNMSM con experiencia en el desarrollo de aplicativos web y móvil.Analista Programador formado en UNMSM con experiencia en el desarrollo de aplicativos web y móvil.",
      links: [
        {
          url: "https://github.com/EugenioRS95",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
        {
          url: "https://www.linkedin.com/in/jorge-rubina-saldana-aa423b45/",
          icon: <BsLinkedin />,
          color: "btn-primary",
          label: "Linkedin",
        },
      ],
    },
    {
      names: "Uceda Malca",
      surnames: "Argenis David",
      school: "Ingenieria de Sistemas",
      description:
        "Soy un estudiante de ingeniería de sistemas de la Universidad Nacional Mayor de San Marcos. Estoy interesado en aplicar la tecnología para resolver problemas empresariales y sociales. Me especializo en programación, gestión de bases de datos, redes de computadoras, inteligencia artificial y seguridad informática.",
      links: [
        {
          url: "https://github.com/argenis-uceda-malca",
          icon: <BsGithub />,
          color: "btn-dark",
          label: "Github",
        },
        {
          url: "https://www.linkedin.com/in/argenis-uceda-malca-214762218/",
          icon: <BsLinkedin />,
          color: "btn-primary",
          label: "Linkedin",
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
