import React from "react";

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
      el = <strong key={`bold-${value.plain_text}`}>{el}</strong>;
    }
    if (italic) {
      el = <em key={`italic-${value.plain_text}`}>{el}</em>;
    }
    if (underline) {
      el = <u key={`underline-${value.plain_text}`}>{el}</u>;
    }
    if (strikethrough) {
      el = <del key={`strikethrough-${value.plain_text}`}>{el}</del>;
    }
    if (code) {
      el = <code key={`code-${value.plain_text}`}>{el}</code>;
    }
    acc.push(
      <React.Fragment key={`fragment-${value.plain_text}`}>{el}</React.Fragment>
    );
    return acc;
  }, []);

  return <>{content}</>;
};
