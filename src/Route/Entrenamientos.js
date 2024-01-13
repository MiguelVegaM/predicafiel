import React from "react";

import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import {
  Alianzas,
  DisclaimerDonar,
  Footer,
  MiniHeader,
  MiniFooter,
  Navbar,
} from "./Inicio";

import Button from "../UI/Buttons/Button";

import "../styles/Entrenamientos/Entrenamientos.css";
import { HashLink } from "react-router-hash-link";

export function EntrenamientosHeader() {
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";

  // }

  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";

  // }

  return (
    <div className="capacitacion container-fluid">
      <div className="sidenav">
        {/* <a href="#entrenamientos-online">Entrenamientos Online</a>
        <a href="#plan-habana">Entrenamientos Presenciales</a>
        <a href="#talleres">Talleres</a> */}
      </div>
      <div className="capacitacion-container">
        <h1 className="entrenamientos__header">ENTRENAMIENTO</h1>
        <p className="entrenamientos__paragraph">
          Fielmente comprometidos con la predicación de evangelio de Jesucristo,
          entrenando a expositores bíblicos en el mundo hispano parlante.
        </p>
        <a href="#contacto">
          <Button specificClass="btn__capacitacion-main-banner">
            CONTÁCTANOS
          </Button>
        </a>
      </div>
    </div>
  );
}

// ! quitar margenes en media querie 700px <----------

export function EntrenamientosEntrenamientosOnline() {
  return (
    <div className="container-fluid-xl">
      <div
        className="entrenamientos__entrenamientos-online row"
        id="entrenamientos-online"
      >
        <div className="col-12 col-md-6 nopadding entrenamientos-entrenamiento__card-image-container">
          <img
            className="entrenamientos-entrenamiento__card-image"
            src="/images/entrenamientos/hombres-exponiendo.jpeg"
            alt="Men on laptop"
          />
        </div>
        <div className="col-12 col-md-6 nopadding entrenamientos-entrenamiento__card-text-container">
          <div className="entrenamientos-entrenamiento__card-text">
            <h1 className="entrenamiento__card-title">Entrenamientos</h1>
            <div className="entrenamiento__modalidad">
              Modalidad:{" "}
              <span className="entrenamiento__card-text-bold"> En Línea</span>
              <span className="online-dot">.</span>
            </div>
            <p className="entrenamiento__card-text-bold">
            El avance de las tecnologías de la comunicación ha hecho cada vez más asequible entrenamientos en línea. Las plataformas de video conferencias se han desarrollado mucho en los últimos años al igual que plataformas educacionales online. Lo cuál hace posible que podamos acercar los entrenamientos en predicación a lugares lejanos. Esto unido a la falta de entrenamientos locales de este tipo, hace de los entrenamientos online una opción viable para muchos pastores en el mundo hispano.
            </p>
            <p className="entrenamiento__card-text-normal">
            A pesar de ser entrenamientos online, éstos entrenamientos son en vivo, en tiempo real. Durante las horas de encuentro semanal el estudiante es expuesto a principios de interpretación y predicación, discusión de textos bíblicos y tiempos de predicación y retroalimentación. Es un entrenamiento enteramente interactivo.
            </p>
            <div className="entrenamientos-entrenamiento__button-container-box">
              <HashLink to="#contacto">
                <Button specificClass="btn__entrenamientos-entrenamientos-online--rojo">
                  PEDIR INFO
                </Button>
              </HashLink>
              <a href="#contacto">
                <Button specificClass="btn__entrenamientos-entrenamientos-online--gris">
                  APLICAR AHORA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlanHabana() {
  return (
    <div className="plan-habana" id="plan-habana">
      <div className="plan-habana-banner container-fluid">
        <div className="row">
          <div className="plan-habana-banner__text col-lg-6">
            <h1 className="plan-habana-banner__header">
              Conoce nuestro trabajo en Cuba
            </h1>
            <p className="modalidad">
              Modalidad:{" "}
              <span className="plan-habana-banner--bold">Presencial,</span>{" "}
              Cuba.
            </p>
            <p className="plan-habana-banner--bold">
              Plan Habana nace de la pasión de transformar <br></br>
              La Habana con el Evangelio de Jesucristo
            </p>
            <p className="plan-habana-banner--small">
              pero como dicen Las Escrituras: "¿Cómo, pues, invocarán a aquel en
              quien no han creído? ¿Y cómo creerán en aquel de quien no han
              oído? ¿Y cómo oirán sin haber quien les predique? (Romanos 10:14).{" "}
              <span className="plan-habana-banner--bold">
                A través de Plan Habana, capacitamos a pastores, maestros y
                líderes en cómo predicar el evangelio fielmente.
              </span>
            </p>
          </div>
          <div className="plan-habana-banner__imagen-container  col-lg-6 p-0">
            <img
              className="plan-habana-banner__imagen img-responsive"
              src="/images/entrenamientos/entrenamientoplanhabana.jpg"
              alt="Grupo Estudiando"
            />
          </div>
        </div>
      </div>
      {/* <div className="plan-habana-exposicion">
        <div className="plan-habana-exposicion__header">
          <div className="plan-habana-exposicion__header-text">
            <span className="plan-habana-exposicion--small">Plan Habana</span>
            <h1 className="plan-habana-exposicion--big">
              Entrenamiento en <br /> Exposición Bíblica
            </h1>
          </div>
          <div>
            <img
              className="plan-habana-exposicion__header-logo"
              src="/images/entrenamientos/logo-largo3.png"
              alt="logo-blanco"
            />
          </div>
        </div>
        <div className="plan-habana-exposicion__text">
          <p className="exposicion-p1">
            El Espíritu de Dios usa la Palabra de Dios para cumplir los
            propósitos de Dios (Isaías 55:10-11; Hebreos 4:12). Si el pueblo de
            Dios y el mundo que le rodea no es expuesto fielmente a la Palabra
            de Dios, entonces no existe cambio real, y eso ocurre a través de la
            exposición bíblica. Este entrenamiento semana tras semana irá
            capacitándote en esta sagrada y grandiosa tarea de ser un fiel
            expositor bíblico. El objetivo específico de este curso es
            desarrollar tus habilidades en el manejo de la Palabra de Dios. El
            curso funciona los sábados de 9:00 am a 1:00 pm, durante alrededor
            de 20 semanas al año, de octubre a abril.
          </p>
          <p className="exposicion-p2">
            <span className="plan-habana-exposicion--bold">
              Las características del curso son las siguientes:
            </span>{" "}
            <br />
            Instrucciones prácticas: a lo largo del año recibirás varias
            instrucciones que te darán estrategias y herramientas en cómo
            manejar el texto bíblico y estas serán específicas dentro del género
            literario que estemos abordando durante ese año.
          </p>
          <p className="exposicion-p3">
            Grupos Pequeños: durante este tiempo semanal, tendrás la oportunidad
            de presentar tu trabajo hecho de antemano en un pasae asianado del
            libro que estemos estudiando. En este tiempo, podrás interactuar con
            otros, dar y recibir retroalimentación, este ejercicio es uno de los
            que más ayuda en el desarrollo de habilidades en la predicación y la
            enseñanza.
          </p>
          <p className="exposicion-p4">
            Debido a la incertidumbre que la Covid-19 ha traído sobre nuestro
            país sobre todo en la ciudad de La Habana, entendemos sabio limitar
            el entrenamiento de Plan Habana a siete semanas durante los meses de
            enero y febrero de 2021. Este año, enfocaremos toda nuestra atención
            en cómo construir el sermón. Estaremos profundizando en todas
            aquellas instrucciones, que una vez que entendemos el pasaje
            correctamente, nos ayudan a trasmitirlo al pueblo de Dios de una
            forma efectiva.
          </p>
          <p className="exposicion-p5">
            Si quiere matricular para este año por favor siga el enlace a
            continuación y estaremos en contacto con usted en breve,
            proporcionándole más detalles.
          </p>
        </div>
        <a className="btn-plan-habana-exposicion-wrapper" href="#contacto">
          <Button specificClass="btn-plan-habana-exposicion">SABER MÁS</Button>
        </a>
      </div> */}
    </div>
  );
}

export function Internado() {
  return (
    <div>
      <div className="container-fluid">
        <div className="internado row">
          <div className="col-12 col-md-6">
            <div className="internado__header">
              <h1 className="internado__header-text">Programa de Internado</h1>
              <img
                className="internado__header-logo"
                src="/images/entrenamientos/logo-corto3.png"
                alt="Logo corto Predica Fiel"
              />
            </div>
            <div className="internado__text">
              <p className="internado__paragraph">
                El objetivo del programa de internado, patrocinado por Prédica
                Fiel en alianza con Ministerios Nueva Vida, es proveer un
                entrenamiento práctico a jóvenes que tengan inquietudes en
                cuanto al ministerio a tiempo completo. Durante el tiempo de
                internado reciben un entrenamiento intenso en el manejo adecuado
                de las Escrituras, algo a lo cuál deberán entregarse por el
                resto de sus vidas si Dios les ha llamado al ministerio. También
                serán expuestos a diferentes facetas del ministerio, podrán
                experimentar los retos que el ministerio del evangelio presupone
                para aquellos que son llamados para esta tarea.
              </p>
              <p className="internado__paragraph">
                Aquellos interesados, deben disponer de tiempo completo para
                este programa. Las posibilidades de entrar son limitadas debido
                a los recursos necesarios. No obstante, si usted es alguien que
                tiene inquietudes en cuanto al ministerio, le animamos a
                comenzar el proceso de aplicación mediante el enlace provisto a
                continuación.
              </p>
            </div>
            <div className="internado__footer row">
              <a href="#contacto" className="col-12 col-lg-6">
                <Button specificClass="btn__internado">SABER MÁS</Button>
              </a>
              <div className="internado__footer-text col-12 col-lg-6">
                Plan Habana, Modalidad Presencial, Cuba
              </div>
            </div>
          </div>
          <div className="internado__images-container col-12 col-md-6">
            <div>
              <img
                className="internado__image"
                src="/images/entrenamientos/banner10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="internado__image"
                src="/images/entrenamientos/Foto.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="talleres row" id="talleres">
        {/* <div className="talleres__wrapper"> */}
        <div className="talleres__text col-12 col-lg-7 nopadding">
          <div className="talleres__header">TALLERES</div>
          <div className="talleres__paragraph">
            El propósito de los talleres es ayudar a los participantes a crecer
            en la confianza y habilidad de manejar con precisión la Palabra de
            Dios. Queremos que cada persona salga del taller convencido de que
            la Palabra de Dios es poderosa, y con entusiasmo de enseñarla a sus
            congregaciones.
          </div>
          <a className="btn__talleres-container" href="#contacto">
            <Button specificClass="btn__talleres">SABER MÁS</Button>
          </a>
        </div>

        <div className="talleres__image-container col-12 col-lg-5 nopadding">
          <img
            className="talleres__image"
            src="/images/entrenamientos/ponente-escenario.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    // </div>
  );
}

// ? <-------------------------------------

function Entrenamientos(props) {
  return (
    <motion.div
      className="entrenamientos__scroll-wrapper"
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Predica Fiel | Entrenamientos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <EntrenamientosHeader />
      <EntrenamientosEntrenamientosOnline />
      <PlanHabana />
      <Internado />
      <Alianzas />
      {/* <ContactoWhats /> */}
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </motion.div>
  );
}

export default Entrenamientos;
