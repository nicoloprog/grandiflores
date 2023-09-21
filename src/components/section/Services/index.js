import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.component}>
      <div className={styles.services}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
        <div className={styles.cardRemedies}>
          <div className={styles.aboutUs}>
            <h1>À propos de nous</h1>
            <p>
              Bienvenue chez Grandiflores, votre partenaire de confiance dans
              votre quête du bien-être holistique grâce à l'homéopathie. Animés
              par la passion pour la guérison naturelle et engagés envers des
              soins individualisés, nous nous consacrons à vous offrir des
              remèdes homéopathiques de la plus haute qualité et des solutions
              personnalisées.
            </p>
          </div>
          <div className={styles.container}>
            <div className={styles.bottle}>
              <div className={styles.prescription}>
                <div className={styles.paragraphs}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.logo}></div>
                <div className={styles.label}></div>
              </div>
            </div>
            <div className={styles.cap}>
              <div className={styles.cap_shadow}></div>
            </div>
            <div className={styles.bottle_shadow}></div>
          </div>
          <div className={styles.shadow2}></div>
        </div>
        <div className={styles.remedies}></div>
      </div>
    </div>
  );
};

export default Services;
