import styles from "./Connect.module.css";
import { profiles } from "../../lib/data";

export default function Connect() {
  return (
    <div className={styles.root}>
      <h2>Connect</h2>
      <div className={styles.socialLinks}>
        {profiles.map((profile) => {
          const { title, url } = profile;
          return (
            <div className={styles.socialItem}>
              <a
                key={`profile_${url}`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z"
                    data-name="5-Arrow Up"
                  />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
