import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white container-fluid row text-center bg-black m-0 py-4">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-3">
          <h5>Enlaces internos</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-light">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/equipo" className="nav-link p-0 text-light">
                Equipo
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/publicaciones" className="nav-link p-0 text-light">
                Publicaciones
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-6 col-lg-4 mb-3">
          <h5>Enlaces externos</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="https://www.unmsm.edu.pe/"
                className="nav-link p-0 text-light"
                target="_blank"
                rel="noreferrer"
              >
                Universidad Nacional Mayor de San Marcos
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://sistemas.unmsm.edu.pe/site/index.php"
                className="nav-link p-0 text-light"
                target="_blank"
                rel="noreferrer"
              >
                Facultad de Ingeniería de Sistemas e Informática
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://sistemas.unmsm.edu.pe/site/pregrado/ingenieria-de-sistemas"
                className="nav-link p-0 text-light"
                target="_blank"
                rel="noreferrer"
              >
                Ingeniería de Sistemas
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="https://sistemas.unmsm.edu.pe/site/pregrado/ingenieria-de-software"
                className="nav-link p-0 text-light"
                target="_blank"
                rel="noreferrer"
              >
                Ingeniería de Software
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 offset-lg-1 mb-3">
          <h5>Envianos tus comentarios</h5>
          <form className="form-floating text-black">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control h-auto"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                rows={4}
              ></textarea>
              <label htmlFor="floatingTextarea">Comentario</label>
            </div>
            <button className="btn btn-primary w-100" type="button">
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 UNMSM - Grupo C. Todos los derechos reservados.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="link"
              href="https://twitter.com/UNMSM_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link"
              href="https://www.instagram.com/unmsm_/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link"
              href="https://www.facebook.com/1551UNMSM"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
