import Head from "next/head";
import Image from "next/image";
import Data from "../assets/data/oeuvres.json";
import { Inter } from "next/font/google";
import styles from "~styles/Home.module.scss";
import BurgerMenu from "components/layout/BurgerMenu/BurgerMenu";
import Header from "components/layout/Header/Header";
import MainLayout from "components/layout/MainLayout/MainLayout";
import Link from "next/link";
import cx from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.component}>
        {/* Page d'accueil */}
        <div id="accueil">
          <div className={styles.wrapper1}>
            {/* <div className={cx(styles.liste)}>
              {Data.oeuvres.map((oeuvre) => {
                return (
                  <Link className={styles.link} href={`/oeuvre/${oeuvre.id}`}>
                    <div className={styles.oeuvre}>
                      <Image
                        src={require(`~assets/images/${oeuvre.imagePrincipal}`)}
                        alt="Picture of the author"
                        fill
                      />
                    </div>
                    <div className={styles.titre}>{oeuvre.titre}</div>
                  </Link>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
