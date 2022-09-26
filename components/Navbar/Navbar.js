import Link from "../ActiveLink";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link activeClassName={styles.activeLinks} href="/">
        <a className={styles.home}>Home</a>
      </Link>
      <div className={styles.links}>
        <Link activeClassName={styles.activeLinks} href="/about">
          <a className={styles.about}>About</a>
        </Link>
        <Link activeClassName={styles.activeLinks} href="/writing">
          <a className={styles.writing}>Writing</a>
        </Link>
      </div>
    </div>
  );
}
