import styles from "./MainLayout.module.scss";
import Header from "../Header/Header";

export default function MainLayout({ children, ...props }) {
  return (
    <div className={styles.component} {...props}>
      <Header />
      {children}
    </div>
  );
}
