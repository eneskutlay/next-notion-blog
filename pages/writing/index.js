import { getDatabase } from "../api/notion";
import Link from "next/link";
import { Text } from "../../components/Text";
import styles from "../../styles/Writing.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Writing({ posts }) {
  return (
    <div className={styles.root}>
      <ol className={styles.posts}>
        {posts.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
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
  );
}

/*

    <div>
      <h2 className={styles.heading}>All Posts</h2>
      <ol className={styles.posts}>
        {posts.map((post) => {
          console.log(post)
          return (
            <li key={post.id} className={styles.post}>
              <h3 className={styles.postTitle}>
                <Link href={`/${post.id}`}>
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


*/

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
