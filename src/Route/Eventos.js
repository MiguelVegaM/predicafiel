import React from "react";

import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import {
  Alianzas,
  DisclaimerDonar,
  Footer,
  MiniHeader,
  Navbar,
  MiniFooter,
} from "./Inicio";

function Eventos(props) {
  return (
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Fiel | Eventos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <Alianzas />
      {/* <ContactoWhats /> */}
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </motion.div>
  );
}

export default Eventos;
