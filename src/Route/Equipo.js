import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Equipo(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Equipo</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Equipo</h1>
      <MiniFooter />
    </div>
  );
}

export default Equipo;
