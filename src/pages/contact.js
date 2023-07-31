import styles from "~styles/Contact.module.scss";
import BurgerMenu from "components/layout/BurgerMenu/BurgerMenu";
import MainLayout from "components/layout/MainLayout/MainLayout";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <MainLayout>
      <div className={styles.component}>
        <div className={styles.contact}>
          <div className={styles.textLink}>
            <p>La patience et l’exubérance</p>
          </div>
          <Link
            className={styles.sourcelink}
            href={`https://www.lafabriqueculturelle.tv/capsules/2746/la-patience-et-l-exuberance-de-marilyse-goulet`}
          >
            <div className={styles.imageLink}>
              <Image
                className={styles.playLink}
                src={require("assets/images/play.png")}
                alt="action vers La patience et l’exubérance"
                fill
              />
              <Image
                className={styles.image}
                src={require("assets/images/marilyseGouletLink2.jpg")}
                alt="La patience et l’exubérance"
                fill
              />
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
