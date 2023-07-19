import styles from "./portfolio.module.css";
import rick from "../../assets/rick5.jpg";
import DD from "../../assets/DD.jpg";
import countries from "../../assets/countries.jpg";
// import BB from '../../assets/Breaking-bad2.jpg'

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" className={styles.portfolio}>
        <div className={styles.contenido_seccion}>
          <h2>Portfolio</h2>
          <div className={styles.galeria}>
            <div className={styles.proyecto}>
              <img src={DD} alt="Not found" />
              <div className={styles.overlay}>
                <a
                  href="https://henry-pf-iota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Proyecto Grupal</h3>
                  <p>Dos Dagas</p>
                </a>
              </div>
            </div>

            <div className={styles.proyecto}>
              <img src={countries} alt="Not found" />
              <div className={styles.overlay}>
                <a
                  href="https://deploy-lfceras.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Proyecto Individual</h3>
                  <p>Countries</p>
                </a>
              </div>
            </div>

            {/* <div className={styles.proyecto}>
            <img src={BB} alt="Not found" />
            <div className={styles.overlay}>
              <h3>Proyecto Repaso</h3>
              <p>Breaking Bad</p>
            </div>
          </div> */}

            <div className={styles.proyecto}>
              <img src={rick} alt="Not found" />
              <div className={styles.overlay}>
                <h3>Proyecto Repaso</h3>
                <p>Rick and Morty</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
