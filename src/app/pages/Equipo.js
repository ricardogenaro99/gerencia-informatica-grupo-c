import React from "react";
import { BsGithub, BsGlobe2, BsLinkedin } from "react-icons/bs";
import { CardEquipo } from "../components";

function Equipo() {
  const equipo = [
    {
      names: "Ricardo Alberto Genaro",
      surnames: "Choquehuanca Palli",
      school: "Ingenieria de Sistemas",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ullam nulla quis. Ipsum totam inventore corrupti voluptatem, excepturi delectus dolore ipsa tempore aliquid nihil, facere eos nesciunt eaque earum et! Ut omnis numquam nobis nihil veritatis nesciunt itaque ipsum et ipsa aut? Accusantium illum ipsum repudiandae incidunt vitae cupiditate quasi dicta perspiciatis magni? Pariatur quisquam atque quam sequi aliquam. Explicabo voluptas eum tenetur expedita sequi quo provident laudantium cum, laborum voluptatibus fugit ad veniam ex molestiae inventore quisquam aliquam. Molestias corporis nihil, ullam, ad quam iure quidem unde veritatis commodi totam eaque tempore praesentium quae aliquam, iusto fugit ipsa deserunt delectus iste! Quam natus quia ducimus.",
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
    <div>
      {equipo.map((e, i) => (
        <CardEquipo key={i} {...e} />
      ))}
    </div>
  );
}

export default Equipo;
