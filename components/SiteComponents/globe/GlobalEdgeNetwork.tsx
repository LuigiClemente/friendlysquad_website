/* eslint-disable @next/next/no-img-element */
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useState } from "react";
import Scene from "./ColorGlobe/Scene";
import GlobeCardList from "./GlobeCardList";
import GlobeComponent from "./GlobeComponent";

const GlobalEdgeNetwork = () => {
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
    <div style={{ backgroundColor: "#000" }}>
      <div
        className="globe"
        style={{
          width: "100%",
          margin: 0,
          height: "100%",
          paddingTop: "200px",
          backgroundColor: "#000",
        }}
      >
        <div
          className={`flex relative flex-col lg:flex-row lg:justify-between`}
          id={`sectionId`}
        >
          <div className="w-full lg:sticky lg:inset-x-0 lg:top-0 lg:left-0 lg:bottom-auto z-30 self-auto items-stretch lg:w-[50%] h-fit">
            {/* <GlobeComponent /> */}
            {/* <Scene /> */}
            <div>Hi</div>
          </div>
          <div className="flex flex-col w-full lg:w-[50%] z-20">
            <GlobeCardList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlobalEdgeNetwork;
