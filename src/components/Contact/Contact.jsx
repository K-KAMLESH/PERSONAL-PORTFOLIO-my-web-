import React from "react";
import styles from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xveku1c", "template_tbgpjis", form.current, {
        publicKey: "X00POUYwZgzwdZvut",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
  };

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.contact}>
        <h1 className={styles.title}>CONTACT:</h1>
        <form className={styles.form} onSubmit={sendEmail} ref={form}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name : </label>
            <input
              defaultValue=""
              type="text"
              id="name"
              name="name"
              placeholder="chris evans"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="number">Contact : </label>
            <input
              defaultValue=""
              type="number"
              id="number"
              name="number"
              placeholder="1234567890"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email : </label>
            <input
              defaultValue=""
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="address">Address</label>
            <input
              defaultValue=""
              type="text"
              name="address"
              id="address"
              placeholder="your address"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="message">Message</label>
            <textarea
              defaultValue=""
              name="message"
              id="message"
              placeholder="your message"
              required
            ></textarea>
          </div>
          <input type="submit" className={styles.submit} value="send"></input>
        </form>
      </div>

      <div className={styles.icons}>
        <a href="https://www.facebook.com/share/1F37B8c2ju/" target="_blank">
          <img src="../../src/assets/facebook.svg" alt="facebookIcon" />
        </a>
        <a
          href="https://www.instagram.com/kamlesh.exe?igsh=dm9uNHZjbTR4ODQ2"
          target="_blank"
        >
          <img src="../../src/assets/instagram.svg" alt="instagramIcon" />
        </a>
        <a href="http://wa.me/7877449689" target="_blank">
          <img src="../../src/assets/whatsapp.svg" alt="WhatsappIcon" />
        </a>
        <a
          href="https://www.snapchat.com/add/etherealpulse?share_id=zLEyMwm0_Bk&locale=en-GB"
          target="_blank"
        >
          <img src="../../src/assets/snapchat.svg" alt="SnapchatIcon" />
        </a>
        <a href="https://www.threads.net/@kamlesh.exe" target="_blank">
          <img src="../../src/assets/thread.svg" alt="ThreadIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kamlesh-bairwa-2398a3191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <img src="../../src/assets/linkedin.svg" alt="LinkedinIcon" />
        </a>
        <a href="https://github.com/KAMLESH-566778" target="_blank">
          <img src="../../src/assets/github.svg" alt="GithubIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Contact;
