import React from "react";
import { logo_bg_red } from "../../assets";
import { PageLayout } from "../layouts";

function Home() {
  return (
    <div className="d-grid gap-5">
      <PageLayout
        title="Universidad Nacional Mayor de San Marcos"
        classNameContent="row"
      >
        <div className="col-lg-4">
          <img
            src={logo_bg_red}
            className="img-fluid rounded-start w-100 object-fit-cover"
            alt="img"
          />
        </div>
        <div className="col-lg-8">
          <p>
            La Universidad Nacional Mayor de San Marcos, también conocida como
            "la Decana de América", es la universidad más antigua de América y
            fue fundada en Lima, Perú en 1551 por el Rey Carlos I de España. La
            universidad fue establecida como una institución religiosa, pero
            pronto se convirtió en una institución secular y comenzó a ofrecer
            una amplia variedad de programas académicos.
          </p>
          <p>
            Durante su larga historia, la Universidad Nacional Mayor de San
            Marcos ha sido un centro de excelencia académica y ha producido una
            gran cantidad de líderes y pensadores influyentes en una variedad de
            campos. La universidad también ha sido un importante centro de
            activismo político y ha desempeñado un papel fundamental en muchos
            de los movimientos sociales y políticos más importantes de la
            historia de Perú.
          </p>
          <p>
            A lo largo de los siglos, la universidad ha sufrido varios cambios y
            ha pasado por muchos desafíos. Durante la época colonial, la
            universidad se enfocó en la enseñanza de la teología y la filosofía.
            En el siglo XIX, la universidad experimentó un resurgimiento y
            comenzó a ofrecer programas en ciencias, literatura y leyes.
          </p>
          <p>
            En el siglo XX, la universidad se enfrentó a una serie de desafíos,
            incluyendo la expansión de la educación superior en Perú y la
            creciente competencia de otras universidades. A pesar de estos
            desafíos, la Universidad Nacional Mayor de San Marcos se ha
            mantenido como una de las instituciones académicas más importantes
            de Perú y ha seguido siendo una fuente de orgullo nacional.
          </p>
        </div>
      </PageLayout>
      <PageLayout title="Gerencia Informática" classNameContent="row">
        <div className="col-lg-8">
          <p>
            La gerencia informática es el área de gestión empresarial que se
            enfoca en la planificación, organización, dirección y control de los
            recursos informáticos para maximizar la eficiencia y efectividad del
            uso de la tecnología de la información y comunicación en la empresa.
            Esto incluye la gestión de proyectos, la adquisición y mantenimiento
            de hardware, software y sistemas de información, la seguridad
            informática, la protección de información confidencial, la gestión
            de un equipo de profesionales de tecnología de la información y la
            integración de la tecnología en la estrategia empresarial.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src={
              "https://ippfm.files.wordpress.com/2016/05/especializacion-en-gerencia-informatica.jpg"
            }
            className="img-fluid rounded-start w-100 object-fit-cover"
            alt="img"
          />
        </div>
      </PageLayout>
    </div>
  );
}

export default Home;
