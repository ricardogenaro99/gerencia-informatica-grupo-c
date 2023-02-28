import React from "react";
import { Link } from "react-router-dom";

function CardPublicacion({ id, type, title, description, topic }) {
  return (
    <div className="col-lg-4 px-2 py-3">
      <div className="card">
        <div className="card-header text-center">{type}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={id} className="btn btn-primary">
            Seguir leyendo
          </Link>
        </div>
        <div className="card-footer text-muted text-center">{topic}</div>
      </div>
    </div>
  );
}

export default CardPublicacion;
