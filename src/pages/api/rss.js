import { Client } from "@notionhq/client";
import RSS from "rss";
import { rssData } from "../../utils/config";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const generateRssFeed = async (req, res) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const feed = new RSS({
    title: rssData.rssTitle,
    description: rssData.rssDescription,
    feed_url: rssData.rssFeedUrl,
    site_url: rssData.rssSiteUrl,
    language: rssData.rssLanguage,
    pubDate: new Date(),
    author: rssData.rssAuthorName,
    categories: rssData.rssCategories,
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
      url: `${rssData.site_url}/` + page.id,
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(feed.xml());
  res.end();
};
