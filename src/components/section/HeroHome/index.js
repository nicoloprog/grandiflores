import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import Data from "@/data/oeuvres.json";
import styles from "./HeroHome.module.scss";
import MainMenu from "@/layout/Menu";
import Header from "@/layout/Header";
import MainLayout from "@/layout/MainLayout";
import Carousel from "@/baseComponents/Carousel";
import Link from "next/link";
import cx from "classnames";
import BgImg from "@/images/background1.png";

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
      gap: "-105px",
    },
  },
};

const HeroHome = () => {
  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <h2>Un équilibre entre le corps et l'esprit</h2>
          <p>
            L'homéopathie offre des solutions naturelles pour vous accompagner
            vers une meilleure santé.
          </p>
          <Link href="#" className={styles.buttonBlue}>
            <span>Réserver une consultation</span>
          </Link>
        </div>
        <div className={cx(styles.carousel)}>
          <Splide options={carouselOptions}>
            items=
            {Data.oeuvres.map((oeuvre) => {
              return (
                <SplideSlide key={`splideslide-${oeuvre.titre}`}>
                  <Image
                    src={`/images/${oeuvre.imagePrincipal}`}
                    className={cx(styles.service)}
                    alt="Picture of the author"
                    width={90}
                    height={90}
                  />
                  <div className={styles.title}>{oeuvre.titre}</div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div className={styles.arrow}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
