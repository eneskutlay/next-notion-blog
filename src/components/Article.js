import Link from "next/link";

function Article(props) {
  return (
    <article className="block">
      <header className="">
        <h3 className="mb-2 mt-14 text-2xl font-blackclear">
          <Link className="text-secondary" href={props.href}>
            {props.title}
          </Link>
        </h3>
        <small className=" text-s text-text">{props.date}</small>
      </header>
      <p className="mb-7 mt-1 text-lg text-text">{props.summary}</p>
    </article>
  );
}
//href={`writing/${post.id}`}

export default Article;
