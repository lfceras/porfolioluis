import { FaAngleDoubleUp } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#inicio" className={styles.arriba}>
          <FaAngleDoubleUp />
        </a>
        <div className={styles.redes}>
          <a href=" https://github.com/lfceras" target="_blank">
            <ImGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luiscerasanjuan/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
