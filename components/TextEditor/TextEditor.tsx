import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ defaultValue }) => {
  const { fontSizeDataModal, fontDataModal, colorDataModal }: any =
    useModalsAppProvider();
  const { pageModalAboutData, setPageModalAboutData }: any = usePageProvider();
  const [value, setValue]: any = useState({ editorHtml: defaultValue });
  const handleChange = (content, delta, source, editor) => {
    setValue({ editorHtml: content });

    if (!editor) {
      return;
    }
    setPageModalAboutData({
      title: "about",
      dataModal: content,
      description: value.editorHtml,
    });
  };

  useEffect(() => {
    if (defaultValue) {
      setValue({ editorHtml: defaultValue });
    }
  }, [defaultValue]);
  const handleChangeText = (content) => {
    console.log("content", content);
    setValue({ editorHtml: content });
  };

  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const textareaStyle = {
    fontSize: fontSizeDataModal,
    lineHeight: "1.5",
    color: colorDataModal,
    fontWeight: fontDataModal,
    border: "none",
    width: "500px",
    height: "350px",
  };
  return (
    <div className="text-editor">
      <div
        className="relative"
        onMouseEnter={() => setTitleStyle({ display: "block" })}
        onMouseLeave={() => setTitleStyle({ display: "none" })}
      >
        {/* {isReadOnly ? null : <TextEditorToolbar style={titleStyle} />} */}
        {/* <TextEditorToolbar style={{ display: "block" }} /> */}
        <textarea
          className="text-editor__textarea"
          value={value.editorHtml}
          onChange={(e) => handleChangeText(e.target.value)}
          style={textareaStyle}
        />

        {/* <ReactQuill
          theme="snow"
          value={value.editorHtml}
          modules={modules}
          formats={formats}
          onChange={handleChange}
          style={{
            fontSize: fontSizeDataModal + "!important",
            fontFamily: fontDataModal,
            color: colorDataModal,
          }}
        /> */}
      </div>
    </div>
  );
};

export default TextEditor;
