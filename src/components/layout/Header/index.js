import MainMenu from "../Menu";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "@/images/mainLogo.png";
import Mail from "@/images/email1.svg";
import Telephone from "@/images/telephone1.svg";
import Facebook from "@/images/facebookLink.png";
import Twitter from "@/images/twitter.png";
import Instagram from "@/images/instagram.png";
import Phone from "components/icons/Phone";
import cx from "classnames";

export default function Header(props) {
  return (
    <div className={styles.component} {...props}>
      <div className={styles.media}>
        {" "}
        <div className={styles.wrappermedia}>
          <div className={styles.button}>
            <div className={styles.icon}>
              <i className={styles.fabfafacebookf}>
                <Image
                  className={styles.imageMedia}
                  src={Facebook}
                  alt="Picture of Grandiflores"
                />
              </i>
            </div>
            <span>Facebook</span>
          </div>
          <div className={styles.button}>
            <div className={styles.icon}>
              <i className={styles.fabfatwitter}>
                <Image
                  className={styles.imageMedia}
                  src={Twitter}
                  alt="Picture of Grandiflores"
                />
              </i>
            </div>
            <span>Twitter</span>
          </div>
          <div className={styles.button}>
            <div className={styles.icon}>
              <i className={styles.fabfainstagram}>
                <Image
                  className={styles.imageMedia}
                  src={Instagram}
                  alt="Picture of Grandiflores"
                />
              </i>
            </div>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <Image
          className={styles.logo}
          src={MainLogo}
          alt="Picture of Grandiflores"
        />

        <div className={styles.content}>
          <div className={styles.phoneNumber}>
            <Link href="#4505602886" className={styles.phoneNumber}>
              <Image
                className={styles.phoneIcone}
                src={Telephone}
                alt="Picture of Grandiflores"
              />
            </Link>
            <Link href="#4505602886" className={styles.phoneNumber}>
              <Image
                className={styles.phoneIcone}
                src={Mail}
                alt="Picture of Grandiflores"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className={styles.mainImage}>
//         <Image
//           className={styles.logo}
//           src={require("../../../assets/images/mainLogo.png")}
//           alt="Picture of Grandiflores"
//         />
//       </div>
//       <div className={styles.box}>
//         <div className={styles.avatar}></div>
//         <div className={styles.content}>
//           Laissez un message au numéro ou au email suivant :
//           {/* Laissez une message au numéro ou au email suivant et il nous
//                 fera un plaisir de répondre dans les plus bref délais : */}
//           <p>
//             <strong>• 450 560-2886</strong> <br></br>
//             <strong>• homeovertnature@gmail.com</strong>
//           </p>
//         </div>
//       </div>
