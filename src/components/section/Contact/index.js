import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.component}>
      <div className={styles.contact}>
        <div className={styles.responsiveMap}>
          <iframe
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=2050&amp;height=650&amp;hl=fr&amp;q= Les Pays D'en Haut (Québec)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className={styles.footer}>
          <div className={styles.top}>
            <h2>Quota</h2>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              accusantium?"
            </p>
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
