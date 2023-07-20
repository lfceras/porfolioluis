import styles from "./about_me.module.css";
import { LuGamepad2 } from "react-icons/lu";
import { ImHeadphones } from "react-icons/im";
import { FaPlane, FaBasketballBall, FaBook, FaCar } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
import english from "../../curriculums/Curriculum-english.pdf";
import spanish from "../../curriculums/Curriculum-spanish.pdf";

const About_me = () => {
  return (
    <div>
      <section id="sobremi" className={styles.sobremi}>
        <div className={styles.contenido_section}>
          <h2>Sobre Mi</h2>
          <p>
            <span>Hola, soy Luis Cera</span> una persona siempre dispuesta a
            aprender y afrontar grandes desafios. Soy Desarrollador Web
            Fullstack, egresado del Bootcamp SoyHenry, con mas de 700 Horas de
            aprendizaje en Tecnologias de Programacion Web. Asi mismo me
            apasiona el aprendizaje constante de diversas tecnologias. Soy una
            persona que le gusta trabajar en equipo para llegar a objetivos en
            comun y siempre ser activo en ayudar a quien necesite de mi ayuda,
            tambien me gusta escuchar a todos aquellos que lo necesiten. Tambien
            me gusta escuchar a todos aquellos que quieran orientarme para
            llegar a un objetivo en comun de forma mas eficiente y en el menor
            tiempo posible
          </p>

          <div className={styles.fila}>
            {/* <!-- Datos personales --> */}
            <div className={styles.col}>
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Cumpleaños</strong>
                  02- 11- 1991
                </li>
                <li>
                  <strong>Telefono</strong>
                  +57 322 645 5432
                </li>
                <li>
                  <strong>Email</strong>
                  lcerasanjuan@gmail.com
                </li>
                <li>
                  <strong>Direccion</strong>
                  Medellin, Antioquia - Colombia
                </li>
                <li>
                  <strong>Cargo</strong>
                  <span>Full Stack Web Developer</span>
                </li>
              </ul>
            </div>
            {/* <!-- Intereses --> */}
            <div className={styles.col}>
              <h3>Intereses</h3>
              <div className={styles.contenedor_intereses}>
                <div className={styles.interes}>
                  <LuGamepad2 size={40} color="white" />
                  <span>JUEGOS</span>
                </div>
                <div className={styles.interes}>
                  <ImHeadphones size={40} color="white" />
                  <span>MUSICA</span>
                </div>
                <div className={styles.interes}>
                  <FaPlane size={40} color="white" />
                  <span>VIAJAR</span>
                </div>
                <div className={styles.interes}>
                  <FaBasketballBall size={40} color="white" />
                  <span>BASKET</span>
                </div>
                <div className={styles.interes}>
                  <FaBook size={40} color="white" />
                  <span>LIBROS</span>
                </div>
                <div className={styles.interes}>
                  <FaCar size={40} color="white" />
                  <span>AUTOS</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonss}>
            <button>
              <a href={english} download="Curriculum English PDF">
                Descargar CV English
              </a>
              <BsCloudDownload
                size={15}
                style={{ marginLeft: 10, marginTop: 5 }}
              />
              <span className={styles.overlay}></span>
            </button>

            <button>
              <a href={spanish} download="Curriculum Spanish PDF">
                Descargar CV Español
              </a>
              <BsCloudDownload
                size={15}
                style={{ marginLeft: 10, marginTop: 5 }}
              />
              <span className={styles.overlay}></span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_me;
