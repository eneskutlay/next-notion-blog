import styles from "../styles/Home.module.css";
import { personal, projects, head } from "../lib/data.js";
import Connect from "../components/Connect/Connect.js";
import Card from "../components/Card/Card.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{head.homeTitle}</title>
        <meta name="description" content={head.homeDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={head.homeTitle} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            head.homeTitle
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>
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
    </>
  );
}
