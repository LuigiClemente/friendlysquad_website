import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Delta from "quill-delta";
import { formats } from "@/SiteComponents/TextEditorToolbar/TextEditorToolbar";
const fr = {
  text: "Bonjour le monde !",
  formatting: [
    {
      language: "en",
      positions: [
        {
          start: 0,
          end: 5,
          type: "bold",
        },
      ],
    },
    {
      language: "fr",
      positions: [
        {
          start: 0,
          end: 7,
          type: "bold",
        },
      ],
    },
  ],
};
const en = {
  text: "Hello world!",
  formatting: [
    {
      language: "en",
      positions: [
        {
          start: 0,
          end: 5,
          type: "bold",
        },
      ],
    },
    {
      language: "fr",
      positions: [
        {
          start: 0,
          end: 7,
          type: "bold",
        },
      ],
    },
  ],
};

const ExampleOfEditor = () => {
  let plainText = "";
  const [value, setValue]: any = useState(new Delta().insert(en.text));

  function handleChange(content, delta, source, editor) {
    setValue(editor.getContents());
  }

  async function handleSave() {
    plainText = value.ops.map((op) => op.text).join("");
    console.log(plainText); // Send plain text to server for storage
  }

  async function handleLanguageChange(language) {
    try {
      const response: any = language;
      console.log(response);
      const { delta: newDelta } = response;
      const oldDelta = value;
      console.log("oldDelta", oldDelta);
      const mergedDelta: any = new Delta().insert(plainText);
      console.log("mergedDelta", mergedDelta);

      const wordFormatRegex = /<(\w+)[^>]*>.*?<\/\1>/g;
      let match;
      while ((match = wordFormatRegex.exec(oldDelta.insert))) {
        const [oldWord, oldTag] = match[0].match(/>(.+)</);
        const formattedWord = `<${oldTag} data-language="${language}">${oldWord}</${oldTag}>`;
        mergedDelta.eachLine((line) => {
          line.replace(new RegExp(oldWord, "g"), formattedWord);
        });
      }

      setValue(mergedDelta);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [["bold", "italic", "underline"]],
        }}
        formats={formats}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={(e) => handleLanguageChange(fr)}>Fr</button>
      <button onClick={(e) => handleLanguageChange(en)}>En</button>
    </>
  );
};

export default ExampleOfEditor;
