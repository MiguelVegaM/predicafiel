import React from "react";

import Modal from "react-bootstrap/Modal";

import "../../UI/Buttons/NuestroEquipoModal.css";

export function AlexisModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          className="nuestro-equipo-modal__img"
          src="../images/nosotros/alexis.png"
          alt=""
        />
        <Modal.Title id="contained-modal-title-vcenter">
          Alexis Pérez
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Alexis Pérez sirve como Director de Ministerios de Prédica Fiel. Ha
          servido como pastor en Cuba desde 1999. En el 2008-2009 cursó estudios
          en Cornhill Training Course, que pertenece a Proclamation Trust. A su
          regreso de Inglaterra, y debido al crecimiento de las iglesias en Cuba
          y la necesidad de equipar a pastores y líderes en la predicación de la
          Biblia, fundó Equipo Impacto (actualmente llamado Prédica Fiel). Es
          miembro del concilio de Coalición por el Evangelio. Vive en la Habana
          junto con su esposa Lourdes, donde pastorea la Iglesia Bautista Nueva
          Vida, a la vez que está cursando un Doctorado en Ministerio con
          énfasis en Predicación Expositiva en el Southern Baptist Theological
          Seminary, en Louisville Kentucky. Alexis es responsable de supervisar
          el ministerio, enfocándose primariamente en la planificación
          estratégica del mismo para llevar a cabo la visión de Prédica Fiel.
          Vela por el entrenamiento y supervisión de instructores para asegurar
          la calidad de los talleres y la implementación de alianzas
          estratégicas para el ministerio. Él reporta directamente a la Junta de
          Directores y supervisa a otros trabajadores del ministerio
        </p>
      </Modal.Body>
    </Modal>
  );
}
export function AndyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          className="nuestro-equipo-modal__img"
          src="../images/nosotros/andy.png"
          alt=""
        />

        <Modal.Title id="contained-modal-title-vcenter">
          Andy Quesada
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Andy sirve como Director de Entrenamiento. Ha servido como pastor en
          Cuba desde el 2014 y ha estado involucrado en los ministerios de
          enseñanza y adoración dentro de la iglesia por más de 10 años. Desde
          2016 es pastor en la Iglesia Bautista Nueva Vida. Vive en La Habana
          junto a su esposa Diana y su hija Elizabeth, a la vez que está
          cursando una Maestría en Divinidades en el Southern Baptist
          Theological Seminary. Andy es responsable de coordinar la logística y
          la ejecución de Plan Habana, nuestro Curso en Exposición Bíblica y de
          mantener relaciones con estudiantes pasados y presentes. Es Instructor
          en Prédica Fiel y además administra nuestras redes sociales y página
          web. Es responsable de la promoción de nuestros eventos y recursos.
          Andy responde al Director de Ministerios.{" "}
        </p>
      </Modal.Body>
    </Modal>
  );
}
export function LourdesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          className="nuestro-equipo-modal__img"
          src="../images/nosotros/lourdes.png"
          alt=""
        />

        <Modal.Title id="contained-modal-title-vcenter">
          Lourdes Llorens
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lourdes Llorens supervisa nuestras iniciativas para mujeres. Sirve
          junto a su esposo Alexis Pérez en Cuba. Desde 1999, luego de haberse
          graduado en el Seminario Teológico Bautista de La Habana sirvió junto
          a su esposo en algunas iglesias en el centro de la isla. Es
          responsable por la enseñanza de mujeres en la Iglesia Bautista Nueva
          Vida donde también sirve como maestra de niños. Vive en La Habana
          junto a su esposo. Lourdes administra la visión y la coordinación de
          los Talleres en Exposición Bíblica para mujeres; y contribuye a la
          organización y funcionamiento de nuestro Curso en Exposición Bíblica
          (Plan Habana). Lourdes responde directamente al Director de
          Ministerios, al Director de Entrenamientos y al tesorero de la Junta
          de Directores.
        </p>
      </Modal.Body>
    </Modal>
  );
}
export function DayanModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img
          className="nuestro-equipo-modal__img"
          src="../images/nosotros/dayan.png"
          alt=""
        />

        <Modal.Title id="contained-modal-title-vcenter">
          Dayán Frontela
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Dayán Frontela sirve como Administrador. Desde su conversión ha estado
          involucrado en el servicio dentro de la iglesia. Es diácono en la
          Iglesia Bautista Nueva Vida donde también tiene un rol administrativo.
          Vive en La Habana junto a su esposa Lesley y su hija Verónica. Dayán
          es responsable por la administración y funcionamiento de la logística
          del ministerio. Coordina y ejecuta todo lo referente a viajes,
          alojamiento y otras necesidades de los talleres en exposición bíblica,
          tanto para hombres como para mujeres, así como para Plan Habana y
          COBIME. Él también contribuye a suplir las necesidades logísticas de
          cualquier área del ministerio. Dayán responde al Director de
          Ministerios.{" "}
        </p>
      </Modal.Body>
    </Modal>
  );
}
