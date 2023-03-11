import React from "react";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobal } from "../../contexts/GlobalContext";
// BsPencilFill
function CardPublicacion({
  id,
  type,
  title,
  description,
  topic,
  deleted,
  clickDelete,
  clickShowHide,
}) {
  const { user } = useGlobal();

  return (
    <div className={`col-lg-4 px-2 py-3`}>
      <div
        className={`card h-100  ${deleted ? "border-danger text-danger" : ""}`}
      >
        <div className="card-header text-center">{type}</div>
        <div className="card-body d-flex flex-column ">
          <h5 className="card-title">{title}</h5>
          <p
            className="card-text overflow-hidden h-100"
            style={{
              maxHeight: "400px",
              WebkitMaskImage:
                "-webkit-gradient(linear, 100% 70%, 100% 100%, from(rgb(0, 0, 0)), to(rgba(0, 0, 0, 0)))",
            }}
          >
            {description}
          </p>
          <div className="mt-auto w-100 d-flex justify-content-between flex-wrap gap-3">
            <Link
              to={id}
              className="btn btn-primary w-md-100 flex-fill flex-sm-grow-0"
            >
              Seguir leyendo
            </Link>
            {user && (
              <div className="d-flex gap-1 flex-wrap flex-fill flex-sm-grow-0">
                <button
                  className="btn btn-danger flex-fill flex-sm-grow-0"
                  onClick={clickDelete}
                >
                  <BsFillTrashFill />
                </button>
                <button
                  className="btn btn-secondary flex-fill flex-sm-grow-0"
                  onClick={clickShowHide}
                >
                  {deleted ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </button>
                <Link
                  className="btn btn-success flex-fill flex-sm-grow-0"
                  to={`/publicaciones/edit/${id}`}
                >
                  <BsPencilFill />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="card-footer text-muted text-center">{topic}</div>
      </div>
    </div>
  );
}

export default CardPublicacion;
