import React, { useState } from "react";
import Article from "../../components/Article";

const placeholder =
  "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png";

function Write() {
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [text, setText] = useState("");

  const ArticleProps = {
    title,
    text,
    imgSrc,
    setTitle,
    setText,
    setImgSrc,
  };

  return <Article {...ArticleProps} isReadOnly={false} />;
}

export default Write;
