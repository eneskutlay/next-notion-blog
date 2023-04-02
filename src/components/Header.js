import Link from "next/link";
import { siteMetaData } from "../utils/config";

function Header() {
  // Turn layout into a component
  return (
    <header className="mb-10 flex items-center justify-between">
      <Link href="/">
        <h1 className="py-0 font-montserrat text-3xl font-black text-title sm:text-4xl">
          {siteMetaData.siteName}
        </h1>
      </Link>
      <div className="">
        <a
          className="cursor-pointer px-4 text-secondary underline underline-offset-4"
          href={`${siteMetaData.siteUrl}/rss`}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
        <a
          className="cursor-pointer text-secondary underline underline-offset-4"
          href={`https://github.com/${siteMetaData.githubUserName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </header>
  );
}

export default Header;
