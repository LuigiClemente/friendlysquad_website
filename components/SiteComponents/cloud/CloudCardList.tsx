import BoxOptionsUi from "@/CustomPopover/BoxOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useEffect, useState } from "react";

import { NOTE_CLOUD_SECTION } from "../constant";
import CloudCard from "./CloudCard";
const CloudCardList = ({ getItemId }: any) => {
  const mouseInStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };
  const mouseOutStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  };
  const [isHovering, setIsHovering] = useState(null);

  const handleMouseOver = (id: any) => {
    setIsHovering(id);
    getItemId(id);
  };

  const handleClick = (id: any) => {
    setIsHovering(id);
    getItemId(id);
  };

  const [boxStyle, setBoxStyle] = useState({ display: "none" });

  const handleMouseOut = () => setIsHovering(null);

  const {
    backgroundColorData,
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
  }: any = useModalsAppProvider();
  const { isReadOnly }: any = useAppProvider();

  return (
    <div className="z-10 relative w-full flex flex-col justify-center items-center bg-transparent mt-[10px] ml-0">
      {NOTE_CLOUD_SECTION.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              borderRadius: "0px",
              ...(isHovering && isHovering === item?.id
                ? mouseInStyle
                : mouseOutStyle),

              borderBottomColor: borderBottomColorData,
              borderBottomWidth: `${borderBottomWidthData}px`,
              borderTopColor: borderTopColorData,
              borderTopWidth: `${borderTopWidthData}px`,
              borderLeftColor: borderLeftColorData,
              borderLeftWidth: `${borderLeftWidthData}px`,
              borderRightColor: borderRightColorData,
              borderRightWidth: `${borderRightWidthData}px`,
              // border style
              borderRightStyle: borderRightStyleData,
              borderLeftStyle: borderLeftStyleData,
              borderTopStyle: borderTopStyleData,
              borderBottomStyle: borderBottomStyleData,
              // border radius
              borderTopRightRadius: `${borderTopRightRadiusData}px`,
              borderTopLeftRadius: `${borderTopLeftRadiusData}px`,
              borderBottomRightRadius: `${borderBottomRightRadiusData}px`,
              borderBottomLeftRadius: `${borderBottomLeftRadiusData}px`,
              // padding
              paddingTop: `${paddingTopData}px`,
              paddingBottom: `${paddingBottomData}px`,
              paddingLeft: `${paddingLeftData}px`,
              paddingRight: `${paddingRightData}px`,
              // margin
              marginTop: `${marginTopData}px`,
              marginBottom: `${marginBottomData}px`,
              marginLeft: `${marginLeftData}px`,
              marginRight: `${marginRightData}px`,
              backgroundColor: backgroundColorData,
            }}
            onMouseOver={() => handleMouseOver(item?.id)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(item?.id)}
          >
            <div
              style={{
                // backgroundImage: `url(${item.image})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "50% 50%",
                // backgroundSize: "cover",
                position: "relative",
              }}
              onMouseEnter={() => setBoxStyle({ display: "block" })}
              onMouseLeave={() => setBoxStyle({ display: "none" })}
            >
              {isReadOnly ? null : <BoxOptionsUi style={boxStyle} />}
              <CloudCard item={item} index={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CloudCardList;
