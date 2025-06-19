import React from "react";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <p>hello I am:</p>
        <h1 className={styles.name}>kamlesh</h1>
        <h2 className={styles.profession}>FrontEnd Developer</h2>
        <div className={styles.hireMeButton}>
          <div className={styles.hireMe}>
            <a href="#contact">hire me!</a>
          </div>
          <div className={styles.downloadButtton}>
            {" "}
            <a href="KAMLESH RESUME UPDATED(2024).pdf">Resume!</a>
          </div>
        </div>
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
