import React from "react";
import Head from "next/head";
import { siteMetaData } from "@/utils/config";
export default function Seo({ title, description, ogImageUrl }) {
  ogImageUrl =
    ogImageUrl ||
    `https://enes-og-image.vercel.app/api/og?title=${encodeURIComponent(
      siteMetaData.siteName
    )}`;
  title = title || siteMetaData.siteName;
  description = description || siteMetaData.siteDescription;
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="author" content={siteMetaData.authorName} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetaData.twitterUserName} />
    </Head>
  );
}