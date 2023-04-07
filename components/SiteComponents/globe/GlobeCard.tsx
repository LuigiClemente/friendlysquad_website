/* eslint-disable @next/next/no-img-element */
import GlobeContentOptionsUi from "@/CustomPopover/GlobeContentOptionsUi";
import GlobeTitle from "@/GlobeTitle/GlobeTitle";
import { useAppProvider } from "@appProvider/AppProvider";
import { usePageProvider } from "@appProvider/PageProvider";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GlobeCard = ({ item, index }: any) => {
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const { t, i18n } = useTranslation("infrastructure");

  const { fontSizeLogo, colorLogo, fontLogo }: any = useAppProvider();
  const styleDescription = {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
    height: "390px",
    color: colorLogo,
    fontFamily: fontLogo,
    fontSize: fontSizeLogo,
    padding: "10px",
    borderRadius: "5px",
    fontWeight: 500,
    resize: "none" as const,
    position: "relative" as const,
    boxSizing: "border-box" as const,
    backgroundColor: "transparent",
    border: "none",
  };
  const { globeData, setGlobeData }: any = usePageProvider();
  const [description, setDescription] = useState("");
  let getDescription = t(`globe_data.${index}.description`);
  let title = t(`globe_data.${index}.title`);
  useEffect(() => {
    setDescription(getDescription);
    title = t(`globe_data.${index}.title`);
  }, [t, i18n.language, index]);

  const handleChangeText = (content, sectionName) => {
    setDescription(content);

    setGlobeData((prev) => {
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
    console.log("New Globe Data: ", globeData);
  };
  useEffect(() => {
    setGlobeData((prev) => {
      return [
        ...prev,
        {
          id: index,
          title: title,
          description: getDescription,
        },
      ];
    });
    console.log("New Globe Data: ", globeData);
  }, []);

  return (
    <>
      <div key={index} style={{ width: "100%", position: "relative" }}>
        <GlobeTitle title={title} />
        <div
          className="relative"
          onMouseEnter={() => setContentStyle({ display: "block" })}
          onMouseLeave={() => setContentStyle({ display: "none" })}
        >
          {isReadOnly ? null : <GlobeContentOptionsUi style={contentStyle} />}
          {/* {item?.description} */}
          <textarea
            className="editor__textarea"
            value={description}
            onChange={(e) => handleChangeText(e.target.value, "description")}
            style={styleDescription}
          />
        </div>
      </div>
    </>
  );
};
export default GlobeCard;
