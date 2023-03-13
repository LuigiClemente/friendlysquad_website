import FooterVerificationOptionsUi from "@/CustomPopover/FooterVerificationOptionsUi"
import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { createStyles, Theme } from "@material-ui/core"
import Slide from "@material-ui/core/Slide"
import { TransitionProps } from "@material-ui/core/transitions"
import React from "react"
import { DEFAULT_44 } from "../../theme/ConstantColors"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: DEFAULT_44,
      color: "white"
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    btn: {
      backgroundColor: "#5BD62A",
      color: "white",
      border: "1px solid #3b3a3a"
    }
  })

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
    marginRightVerifyFooter
  }: // ---------------------------- Footer code

  any = useModalsAppProvider()
  const { bodyBackgroundColor, setBodyBackgroundColor, loading, isReadOnly }: any = useAppProvider()

  const [contentStyle, setContentStyle] = React.useState({ display: "none" })
  return (
    <div
      style={{ position: "relative" }}
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
            width: "100%"
          }}
        >
          <span style={{ fontSize: fontSizeVerifyFooter, fontFamily: fontVerifyFooter }}>
            Please Do not replay to this email, Email sent to this address will not answered
          </span>
          <span style={{ fontSize: fontSizeVerifyFooter, fontFamily: fontVerifyFooter }}>
            Copy right@ 1999-2023 goDaddy. operating company Lcc
          </span>
          <span
            style={{
              width: "100%",
              display: "flex",
              alignSelf: "flex-end",
              fontFamily: fontVerifyFooter,
              fontSize: fontSizeVerifyFooter
            }}
          >
            98098098098
          </span>
        </div>
      </div>
    </div>
  )
}
export default Footer
