import React from "react";
import "./Button.css";

import { motion } from "framer-motion";

function Button({ children, specificClass }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className=""
      style={{ display: "block", width: "max-content" }}
    >
      <button
        type="button"
        className={`button-component ${
          specificClass === undefined ? "" : specificClass
        }`}
      >
        {children}
      </button>
    </motion.div>
  );
}

export default Button;
