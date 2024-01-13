import React from "react";

import "../styles/Recursos/Filtros.css";

import { recursosObj } from "./Recursos";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MiniHeader, Navbar } from "./Inicio";
import { motion } from "framer-motion";

export function VideoFiltro() {
  let { videoId } = useParams();
  console.log(videoId);

  let recursoSeleccionado = recursosObj.find(
    (recurso) => recurso.id === videoId
  );

  // console.log(recursoSeleccionado);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="video-filtro__main">
      <div className="barra-direccion">
        <NavLink to="/" className="barra-direccion__link">
          Inicio
        </NavLink>{" "}
        /{" "}
        <NavLink to="/recursos" className="barra-direccion__link">
          Videos
        </NavLink>{" "}
        / {recursoSeleccionado.title}
      </div>
      <div className="video-filtro__container">
        <div className="video-frame">
          <div
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
              width: "100%",
              height: "0",
              margin: "0 auto",
            }}
          >
            <iframe
              src={recursoSeleccionado.url}
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                // margin: "0 auto",
                height: "100%",
              }}
              title={recursoSeleccionado.title}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div className="video-info">
          <div className="video-info__title">
            <div className="video-filtro__title">
              <h3>{recursoSeleccionado.title}</h3>
              <p>{recursoSeleccionado.fuente}</p>
            </div>
            <div className="video-filtro__length">
              {recursoSeleccionado.length} Min
            </div>
          </div>
          <hr className="video-filtro__hr" />
          <div className="video-info__subtitle">
            <div className="video-filtro__genero">
              <span className="bold">Género/Tema:</span>{" "}
              {recursoSeleccionado.genero}
            </div>
            <div className="video-filtro__fecha">
              <span className="bold">Fecha: </span>
              {recursoSeleccionado.fecha}
            </div>
          </div>
        </div>
        <div className="video-filtro__footer">
          <img
            className="recursos__footer-logo"
            src="/images/recursos/logo-gris-inferior.png"
            alt="Logo Predica Fiel"
          />

          <div className=" recursos__footer-btn">
            <button onClick={goBack}>Regresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginaVideo() {
  return (
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <MiniHeader />
      <Navbar />
      <VideoFiltro />
    </motion.div>
  );
}

export default PaginaVideo;
