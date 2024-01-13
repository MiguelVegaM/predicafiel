import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Alianzas(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Alianzas</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Alianzas</h1>
      <MiniFooter />
    </div>
  );
}

export default Alianzas;
