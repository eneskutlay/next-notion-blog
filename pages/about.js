import styles from "../styles/About.module.css";
import { about } from "../lib/data";

export default function About() {
  return (
    <div className={styles.container}>
      {about.map((item) => (
        <div className={styles.aboutMeSections}>
          <p>{item.chapter}</p>
        </div>
      ))}
    </div>
  );
}
