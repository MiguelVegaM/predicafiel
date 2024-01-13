import React, { useEffect, useState } from "react";
// import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import { Alianzas, DisclaimerDonar, Footer, MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";
import Button from "../UI/Buttons/Button";

import "../styles/Nosotros/Nosotros.css";
import {
  AlexisModal,
  AndyModal,
  DayanModal,
  LourdesModal,
} from "../UI/Buttons/NuestroEquipoModal";

export function NosotrosBanner(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.getElementById("btn__declaracion-doctrinal").innerText =
        "LEER MENOS";
    } else {
      document.getElementById("btn__declaracion-doctrinal").innerText =
        "LEER MÁS";
    }
  }, [open]);

  const [modalShowAlexis, setModalShowAlexis] = React.useState(false);
  const [modalShowAndy, setModalShowAndy] = React.useState(false);
  const [modalShowLourdes, setModalShowLourdes] = React.useState(false);
  const [modalShowDayan, setModalShowDayan] = React.useState(false);

  const onButtonClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="nosotros-banner--rojo">
        <div className="nosotros-banner--rojo__wrapper">
          <div className="nosotros-banner__text">
            <p>Conoce más sobre</p>
            <h1>NOSOTROS</h1>
          </div>
          <a href="#contacto">
            <Button specificClass="btn__nosotros-banner--rojo">
              CONTÁCTANOS
            </Button>
          </a>
        </div>
      </div>

      <div className="nosotros__flotante--negro">
        <div className="nosotros__flotante--negro__text">
          <p className="text">
            Existimos <span className="light"> para</span>{" "}
            <span className="bold">
              impactar <br></br> la vida
            </span>{" "}
            de{" "}
            <span className="bold">
              la próxima generación con el <br></br> evangelio de Jesucristo,{" "}
            </span>
            entrenando a <br></br> expositores bíblicos{" "}
            <span className="light">en el mundo</span> <br></br> hispano
            parlante.
          </p>
          {/* <p className="text-sub">
            Fielmente comprometidos con la Gran Comisión
          </p>
          <p className="text-footer">Mateo 28:16-20</p> */}
        </div>
      </div>
      {/* <div className="nosotros__biblia">
        <div className="biblia-banner">
          <img
            className="biblia-banner-logo"
            src="../images/nosotros/logo-largo.png"
            alt=""
          />
        </div>
        <div className="biblia-text">
          <p className="text">
            Creemos que la salud de la Iglesia está ligada a la fiel exposición
            de la Biblia, estamos enfocados a formar, capacitar y entrenar a
            predicadores y maestros de la Palabra de Dios, preparándolos para el
            ministerio.
          </p>
          <p className="text-sub">
            Somos un ministerio cuya intención principal es contribuir a la
            expansión del evangelio de Jesucristo.
          </p>
          <NavLink to="/entrenamientos">
            <Button specificClass="btn__biblia-banner">CAPACITACIONES</Button>
          </NavLink>
        </div>
      </div> */}
      <div id="declaracion-doctrinal" className="declaracion-doctrinal">
        <div className="declaracion-doctrinal__text">
          <div>
            <p className="declaracion-doctrinal--supertitle">
              ¿En que Creemos? Conoce nuestra
            </p>
            <p className="declaracion-doctrinal--title">
              Declaración Doctrinal
            </p>
          </div>
          <img
            className="declaracion-doctrinal__logo"
            src="../images/nosotros/logo-corto3.png"
            alt=""
          />
        </div>
        <div className="declaracion-doctrinal__cuerpo-mostrado"></div>
        <div className="declaracion-doctrinal__cuerpo-oculto"></div>
        <Collapse in={open}>
          <div
            className="declaracion-doctrinal__cuerpo-oculto"
            id="example-collapse-text"
          >
            <p>
              1. Afirmamos que el Evangelio confiado a la Iglesia es, en primera
              instancia, el Evangelio de Dios (Mar 1:14; Rom 1:1). Dios es el
              autor y Él lo revela a nosotros, en y por Su palabra. Su autoridad
              y fiabilidad descansa solamente en Él.
            </p>{" "}
            <p>
              Negamos que la verdad o autoridad del Evangelio se deriva de
              iniciativa o inventiva humana alguna (Gál. 1:1-11). También
              negamos que la verdad o autoridad del Evangelio descansa en la
              autoridad de alguna iglesia o institución humana en particular.
            </p>{" "}
            <p>
              2. Afirmamos que el Evangelio es el poder salvador de Dios por el
              cual el Evangelio produce salvación a todo aquel que cree, sin
              distinción (Rom 1:16). Esta eficacia del Evangelio es por el poder
              de Dios mismo.
            </p>{" "}
            <p>
              Negamos que el poder del Evangelio descansa en la elocuencia del
              predicador, la técnica del evangelista o la persuasión de
              argumentos racionales (1 Cor 1:21; 2:1-5).
            </p>{" "}
            <p>
              3. Afirmamos que el Evangelio diagnostica la condición universal
              del hombre quien se ha rebelado por su pecado en contra de Dios,
              la cual de no ser cambiada, llevará a cada persona a la perdición
              eterna bajo la condenación de Dios.
            </p>
            <p>
              Negamos cualquier rechazo a la caída de la naturaleza humana o
              cualquier aserción a la bondad natural o divinidad de la raza
              humana.
            </p>
            <p>
              4. Afirmamos que Jesucristo es el único camino de salvación, el
              único mediador entre Dios y la humanidad (Juan 14:6; 1 Tim 2:5).
            </p>
            <p>
              Negamos que cualquier persona sea salva en otra manera que por
              Jesucristo y Su Evangelio. También negamos que la Biblia ofrezca
              esperanza alguna de que los adoradores sinceros de otras
              religiones serán salvos sin una fe personal en Jesucristo.
            </p>
            <p>
              5. Afirmamos que Dios ha ordenado a la Iglesia, la cual está por
              lo tanto bajo obligación divina, a predicar el Evangelio a toda
              persona viviente (Lucas 24:47; Mateo 28:18-19).
            </p>
            <p>
              Negamos que cualquier clase particular o grupo de personas,
              cualquiera que sea su etnia o identidad cultural, deba ser
              ignorada o pasada por alto en la predicación del Evangelio (1 Cor
              9:19-22). El propósito de Dios es hacer una iglesia global de
              personas de cada tribu, lengua y nación (Apoc 7:9).
            </p>
            <p>
              6. Afirmamos que la fe en Jesucristo como la Palabra divina (o
              Logos, Juan 1:1), la segunda Persona de la Trinidad, co-eterna y
              co-esencial con el Padre y el Espíritu Santo(Heb 1:3), es
              fundacional en la fe en el Evangelio.
            </p>
            <p>
              Negamos que cualquier punto de vista de Jesucristo que reduzca o
              rechace su completa deidad sea fe en el Evangelio o que aproveche
              para la salvación.
            </p>
            <p>
              7. Afirmamos que Jesucristo es Dios encarnado (Juan 1:14). El
              descendiente de David nacido virginalmente (Rom 1:3), quien tuvo
              una verdadera naturaleza humana, fue sujeto a la Ley de Dios (Gál
              4:5), y fue como nosotros en todos los puntos, excepto sin pecado
              (Heb 2:17, 7:26-28). Afirmamos que la fe en la verdadera humanidad
              de Cristo es esencial para la fe en el Evangelio.
            </p>
            <p>
              Negamos que cualquiera que rechace la humanidad de Cristo, su
              encarnación, o su vida sin pecado, o quien mantenga que esas
              verdades no son esenciales para el Evangelio, será salvo (1 Juan
              4:2-3).
            </p>
            <p>
              8.Afirmamos que la expiación de Cristo, mediante la cual -en su
              obediencia- él ofreció un sacrificio perfecto haciendo
              propiciación al Padre al pagar por nuestros pecados y satisfacer
              la justicia divina en nuestro lugar de acuerdo al plan eterno de
              Dios, es un elemento esencial del Evangelio.
            </p>
            <p>
              Negamos que cualquier punto de vista de la expiación que rechace
              la sustitutiva satisfacción de la justicia divina, completada
              vicariamente por los creyentes, sea compatible con la enseñanza
              del Evangelio.
            </p>
            <p>
              9. Afirmamos que la obra salvadora de Cristo incluye su vida y su
              muerte en nuestro lugar (Gál 3:13). Declaramos que la fe en la
              perfecta obediencia de Cristo, mediante la cual él cumplió toda
              demanda de la Ley de Dios en nuestro lugar, es esencial al
              Evangelio.
            </p>
            <p>
              Negamos que nuestra salvación haya sido lograda meramente o
              exclusivamente por la muerte de Cristo sin referencia a su vida de
              perfecta justicia.
            </p>
            <p>
              10. Afirmamos que la resurrección corporal de Cristo de la muerte
              es esencial al Evangelio bíblico (1 Cor 15:14).
            </p>
            <p>
              Negamos la validez de cualquier auto-llamado evangelio que niegue
              la realidad histórica de la resurrección corporal de Cristo.
            </p>
            <p>
              11. Afirmamos que la doctrina bíblica de la justificación sólo por
              fe solamente en Cristo Jesús es esencial para el Evangelio. (Rom
              3:28; 4:5; Gál 2:16).
            </p>
            <p>
              Negamos que cualquier persona pueda creer el Evangelio bíblico y
              al mismo tiempo rechazar la enseñanza apostólica de la
              justificación sólo por fe sólo en Cristo Jesús. Negamos también
              que exista más de un Evangelio verdadero (Gál 1:6-9).
            </p>
            <p>
              12. Afirmamos que la doctrina bíblica de la imputación (o
              conmutación) de nuestros pecados a Cristo y de su justicia a
              nosotros, por lo cual nuestros pecados son totalmente perdonados y
              nosotros somos totalmente aceptados, es esencial para el Evangelio
              bíblico (2 Cor 5:19-21).{" "}
            </p>
            <p>
              Negamos poder ser justificados por la justicia de Cristo infundada
              en nosotros o por cualquier justicia que sea entendida como
              inherente en nosotros.
            </p>
            <p>
              13. Afirmamos que la justicia de Cristo por medio de la cual
              nosotros somos justificados es toda suya, la cual él logró aparte
              de nosotros, en y por su perfecta obediencia. Esta justicia es
              conmutada o imputada a nosotros por la legal declaración de Dios,
              como único fundamento de nuestra justificación.
            </p>
            <p>
              Negamos que cualquier obra o labor que hagamos en cualquier etapa
              de nuestra existencia añada algo al mérito de Cristo o gane para
              nosotros mérito alguno que contribuya al fundamento de nuestra
              justificación. (Gál 2:16; Efe 2:8,9; Tito 3:5).{" "}
            </p>
            <p>
              14. Afirmamos que mientras todos los creyentes son morada del
              Espíritu Santo y están en el proceso de ser santificados y
              conformados a la imagen de Cristo, estas consecuencias de la
              justificación no son su fundamento. Dios nos declara justos,
              remite nuestros pecados y nos adopta como Sus hijos, sólo por Su
              gracia y a través sólo de la fe, por causa sólo de Cristo,
              mientras somos aún pecadores (Rom 4:5).
            </p>
            <p>
              Negamos que los creyentes tengan justeza inherente por la virtud
              de su cooperación con la gracia de Dios que transforma vidas antes
              de que Dios los declare justificados en Cristo. Nosotros somos
              justificados siendo aún pecadores.
            </p>
            <p>
              15. Afirmamos que la fe salvadora resulta en santificación, la
              trasformación de la vida en creciente conformidad a Cristo a
              través del Poder del Espíritu Santo. Santificación significa
              arrepentimiento continuo, una vida de giro del pecado a servir a
              Jesucristo en dependencia agradecida en El como el Señor y Maestro
              (Gal. 5:22-25; Rom. 8:4, 13-14)
            </p>
            <p>
              Rechazamos cualquier punto de vista de la justificación que la
              divorcie nuestra santificada unión con Cristo y nuestra creciente
              conformidad a su imagen a través de la oración, el
              arrepentimiento, el llevar la cruz y la vida en el espíritu.
            </p>
            <p>
              16. Afirmamos que la fe salvadora incluye aprobación mental al
              contenido del Evangelio, reconocimiento de nuestro propio pecado y
              necesidad y confianza personal y dependencia en Cristo y su obra.
            </p>
            <p>
              Negamos que la fe salvadora incluye solo aceptación mental del
              Evangelio, y que, la justificación es asegurada por una mera
              profesión externa de fe. Además negamos que ningún elemento de fe
              salvadora es una obra meritoria o gana la salvación para nosotros.
            </p>
            <p>
              17. Afirmamos que a pesar de que la verdadera doctrina es vital
              para la el bienestar y la salud espiritual, no somos salvos por la
              doctrina. La doctrina es necesaria para informarnos como podemos
              ser salvos por Jesucristo, pero Cristo es el que salva.
            </p>
            <p>
              Negamos que las doctrinas del Evangelio puedan ser rechazadas sin
              producir daño. La negación del Evangelio trae ruina espiritual y
              nos expone al juicio de Dios.
            </p>
            <p>
              18. Afirmamos que Jesucristo ordena a sus seguidores a proclamar
              el Evangelio a todas las personas vivientes, evangelizando a todos
              en cualquier lugar, y discipulando a los creyentes del
              compañerismo de la iglesia. Un completo y fiel testimonio de
              Cristo incluye el testimonio personal, una vida piadosa y actos de
              misericordia y compasión con el prójimo, sin los cuáles la
              predicación del Evangelio parecerá improductiva.
            </p>
            <p>
              Negamos que el testimonio personal, la vida piadosa y los actos de
              misericordia y compasión a nuestros prójimos constituye
              evangelismo separado de la proclamación del Evangelio.
            </p>
            <p>
              19. Afirmamos el futuro y personal regreso de nuestro Señor
              Jesucristo, el cuál juzgará a todo hombre, ejecutando la justa
              condenación de Dios sobre el impenitente y recibiendo en gloria
              eterna a los redimidos.
            </p>
            <p>
              Negamos que el momento o la fecha de este glorioso evento pueda
              ser predicho por alguna persona o institución humana porque la
              autoridad pertenece sólo a Dios. También negamos cualquier
              incitación a usar dichas predicciones para motivar decisiones de
              fe que son basadas en esfuerzos personales, porque la fe en
              Jesucristo, el Evangelio, es la única vía de salvación.{" "}
            </p>
            <p>
              20. Afirmamos que las mujeres deben ser entrenadas en el
              Ministerio de la Palabra para animar a la devoción y a la sana
              doctrina (Tito 2:3-5)
            </p>
            <p>
              Negamos que las mujeres sean elegibles para la ordenación o
              nombramiento a la tarea de enseñanza de las Escrituras o a
              cualquier otra manera de ejercer autoridad en un contexto de
              adultos de ambos sexos dentro de la Iglesia (1 Tim. 2:12-15,
              3:1-2).
            </p>
            <p>
              21. Afirmamos que Adán y Eva fueron hechos para complementarse el
              uno al otro en una unión de una sola carne en el matrimonio, lo
              cual establece el patrón ideado por Dios para la relación sexual
              entre un hombre y una mujer. Por consiguiente, tanto los actos
              homosexuales como los de adulterio son pecaminosos. (1 Cor.
              6:9-11)
            </p>
            <p>
              Negamos que los actos impenitentes de homosexualidad o adulterio
              no dañen el ministerio privado y público. Más bien, tales actos
              constituyen la base para ser descalificado del ministerio.
            </p>
          </div>
        </Collapse>

        <button
          id="btn__declaracion-doctrinal"
          className="btn__declaracion-doctrinal"
          onClick={onButtonClick}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          LEER MÁS
        </button>
      </div>
      <div id="nuestro-equipo" className="nuestro-equipo">
        <div className="nuestro-equipo__wrapper">
          <div className="nuestro-equipo__title">
            <h1 className="title">NUESTRO EQUIPO</h1>
            <p className="subtitle">
              Comprometidos con la Fiel Predicación de la Palabra
            </p>
          </div>
          <div className="nuestro-equipo__cards">
            <div className="nuestro-equipo__pair-cards">
              {/* // ^ card <-------------------- */}
              <div className="nuestro-equipo__card">
                <img src="../images/nosotros/alexis.png" alt="Alexis Pérez" />
                <h4>Alexis Pérez</h4>
                {/* <p>
                  Director del Ministerio Prédica Fiel. Ha servido como pastor
                  en Cuba desde 1999. En el 2008-2009 cursó estudios en Cornhill
                  Training Course, que pertenece a...
                </p> */}
                {/* //?               Modal */}
                <AlexisModal
                  show={modalShowAlexis}
                  onHide={() => setModalShowAlexis(false)}
                />
                <button
                  className="nuestro-equipo__card-button"
                  onClick={() => setModalShowAlexis(true)}
                >
                  SABER MÁS
                </button>
                {/* //?               Modal */}
              </div>
              {/* // ^ card <-------------------- */}
              <div className="nuestro-equipo__card">
                <img src="../images/nosotros/andy.png" alt="Andy Quesada" />
                <h4>Andy Quesada</h4>
                {/* <p>
                  Andy sirve como Director de Entrenamiento. Ha servido como
                  pastor enCuba desde el 2014 y ha estado involucrado en los
                  ministerios de enseñanza y adoración...
                </p> */}
                {/* //?               Modal */}
                <AndyModal
                  show={modalShowAndy}
                  onHide={() => setModalShowAndy(false)}
                />
                <button
                  className="nuestro-equipo__card-button"
                  onClick={() => setModalShowAndy(true)}
                >
                  SABER MÁS
                </button>
                {/* //?               Modal */}
              </div>
              {/* // ^ card <-------------------- */}
            </div>
            <div className="nuestro-equipo__pair-cards">
              <div className="nuestro-equipo__card">
                <img
                  src="../images/nosotros/lourdes.png"
                  alt="Lourdes Llorens"
                />
                <h4>Lourdes Llorens</h4>
                {/* <p>
                  Lourdes Llorens supervisa nuestras iniciativas para mujeres.
                  Sirve junto a su esposo Alexis Pérez en Cuba. Desde 1999,
                  luego de haberse graduado en el Seminario Teológico...
                </p> */}
                <LourdesModal
                  show={modalShowLourdes}
                  onHide={() => setModalShowLourdes(false)}
                />
                <button
                  className="nuestro-equipo__card-button"
                  onClick={() => setModalShowLourdes(true)}
                >
                  SABER MÁS
                </button>
              </div>
              {/* // ^ card <-------------------- */}
              <div className="nuestro-equipo__card">
                <img src="../images/nosotros/dayan.png" alt="Dayán Frontela" />
                <h4>Dayán Frontela</h4>
                {/* <p>
                  Dayán Frontela sirve como Administrador. Desde su conversión
                  ha estado involucrado en el servicio dentro de la iglesia. Es
                  diácono en la Iglesia Bautista Nueva Vida...
                </p> */}
                <DayanModal
                  show={modalShowDayan}
                  onHide={() => setModalShowDayan(false)}
                />
                <button
                  className="nuestro-equipo__card-button"
                  onClick={() => setModalShowDayan(true)}
                >
                  SABER MÁS
                </button>
              </div>
              {/* // ^ card <-------------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ^ ------------------------------------------
function Nosotros(props) {
  return (
    <motion.div
      className="nosotros__scroll-wrapper"
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      // exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Predica Fiel | Nosotros</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <NosotrosBanner />
      <Alianzas />
      {/* <Cobime /> */}
      {/* <ContactoWhats id="ContactoWhats" /> */}
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </motion.div>
  );
}

export default Nosotros;
