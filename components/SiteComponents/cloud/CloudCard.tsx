import DataOptionsUi from "@/CustomPopover/DataOptionsUi";
import DataTitleOptionsUi from "@/CustomPopover/DataTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CloudCard = ({ item, index }: any) => {
  const {
    fontSizeDataTitle,
    fontDataTitle,
    colorDataTitle,

    fontSizeData,
    colorData,
    fontData,
  }: any = useModalsAppProvider();
  const { t } = useTranslation("");
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const textareaRef = useRef(null);

  const textareaStyle = {
    fontSize: fontSizeData,
    fontWeight: 500,
    color: colorData,
    textAlign: "left" as const,
    fontFamily: fontData,
    border: "none",
    height: "260px",
    resize: "none" as const,
    position: "relative" as const,
    boxSizing: "border-box" as const,
    backgroundColor: "transparent",
  };
  const handleChangeText = (content) => {
    console.log("content", content);
  };
  return (
    <div
      // className="hero"
      style={{
        position: "relative",
        height: "fit-content",
        width: "100%",
      }}
      id={`cloud-card-${item.id}`}
    >
      <div
        className="flex flex-col items-center relative content-start justify-start bg-transparent h-[400px] z-50 w-full
        rounded-sm p-4 lg:p-8"
      >
        <div
          key={index}
          style={{
            paddingRight: "2.5rem",
            paddingLeft: "2.5rem",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            className="flex flex-col items-center relative content-start min-w-full w-full justify-start "
            onMouseEnter={() => setTitleStyle({ display: "block" })}
            onMouseLeave={() => setTitleStyle({ display: "none" })}
          >
            {isReadOnly ? null : <DataTitleOptionsUi style={titleStyle} />}
            <h1
              style={{
                color: colorDataTitle,
                textAlign: "left",
                width: "100%",
                fontWeight: 500,
                fontFamily: fontDataTitle,
                fontSize: fontSizeDataTitle,
              }}
              className="pb-4 lg:pb-5 w-full"
            >
              {/* {item.title} */}
              {t(`home.cloud_data.${index}.title`)}
            </h1>
            <div
              className="relative w-full min-w-full"
              onMouseEnter={() => setContentStyle({ display: "block" })}
              onMouseLeave={() => setContentStyle({ display: "none" })}
            >
              {isReadOnly ? null : <DataOptionsUi style={contentStyle} />}
              <textarea
                ref={textareaRef}
                className="editor__textarea"
                value={t(`home.cloud_data.${index}.description`)}
                onChange={(e) => handleChangeText(e.target.value)}
                style={textareaStyle}
              />
              {/* {item.description} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
