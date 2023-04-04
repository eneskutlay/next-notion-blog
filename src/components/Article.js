import Link from "next/link";

function Article(props) {
  return (
    <article className="block" key={props.id}>
      <header className="">
        <h2 className="mb-2 mt-14 font-montserrat text-2xl font-black sm:text-3xl">
          <Link className="text-secondary" href={props.href}>
            {props.title}
          </Link>
        </h2>
        <small className=" text-s text-cyan-300">{props.date}</small>
      </header>
      <p className="mb-7 mt-2 font-montserrat text-lg text-text">
        {props.summary}
      </p>
    </article>
  );
}

export default Article;
