import { getDatabase } from "./api/notion";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Article from "../components/Article";
import Head from "next/head";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Notion Blog</title>
        <meta name="description" content="Notion Blog" />
      </Head>

      {posts.map((post) => {
        const date = new Date(post.last_edited_time).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
        return (
          <Article
            key={post.id}
            title={post.properties.Name.title[0].plain_text}
            date={date}
            summary={post.properties.Summary?.rich_text[0]?.plain_text ?? ""}
            href={`/${post.id}`}
          />
        );
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
  };
};
