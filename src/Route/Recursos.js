import { Helmet } from "react-helmet";
import {
  Alianzas,
  DisclaimerDonar,
  Footer,
  MiniFooter,
  MiniHeader,
  Navbar,
} from "./Inicio";

import React, { useState } from "react";

// import Pagination from "react-bootstrap/Pagination";

import "../styles/Recursos/Recursos.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export const recursosObj = [
  {
    id: "1",
    tags: [""],
    url: "https://player.vimeo.com/video/523000492?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Aplicaciones",
    fecha: "25-02-2021",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "",
    length: "44:32",
  },

  {
    id: "2",
    tags: [""],
    url: "https://player.vimeo.com/video/521519103?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fecha: "24-02-2021",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "",
    length: "54:20",
  },

  {
    id: "3",
    tags: [""],
    url: "https://player.vimeo.com/video/442830557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 21",
    fecha: "06-02-2020",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "26:38",
  },

  {
    id: "4",
    tags: [""],
    url: "https://player.vimeo.com/video/445249725?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Del Texto al Sermón",
    fecha: "06-02-2020",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "1:13:11",
  },

  {
    id: "5",
    tags: [""],
    url: "https://player.vimeo.com/video/442826558?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fecha: "06-02-2020",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "49:48",
  },

  {
    id: "6",
    tags: [""],
    url: "https://player.vimeo.com/video/442818395?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 14",
    fecha: "05-02-2020",
    fuente: "David Helm",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "26:41",
  },

  {
    id: "7",
    tags: [""],
    url: "https://player.vimeo.com/video/445228715?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fecha: "05-02-2020",
    fuente: "Rubén Rodríguez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "41:08",
  },

  {
    id: "8",
    tags: [""],
    url: "https://player.vimeo.com/video/442800308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fecha: "",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "39:18",
  },

  {
    id: "9",
    tags: [""],
    url: "https://player.vimeo.com/video/442812601?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 3.14-22",
    fecha: "04-02-2020",
    fuente: "Rubén Rodríguez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "30:20",
  },

  {
    id: "10",
    tags: [""],
    url: "https://player.vimeo.com/video/442794221?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fecha: "04-02-2020",
    fuente: "Andy Quesada",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "52:51",
  },

  {
    id: "11",
    tags: [""],
    url: "https://player.vimeo.com/video/442473784?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fecha: "04-02-2020",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocalíptica",
    taller: "taller-apocalipsis",
    length: "56:29",
  },

  {
    id: "12",
    tags: [""],
    url: "https://player.vimeo.com/video/417747652?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fecha: "04-02-2019",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "taller-2-timoteo",
    length: "46:11",
  },

  {
    id: "13",
    tags: [""],
    url: "https://player.vimeo.com/video/417737115?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fecha: "03-02-2019",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "taller-2-timoteo",
    length: "49:04",
  },

  {
    id: "14",
    tags: [""],
    url: "https://player.vimeo.com/video/417726354?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fecha: "03-02-2019",
    fuente: "Alexis Pérez",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "taller-2-timoteo",
    length: "28:55",
  },

  {
    id: "15",
    tags: [""],
    url: "https://player.vimeo.com/video/419933778?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fecha: "06-02-2019",
    fuente: "Collen McFadden",
    libro: "marcos",
    genero: "Evangelios",
    taller: "",
    length: "47:45",
  },

  {
    id: "16",
    tags: [""],
    url: "https://player.vimeo.com/video/419949258?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fecha: "06-02-2019",
    fuente: "Marjorie Meeks",
    libro: "marcos",
    genero: "Evangelios",
    taller: "",
    length: "41:19",
  },

  {
    id: "17",
    tags: [""],
    url: "https://player.vimeo.com/video/417787819?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fecha: "05-02-2019",
    fuente: "Marjorie Meeks",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "50:49",
  },

  {
    id: "18",
    tags: [""],
    url: "https://player.vimeo.com/video/417771886?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fecha: "04-02-2019",
    fuente: "Collen McFadden",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "45:18",
  },

  {
    id: "19",
    tags: [""],
    url: "https://player.vimeo.com/video/417759651?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fecha: "04-02-2019",
    fuente: "Lourdes LLorens",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "36:11",
  },

  {
    id: "20",
    tags: [""],
    url: "https://player.vimeo.com/video/461684057?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Panel de Preguntas y Respuestas",
    fecha: "09-02-2018",
    fuente: "Varios",
    libro: "",
    genero: "",
    taller: "",
    length: "56:46",
  },

  {
    id: "21",
    tags: [""],
    url: "https://player.vimeo.com/video/461596077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La aplicación y la adoración",
    fecha: "09-02-2018",
    fuente: "Robert Kinney",
    libro: "",
    genero: "",
    taller: "",
    length: "52:45",
  },

  {
    id: "22",
    tags: [""],
    url: "https://player.vimeo.com/video/460173805?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 16",
    fecha: "09-02-2018",
    fuente: "Alexis Pérez",
    libro: "salmos",
    genero: "Sabiduría",
    taller: "",
    length: "33:18",
  },

  {
    id: "23",
    tags: [""],
    url: "https://player.vimeo.com/video/460227088?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Adoración Verdadera",
    fecha: "08-02-2018",
    fuente: "Juan Sánchez",
    libro: "lucas",
    genero: "Evangelios",
    taller: "",
    length: "37:44",
  },

  {
    id: "24",
    tags: [""],
    url: "https://player.vimeo.com/video/460192662?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "El proceso de hacer aplicaciones en predicación expositiva",
    fecha: "08-02-2018",
    fuente: "Bryan Chapell",
    libro: "",
    genero: "",
    taller: "",
    length: "44:49",
  },

  {
    id: "25",
    tags: [""],
    url: "https://player.vimeo.com/video/460218906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 2",
    fecha: "07-02-2018",
    fuente: "Juan Sánchez",
    libro: "salmos",
    genero: "Sabiduría",
    taller: "",
    length: "32:14",
  },

  {
    id: "26",
    tags: [""],
    url: "https://player.vimeo.com/video/460235684?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Teología Bíblica de la Adoración",
    fecha: "07-02-2018",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:26:03",
  },

  {
    id: "27",
    tags: [""],
    url: "https://player.vimeo.com/video/464423852?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 4",
    fecha: "18-02-2018",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "",
    length: "1:19:47",
  },

  {
    id: "28",
    tags: [""],
    url: "https://player.vimeo.com/video/464426493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable IV",
    fecha: "",
    fuente: "Ryan Townsend",
    libro: "",
    genero: "",
    taller: "",
    length: "1:33:44",
  },

  {
    id: "29",
    tags: [""],
    url: "https://player.vimeo.com/video/464392395?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva VI",
    fecha: "18-02-2018",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "1:48:13",
  },

  {
    id: "30",
    tags: [""],
    url: "https://player.vimeo.com/video/464344643?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva V",
    fecha: "18-02-2018",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:06:50",
  },

  {
    id: "31",
    tags: [""],
    url: "https://player.vimeo.com/video/464040232?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable III",
    fecha: "18-02-2018",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:42:41",
  },

  {
    id: "32",
    tags: [""],
    url: "https://player.vimeo.com/video/462825307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 3",
    fecha: "17-02-2015",
    fuente: "Alexis Pérez",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "",
    length: "1:07:44",
  },

  {
    id: "33",
    tags: [""],
    url: "https://player.vimeo.com/video/462831217?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva IV",
    fecha: "17-02-2015",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "57:23",
  },

  {
    id: "34",
    tags: [""],
    url: "https://player.vimeo.com/video/464009342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable II",
    fecha: "17-02-2015",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "38:18",
  },

  {
    id: "35",
    tags: [""],
    url: "https://player.vimeo.com/video/462890853?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva III",
    fecha: "17-02-2015",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "51:20",
  },

  {
    id: "36",
    tags: [""],
    url: "https://player.vimeo.com/video/462816691?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 1",
    fecha: "16-02-2015",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epístolas",
    taller: "",
    length: "37:59",
  },

  {
    id: "37",
    tags: [""],
    url: "https://player.vimeo.com/video/857614414?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Una visión bíblica de la iglesia",
    fecha: "16-02-2015",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:01:00",
  },

  {
    id: "38",
    tags: [""],
    url: "/audios/Exposición_en_2_Timoteo_2_Delvis_Acuña-COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Exposición en 2 Timoteo 2 ",
    fecha: "17-02-2015",
    fuente: "Delvis Acuña",
    libro: "",
    genero: "",
    taller: "",
    length: "47:36",
  },

  {
    id: "39",
    tags: [""],
    url: "/audios/La_Iglesia_Saludable_Juan_Sánchez_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La Iglesia Saludable I",
    fecha: "16-02-2015",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "39:38",
  },

  {
    id: "40",
    tags: [""],
    url: "/audios/2.Predicación_Expositiva_1_David Helm_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva I",
    fecha: "16-02-2015",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "1:02:53",
  },

  {
    id: "41",
    tags: [""],
    url: "/audios/4.Predicación_Expositiva_2_David_Helm_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva II",
    fecha: "16-02-2015",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "53:23",
  },

  {
    id: "42",
    tags: [""],
    url: "/audios/La-supremacía-de-Dios-a-través-de-su-Palabra-Juan-Sánchez-COBIME-2012-D3_1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fecha: "23-10-2012",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "57:06",
  },

  {
    id: "43",
    tags: [""],
    url: "/audios/La-supremacía-de-Dios-a-través-de-su-Palabra-David-Jackman-COBIME-2012-D3_1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fecha: "23-10-2012",
    fuente: "David Jackman ",
    libro: "",
    genero: "",
    taller: "",
    length: "1:28:26",
  },

  {
    id: "44",
    tags: [""],
    url: "/audios/La-supremacía-de-Dios-a-través-de-su-Palabra-Peter-Sholl-COBIME2012-D3.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fecha: "24-10-2012",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
    length: "42:14",
  },

  {
    id: "45",
    tags: [""],
    url: "/audios/Peter-Sholl-La-supremacía-de-Dios-a-través-de-su-Palabra-Día-2.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fecha: "23-10-2012",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
    length: "31:27",
  },

  {
    id: "46",
    tags: [""],
    url: "/audios/David-Jackman-La-supremacía-de-Dios-a-través-de-su-Palabra-Día-2.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fecha: "23-10-2012",
    fuente: "David Jackman",
    libro: "",
    genero: "",
    taller: "",
    length: "1:27:59",
  },

  {
    id: "47",
    tags: [""],
    url: "/audios/Peter-Sholl-La-supremacía-de-Dios-a-través-de-su-Palabra-Día-1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su palabra-Día 1",
    fecha: "22-10-2012",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
    length: "38:18",
  },
];

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
// }

export function RecursosMain() {
  const [recursoFiltrado, setRecursoFiltrado] = useState({
    audio: false,
    video: false,
    articulo: false,
  });

  //Lista de todos los recursos
  const [datosFiltrados, setDatosFiltrados] = useState(recursosObj);

  // ^ -------------------------------------- SELECTORES DE FILTROS CON RADIO

  const handleOnRadio = (e) => {
    setRecursoFiltrado({
      // ...recursoFiltrado,
      [e.target.value]: e.target.checked,
    });

    console.log(e.target.value);

    if (e.target.checked) {
      const resultadoFiltrado = recursosObj.filter(
        (item) => item.type === e.target.value
      );
      setDatosFiltrados([...resultadoFiltrado]);
    } else {
      setDatosFiltrados(recursosObj);
    }
  };
  console.log(recursoFiltrado);

  // ^ -------------------------------------------------------------------------

  // ^ -------------------------------------- SELECTORES DE FILTROS CON DROPDOWN

  const handleOnLibroSelector = (libro) => {
    console.log(libro);
    const idGeneros = document.getElementById("generos");
    const idTalleres = document.getElementById("talleres");
    idGeneros.selectedIndex = 0;
    idTalleres.selectedIndex = 0;
    if (libro === "todos") {
      setDatosFiltrados(recursosObj);
    } else {
      setDatosFiltrados(
        recursosObj.filter((recurso) => {
          return recurso.libro === libro;
        })
      );
    }
  };

  const handleOnGeneroSelector = (genero) => {
    console.log(genero);
    const idLibros = document.getElementById("libros");
    const idTalleres = document.getElementById("talleres");
    idLibros.selectedIndex = 0;
    idTalleres.selectedIndex = 0;
    if (genero === "todos") {
      setDatosFiltrados(recursosObj);
    } else {
      setDatosFiltrados(
        recursosObj.filter((recurso) => {
          return recurso.genero === genero;
        })
      );
    }
  };

  const handleOnTallerSelector = (taller) => {
    const idLibros = document.getElementById("libros");
    const idGeneros = document.getElementById("generos");
    idLibros.selectedIndex = 0;
    idGeneros.selectedIndex = 0;
    if (taller === "todos") {
      setDatosFiltrados(recursosObj);
    } else {
      setDatosFiltrados(
        recursosObj.filter((recurso) => {
          return recurso.taller === taller;
        })
      );
    }
  };

  // ^ --------------------------------------------------------------------------

  console.log(datosFiltrados.length);
  // console.log(recursoFiltrado);

  // ^ ------------------------------------------------------------- RESET FILTER

  const resetFilter = (e) => {
    e.preventDefault();
    const idLibros = document.getElementById("libros");
    const idGeneros = document.getElementById("generos");
    const idTalleres = document.getElementById("talleres");
    const nameRadio = document.getElementsByName("radiocheck");
    idLibros.selectedIndex = 0;
    idGeneros.selectedIndex = 0;
    idTalleres.selectedIndex = 0;
    for (let i = 0; i < nameRadio.length; i++) nameRadio[i].checked = false;
    setDatosFiltrados(recursosObj);
  };

  // ^ --------------------------------------------------------------------------

  return (
    <>
      <div className="recursos__miniaturas" id="recursos__miniaturas">
        <div className="barra-direccion">Inicio / Todos los recursos</div>
        <p className="recursos__paragraph">
          Disponemos de una gran variedad de recursos en video, audio y
          articulos preparados para tu formación como expositor biblico
        </p>
        <div className="recursos__miniaturas-container">
          <div className="row recursos__miniaturas-row">
            <div
              id="miniImgVideo"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              {/* <button value={"video"} id={"video"} onClick={handleOnRadio}> */}
              <img
                className="recursos__miniatura-img"
                id="miniImgVideo"
                src={
                  recursoFiltrado.video
                    ? "images/recursos/FILTROS/RECURSOS_VIDEOS/IMAGEN_VIDEO_FILTRADO.png"
                    : "images/recursos/IMAGEN_VIDEO.png"
                }
                alt="Miniatura sección videos"
              />
              <div className="recursos__miniatura-text">Videos</div>
              {/* </button> */}
            </div>
            <div
              id="miniImgAudio"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              {/* <button value={"audio"} id={"audio"} onClick={handleOnRadio}> */}
              <img
                className="recursos__miniatura-img
                            "
                id="miniImgAudio"
                src={
                  recursoFiltrado.audio
                    ? "images/recursos/FILTROS/RECURSOS_AUDIOS/IMAGEN_AUDIO_FILTRADO.png"
                    : "images/recursos/IMAGEN_AUDIO.png"
                }
                alt="Miniatura sección audios"
              />
              <div className="recursos__miniatura-text">Audios</div>
              {/* </button> */}
            </div>
            {/* <div
              id="miniImgArticulo"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              <img
                className="recursos__miniatura-img
                            "
                id="miniImgArticulo"
                src="images/recursos/IMAGEN_ARTICULO.png"
                alt="Miniatura sección artículos"
              />
              <div className="recursos__miniatura-text">Artículos</div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="recursos__main">
        <div className="recursos__main-container">
          <div className="row recursos__main-row">
            <div className="col-lg-3">
              <form action="">
                <div className="recursos__filtros">
                  <div className="recursos__radio">
                    <h1>Filtros</h1>
                    <div className="recursos__radio-container">
                      <div className="recursos__radio-element">
                        <input
                          onChange={handleOnRadio}
                          className="radio-check"
                          type="radio"
                          name="radiocheck"
                          id="video"
                          value="video"
                        />
                        <label htmlFor="video">Video</label>
                      </div>
                      <div className="recursos__radio-element">
                        <input
                          onChange={handleOnRadio}
                          className="radio-check"
                          type="radio"
                          name="radiocheck"
                          id="audio"
                          value="audio"
                        />
                        <label htmlFor="audio">Audio</label>
                      </div>

                      {/* <div className="recursos__radio-element">
                        <input
                          onChange={handleOnRadio}
                          className="radio-check"
                          type="radio"
                          name="radiocheck"
                          id="articulo"
                          value="articulo"
                        />
                        <label htmlFor="articulo">Artículo</label>
                      </div> */}
                    </div>
                  </div>
                  <div className="recursos__selectors">
                    <div className="recursos__selectors-pair">
                      <label htmlFor="libros">Libros de la Biblia</label>
                      <select
                        name="libros"
                        id="libros"
                        onChange={(e) => handleOnLibroSelector(e.target.value)}
                      >
                        <option value="todos">Todos</option>
                        <option value="salmos">Salmos</option>
                        <option value="marcos">Marcos</option>
                        <option value="lucas">Lucas</option>
                        <option value="2timoteo">2 Timoteo</option>
                        <option value="apocalipsis">Apocalipsis</option>
                      </select>

                      <label htmlFor="generos">Género literários</label>
                      <select
                        name="generos"
                        id="generos"
                        onChange={(e) => handleOnGeneroSelector(e.target.value)}
                      >
                        <option value="todos">Todos</option>
                        <option value="Narrativa">Narrativa</option>
                        <option value="Sabiduría">Sabiduría</option>
                        <option value="Profecia">Profecía</option>
                        <option value="Evangelios">Evangelios</option>
                        <option value="Epístolas">Epístolas</option>
                        <option value="Apocalíptica">Apocalíptica</option>
                      </select>
                    </div>
                    <div className="recursos__selectors-pair">
                      {/* <label htmlFor="Eventos">Eventos</label>
                      <select name="Eventos" id="Eventos">
                        <option value="todos">Todos</option>
                        <option value="cobime12">COBIME 2012</option>
                        <option value="cobime15">COBIME 2015</option>
                        <option value="cobime18">COBIME 2018</option>
                      </select> */}
                      <label htmlFor="talleres">Talleres</label>
                      <select
                        name="talleres"
                        id="talleres"
                        onChange={(e) => handleOnTallerSelector(e.target.value)}
                      >
                        <option value="todos">Todos</option>
                        <option value="taller-marcos">
                          Marcos, La Habana, 2019
                        </option>
                        <option value="taller-2-timoteo">
                          2 Timoteo, La Habana, 2019
                        </option>
                        <option value="taller-apocalipsis">
                          Apocalipsis, La Habana, 2019
                        </option>
                      </select>
                      <div className="recursos__filter-btn">
                        <button onClick={resetFilter}>Borrar Filtro</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-9">
              {datosFiltrados.map((recursosObj, i) => (
                <motion.div whileHover={{ scale: 1.05 }} className="">
                  <Link
                    to={
                      recursosObj.type === "video"
                        ? `video/${recursosObj.id}`
                        : `audio/${recursosObj.id}`
                    }
                    className="recursos__card-link"
                    aria-current="page"
                  >
                    <div key={recursosObj.id} className="recursos__card">
                      <div className="recrusos__card-imgntitle">
                        <img
                          className="recursos__card-img"
                          src={recursosObj.icon}
                          alt="Video Icon"
                        />
                        <div className="recursos__card-title">
                          <h3>{recursosObj.title}</h3>
                          <p>{recursosObj.fuente}</p>
                        </div>
                      </div>
                      {/* <div className="recrusos__card-length">
                        {recursosObj.length} Min
                      </div> */}
                    </div>
                  </Link>
                </motion.div>
              ))}
              {datosFiltrados.length === 0 && (
                <div style={{ fontSize: "2rem", margin: "5% 0 0 10%" }}>
                  No hay recursos disponibles
                </div>
              )}
            </div>
          </div>
          <div className="recursos__footer">
            <div className="row recursos__footer-row">
              <div className="col-4">
                <img
                  className="recursos__footer-logo"
                  src="/images/recursos/logo-gris-inferior.png"
                  alt="Logo Predica Fiel"
                />
              </div>
              <div className="col-4 recursos__footer-btn">
                <HashLink to="/recursos#recursos__miniaturas">
                  <button>Inicio</button>
                </HashLink>
              </div>
              <div className="col-4 recursos__footer-navigation">
                {/* <Pagination size="sm" className="recursos__footer-pagination">
                  <Pagination.Prev />
                  {items}
                  <Pagination.Next />
                </Pagination> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ^ ------------------------------------------
function Recursos(props) {
  return (
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ deley: 0.25, duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Predica Fiel | Recursos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <RecursosMain />
      <Alianzas />
      {/* <ContactoWhats /> */}
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </motion.div>
  );
}

export default Recursos;
