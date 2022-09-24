import styles from "../styles/Home.module.css";
import { Client } from "@notionhq/client";

export default function Home({ results }) {
  //console.log(results[0].properties.Page.title[0].plain_text);
  console.log(results)
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    props: {
      results: response.results,
    },
  };
}
