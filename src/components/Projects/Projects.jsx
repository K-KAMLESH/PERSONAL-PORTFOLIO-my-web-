import React from "react";
import styles from "./Projects.module.css";
import Project from "../Project/Project";
import projects from "../../projectData.json";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Projects</h1>

      <div className={styles.projects}>
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
