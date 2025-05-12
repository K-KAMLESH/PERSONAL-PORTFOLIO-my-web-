import React from "react";
import styles from "./Project.module.css";
function Project({ project, index }) {
  return (
    <div className={styles.container} key={index}>
      <h2 className={styles.title}>{project.title}</h2>

      <img
        className={styles.projectImage}
        src={project.imgUrl}
        alt={project.title}
      />

      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectLinks}>
        <a className={styles.projectView} href="#">
          View Project
        </a>
        <a className={styles.projectLink} href="#">
          github
        </a>
      </div>
    </div>
  );
}

export default Project;
