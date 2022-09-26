import styles from "../styles/Home.module.css";
import { personal, projects } from "../lib/data.js";
//import SocialLinks from "../components/SocialLinks.js";
import Card from "../components/Card/Card.js";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.profileDetails}>
        <h1> {`Hello, my name is ${personal.name}`}</h1>
        <p>
          I'm a {`${personal.title}`}. Right now I'm student on the{" "}
          {`${personal.school}`} Previously I was two months of front-end
          internship at {`${personal.company}`} In my free time I try to develop
          open source projects and learn new things.
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
    </div>
  );
}
