import styles from './Home.module.css'
import image from '../../assets/copia.png'
import {ImGithub} from 'react-icons/im'
import {GrLinkedin} from 'react-icons/gr'

const Home = () => {
  return (
    <div>
      <section id="inicio" className={styles.inicio}>
        <div className={styles.contenido_banner}>
          <div className={styles.contenedor_img}>
            <img src={image} alt="Not found" />
          </div>
          <h1>LUIS CERA</h1>
          <h2>Full Stack Web Developer</h2>
          <div className={styles.redes}>
            <a href=" https://github.com/lfceras" target="_blank">
              <ImGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/luiscerasanjuan/"
              target="_blank"
              rel="noreferrer"
            >
            <GrLinkedin/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
