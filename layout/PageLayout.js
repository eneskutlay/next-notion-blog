import Navbar from "../components/Navbar";
import styles from "./PageLayout.module.css";

export default function PageLayout({ children }) {
  return (
    <main className={styles.root}>
      <Navbar />
      {children}
    </main>
  );
}
