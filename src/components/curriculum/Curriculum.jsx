import styles from './curriculum.module.css'


const Curriculum = () => {
  return (
    <div>
      <section id="curriculum" className={styles.curriculum}>
      <div className={styles.contenido_seccion}>
        <h2>Curriculum</h2>
        <div className={styles.fila}>
          <div className={`${styles.col} ${styles.izquierda}`}>
            <h3>Educacion</h3>  

            <div className={`${styles.item} ${styles.izq}`}>
              <h4>Full Stack Web Developer</h4>
              <span className={styles.casa}>Bootcamp SoyHenry</span>
              <span className={styles.fecha}>(Ene 2022 - Dic 2022</span>
              <p>
                Aprendizaje de manera teorica y practica con mas de 700 horas de
                en las siquientes tecnologias:
              </p>
              <ul>
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node js</li>
                <li>Express js</li>
                <li>Sequelize</li>
                <li>Postgres MySQL</li>
              </ul>
              <div className={styles.conectori}>
                <div className={styles.circuloi}></div>
              </div>
            </div>

            <div className={`${styles.item} ${styles.izq}`}>
              <h4>Tecnico en nomina y prestaciones sociales</h4>
              <span  className={styles.casa}>Servicio Nacional de Aprendizaje(SENA)</span>
              <span className={styles.fecha}>Mar 2016 - Mar 2017</span>
              <ul>
                <li>
                  Consultar y liquidar de manera eficiente todo lo referente a
                  saldos generados por la empresa.
                </li>
                <li>
                  Llevar de manera ordenada y controlada los registros de las
                  operaciones mercantiles realizadas por la empresa.
                </li>
              </ul>
              <div className={styles.conectori}>
                <div className={styles.circuloi}></div>
              </div>
            </div>

            <div className={`${styles.item} ${styles.izq}`}>
              <h4>Bachiller con Profundizacion en Educacion</h4>
              <span className={styles.casa}
                >Escuela Normal Superior de Manati(Atlantico)</span
              >
              <span className={styles.fecha}>2005 - 2010</span>
              <p>Formacion de Educacion Secundaria</p>
              <div className={styles.conectori}>
                <div className={styles.circuloi}></div>
              </div>
            </div>
          </div>

          <div className={`${styles.col} ${styles.derecha}`}>
            <h3>Experiencia de Trabajo</h3>
            <div className={`${styles.item} ${styles.der}`}>
              <h4>Soy Henry Bootcamp</h4>
              <span className={styles.casa}>Proyecto Indivdual </span>
              <span className={styles.fecha}>Oct 2022 - Nov 2022</span>
              <p>
                Diseño y desarrollo de una aplicacion web basada en Paises,
                aplicando filtros, ordenamientos, creacion, actualizacion y
                eliminado de base de datos. Tecnologias: React js, Redux, Node
                js, Express js, MySQL, Sequelize con Postgres. Experiencia:
                Manejo y aplicacion de todo lo aprendido durante la cursada con
                practicas e integracion entre tecnologias.
              </p>
              <div className={styles.conectord}>
                <div className={styles.circulod}></div>
              </div>
            </div>

            <div className={`${styles.item} ${styles.der}`}>
              <h4>Soy Henry Bootcamp</h4>
              <span className={styles.casa}>Proyecto Grupal</span>
              <span className={styles.fecha}>Nov 2022 - Dic 2022</span>
              <p>
                Diseño y desarrollo de un E-commerce dedicado a la venta de
                productos para el Asados, experiencia de usuario y manejo del
                comercio por parte del administrador. Tecnologias: React js,
                Redux, Node js, Express js, Mongo Db, Firebase. Experiencia:
                Integracion de diversas librerias como firebase para la
                autenticacion, tailwind css y nodemailer, etc. Por otro lado
                aplicamos metodologias agiles de trabajo en equipo tipo scrum
                para el objetivo general.
              </p>
              <div className={styles.conectord}>
                <div className={styles.circulod}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Curriculum