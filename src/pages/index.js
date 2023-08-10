import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Head from "next/head";
import Image from "next/image";
import Data from "../assets/data/oeuvres.json";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import MainMenu from "../components/layout/Menu/MainMenu";
import Header from "../components/layout/Header/Header";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import Carousel from "../components/base/Carousel/Carousel";
import Link from "next/link";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });
const carouselOptions = {
  pagination: false,
  type: "loop",
  arrows: false,
  rewind: false,
  pauseOnFocus: true,
  drag: "free",
  snap: true,
  autoplay: true,
  interval: 4500,
  speed: 1000,
  perPage: 1,
  gap: "0px",
  mediaQuery: "min",
  breakpoints: {
    540: {
      perPage: 4,
      perMove: 1,
      gap: "-175px",
    },
  },
};

export default function Home() {
  return (
    <MainLayout>
      <MainMenu />
      <div className={styles.component}>
        {/* Page d'accueil */}
        <div className={styles.blur1}>
          <div className={styles.navSpace}>
            <div className={styles.welcome}>
              <div className={styles.welcomeText}>
                <h1> L'homéopathie un équilibre avec le corps et l'esprit </h1>
                <p>
                  Nous offrons des solutions naturel et douces pour vous
                  accompagner vers une meilleure santé.
                </p>
                <Link href="#" className={styles.buttonBlue}>
                  <span>Réserver une consultation</span>
                </Link>
              </div>
            </div>
            <div className={cx(styles.carousel)}>
              <Splide options={carouselOptions}>
                items=
                {Data.oeuvres.map((oeuvre) => (
                  <SplideSlide>
                    <Image
                      src={require(`../assets/images/${oeuvre.imagePrincipal}`)}
                      alt="Picture of the author"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className={styles.title}>{oeuvre.titre}</div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className={styles.arrow}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.space}>
          <div className={styles.backgroundSpace}>
            <Image
              src={require(`../assets/images/background1.png`)}
              alt="Picture of the author"
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
          <div className={styles.blur2}></div>
        </div>
        <div className={styles.services}>
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
        <div className={styles.remedies}></div>
      </div>
    </MainLayout>
  );
}
