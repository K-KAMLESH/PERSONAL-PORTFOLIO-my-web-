import React from "react";
import skills from "../../skills.json";
import styles from "./Resume.module.css";
import certifications from "../../certifications.json";
function Resume() {
  return (
    <section className={styles.container} id="resume">
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.resume}>
        <div className={styles.educationBox}>
          <h2 className={styles.subtitle}>Education</h2>
          <p className={styles.education}>
            Bachelor of Technology in Computer Science, Rajasthan Technical
            University (2019 - 2023)
          </p>
        </div>

        <div className={styles.experienceBox}>
          <h2 className={styles.subtitle}>Experience</h2>
          <p className={styles.experience}>
            1. Frontend Developer - Self-Driven Projects | Jan 2025 – Present
          </p>
          <p className={styles.experience}>
            2. Created real-world projects such as a Weather App, Portfolio
            Website, Music Player , Calculator and interactive forms with
            EmailJS integration. mentioned above at Project section.
          </p>
        </div>

        <div className={styles.certifications}>
          <h2 className={styles.subtitle}>Certifications</h2>
          <ul className={styles.certificationList}>
            {certifications.map((certificate, index) => {
              return (
                <li className={styles.certificate} key={index}>
                  <p>
                    <a href="#">{certificate.title}</a>
                  </p>
                  <div>
                    <span>{certificate.from}</span> -
                    <span>{certificate.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.skills}>
          <h2 className={styles.subtitle}>Skills</h2>

          <div className={styles.skillset}>
            {skills.map((skills, index) => {
              return (
                <div className={styles.skillContainer} key={index}>
                  <div className={styles.skillBox}>
                    {" "}
                    <h5> {skills.title.toUpperCase()}:</h5>
                    <img src={skills.imgUrl} alt={skills.title} />
                  </div>
                  <span className={styles.progressBar}>
                    <span
                      className={
                        styles[`${skills.title.toLowerCase()}Progress`]
                      }
                    ></span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
// Git, GitHub, Agile Methodologies, RESTful APIs, Responsive Design
// , HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
