import Header from "./Header";
import Bio from "./Bio";
import Seo from "./Seo";

function Layout({ children }) {
  return (
    <>
      <Seo />
      <div className="mx-auto max-w-2xl bg-primary px-5 py-10">
        <Header />
        <aside className="block">
          <Bio />
        </aside>
        <main className="block">{children}</main>
      </div>
    </>
  );
}

export default Layout;
