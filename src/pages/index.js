import Head from "next/head";
import Header from "../components/Header";
import Bio from "../components/Bio";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl bg-primary px-5 py-10">
      <Header />
      <aside className="block">
        <Bio />
      </aside>
    </div>
  );
}
