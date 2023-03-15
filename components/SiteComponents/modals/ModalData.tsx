
import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import React from "react"
import TitleDataOptionsUi from '@/CustomPopover/TitleDataOptionsUi'
import ModalDataOptionsUi from '@/CustomPopover/ModalDataOptionsUi'

const ModalData = ({data ,title}:any) => {
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

    // ---------------------------- ModalData code
    fontSizeDataModal,
    fontDataModal,
    colorDataModal,
    backgroundColorDataModal,
    //  border
    borderBottomColorDataModal,
    borderBottomWidthDataModal,
    borderTopColorDataModal,
    borderTopWidthDataModal,
    borderLeftColorDataModal,
    borderLeftWidthDataModal,
    borderRightColorDataModal,
    borderRightWidthDataModal,
    // border style
    borderRightStyleDataModal,
    borderLeftStyleDataModal,
    borderTopStyleDataModal,
    borderBottomStyleDataModal,
    // border radius
    borderTopRightRadiusDataModal,
    borderTopLeftRadiusDataModal,
    borderBottomRightRadiusDataModal,
    borderBottomLeftRadiusDataModal,
    // padding
    paddingTopDataModal,
    paddingBottomDataModal,
    paddingLeftDataModal,
    paddingRightDataModal,
    // margin
    marginTopDataModal,
    marginBottomDataModal,
    marginLeftDataModal,
    marginRightDataModal
  }: any = useModalsAppProvider()
  const { bodyBackgroundColor, setBodyBackgroundColor, loading, isReadOnly }: any = useAppProvider()
  const [titleStyle, setTitleStyle] = React.useState({ display: "none" })
  const [codeStyle, setCodeStyle] = React.useState({ display: "none" })
  return (
    <div style={{ padding: "1rem" }}>
      <div
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
            fontSize: fontSizeDataModal,
            color: colorDataModal,
            font: fontDataModal,
            fontFamily: fontDataModal,
            // backgroundColor: backgroundColorDataModal,
            borderBottomColor: borderBottomColorDataModal,
            borderBottomWidth: `${borderBottomWidthDataModal}px`,
            borderTopColor: borderTopColorDataModal,
            borderTopWidth: `${borderTopWidthDataModal}px`,
            borderLeftColor: borderLeftColorDataModal,
            borderLeftWidth: `${borderLeftWidthDataModal}px`,
            borderRightColor: borderRightColorDataModal,
            borderRightWidth: `${borderRightWidthDataModal}px`,
            borderRightStyle: borderRightStyleDataModal,
            borderLeftStyle: borderLeftStyleDataModal,
            borderTopStyle: borderTopStyleDataModal,
            borderBottomStyle: borderBottomStyleDataModal,
            borderTopRightRadius: `${borderTopRightRadiusDataModal}px`,
            borderTopLeftRadius: `${borderTopLeftRadiusDataModal}px`,
            borderBottomRightRadius: `${borderBottomRightRadiusDataModal}px`,
            borderBottomLeftRadius: `${borderBottomLeftRadiusDataModal}px`,
            paddingTop: `${paddingTopDataModal}px`,
            paddingBottom: `${paddingBottomDataModal}px`,
            paddingLeft: `${paddingLeftDataModal}px`,
            paddingRight: `${paddingRightDataModal}px`,
            marginTop: `${marginTopDataModal}px`,
            marginBottom: `${marginBottomDataModal}px`,
            marginLeft: `${marginLeftDataModal}px`,
            marginRight: `${marginRightDataModal}px`
          }}
        >
          <div
            style={{
              marginBottom: "30px",
              fontFamily: fontDataModal,
              fontSize: fontSizeDataModal
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
