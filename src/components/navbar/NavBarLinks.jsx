/* eslint-disable react/prop-types */
import styles from './navbar.module.css'

const NavBarLinks = (props) => {
  // console.log(props);
  return (
    <div>
        <nav>
          <ul className={styles.navigation}>
            <li><a href="#inicio" onClick={ props.isMobile && props.closeMobileMenu}>INICIO</a></li>
            <li><a href="#sobremi" onClick={ props.isMobile && props.closeMobileMenu}>SOBRE MI</a></li>
            <li><a href="#skills" onClick={ props.isMobile && props.closeMobileMenu}>SKILLS</a></li>
            <li>
              <a href="#curriculum" onClick={ props.isMobile && props.closeMobileMenu}>CURRICULUM</a>
            </li>
            <li><a href="#portfolio" onClick={ props.isMobile && props.closeMobileMenu}>PORTFOLIO</a></li>
            <li><a href="#contacto" onClick={ props.isMobile && props.closeMobileMenu}>CONTACTO</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBarLinks