/* eslint-disable @next/next/no-img-element */
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const GlobeCard = ({ item, index }: any) => {
  const {
    fontSizeDataTitle,
    fontDataTitle,
    colorDataTitle,
    // backgroundColorDataTitle,
    //  border
    borderBottomColorDataTitle,
    borderBottomWidthDataTitle,
    borderTopColorDataTitle,
    borderTopWidthDataTitle,
    borderLeftColorDataTitle,
    borderLeftWidthDataTitle,
    borderRightColorDataTitle,
    borderRightWidthDataTitle,
    // border style
    borderRightStyleDataTitle,
    borderLeftStyleDataTitle,
    borderTopStyleDataTitle,
    borderBottomStyleDataTitle,
    // border radius
    borderTopRightRadiusDataTitle,
    borderTopLeftRadiusDataTitle,
    borderBottomRightRadiusDataTitle,
    borderBottomLeftRadiusDataTitle,
    // padding
    paddingTopDataTitle,
    paddingBottomDataTitle,
    paddingLeftDataTitle,
    paddingRightDataTitle,
    // margin
    marginTopDataTitle,
    marginBottomDataTitle,
    marginLeftDataTitle,
    marginRightDataTitle,

    // -------------------------

    borderBottomColorData,
    borderBottomWidthData,
    borderTopColorData,
    borderTopWidthData,
    borderLeftColorData,
    borderLeftWidthData,
    borderRightColorData,
    borderRightWidthData,
    // border style
    borderRightStyleData,
    borderLeftStyleData,
    borderTopStyleData,
    borderBottomStyleData,
    // border radius
    borderTopRightRadiusData,
    borderTopLeftRadiusData,
    borderBottomRightRadiusData,
    borderBottomLeftRadiusData,
    // padding
    paddingTopData,
    paddingBottomData,
    paddingLeftData,
    paddingRightData,
    // margin
    marginTopData,
    marginBottomData,
    marginLeftData,
    marginRightData,
    fontSizeData,
    colorData,
    fontData,
  }: any = useModalsAppProvider();
  const [contentStyle, setContentStyle] = useState({ display: "none" });
  const [titleStyle, setTitleStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const { t } = useTranslation("");

  return (
    <>
      <div key={index}>
        {/* {index === 0 && (
          <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit -z-0">
            <Image src={"/img/icon/globetext.png"} width={150} height={150} />
          </div>
        )} */}

        <h1
          style={{
            color: "#fff",
            textAlign: "left",
            width: "100%",
            fontWeight: 500,
            fontFamily: "Segoe UI",
            fontSize: "1.6rem",
          }}
        >
          {/* {item.title} */}
          {t(`home.globe_data.${index}.title`)}
        </h1>

        <p
          className="mb-9 ml-2 font-sans text-base leading-10 align-center text-darkgray"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            // fontSize: fontSizeData,
            color: colorData,
            font: fontData,
            // fontFamily: fontData,
            // backgroundColor: backgroundColorData,
            // borderBottomColor: borderBottomColorData,
            // borderBottomWidth: `${borderBottomWidthData}px`,
            // borderTopColor: borderTopColorData,
            // borderTopWidth: `${borderTopWidthData}px`,
            // borderLeftColor: borderLeftColorData,
            // borderLeftWidth: `${borderLeftWidthData}px`,
            // borderRightColor: borderRightColorData,
            // borderRightWidth: `${borderRightWidthData}px`,
            // borderRightStyle: borderRightStyleData,
            // borderLeftStyle: borderLeftStyleData,
            // borderTopStyle: borderTopStyleData,
            // borderBottomStyle: borderBottomStyleData,
            // borderTopRightRadius: `${borderTopRightRadiusData}px`,
            // borderTopLeftRadius: `${borderTopLeftRadiusData}px`,
            // borderBottomRightRadius: `${borderBottomRightRadiusData}px`,
            // borderBottomLeftRadius: `${borderBottomLeftRadiusData}px`,
            paddingTop: `${paddingTopData}px`,
            paddingBottom: `${paddingBottomData}px`,
            paddingLeft: `${paddingLeftData}px`,
            paddingRight: `${paddingRightData}px`,
            marginTop: `${marginTopData}px`,
            // marginBottom: `${marginBottomData}px`,
            marginBottom: "9px",
            marginLeft: `${marginLeftData}px`,
            marginRight: `${marginRightData}px`,
            fontFamily: "Ppneuemontreal",
            fontSize: "1.5rem",
            padding: "10px",

            borderRadius: "5px",
            fontWeight: 500,
          }}
        >
          {/* {item?.description} */}
          {t(`home.globe_data.${index}.description`)}
        </p>
      </div>
    </>
  );
};
export default GlobeCard;
