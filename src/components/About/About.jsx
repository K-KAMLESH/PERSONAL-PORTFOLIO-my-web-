import React from "react";
import styles from "./About.module.css";
import projectsData from "../../projectData.json";
function About() {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <ul className={styles.description}>
          <li>
            {" "}
            - Hello! I'm a passionate beginner Web Developer with a strong
            interest in creating clean, responsive, and user-friendly websites.
            I recently built this personal portfolio to showcase my skills and
            projects. I have a solid foundation in HTML, CSS, and JavaScript,
            and I'm continually expanding my knowledge by working on new
            challenges and learning modern frameworks and tools. I'm excited to
            grow as a developer, collaborate with others, and build digital
            experiences that make a difference.{" "}
          </li>{" "}
          <li>
            - Since 2024, I’ve been passionately building web applications that
            solve real-world problems and enhance user experience. From
            designing intuitive UIs to integrating APIs and deploying responsive
            apps, I’ve worked hands-on with React, JavaScript, HTML/CSS, and
            tools like EmailJS and GitHub.
            <h4>Some of my key projects include: </h4>
          </li>
          <div>
            <ul className={styles.keyProjects}>
              {projectsData.map((project, index) => {
                return (
                  <li key={index} className={styles.keyProject}>
                    <h5>{project.title} - </h5>
                    <p> {project.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <li>
            {" "}
            - I’m constantly learning, improving, and aiming to build beautiful,
            functional apps that are both user-focused and technically solid.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

