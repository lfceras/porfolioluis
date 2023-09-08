import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div>
      <section id="skills" className={styles.skills}>
        <div className={styles.contenido_seccion}>
          <h2>Skills</h2>
          <div className={styles.fila}>
            {/* <!-- Technical Skills --> */}
            <div className={styles.col}>
              <h3>Technical Skills</h3>

              <div className={styles.skill_box}>
                <span className={styles.title}>Javascript</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.javascript}`}>
                    <span className={styles.tooltip}>70%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>HTML</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.html}`}>
                    <span className={styles.tooltip}>85%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>CSS</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.css}`}>
                    <span className={styles.tooltip}>85%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Redux</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.redux}`}>
                    <span className={styles.tooltip}>70%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>React js</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.react}`}>
                    <span className={styles.tooltip}>70%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Tailwind CSS</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.react}`}>
                    <span className={styles.tooltip}>60%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Node JS</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.react}`}>
                    <span className={styles.tooltip}>80%</span>
                  </div>
                </div>
              </div>

            </div>

            {/* <!-- Professional Skills --> */}
            <div className={styles.col}>
              <h3>Professional Skills</h3>


              <div className={styles.skill_box}>
                <span className={styles.title}>Comunicacion</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.comunicacion}`}>
                    <span className={styles.tooltip}>80%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Trabajo en Equipo</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.equipo}`}>
                    <span className={styles.tooltip}>89%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Creatividad</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.creatividad}`}>
                    <span className={styles.tooltip}>90%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill_box}>
                <span className={styles.title}>Dedicacion</span>
                <div className={styles.skill_bar}>
                  <div className={`${styles.skill_per} ${styles.dedicacion}`}>
                    <span className={styles.tooltip}>80%</span>
                  </div>
                </div>
              </div>

              {/* <div className={styles.skill}>
                <span>Trabajo en Equipo</span>
                <div className={styles.barra_skill}>
                  <div className={styles.progreso}>
                    <span>89%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill}>
                <span>Creatividad</span>
                <div className={styles.barra_skill}>
                  <div className={styles.progreso}>
                    <span>90%</span>
                  </div>
                </div>
              </div>

              <div className={styles.skill}>
                <span>Dedicacion</span>
                <div className={styles.barra_skill}>
                  <div className={styles.progreso}>
                    <span>80%</span>
                  </div>
                </div>
              </div> */}


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
