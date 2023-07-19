import styles from './navbar.module.css'
import { VscMenu } from "react-icons/vsc";
// import { GrClose } from "react-icons/gr";
import { useState } from "react";
import NavBarLinks from './NavBarLinks';

const NavBarMObile = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <VscMenu
      className={styles.burger}
      onClick={() => setOpen(!open)}
    />
  );

  // const closeBurger = (
  //   <GrClose
  //     className={styles.burger}
  //     onClick={() => setOpen(!open)}
  //   />
  // );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className={styles.mobile}>
       {burgerIcon}
      {open && (
        <NavBarLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  )
}

export default NavBarMObile