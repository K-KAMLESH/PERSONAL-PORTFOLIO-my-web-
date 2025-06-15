import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
const App = () => {
  const colors = [
    "goldenrod",
    "bisque",
    "orange",
    "tomato",
    "brown",
    "silver",
    "aliceBlue",
  ];

  const changeColor = (color) => {
    document.documentElement.style.setProperty("--color-primary", color);
  };

  return (
    <div className={styles.container}>
      <a href="#">
        <i class="fa-solid fa-arrow-up " id={styles.icon}></i>
      </a>
      <div className={styles.sideBar}>
        <ul className={styles.colors}>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                listStyleType: "none",
                backgroundColor: color,
                width: "100%",
                minWidth: "10px",
                height: "10px",
                borderRadius: "20px",
                border: "1px solid var(--color-primary)",
                margin: "10px auto",
                cursor: "pointer",
              }}
              onClick={() => {
                changeColor(color);
              }}
            ></li>
          ))}
        </ul>
      </div>

      <div className={styles.scrollbar}></div>
      <Navbar />

      <div className={styles.slide}></div>
      <Hero />
      <div className={styles.slide}></div>
      <Projects />
      <div className={styles.slide}></div>
      <Resume />
      <div className={styles.slide}></div>

      <About />
      <div className={styles.slide}></div>
      <Contact />
    </div>
  );
};

export default App;
