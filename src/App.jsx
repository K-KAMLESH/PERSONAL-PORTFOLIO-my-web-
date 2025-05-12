import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <div className={styles.container}>
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
