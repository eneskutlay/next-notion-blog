import styles from "./SocialLinks.module.css";
import { profiles } from "../../lib/data";

export default function SocialLinks() {
  return (
    <div className={styles.root}>
      <div className={styles.socialLinks}>
        <a
          target="_blank"
          rel="noreferrer"
          href={profiles.github.url}
        >{`${profiles.github.title}`}</a>
        <a
          target="_blank"
          rel="noreferrer"
          href={profiles.twitter.url}
        >{`${profiles.twitter.title}`}</a>
        <a target="_blank" rel="noreferrer" href={profiles.linkedin.url}>
          {`${profiles.linkedin.title}`}
        </a>
        <a href="/" download>
          Resume
        </a>
      </div>
    </div>
  );
}
