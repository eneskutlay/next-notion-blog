import Header from "./Header";
import Bio from "./Bio";

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-2xl bg-primary px-5 py-10">
      <Header />
      <aside className="block">
        <Bio />
      </aside>
      <main className="block">{children}</main>
    </div>
  );
}

export default Layout;
