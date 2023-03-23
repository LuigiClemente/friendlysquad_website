/* eslint-disable @next/next/no-img-element */
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useState } from "react";
import GlobalEdgeNetwork from "../globe/GlobalEdgeNetwork";
import GlobeCardList from "../globe/GlobeCardList";
import CloudCardList from "./CloudCardList";
import CloudMenu from "./CloudMenu";

const CloudDataComponent = () => {
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
    <div
      className="my-30 relative m-0"
      style={{
        marginTop: "100px",
        zIndex: 10,
        backgroundColor: "transparent",
        paddingRight: "20px",
        height: "100%",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        clip: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "sticky",
            bottom: "auto",
            top: "0",
            left: "0",
            height: "fit-content",
            width: "40%",
            alignSelf: "auto",
            alignItems: "stretch",
            clip: "auto",
          }}
        >
          <CloudMenu />
        </div>
        <div className="flex flex-col w-[60%] z-20 ">
          <CloudCardList />
        </div>
      </div>
    </div>
  );
};
export default CloudDataComponent;
