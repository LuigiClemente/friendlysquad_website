
import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import React from "react"
import TitleDataOptionsUi from '@/CustomPopover/TitleDataOptionsUi'
import ModalDataOptionsUi from '@/CustomPopover/ModalDataOptionsUi'

const ModalData = ({data ,title}:any) => {
  const {
    fontSizeVerifyTitle,
    fontVerifyTitle,
    colorVerifyTitle,
    backgroundColorVerifyTitle,
    //  border
    borderBottomColorVerifyTitle,
    borderBottomWidthVerifyTitle,
    borderTopColorVerifyTitle,
    borderTopWidthVerifyTitle,
    borderLeftColorVerifyTitle,
    borderLeftWidthVerifyTitle,
    borderRightColorVerifyTitle,
    borderRightWidthVerifyTitle,
    // border style
    borderRightStyleVerifyTitle,
    borderLeftStyleVerifyTitle,
    borderTopStyleVerifyTitle,
    borderBottomStyleVerifyTitle,
    // border radius
    borderTopRightRadiusVerifyTitle,
    borderTopLeftRadiusVerifyTitle,
    borderBottomRightRadiusVerifyTitle,
    borderBottomLeftRadiusVerifyTitle,
    // padding
    paddingTopVerifyTitle,
    paddingBottomVerifyTitle,
    paddingLeftVerifyTitle,
    paddingRightVerifyTitle,
    // margin
    marginTopVerifyTitle,
    marginBottomVerifyTitle,
    marginLeftVerifyTitle,
    marginRightVerifyTitle,

    // ---------------------------- ModalData code
    fontSizeVerifyCode,
    fontVerifyCode,
    colorVerifyCode,
    backgroundColorVerifyCode,
    //  border
    borderBottomColorVerifyCode,
    borderBottomWidthVerifyCode,
    borderTopColorVerifyCode,
    borderTopWidthVerifyCode,
    borderLeftColorVerifyCode,
    borderLeftWidthVerifyCode,
    borderRightColorVerifyCode,
    borderRightWidthVerifyCode,
    // border style
    borderRightStyleVerifyCode,
    borderLeftStyleVerifyCode,
    borderTopStyleVerifyCode,
    borderBottomStyleVerifyCode,
    // border radius
    borderTopRightRadiusVerifyCode,
    borderTopLeftRadiusVerifyCode,
    borderBottomRightRadiusVerifyCode,
    borderBottomLeftRadiusVerifyCode,
    // padding
    paddingTopVerifyCode,
    paddingBottomVerifyCode,
    paddingLeftVerifyCode,
    paddingRightVerifyCode,
    // margin
    marginTopVerifyCode,
    marginBottomVerifyCode,
    marginLeftVerifyCode,
    marginRightVerifyCode
  }: any = useModalsAppProvider()
  const { bodyBackgroundColor, setBodyBackgroundColor, loading, isReadOnly }: any = useAppProvider()
  const [titleStyle, setTitleStyle] = React.useState({ display: "none" })
  const [codeStyle, setCodeStyle] = React.useState({ display: "none" })
  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          // backgroundColor: backgroundColorVerifyTitle,
          color: colorVerifyTitle,
          fontSize: fontSizeVerifyTitle,
          fontFamily: fontVerifyTitle,
          borderBottomWidth: `${borderBottomWidthVerifyTitle}px`,
          borderTopColor: borderTopColorVerifyTitle,
          borderTopWidth: `${borderTopWidthVerifyTitle}px`,
          borderLeftColor: borderLeftColorVerifyTitle,
          borderLeftWidth: `${borderLeftWidthVerifyTitle}px`,
          borderRightColor: borderRightColorVerifyTitle,
          borderRightWidth: `${borderRightWidthVerifyTitle}px`,
          // border style
          borderRightStyle: borderRightStyleVerifyTitle,
          borderLeftStyle: borderLeftStyleVerifyTitle,
          borderTopStyle: borderTopStyleVerifyTitle,
          borderBottomStyle: borderBottomStyleVerifyTitle,
          // border radius
          borderTopRightRadius: `${borderTopRightRadiusVerifyTitle}px`,
          borderTopLeftRadius: `${borderTopLeftRadiusVerifyTitle}px`,
          borderBottomRightRadius: `${borderBottomRightRadiusVerifyTitle}px`,
          borderBottomLeftRadius: `${borderBottomLeftRadiusVerifyTitle}px`,
          // padding
          paddingTop: `${paddingTopVerifyTitle}px`,
          paddingBottom: `${paddingBottomVerifyTitle}px`,
          paddingLeft: `${paddingLeftVerifyTitle}px`,
          paddingRight: `${paddingRightVerifyTitle}px`,
          // margin
          marginTop: `${marginTopVerifyTitle}px`,
          marginBottom: `${marginBottomVerifyTitle}px`,
          marginLeft: `${marginLeftVerifyTitle}px`,
          marginRight: `${marginRightVerifyTitle}px`,
          position: "relative",
          height: "fit-content",
          fontWeight: "bold"
        }}
        onMouseEnter={() => setTitleStyle({ display: "block" })}
        onMouseLeave={() => setTitleStyle({ display: "none" })}
      >
        {isReadOnly ? null : <TitleDataOptionsUi style={titleStyle} />}
        {title}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative"
        }}
        onMouseEnter={() => setCodeStyle({ display: "block" })}
        onMouseLeave={() => setCodeStyle({ display: "none" })}
      >
        {isReadOnly ? null : <ModalDataOptionsUi style={codeStyle} />}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            padding: "2px",
            fontSize: fontSizeVerifyCode,
            color: colorVerifyCode,
            font: fontVerifyCode,
            fontFamily: fontVerifyCode,
            // backgroundColor: backgroundColorVerifyCode,
            borderBottomColor: borderBottomColorVerifyCode,
            borderBottomWidth: `${borderBottomWidthVerifyCode}px`,
            borderTopColor: borderTopColorVerifyCode,
            borderTopWidth: `${borderTopWidthVerifyCode}px`,
            borderLeftColor: borderLeftColorVerifyCode,
            borderLeftWidth: `${borderLeftWidthVerifyCode}px`,
            borderRightColor: borderRightColorVerifyCode,
            borderRightWidth: `${borderRightWidthVerifyCode}px`,
            borderRightStyle: borderRightStyleVerifyCode,
            borderLeftStyle: borderLeftStyleVerifyCode,
            borderTopStyle: borderTopStyleVerifyCode,
            borderBottomStyle: borderBottomStyleVerifyCode,
            borderTopRightRadius: `${borderTopRightRadiusVerifyCode}px`,
            borderTopLeftRadius: `${borderTopLeftRadiusVerifyCode}px`,
            borderBottomRightRadius: `${borderBottomRightRadiusVerifyCode}px`,
            borderBottomLeftRadius: `${borderBottomLeftRadiusVerifyCode}px`,
            paddingTop: `${paddingTopVerifyCode}px`,
            paddingBottom: `${paddingBottomVerifyCode}px`,
            paddingLeft: `${paddingLeftVerifyCode}px`,
            paddingRight: `${paddingRightVerifyCode}px`,
            marginTop: `${marginTopVerifyCode}px`,
            marginBottom: `${marginBottomVerifyCode}px`,
            marginLeft: `${marginLeftVerifyCode}px`,
            marginRight: `${marginRightVerifyCode}px`
          }}
        >
          <div
            style={{
              marginBottom: "30px",
              fontFamily: fontVerifyCode,
              fontSize: fontSizeVerifyCode
            }}
          >
            {data}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalData
