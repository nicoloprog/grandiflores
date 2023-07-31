import { useRouter } from "next/router";
import styles from "~styles/Exposition.module.scss";
import Data from "~assets/data/oeuvres.json";
import Image from "next/image";
import MainLayout from "components/layout/MainLayout/MainLayout";

export default function Home() {
  const router = useRouter();
  const { pid } = router.query;

  console.log("PID", pid);

  return (
    <MainLayout>
      <div className={styles.component}>
        {/* Page d'accueil */}
        <div id="accueil">
          <div className={styles.wrapper2}>
            <div className={styles.liste2}>
              {Data.oeuvres.map((oeuvre) => {
                return (
                  <>
                    {oeuvre.id == pid && (
                      <div>
                        <div>
                          <h4>{oeuvre.titre}</h4>
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire1}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire1}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire2}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire2}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire3}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire3}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire4}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire4}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire5}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire5}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire6}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire6}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire7}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire7}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire8}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire8}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire9}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire9}
                        </div>
                        <div className={styles.more}>
                          <Image
                            className={styles.imageMore}
                            src={require(`~assets/images/${oeuvre.imageSecondaire10}`)}
                            alt="Picture of the expo"
                            fill
                          />
                        </div>
                        <div className={styles.titre2}>
                          {oeuvre.titreSecondaire10}
                        </div>
                        {/* {oeuvre.prix}$ */}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
