import FooterVerificationOptionsUi from "@/CustomPopover/FooterVerificationOptionsUi";
import {
  CONTACT_DATA,
  FOOTER_DATA_BOOKING_LIST,
} from "@/SiteComponents/constant";
import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { createStyles, Theme } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";
import { DEFAULT_44 } from "../../theme/ConstantColors";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: DEFAULT_44,
      color: "white",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {
      backgroundColor: "#5BD62A",
      color: "white",
      border: "1px solid #3b3a3a",
    },
  });

const Footer = () => {
  const {
    // -------------------------- Footer
    fontSizeVerifyFooter,
    fontVerifyFooter,
    colorVerifyFooter,
    backgroundColorVerifyFooter,
    //  border
    borderBottomColorVerifyFooter,
    borderBottomWidthVerifyFooter,
    borderTopColorVerifyFooter,
    borderTopWidthVerifyFooter,
    borderLeftColorVerifyFooter,
    borderLeftWidthVerifyFooter,
    borderRightColorVerifyFooter,
    borderRightWidthVerifyFooter,
    // border style
    borderRightStyleVerifyFooter,
    borderLeftStyleVerifyFooter,
    borderTopStyleVerifyFooter,
    borderBottomStyleVerifyFooter,
    // border radius
    borderTopRightRadiusVerifyFooter,
    borderTopLeftRadiusVerifyFooter,
    borderBottomRightRadiusVerifyFooter,
    borderBottomLeftRadiusVerifyFooter,
    // padding
    paddingTopVerifyFooter,
    paddingBottomVerifyFooter,
    paddingLeftVerifyFooter,
    paddingRightVerifyFooter,
    // margin
    marginTopVerifyFooter,
    marginBottomVerifyFooter,
    marginLeftVerifyFooter,
    marginRightVerifyFooter,
  }: // ---------------------------- Footer code

  any = useModalsAppProvider();
  const {
    bodyBackgroundColor,
    setBodyBackgroundColor,
    loading,
    isReadOnly,
  }: any = useAppProvider();

  const [contentStyle, setContentStyle] = React.useState({ display: "none" });
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "fit-content",
        zIndex: 1000,
      }}
      onMouseEnter={() => setContentStyle({ display: "block" })}
      onMouseLeave={() => setContentStyle({ display: "none" })}
    >
      {isReadOnly ? null : <FooterVerificationOptionsUi style={contentStyle} />}
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div
          style={{
            // backgroundColor: backgroundColorVerifyFooter,
            color: colorVerifyFooter,
            fontSize: fontSizeVerifyFooter,
            fontFamily: fontVerifyFooter,
            borderBottomColor: borderBottomColorVerifyFooter,
            borderBottomWidth: `${borderBottomWidthVerifyFooter}px`,
            borderTopColor: borderTopColorVerifyFooter,
            borderTopWidth: `${borderTopWidthVerifyFooter}px`,
            borderLeftColor: borderLeftColorVerifyFooter,
            borderLeftWidth: `${borderLeftWidthVerifyFooter}px`,
            borderRightColor: borderRightColorVerifyFooter,
            borderRightWidth: `${borderRightWidthVerifyFooter}px`,
            borderRightStyle: borderRightStyleVerifyFooter,
            borderLeftStyle: borderLeftStyleVerifyFooter,
            borderTopStyle: borderTopStyleVerifyFooter,
            borderBottomStyle: borderBottomStyleVerifyFooter,
            borderTopRightRadius: `${borderTopRightRadiusVerifyFooter}px`,
            borderTopLeftRadius: `${borderTopLeftRadiusVerifyFooter}px`,
            borderBottomRightRadius: `${borderBottomRightRadiusVerifyFooter}px`,
            borderBottomLeftRadius: `${borderBottomLeftRadiusVerifyFooter}px`,
            paddingTop: `${paddingTopVerifyFooter}px`,
            paddingBottom: `${paddingBottomVerifyFooter}px`,
            paddingLeft: `${paddingLeftVerifyFooter}px`,
            paddingRight: `${paddingRightVerifyFooter}px`,
            marginTop: `${marginTopVerifyFooter}px`,
            marginBottom: `${marginBottomVerifyFooter}px`,
            marginLeft: `${marginLeftVerifyFooter}px`,
            marginRight: `${marginRightVerifyFooter}px`,
            width: "100%",
          }}
        >
          {/* CONTACT_DATA */}
          <div className="flex items-center relative justify-start pr-6 pl-6 rounded-b flex-wrap">
            {FOOTER_DATA_BOOKING_LIST.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-1 font-sans font-thin text-lg text-gray-500"
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center relative justify-start pr-6 pl-6 rounded-b flex-wrap">
            {CONTACT_DATA.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 font-sans font-thin text-[9px]  text-gray-500"
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
