function Header() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="py-0 text-3xl font-extrabold text-title">
        John Doe's Blog
      </h1>
      <div className="">
        <a
          className="cursor-pointer px-4 text-secondary underline underline-offset-4"
          href="https://mobile.twitter.com/enesevski"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="cursor-pointer text-secondary underline underline-offset-4"
          href="https://github.com/eneskutlay"
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
