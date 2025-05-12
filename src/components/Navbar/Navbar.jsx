import React, { useState } from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={styles.container}>
      <a className={styles.title} href="#">
        K$KAMLESH
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            openMenu
              ? "src/assets/close_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              : "src/assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          }
          alt="menuBtn"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <ul className={`${styles.links} ${openMenu && styles.activeLinks}`}>
          <li className={`${styles.link} ${styles.firstLink}`}>
            <a href="#resume">RESUME</a>
          </li>
          <li className={`${styles.link} ${styles.secondLink}`}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li className={`${styles.link} ${styles.thirdLink}`}>
            <a href="#contact">CONTACT</a>
          </li>
          <li className={`${styles.link} ${styles.fourthLink}`}>
            <a href="#about">ABOUT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
