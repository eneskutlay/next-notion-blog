import { Client } from "@notionhq/client";
import RSS from "rss";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async (req, res) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const feed = new RSS({
    title: "Blog Adı",
    description: "Blog açıklaması",
    feed_url: "http://localhost:3000/rss",
    site_url: "http://localhost:3000",
    language: "tr",
    pubDate: new Date(),
  });

  response.results.forEach((page) => {
    const date = new Date(page.last_edited_time).toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    feed.item({
      title: page.properties.Name.title[0].plain_text,
      description: page.properties.Summary.rich_text[0].text.content,
      date: date,
      url: "http://localhost:3000/" + page.id,
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(feed.xml());
  res.end();
};
