function Bio() {
  return (
    <div className="mb-14 flex">
      <img
        src="https://creatorspace.imgix.net/users/cle5faepi0030tg0y9m3yy5gj/dLmo1jDtgUO6jebN-Memoji.png?w=300&h=300"
        className="mr-3 h-14 w-14 rounded-full"
      />
      <p className="max-w-xs pt-2 text-text">
        Personal blog by{" "}
        <a
          href="https://mobile.twitter.com/enesevski"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-secondary underline underline-offset-4"
        >
          John Doe
        </a>
        . I explain tech stuff and share my thoughts.
      </p>
    </div>
  );
}

export default Bio;
