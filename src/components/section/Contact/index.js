import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.component}>
      <div className={styles.contact}>
        <h2>Nous Couvrons La Rive Nord De Montreal</h2>
        <div className={styles.timeTable}>
          <h3>Horaire</h3>
          <p>Lundi *Fermé*</p>
          <p>Mardi *Fermé*</p>
          <p>Mercredi 10h-18h</p>
          <p>Jeudi 10h-18h</p>
          <p>Vendredi 10h-18h</p>
          <p>Samedi 12h-20h</p>
          <p>Dimanche 12h-18h</p>
        </div>
        <div className={styles.responsiveMap}>
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=2050&amp;height=650&amp;hl=fr&amp;q= Les Pays D'en Haut (Québec)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
