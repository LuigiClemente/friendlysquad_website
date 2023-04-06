import DataOptionsUi from "@/CustomPopover/DataOptionsUi";
import DataTitleOptionsUi from "@/CustomPopover/DataTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import { useEffect, useRef, useState } from "react";
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
  const { t, i18n } = useTranslation("");
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const textareaRef = useRef(null);

  const { cloudData, setCloudData }: any = usePageProvider();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
  const textTitleStyle = {
    color: colorDataTitle,
    textAlign: "left" as const,
    width: "100%",
    fontWeight: 500,
    fontFamily: fontDataTitle,
    fontSize: fontSizeDataTitle,
    height: "fit-content",
    backgroundColor: "transparent",
    boxSizing: "border-box" as const,
    resize: "none" as const,
    border: "none",
  };
  const handleChangeText = (content, sectionName) => {
    if (sectionName === "title") {
      setTitle(content);
    } else {
      setDescription(content);
    }
    setCloudData((prev) => {
      return prev.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            [sectionName]: content,
          };
        } else {
          return item;
        }
      });
    });
    console.log(cloudData);
  };
  useEffect(() => {
    setDescription(t(`home.cloud_data.${index}.description`));
    setTitle(t(`home.cloud_data.${index}.title`));
  }, [t, i18n.language, index]);

  useEffect(() => {
    setCloudData((prev) => {
      return prev.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            description: description,
            title: title,
          };
        } else {
          return item;
        }
      });
    });
    console.log("cloudData", cloudData);
  }, []);
  return (
    <div
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
            <textarea
              ref={textareaRef}
              className="editor__textarea"
              value={title}
              onChange={(e) => handleChangeText(e.target.value, "title")}
              style={textTitleStyle}
            />
            <div
              className="relative w-full min-w-full"
              onMouseEnter={() => setContentStyle({ display: "block" })}
              onMouseLeave={() => setContentStyle({ display: "none" })}
            >
              {isReadOnly ? null : <DataOptionsUi style={contentStyle} />}
              <textarea
                ref={textareaRef}
                className="editor__textarea"
                value={description}
                onChange={(e) =>
                  handleChangeText(e.target.value, "description")
                }
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
