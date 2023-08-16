import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.component}>
      <div className={styles.services}>
        <div className="container">
          <div className={styles.cardRemedies}>
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
        </div>
      </div>
      <div className={styles.remedies}></div>
    </div>
  );
};

export default Services;
