import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.component}>
      <div className={styles.contact}>
        <h2>Couvre La Rive Nord De Montréal Et La Région Des Laurentides</h2>
        <div className={styles.timeTable}>
          <h3>Horaire</h3>
          <p>Lundi: 10h à 18h</p>
          <p>Mardi: 10h à 18h</p>
          <p>Mercredi: 10h à 18h</p>
          <p>Jeudi: 10h à 18h</p>
          <p>Vendredi: 10h à 18h</p>
          <p>Samedi: 12h à 20h</p>
          <p>Dimanche: 12h à 20h</p>
        </div>
        <iframe
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=350&amp;height=350&amp;hl=fr&amp;q= Les Pays D'en Haut (Québec)&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <div className={styles.footer}>
          <div className={styles.top}>
            <h2>❂Grandiflores</h2>
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
