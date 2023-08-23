import { useState } from "react";
import styles from "./MainMenu.module.scss";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function MainMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.component} {...props}>
      <div className={cx(styles.menu, !isOpen && styles.hiddenMenu)} id="menu">
        <div
          className={cx(styles.closedMenu, isOpen && styles.hidden)}
          onClick={toggleMenu}
        >
          <div className={styles.mainMenu}></div>
        </div>
        <span onClick={toggleMenu} className={styles.exitMenu}>
          <Image
            className={styles.logo2}
            src={require(`../../../assets/images/montagne.png`)}
            alt="Picture of the author"
            style={{ width: "35px", height: "35px" }}
          />
          <div className={styles.shadow}></div>
        </span>
        <div className={styles.option}>
          <Link href="/">
            <Image
              className={styles.Home}
              src={require(`../../../assets/images/user.png`)}
              alt="Picture of the author"
              style={{ width: "35px", height: "35px" }}
            />
          </Link>
          <Link href="/publication">
            <Image
              className={styles.Home}
              src={require(`../../../assets/images/home.png`)}
              alt="Picture of the author"
              style={{ width: "35px", height: "35px" }}
            />
          </Link>
          <Link href="/publication">
            <Image
              className={styles.Home}
              src={require(`../../../assets/images/calendar.png`)}
              alt="Picture of the author"
              style={{ width: "35px", height: "35px" }}
            />
          </Link>
          <Link href="/contact">
            <Image
              className={styles.cart}
              src={require(`../../../assets/images/cart.png`)}
              alt="Picture of the author"
              style={{ width: "43px", height: "43px" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
