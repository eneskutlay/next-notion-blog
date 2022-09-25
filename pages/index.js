import styles from "../styles/Home.module.css";
import Link from "next/link";


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home() {
  return (
    <div>
      <Link href="/writing">
        <a>Blog</a>
      </Link>
    </div>
  );
}
