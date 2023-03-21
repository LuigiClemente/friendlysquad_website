/* eslint-disable @next/next/no-img-element */
import DataOptionsUi from "@/CustomPopover/DataOptionsUi";
import DataTitleOptionsUi from "@/CustomPopover/DataTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CarouselVertical from "../carousel/CarouselVertical";
import GlobeComponent from "./GlobeComponent";

const GlobalEdgeNetwork = ({ title, noteList, description: description }) => {
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

  return (
    <>
      <div
        className="my-15 relative m-0 globe"
        style={{
          zIndex: 10,
          backgroundColor: "#000",
          paddingTop: "50px",
          paddingRight: "20px",
          // paddingBottom: "200px",
        }}
      >
        <div
          className={`flex flex-col relative lg:flex-row items-center lg:justify-between`}
          id={`sectionId`}
        >
          <div className="h-auto" style={{ width: "60%" }}>
            <GlobeComponent />
          </div>
          <ul className="flex flex-col w-[40%] z-20">
            {/* <h1
              className="self-start justify-start mb-5 font-sans text-2xl font-semibold text-title leading-10 lg:max-w-[580px]"
              style={{
                color: colorDataTitle,
                fontSize: fontSizeDataTitle,
                fontFamily: fontDataTitle,
                borderBottomColor: borderBottomColorDataTitle,
                borderBottomWidth: `${borderBottomWidthDataTitle}px`,
                borderTopColor: borderTopColorDataTitle,
                borderTopWidth: `${borderTopWidthDataTitle}px`,
                borderLeftColor: borderLeftColorDataTitle,
                borderLeftWidth: `${borderLeftWidthDataTitle}px`,
                borderRightColor: borderRightColorDataTitle,
                borderRightWidth: `${borderRightWidthDataTitle}px`,
                borderRightStyle: borderRightStyleDataTitle,
                borderLeftStyle: borderLeftStyleDataTitle,
                borderTopStyle: borderTopStyleDataTitle,
                borderBottomStyle: borderBottomStyleDataTitle,
                borderTopRightRadius: `${borderTopRightRadiusDataTitle}px`,
                borderTopLeftRadius: `${borderTopLeftRadiusDataTitle}px`,
                borderBottomRightRadius: `${borderBottomRightRadiusDataTitle}px`,
                borderBottomLeftRadius: `${borderBottomLeftRadiusDataTitle}px`,
                paddingTop: `${paddingTopDataTitle}px`,
                paddingBottom: `${paddingBottomDataTitle}px`,
                paddingLeft: `${paddingLeftDataTitle}px`,
                paddingRight: `${paddingRightDataTitle}px`,
                marginTop: `${marginTopDataTitle}px`,
                marginBottom: `${marginBottomDataTitle}px`,
                marginLeft: `${marginLeftDataTitle}px`,
                marginRight: `${marginRightDataTitle}px`,
                width: "fit-content",
                position: "relative",
              }}
              onMouseEnter={() => setTitleStyle({ display: "block" })}
              onMouseLeave={() => setTitleStyle({ display: "none" })}
            >
              {isReadOnly ? null : <DataTitleOptionsUi style={titleStyle} />}
              {title}
            </h1> */}
            {/* <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
              {description?.subTitle}
            </p> */}
            {/* <p
              className="mb-3 text-md text-friendly-light-dark"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
                padding: "2px",
                fontSize: fontSizeData,
                color: colorData,
                font: fontData,
                fontFamily: fontData,
                // backgroundColor: backgroundColorData,
                borderBottomColor: borderBottomColorData,
                borderBottomWidth: `${borderBottomWidthData}px`,
                borderTopColor: borderTopColorData,
                borderTopWidth: `${borderTopWidthData}px`,
                borderLeftColor: borderLeftColorData,
                borderLeftWidth: `${borderLeftWidthData}px`,
                borderRightColor: borderRightColorData,
                borderRightWidth: `${borderRightWidthData}px`,
                borderRightStyle: borderRightStyleData,
                borderLeftStyle: borderLeftStyleData,
                borderTopStyle: borderTopStyleData,
                borderBottomStyle: borderBottomStyleData,
                borderTopRightRadius: `${borderTopRightRadiusData}px`,
                borderTopLeftRadius: `${borderTopLeftRadiusData}px`,
                borderBottomRightRadius: `${borderBottomRightRadiusData}px`,
                borderBottomLeftRadius: `${borderBottomLeftRadiusData}px`,
                paddingTop: `${paddingTopData}px`,
                paddingBottom: `${paddingBottomData}px`,
                paddingLeft: `${paddingLeftData}px`,
                paddingRight: `${paddingRightData}px`,
                marginTop: `${marginTopData}px`,
                marginBottom: `${marginBottomData}px`,
                marginLeft: `${marginLeftData}px`,
                marginRight: `${marginRightData}px`,
                position: "relative",
              }}
              onMouseEnter={() => setContentStyle({ display: "block" })}
              onMouseLeave={() => setContentStyle({ display: "none" })}
            >
              {isReadOnly ? null : <DataOptionsUi style={contentStyle} />}
              {description?.description}
            </p> */}
            {/* <CarouselVertical /> */}

            {noteList.map((item, index) => (
              <li key={index} style={{ display: "flex", flexDirection: "row" }}>
                {/* <div className="flex flex-col items-start content-start justify-start">
                  <h2
                    className="font-sans text-3xl font-bold text-title text-darkgray"
                    style={{
                      // backgroundColor: backgroundColorDataTitle,
                      color: colorDataTitle,
                      fontSize: fontSizeDataTitle,
                      fontFamily: fontDataTitle,
                      borderBottomColor: borderBottomColorDataTitle,
                      borderBottomWidth: `${borderBottomWidthDataTitle}px`,
                      borderTopColor: borderTopColorDataTitle,
                      borderTopWidth: `${borderTopWidthDataTitle}px`,
                      borderLeftColor: borderLeftColorDataTitle,
                      borderLeftWidth: `${borderLeftWidthDataTitle}px`,
                      borderRightColor: borderRightColorDataTitle,
                      borderRightWidth: `${borderRightWidthDataTitle}px`,
                      borderRightStyle: borderRightStyleDataTitle,
                      borderLeftStyle: borderLeftStyleDataTitle,
                      borderTopStyle: borderTopStyleDataTitle,
                      borderBottomStyle: borderBottomStyleDataTitle,
                      borderTopRightRadius: `${borderTopRightRadiusDataTitle}px`,
                      borderTopLeftRadius: `${borderTopLeftRadiusDataTitle}px`,
                      borderBottomRightRadius: `${borderBottomRightRadiusDataTitle}px`,
                      borderBottomLeftRadius: `${borderBottomLeftRadiusDataTitle}px`,
                      paddingTop: `${paddingTopDataTitle}px`,
                      paddingBottom: `${paddingBottomDataTitle}px`,
                      paddingLeft: `${paddingLeftDataTitle}px`,
                      paddingRight: `${paddingRightDataTitle}px`,
                      marginTop: `${marginTopDataTitle}px`,
                      marginBottom: `${marginBottomDataTitle}px`,
                      marginLeft: `${marginLeftDataTitle}px`,
                      marginRight: `${marginRightDataTitle}px`,
                      width: "100%",
                    }}
                  >
                    {item?.title}
                  </h2>
                </div> */}
                {index === 0 && (
                  <div className="pt-1 pb-0 pl-1 pr-1 rounded-md w-fit h-fit">
                    <Image
                      src={"/img/icon/globetext.png"}
                      width={150}
                      height={150}
                    />
                  </div>
                )}
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
                    borderBottomColor: borderBottomColorData,
                    borderBottomWidth: `${borderBottomWidthData}px`,
                    borderTopColor: borderTopColorData,
                    borderTopWidth: `${borderTopWidthData}px`,
                    borderLeftColor: borderLeftColorData,
                    borderLeftWidth: `${borderLeftWidthData}px`,
                    borderRightColor: borderRightColorData,
                    borderRightWidth: `${borderRightWidthData}px`,
                    borderRightStyle: borderRightStyleData,
                    borderLeftStyle: borderLeftStyleData,
                    borderTopStyle: borderTopStyleData,
                    borderBottomStyle: borderBottomStyleData,
                    borderTopRightRadius: `${borderTopRightRadiusData}px`,
                    borderTopLeftRadius: `${borderTopLeftRadiusData}px`,
                    borderBottomRightRadius: `${borderBottomRightRadiusData}px`,
                    borderBottomLeftRadius: `${borderBottomLeftRadiusData}px`,
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
                    fontSize: "2rem",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    fontWeight: 500,
                  }}
                >
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default GlobalEdgeNetwork;
