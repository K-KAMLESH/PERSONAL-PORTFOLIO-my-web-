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
          <a href="#contact" className={styles.hireMe}>
            hire me!
          </a>{" "}
          <a
            href="Kamlesh-Bairwa-Resume-Updated2025.pdf"
            className={styles.downloadButton}
          >
            Resume!
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <img
          className={styles.heroImage}
          src="assets/heroImage.png"
          alt="heroImage"
        />
      </div>
    </section>
  );
}

export default Hero;
