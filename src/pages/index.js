import { getDatabase } from "./api/notion";
import Head from "next/head";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Article from "../components/Article";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl bg-primary px-5 py-10">
      <Header />
      <aside className="block">
        <Bio />
      </aside>
      {posts.map((post) => {
        const date = new Date(post.last_edited_time).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
        return (
          <main key={post.id} className="block">
            <Article
              title={post.properties.Name.title[0].plain_text}
              date={date}
              summary={post.properties.Summary.rich_text[0].plain_text}
              href="/" //`writing/${post.id}`
            />
          </main>
        );
      })}
    </div>
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
