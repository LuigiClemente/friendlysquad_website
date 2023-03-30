import GlobeTitleOptionsUi from "@/CustomPopover/GlobeTitleOptionsUi";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import React from "react";

const GlobeTitle = ({ title }: any) => {
  const {
    fontSizeTitleModal,
    fontTitleModal,
    colorTitleModal,
    backgroundColorTitleModal,
    //  border
    borderBottomColorTitleModal,
    borderBottomWidthTitleModal,
    borderTopColorTitleModal,
    borderTopWidthTitleModal,
    borderLeftColorTitleModal,
    borderLeftWidthTitleModal,
    borderRightColorTitleModal,
    borderRightWidthTitleModal,
    // border style
    borderRightStyleTitleModal,
    borderLeftStyleTitleModal,
    borderTopStyleTitleModal,
    borderBottomStyleTitleModal,
    // border radius
    borderTopRightRadiusTitleModal,
    borderTopLeftRadiusTitleModal,
    borderBottomRightRadiusTitleModal,
    borderBottomLeftRadiusTitleModal,
    // padding
    paddingTopTitleModal,
    paddingBottomTitleModal,
    paddingLeftTitleModal,
    paddingRightTitleModal,
    // margin
    marginTopTitleModal,
    marginBottomTitleModal,
    marginLeftTitleModal,
    marginRightTitleModal,
  }: any = useModalsAppProvider();
  const [titleStyle, setTitleStyle] = React.useState({ display: "none" });
  const {
    bodyBackgroundColor,
    setBodyBackgroundColor,
    loading,
    isReadOnly,
  }: any = useAppProvider();
  return (
    <div>
      <p
        style={{
          // backgroundColor: backgroundColorTitleModal,
          color: colorTitleModal,
          fontSize: fontSizeTitleModal,
          fontFamily: fontTitleModal,
          borderBottomWidth: `${borderBottomWidthTitleModal}px`,
          borderTopColor: borderTopColorTitleModal,
          borderTopWidth: `${borderTopWidthTitleModal}px`,
          borderLeftColor: borderLeftColorTitleModal,
          borderLeftWidth: `${borderLeftWidthTitleModal}px`,
          borderRightColor: borderRightColorTitleModal,
          borderRightWidth: `${borderRightWidthTitleModal}px`,
          // border style
          borderRightStyle: borderRightStyleTitleModal,
          borderLeftStyle: borderLeftStyleTitleModal,
          borderTopStyle: borderTopStyleTitleModal,
          borderBottomStyle: borderBottomStyleTitleModal,
          // border radius
          borderTopRightRadius: `${borderTopRightRadiusTitleModal}px`,
          borderTopLeftRadius: `${borderTopLeftRadiusTitleModal}px`,
          borderBottomRightRadius: `${borderBottomRightRadiusTitleModal}px`,
          borderBottomLeftRadius: `${borderBottomLeftRadiusTitleModal}px`,
          // padding
          paddingTop: `${paddingTopTitleModal}px`,
          paddingBottom: `${paddingBottomTitleModal}px`,
          paddingLeft: `${paddingLeftTitleModal}px`,
          paddingRight: `${paddingRightTitleModal}px`,
          // margin
          marginTop: `${marginTopTitleModal}px`,
          marginBottom: `${marginBottomTitleModal}px`,
          marginLeft: `${marginLeftTitleModal}px`,
          marginRight: `${marginRightTitleModal}px`,
          position: "relative",
          height: "fit-content",
          fontWeight: "bold",
        }}
        onMouseEnter={() => setTitleStyle({ display: "block" })}
        onMouseLeave={() => setTitleStyle({ display: "none" })}
      >
        {isReadOnly ? null : <GlobeTitleOptionsUi style={titleStyle} />}
        {title}
      </p>
    </div>
  );
};

export default GlobeTitle;
