import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Delta from "quill-delta";
import { formats } from "@/SiteComponents/TextEditorToolbar/TextEditorToolbar";
import { PATH_POST_CONTENT } from "config";

const ExampleOfEditor1 = () => {
  const languages = ["en", "fr"]; // Supported languages
  const [value, setValue]: any = useState(new Delta().insert(""));
  const [language, setLanguage] = useState(languages[0]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSave = async () => {
    const plainText = value?.ops?.map((op) => op.insert).join("") ?? "";
    const formattedWords = [];
    value?.ops?.forEach((op: any) => {
      const attributes = op.attributes || {};
      if (attributes["data-language"] === language) {
        const word = plainText.slice(op.index, op.index + op.insert.length);
        formattedWords.push({
          start: op.index,
          end: op.index + word.length,
          type: Object.keys(attributes)
            .find((attr) => attr.startsWith("data-"))
            .replace("data-", ""),
        });
      }
    });
    const data = {
      text: plainText,
      formatting: [
        {
          language: language,
          positions: formattedWords,
        },
      ],
    };
    try {
      console.log("data is", data);
      const response = await fetch(PATH_POST_CONTENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/locales/${language}/content.json`);
        const data = await response.json();
        console.log("data is", data);
        const delta: any = new Delta().insert(data.text);

        data.formatting.forEach((format) => {
          console.log("format is", format);
          format.positions.forEach((pos) => {
            const word = data.text.slice(pos.start, pos.end);
            console.log("word is===>", word);
            delta.retain(pos.start);
            delta.retain(word.length, {
              [`${pos.type}-style`]: true,
              "data-language": format.language,
            });
          });
        });
        setValue(delta);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContent();
  }, [language]);

  return (
    <>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ header: 1 }, { header: 2 }],
            ["bold", "italic", "underline"],
            ["link", "image"],
          ],
        }}
        formats={formats}
      />
      <select value={language} onChange={handleLanguageChange}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default ExampleOfEditor1;
