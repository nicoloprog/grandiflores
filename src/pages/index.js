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
  perPage: 1,
  perMove: 1,
  arrows: false,
  rewind: false,
  pauseOnFocus: true,
  drag: "free",
  snap: true,
  autoplay: true,
  interval: 3000,
  speed: 1000,
  gap: "7px",
  breakpoints: {
    450: {
      autoWidth: false,
      perPage: 1,
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
              <h1>Bienvenue chez Grandiflores</h1>
              <h3>- Votre voie vers la Médecine Naturelle -</h3>
              <p>
                La nature peut offrir des solutions efficaces pour votre
                bien-être. Notre mission est de vous guider vers une santé
                optimale et une vitalité équilibré grâce aux merveilles de la
                médecine naturelle. Dans un monde rempli de remèdes synthétiques
                et de solutions rapides, nous défendons avec conviction
                l'utilisation des bienfaits abondants de la nature. La médecine
                naturelle adopte une approche holistique qui ne se contente pas
                de traiter les symptômes, mais cherche également à découvrir les
                causes profondes des déséquilibres de santé.
              </p>
              <Link href="#" className={styles.buttonBlue}>
                <span>Réserver une rencontre immédiatement</span>
              </Link>
            </div>
            <div className={styles.arrow}>
              <span></span>
            </div>
            {/* <ul>
              <li>
                <Link href="/">Expositions</Link>
              </li>
              <li>
                <Link href="/publication">Publications</Link>
              </li>
              <li>
                <Link href="/publication">CV</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div className={styles.space}>
          <Image
            src={require(`../assets/images/background1.png`)}
            alt="Picture of the author"
            style={{ width: "100%", height: "90vh" }}
          />
          <div className={styles.blur2}></div>
        </div>
        <div className={styles.services}>
          <div className={cx(styles.carousel)}>
            <Splide options={carouselOptions}>
              items=
              {Data.oeuvres.map((oeuvre) => (
                <SplideSlide>
                  <Image
                    src={require(`../assets/images/${oeuvre.imagePrincipal}`)}
                    alt="Picture of the author"
                    style={{ width: "250px", height: "250px" }}
                  />
                  <div className={styles.title}>{oeuvre.titre}</div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className={styles.remedies}>
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
    </MainLayout>
  );
}
