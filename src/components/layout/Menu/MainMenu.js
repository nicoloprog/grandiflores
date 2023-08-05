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
            style={{ width: "43px", height: "43px" }}
          />
          <div className={styles.shadow}></div>
        </span>
        <div className={styles.option}>
          <Link href="/">
            ❖
            {/* <Image
              src={require(`../../../assets/images/montagne.png`)}
              alt="Picture of the author"
              style={{ width: "30px", height: "30px" }}
            /> */}
          </Link>
          <Link href="/publication">❖</Link>
          <Link href="/publication">❖</Link>
          <Link href="/contact">❖</Link>
        </div>
      </div>
    </nav>
  );
}
