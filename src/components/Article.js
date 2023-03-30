import Link from "next/link";

function Article(props) {
  return (
    <article className="block" key={props.id}>
      <header className="">
        <h3 className="mb-2 mt-14 font-montserrat text-3xl font-black">
          <Link className="text-secondary" href={props.href}>
            {props.title}
          </Link>
        </h3>
        <small className=" text-s text-text">{props.date}</small>
      </header>
      <p className="mb-7 mt-2 font-montserrat text-lg text-text">
        {props.summary}
      </p>
    </article>
  );
}
//href={`writing/${post.id}`}

export default Article;
