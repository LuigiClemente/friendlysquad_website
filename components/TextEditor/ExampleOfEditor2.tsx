import ReactQuill from "react-quill";
import { useState } from "react";

const ExampleOfEditor2 = ({ lang }) => {
  const [content, setContent] = useState(() => {
    const data = localStorage.getItem(`content-${lang}`);

    if (!data) {
      return "";
    }

    return JSON.parse(data).content;
  });

  const handleChange = (value) => {
    setContent(value);

    const data = {};

    ["en", "es"].forEach((l) => {
      const key = `content-${l}`;

      const content = JSON.parse(localStorage.getItem(key) || "{}");

      content.content = value;

      localStorage.setItem(key, JSON.stringify(content));

      data[l] = content.content;
    });

    // Save data to server here
  };

  return <ReactQuill value={content} onChange={handleChange} />;
};

export default ExampleOfEditor2;
