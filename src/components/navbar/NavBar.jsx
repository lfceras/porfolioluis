
import NavBarMObile from './NavBarMObile'
import Navegacion from './Navegacion'
import styles from './navbar.module.css'


const NavBar = () => {

  return (
    <div className={styles.contenedor_header}>
      <header>
        <div className={styles.logo}>
          <a href="#">LUIS</a>
        </div>
        <Navegacion/>
        <NavBarMObile/>
      </header>
    </div>
  )
}

export default NavBar