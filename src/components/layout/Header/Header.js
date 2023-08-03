import MainMenu from "../Menu/MainMenu";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
  return (
    <div className={styles.component}>
      <div className={styles.sectionLogo}>
        <div className={styles.link}>
          <div className={styles.mainLogo}>
            <div className={styles.mainImage}>
              <Image
                className={styles.logo}
                src={require("../../../assets/images/mainLogo.png")}
                alt="Picture of Grandiflores"
              />
            </div>
            <div className={styles.box}>
              <div className={styles.avatar}></div>
              <div className={styles.content}>
                Laissez un message au numéro ou au email suivant :
                {/* Laissez une message au numéro ou au email suivant et il nous
                fera un plaisir de répondre dans les plus bref délais : */}
                <p>
                  <strong>• 450 560-2886</strong> <br></br>
                  <strong>• homeovertnature@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
