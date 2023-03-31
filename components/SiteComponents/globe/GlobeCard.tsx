/* eslint-disable @next/next/no-img-element */
import GlobeContentOptionsUi from "@/CustomPopover/GlobeContentOptionsUi";
import GlobeTitle from "@/GlobeTitle/GlobeTitle";
import { useAppProvider } from "@appProvider/AppProvider";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const GlobeCard = ({ item, index }: any) => {
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const { t } = useTranslation("");
  const title = t(`home.globe_data.${index}.title`);

  const { fontSizeLogo, backgroundColorLogo, colorLogo, fontLogo }: any =
    useAppProvider();

  return (
    <>
      <div key={index}>
        <GlobeTitle title={t(`home.globe_data.${index}.title`)} />
        <p
          className="mb-9 ml-2 font-sans relative text-base leading-10 align-center text-darkgray"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            color: colorLogo,
            marginBottom: "9px",
            fontFamily: fontLogo,
            fontSize: fontSizeLogo,
            padding: "10px",
            borderRadius: "5px",
            fontWeight: 500,
          }}
          onMouseEnter={() => setContentStyle({ display: "block" })}
          onMouseLeave={() => setContentStyle({ display: "none" })}
        >
          {isReadOnly ? null : <GlobeContentOptionsUi style={contentStyle} />}
          {/* {item?.description} */}
          {t(`home.globe_data.${index}.description`)}
        </p>
      </div>
    </>
  );
};
export default GlobeCard;
