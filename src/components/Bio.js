import Image from "next/image";

function Bio() {
  return (
    <div className="mb-14 flex">
      <Image
        src="/nice-avatar.png"
        className="mr-3 h-14 w-14 rounded-full"
        width={56}
        height={56}
        alt="John Doe"
      />
      <p className=" max-w-xs p-2 text-base text-text">
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
