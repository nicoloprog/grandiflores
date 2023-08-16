import styles from "./MainLayout.module.scss";
import Header from "../Header";
import Menu from "../Menu";

export default function MainLayout({ children, ...props }) {
  return (
    <div className={styles.component} {...props}>
      <Menu />
      <Header />
      {children}
    </div>
  );
}
