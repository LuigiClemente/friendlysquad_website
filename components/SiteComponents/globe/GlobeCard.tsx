/* eslint-disable @next/next/no-img-element */
import GlobeContentOptionsUi from "@/CustomPopover/GlobeContentOptionsUi";
import GlobeTitle from "@/GlobeTitle/GlobeTitle";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
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
        {/* {index === 0 && (
          <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit -z-0">
            <Image src={"/img/icon/globetext.png"} width={150} height={150} />
          </div>
        )} */}
        <GlobeTitle title={t(`home.globe_data.${index}.title`)} />
        {/* <h1
          style={{
            color: "#fff",
            textAlign: "left",
            width: "100%",
            fontWeight: 500,
            fontFamily: "Segoe UI",
            fontSize: "1.6rem",
          }}
        >
          {t(`home.globe_data.${index}.title`)}
        </h1> */}

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
