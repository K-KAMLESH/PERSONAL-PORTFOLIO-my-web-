import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>

      <div className={styles.left}>
        <p>hi i am:</p>
        <h1 className={styles.name}>kamlesh</h1>
        <h2 className={styles.profession}>web developer</h2>
        <div className={styles.hireMe}>hire me!</div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.heroImage}
          src="../../src/assets/heroImage.png"
          alt="heroImage"
        />
      </div>
  
    </section>
  );
}

export default Hero;
