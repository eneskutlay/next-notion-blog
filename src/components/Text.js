export const Text = ({ text }) => {
  if (!text) {
    return null;
  }

  let content = text.reduce((acc, value) => {
    const {
      annotations: { bold, code, italic, strikethrough, underline },
      text,
    } = value;
    let el = text.link ? (
      <a key={value.plain_text} href={text.link.url}>
        {text.content}
      </a>
    ) : (
      text.content
    );
    if (bold) {
      el = <strong>{el}</strong>;
    }
    if (italic) {
      el = <em>{el}</em>;
    }
    if (underline) {
      el = <u>{el}</u>;
    }
    if (strikethrough) {
      el = <del>{el}</del>;
    }
    if (code) {
      el = <code>{el}</code>;
    }
    acc.push(el);
    return acc;
  }, []);

  return <>{content}</>;
};
