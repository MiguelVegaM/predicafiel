import React from "react";
import Inicio from "./Route/Inicio";
import Nosotros from "./Route/Nosotros";
import Entrenamientos from "./Route/Entrenamientos";
import Eventos from "./Route/Eventos";
import Recursos from "./Route/Recursos";
import PaginaVideo from "./Route/VideoFiltro";
import PaginaAudio from "./Route/AudioFiltro";
import ScrollToTop from "./Components/ScrollToTop";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="entrenamientos" element={<Entrenamientos />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="recursos/video/:videoId" element={<PaginaVideo />} />
          <Route path="recursos/audio/:audioId" element={<PaginaAudio />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default App;
