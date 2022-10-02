import { getDatabase } from "../api/notion";
import Link from "next/link";
import { Text } from "../../components/Text";
import styles from "../../styles/Writing.module.css";
import { head } from "../../lib/data";
import Head from "next/head";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Writing({ posts }) {
  return (
    <>
      <Head>
        <title>{head.writeTitle}</title>
        <meta name="description" content={head.writeDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={head.writeTitle} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            head.writeTitle
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>

      <div className={styles.root}>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <span className={styles.postDate}>{date}</span>
                <h3 className={styles.postTitle}>
                  <Link href={`writing/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
