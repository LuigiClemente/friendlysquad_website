import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import React, { useRef } from "react";

interface props {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}
const Button = ({ label, onClick, style }) => {
  const {
    fontSizeButtons,
    backgroundColorButtons,
    colorButtons,
    fontButtons,
    //  border background color
    borderBottomColorButtons,
    borderRightColorButtons,
    borderLeftColorButtons,
    borderTopColorButtons,
    // border width
    borderRightWidthButtons,
    borderLeftWidthButtons,
    borderTopWidthButtons,
    borderBottomWidthButtons,
    // border style
    borderRightStyleButtons,
    borderLeftStyleButtons,
    borderTopStyleButtons,
    borderBottomStyleButtons,
    // border radius border-top-right-radius
    borderTopRightRadiusButtons,
    borderTopLeftRadiusButtons,
    borderBottomRightRadiusButtons,
    borderBottomLeftRadiusButtons,
    // padding
    paddingRightButtons,
    paddingLeftButtons,
    paddingTopButtons,
    paddingBottomButtons,
    // margin
    marginRightButtons,
    marginLeftButtons,
    marginTopButtons,
    marginBottomButtons,
  }: any = useModalsAppProvider();
  const cancelButtonRef = useRef(null);
  return (
    <button
      type="button"
      onClick={onClick}
      ref={cancelButtonRef}
      style={{
        color: colorButtons,
        position: "relative",
        fontSize: fontSizeButtons,
        fontFamily: fontButtons,
        margin: "2px",
        backgroundColor: backgroundColorButtons,
        borderBottomColor: borderBottomColorButtons,
        borderBottomWidth: `${borderBottomWidthButtons}px`,
        borderTopColor: borderTopColorButtons,
        borderTopWidth: `${borderTopWidthButtons}px`,
        borderLeftColor: borderLeftColorButtons,
        borderLeftWidth: `${borderLeftWidthButtons}px`,
        borderRightColor: borderRightColorButtons,
        borderRightWidth: `${borderRightWidthButtons}px`,
        // border style
        borderRightStyle: borderRightStyleButtons,
        borderLeftStyle: borderLeftStyleButtons,
        borderTopStyle: borderTopStyleButtons,
        borderBottomStyle: borderBottomStyleButtons,
        // border radius
        borderTopRightRadius: `${borderTopRightRadiusButtons}px`,
        borderTopLeftRadius: `${borderTopLeftRadiusButtons}px`,
        borderBottomRightRadius: `${borderBottomRightRadiusButtons}px`,
        borderBottomLeftRadius: `${borderBottomLeftRadiusButtons}px`,
        // padding
        paddingTop: `${paddingTopButtons}px`,
        paddingBottom: `${paddingBottomButtons}px`,
        paddingLeft: `${paddingLeftButtons}px`,
        paddingRight: `${paddingRightButtons}px`,
        // margin
        marginTop: `${marginTopButtons}px`,
        marginBottom: `${marginBottomButtons}px`,
        marginLeft: `${marginLeftButtons}px`,
        marginRight: `${marginRightButtons}px`,
        width: "120px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
