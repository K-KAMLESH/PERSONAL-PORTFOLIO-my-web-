import socials from "../../socialLinks.json";
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
        {socials.map((social, index) => {
          return (
            <a key={index} href={social.targetUrl} className={styles.socialIcon}>
              {" "}
              <i className={`fa-brands fa-${social.title} `}></i>{" "}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Contact;
