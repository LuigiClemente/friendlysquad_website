import Box2OptionsUi from "@/CustomPopover/Box2OptionsUi/Box2OptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";

import { NOTE_CLOUD_SECTION } from "../constant";
import GlobeCard from "../globe/GlobeCard";
import { usePageProvider } from "@appProvider/PageProvider";

const GlobeCardList = () => {
  const {
    backgroundColorBox2,
    borderBottomColorBox2,
    borderBottomWidthBox2,
    borderTopColorBox2,
    borderTopWidthBox2,
    borderLeftColorBox2,
    borderLeftWidthBox2,
    borderRightColorBox2,
    borderRightWidthBox2,
    // border style
    borderRightStyleBox2,
    borderLeftStyleBox2,
    borderTopStyleBox2,
    borderBottomStyleBox2,
    // border radius
    borderTopRightRadiusBox2,
    borderTopLeftRadiusBox2,
    borderBottomRightRadiusBox2,
    borderBottomLeftRadiusBox2,
    // padding
    paddingTopBox2,
    paddingBottomBox2,
    paddingLeftBox2,
    paddingRightBox2,
    // margin
    marginTopBox2,
    marginBottomBox2,
    marginLeftBox2,
    marginRightBox2,
  }: any = useModalsAppProvider();
  const [boxStyle, setBoxStyle] = useState({ display: "none" });
  const { isReadOnly }: any = useAppProvider();
  const { globeData, setGlobeData }: any = usePageProvider();

  // useEffect(() => {
  //   setGlobeData(NOTE_CLOUD_SECTION);
  //   console.log("Globe Data: ", globeData);
  // }, [globeData]);

  return (
    <div
      style={{
        zIndex: 10,
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
      }}
      onMouseEnter={() => setBoxStyle({ display: "block" })}
      onMouseLeave={() => setBoxStyle({ display: "none" })}
    >
      {isReadOnly ? null : <Box2OptionsUi style={boxStyle} />}
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div key={index} className="mx-5 sm=mx-10">
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                border: "1px solid lightGrey",
                padding: "20px",
                backgroundImage: "url(/img/icon/globetext.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "100% 0%",
                backgroundSize: "70px 70px",

                borderRadius: "0px",

                borderBottomColor: borderBottomColorBox2,
                borderBottomWidth: `${borderBottomWidthBox2}px`,
                borderTopColor: borderTopColorBox2,
                borderTopWidth: `${borderTopWidthBox2}px`,
                borderLeftColor: borderLeftColorBox2,
                borderLeftWidth: `${borderLeftWidthBox2}px`,
                borderRightColor: borderRightColorBox2,
                borderRightWidth: `${borderRightWidthBox2}px`,
                // border style
                borderRightStyle: borderRightStyleBox2,
                borderLeftStyle: borderLeftStyleBox2,
                borderTopStyle: borderTopStyleBox2,
                borderBottomStyle: borderBottomStyleBox2,
                // border radius
                borderTopRightRadius: `${borderTopRightRadiusBox2}px`,
                borderTopLeftRadius: `${borderTopLeftRadiusBox2}px`,
                borderBottomRightRadius: `${borderBottomRightRadiusBox2}px`,
                borderBottomLeftRadius: `${borderBottomLeftRadiusBox2}px`,
                // padding
                paddingTop: `${paddingTopBox2}px`,
                paddingBottom: `${paddingBottomBox2}px`,
                paddingLeft: `${paddingLeftBox2}px`,
                paddingRight: `${paddingRightBox2}px`,
                // margin
                marginTop: `${marginTopBox2}px`,
                marginBottom: `${marginBottomBox2}px`,
                marginLeft: `${marginLeftBox2}px`,
                marginRight: `${marginRightBox2}px`,
                backgroundColor: backgroundColorBox2,
              }}
            >
              <GlobeCard item={item} index={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GlobeCardList;
