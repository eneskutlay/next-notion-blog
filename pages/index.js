import styles from "../styles/Home.module.css";
import { personal, projects } from "../lib/data.js";
import Connect from "../components/Connect/Connect.js";
import Card from "../components/Card/Card.js";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.profileDetails}>
        <h1> {`Hello, my name is ${personal.name}`}</h1>
        <p>
          I'm a {`${personal.title}`}. Right now I'm student on the
          <a
            href="_blank"
            rel="noopener noreferrer"
          >{`${personal.school}`}</a>{" "}
          Previously I was two months of front-end internship at{" "}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >{`${personal.company}`}</a>{" "}
          In my free time I try to develop open source projects and learn new
          things.
        </p>
      </div>
      <div className={styles.projects}>
        <h2>Some Projects</h2>
        <div className={styles.someProjects}>
          {projects.map((project) => {
            const { title, url, lang } = project;
            return (
              <Card
                key={`project_${url}`}
                title={title}
                url={url}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
      <Connect />
    </div>
  );
}
