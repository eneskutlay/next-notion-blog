export const siteMetaData = {
  siteName: "John Doe's Blog",
  siteUrl: "https://nextjs-notionapi-blog.vercel.app",
  authorName: "John Doe",
  twitterUserName: "enesevski",
  githubUserName: "eneskutlay",
};

export const rssData = {
  rssTitle: `${siteMetaData.siteName}`,
  rssDescription: "John Doe's Blog",
  rssFeedUrl: `${siteMetaData.siteUrl}/rss`,
  rssSiteUrl: `${siteMetaData.siteUrl}`,
  rssLanguage: "en",
  rssAuthorName: `${siteMetaData.authorName}`,
  rssCategories: ["Tech", "Programming", "Web Development"],
};
