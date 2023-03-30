import DataOptionsUi from "@/CustomPopover/DataOptionsUi";
import DataTitleOptionsUi from "@/CustomPopover/DataTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useState } from "react";
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

  return (
    <div
      // className="hero"
      style={{
        position: "relative",
        height: "fit-content",
        width: "fit-content",
      }}
      id={`cloud-card-${item.id}`}
    >
      <div
        style={{
          backgroundColor: "transparent",
          position: "relative",
          height: "400px",
          width: "fit-content",
          zIndex: 1000,
          borderRadius: "5px",
          padding: "40px",
          opacity: 1,
        }}
      >
        <div key={index} style={{ margin: "20px", padding: "2.5rem" }}>
          <div
            className="flex flex-col items-center relative content-start justify-start "
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
            >
              {/* {item.title} */}
              {t(`home.cloud_data.${index}.title`)}
            </h1>
            <p
              style={{
                fontSize: fontSizeData,
                fontWeight: 400,
                color: colorData,
                textAlign: "left",
                fontFamily: fontData,
              }}
              className="mt-1 mb-2 ml-2 font-sans text-lg font-weight-500 relative leading-8 align-center text-black"
              onMouseEnter={() => setContentStyle({ display: "block" })}
              onMouseLeave={() => setContentStyle({ display: "none" })}
            >
              {isReadOnly ? null : <DataOptionsUi style={contentStyle} />}
              {t(`home.cloud_data.${index}.description`)}
              {/* {item.description} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
