import GlobeTitleOptionsUi from "@/CustomPopover/GlobeTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GlobeTitle = ({ title }: any) => {
  const { fontSizeTitleModal, fontTitleModal, colorTitleModal }: any =
    useModalsAppProvider();
  const [titleStyle, setTitleStyle] = React.useState({ display: "none" });
  const { t, i18n } = useTranslation("");
  const { isReadOnly }: any = useAppProvider();
  const [inputTitle, setInputTitle] = useState("");

  const handleChangeText = (content, sectionName) => {
    setInputTitle(content);
  };

  useEffect(() => {
    setInputTitle(title);
  }, [t, i18n.language, title]);

  const styleTitle = {
    resize: "none" as const,
    position: "relative" as const,
    boxSizing: "border-box" as const,
    backgroundColor: "transparent",
    border: "none",
    color: colorTitleModal,
    fontSize: fontSizeTitleModal,
    fontFamily: fontTitleModal,
    fontWeight: "bold",
    textAlign: "left" as const,
    width: "100%",
  };

  return (
    <div>
      <p
        style={{
          position: "relative",
          height: "fit-content",
        }}
        onMouseEnter={() => setTitleStyle({ display: "block" })}
        onMouseLeave={() => setTitleStyle({ display: "none" })}
      >
        {isReadOnly ? null : <GlobeTitleOptionsUi style={titleStyle} />}
        <textarea
          className="editor__textarea"
          value={inputTitle}
          onChange={(e) => handleChangeText(e.target.value, "description")}
          style={styleTitle}
        />
      </p>
    </div>
  );
};

export default GlobeTitle;
