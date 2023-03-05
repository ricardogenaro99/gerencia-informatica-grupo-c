import React, { useMemo } from "react";

function CardEquipo({ img, names, surnames, school, description, links }) {
  const fullName = useMemo(() => `${names}, ${surnames}`, [names, surnames]);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-lg-2">
          <img
            src={img || "https://via.placeholder.com/400?text=Sin+Imagen"}
            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            alt="img"
          />
        </div>
        <div className="col-lg-10">
          <div className="card-body">
            <h4 className="card-title">{fullName}</h4>
            <p className="card-text">
              <small className="text-muted">{school}</small>
            </p>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-body d-flex flex-wrap gap-2">
            {links.map((e, i) => (
              <a
                key={i}
                href={e.url}
                className={`card-link btn d-flex align-items-center gap-1 ${e.color} m-0 flex-fill flex-md-grow-0`}
                target="_blank"
                rel="noreferrer"
              >
                {e.icon} {e.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEquipo;
