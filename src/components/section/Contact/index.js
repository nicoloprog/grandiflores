import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.component}>
      <div className={styles.contact}>
        <div className={styles.footer}>
          <div className={styles.top}>
            <h2>Quota</h2>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              accusantium?"
            </p>
            <ul className={styles.icons}>
              <ion-icon className={styles.icon} name="logo-facebook"></ion-icon>
              <ion-icon
                className={styles.icon}
                name="logo-instagram"
              ></ion-icon>
              <ion-icon className={styles.icon} name="logo-twitter"></ion-icon>
              <ion-icon className={styles.icon} name="logo-youtube"></ion-icon>
            </ul>
          </div>
          <div className={styles.aside}>
            <ul className={styles.category}>
              <li>
                <h3>Project</h3>
              </li>
              <li>Houses</li>
              <li>Rooms</li>
              <li>Flats</li>
              <li>Apartments</li>
            </ul>
            <ul className={styles.category}>
              <li>
                <h3>Company</h3>
              </li>
              <li>Objective</li>
              <li>Capital</li>
              <li>Security</li>
              <li>Selling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
