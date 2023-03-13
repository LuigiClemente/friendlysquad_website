import { useAppProvider } from "@appProvider/AppProvider"
import { Box, Toolbar, Typography } from "@mui/material"
import Skeleton from "@mui/material/Skeleton"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { getPluginValue } from "../../utils/uiController"
import { BODY_PLUGIN_ID, HEADER_PLUGIN_ID, LOGO_PLUGIN_ID } from "../Constant/const"
import HeaderOptionsUi from "../CustomPopover/HeaderOptionsUi"
import Logo from "../Logo"

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const Header = () => {
  const {
    dialogOpenHeader,
    setDialogOpenHeader,
    setHeaderDBFormat,
    isReadOnly,
    // -------------------------- Header --------------------------
    fontSizeHeader,
    setFontSizeHeader,
    fontHeader,
    setFontHeader,
    colorHeader,
    setColorHeader,
    backgroundColorHeader,
    setBackgroundColorHeader,
    //  border
    borderBottomColorHeader,
    setBorderBottomColorHeader,
    borderBottomWidthHeader,
    setBorderBottomWidthHeader,
    borderTopColorHeader,
    setBorderTopColorHeader,
    borderTopWidthHeader,
    setBorderTopWidthHeader,
    borderLeftColorHeader,
    setBorderLeftColorHeader,
    borderLeftWidthHeader,
    setBorderLeftWidthHeader,
    borderRightColorHeader,
    setBorderRightColorHeader,
    borderRightWidthHeader,
    setBorderRightWidthHeader,
    // border style
    borderRightStyleHeader,
    setBorderRightStyleHeader,
    borderLeftStyleHeader,
    setBorderLeftStyleHeader,
    borderTopStyleHeader,
    setBorderTopStyleHeader,
    borderBottomStyleHeader,
    setBorderBottomStyleHeader,
    // border radius
    borderTopRightRadiusHeader,
    setBorderTopRightRadiusHeader,
    borderTopLeftRadiusHeader,
    setBorderTopLeftRadiusHeader,
    borderBottomRightRadiusHeader,
    setBorderBottomRightRadiusHeader,
    borderBottomLeftRadiusHeader,
    setBorderBottomLeftRadiusHeader,
    // padding
    paddingTopHeader,
    setPaddingTopHeader,
    paddingBottomHeader,
    setPaddingBottomHeader,
    paddingLeftHeader,
    setPaddingLeftHeader,
    paddingRightHeader,
    setPaddingRightHeader,
    // margin
    marginTopHeader,
    setMarginTopHeader,
    marginBottomHeader,
    setMarginBottomHeader,
    marginLeftHeader,
    setMarginLeftHeader,
    marginRightHeader,
    setMarginRightHeader,
    // header hight and width

    // for logo
    setFontSizeLogo,
    setBackgroundColorLogo,
    setColorLogo,
    setFontLogo,
    // border color and width
    setBorderBottomColorLogo,
    setBorderBottomWidthLogo,
    setBorderTopColorLogo,
    setBorderTopWidthLogo,
    setBorderLeftColorLogo,
    setBorderLeftWidthLogo,
    setBorderRightColorLogo,
    setBorderRightWidthLogo,
    // border style
    setBorderRightStyleLogo,
    setBorderLeftStyleLogo,
    setBorderTopStyleLogo,
    setBorderBottomStyleLogo,
    // border radius
    setBorderTopRightRadiusLogo,
    setBorderTopLeftRadiusLogo,
    setBorderBottomRightRadiusLogo,
    setBorderBottomLeftRadiusLogo,

    // padding
    setPaddingTopLogo,
    setPaddingBottomLogo,
    setPaddingLeftLogo,
    setPaddingRightLogo,
    // margin
    setMarginTopLogo,
    setMarginBottomLogo,
    setMarginLeftLogo,
    setMarginRightLogo,
    // logo hight and width
    setMinWidthLogo,
    setMaxWidthLogo,
    setMinHeightLogo,
    setMaxHeightLogo,
    // db
    headerDBFormat,
    // for body
    setBodyBackgroundColor,
    setContainerBackgroundColor,
    setContainerShadow
  }: any = useAppProvider()
  const [headerStyle, setHeaderStyle] = React.useState({ display: "none" })
  const router = useRouter()
  const update = (data) => {
    if (data) {
      const defaultBodyFormat: any = getPluginValue(data, BODY_PLUGIN_ID)

      console.log("body format :", defaultBodyFormat)
      setBodyBackgroundColor(defaultBodyFormat?.bodyBackgroundColor)
      setContainerBackgroundColor(defaultBodyFormat?.containerBackgroundColor)
      setContainerShadow(defaultBodyFormat?.containerShadow)

      const defaultHeaderFormat: any = getPluginValue(data, HEADER_PLUGIN_ID)
      setFontSizeHeader(defaultHeaderFormat?.fontSizeHeader)
      console.log("this is json file for header", defaultHeaderFormat)
      setBackgroundColorHeader(defaultHeaderFormat?.backgroundColorHeader)
      setColorHeader(defaultHeaderFormat?.colorHeader)
      setFontHeader(defaultHeaderFormat?.fontHeader)
      // border background color
      setBorderBottomColorHeader(defaultHeaderFormat?.borderBottomColorHeader)
      setBorderRightColorHeader(defaultHeaderFormat?.borderRightColorHeader)
      setBorderLeftColorHeader(defaultHeaderFormat?.borderLeftColorHeader)
      setBorderTopColorHeader(defaultHeaderFormat?.borderTopColorHeader)
      // border width
      setBorderRightWidthHeader(defaultHeaderFormat?.borderRightWidthHeader)
      setBorderLeftWidthHeader(defaultHeaderFormat?.borderLeftWidthHeader)
      setBorderTopWidthHeader(defaultHeaderFormat?.borderTopWidthHeader)
      setBorderBottomWidthHeader(defaultHeaderFormat?.borderBottomWidthHeader)
      // border style
      setBorderRightStyleHeader(defaultHeaderFormat?.borderRightStyleHeader)
      setBorderLeftStyleHeader(defaultHeaderFormat?.borderLeftStyleHeader)
      setBorderTopStyleHeader(defaultHeaderFormat?.borderTopStyleHeader)
      setBorderBottomStyleHeader(defaultHeaderFormat?.borderBottomStyleHeader)
      // border radius border-top-right-radius
      setBorderTopRightRadiusHeader(defaultHeaderFormat?.borderTopRightRadiusHeader)
      setBorderTopLeftRadiusHeader(defaultHeaderFormat?.borderTopLeftRadiusHeader)
      setBorderBottomRightRadiusHeader(defaultHeaderFormat?.borderBottomRightRadiusHeader)
      setBorderBottomLeftRadiusHeader(defaultHeaderFormat?.borderBottomLeftRadiusHeader)
      // padding
      setPaddingRightHeader(defaultHeaderFormat?.paddingRightHeader)
      setPaddingLeftHeader(defaultHeaderFormat?.paddingLeftHeader)
      setPaddingTopHeader(defaultHeaderFormat?.paddingTopHeader)
      setPaddingBottomHeader(defaultHeaderFormat?.paddingBottomHeader)
      // margin
      setMarginRightHeader(defaultHeaderFormat?.marginRightHeader)
      setMarginLeftHeader(defaultHeaderFormat?.marginLeftHeader)
      setMarginTopHeader(defaultHeaderFormat?.marginTopHeader)
      setMarginBottomHeader(defaultHeaderFormat?.marginBottomHeader)

      const defaultLogoFormat: any = getPluginValue(data, LOGO_PLUGIN_ID)
      setFontSizeLogo(defaultLogoFormat?.fontSizeLogo)
      setBackgroundColorLogo(defaultLogoFormat?.backgroundColorLogo)
      setColorLogo(defaultLogoFormat?.colorLogo)
      setFontLogo(defaultLogoFormat?.fontLogo)

      setBorderBottomColorLogo(defaultLogoFormat?.borderBottomColorLogo)
      setBorderRightColorLogo(defaultLogoFormat?.borderRightColorLogo)
      setBorderLeftColorLogo(defaultLogoFormat?.borderLeftColorLogo)
      setBorderTopColorLogo(defaultLogoFormat?.borderTopColorLogo)
      // border width
      setBorderRightWidthLogo(defaultLogoFormat?.borderRightWidthLogo)
      setBorderLeftWidthLogo(defaultLogoFormat?.borderLeftWidthLogo)
      setBorderTopWidthLogo(defaultLogoFormat?.borderTopWidthLogo)
      setBorderBottomWidthLogo(defaultLogoFormat?.borderBottomWidthLogo)
      // border style
      setBorderRightStyleLogo(defaultLogoFormat?.borderRightStyleLogo)
      setBorderLeftStyleLogo(defaultLogoFormat?.borderLeftStyleLogo)
      setBorderTopStyleLogo(defaultLogoFormat?.borderTopStyleLogo)
      setBorderBottomStyleLogo(defaultLogoFormat?.borderBottomStyleLogo)
      // border radius border-top-right-radius
      setBorderTopRightRadiusLogo(defaultLogoFormat?.borderTopRightRadiusLogo)
      setBorderTopLeftRadiusLogo(defaultLogoFormat?.borderTopLeftRadiusLogo)
      setBorderBottomRightRadiusLogo(defaultLogoFormat?.borderBottomRightRadiusLogo)
      setBorderBottomLeftRadiusLogo(defaultLogoFormat?.borderBottomLeftRadiusLogo)

      // padding
      setPaddingRightLogo(defaultLogoFormat?.paddingRightLogo)
      setPaddingLeftLogo(defaultLogoFormat?.paddingLeftLogo)
      setPaddingTopLogo(defaultLogoFormat?.paddingTopLogo)
      setPaddingBottomLogo(defaultLogoFormat?.paddingBottomLogo)
      // margin
      setMarginRightLogo(defaultLogoFormat?.marginRightLogo)
      setMarginLeftLogo(defaultLogoFormat?.marginLeftLogo)
      setMarginTopLogo(defaultLogoFormat?.marginTopLogo)
      setMarginBottomLogo(defaultLogoFormat?.marginBottomLogo)
      // min width for logo
      setMinWidthLogo(defaultLogoFormat?.minWidthLogo)
      // min height for logo
      setMinHeightLogo(defaultLogoFormat?.minHeightLogo)
      // max width for logo
      setMaxWidthLogo(defaultLogoFormat?.maxWidthLogo)
      // max height for logo
      setMaxHeightLogo(defaultLogoFormat?.maxHeightLogo)
    }
  }
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (headerDBFormat) {
      console.log("headerDBFormat", headerDBFormat)
      update(headerDBFormat)
      setLoading(true)
    }
  }, [headerDBFormat])

  return (
    <div>
      {!loading ? (
        <Skeleton style={{ padding: "10px", width: "100%", height: "100px" }} animation="wave" />
      ) : (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            // backgroundColor: backgroundColorHeader,
            width: "100%"
          }}
          id="header"
        >
          <div
            style={{ position: "relative", width: "100%", height: "fit-content" }}
            onMouseEnter={() => setHeaderStyle({ display: "flex" })}
            onMouseLeave={() => setHeaderStyle({ display: "none" })}
          >
            {isReadOnly ? null : <HeaderOptionsUi style={headerStyle} />}
            <Toolbar
              style={{
                fontSize: fontSizeHeader,
                fontFamily: fontHeader,
                color: colorHeader,
                // backgroundColor: backgroundColorHeader,
                // border
                borderBottomColor: `${borderBottomColorHeader}px`,
                borderBottomWidth: `${borderBottomWidthHeader}px`,
                borderTopColor: borderTopColorHeader,
                borderTopWidth: `${borderTopWidthHeader}px`,
                borderLeftColor: borderLeftColorHeader,
                borderLeftWidth: `${borderLeftWidthHeader}px`,
                borderRightColor: borderRightColorHeader,
                borderRightWidth: `${borderRightWidthHeader}px`,
                // border style
                borderRightStyle: borderRightStyleHeader,
                borderLeftStyle: borderLeftStyleHeader,
                borderTopStyle: borderTopStyleHeader,
                borderBottomStyle: borderBottomStyleHeader,
                // border radius
                borderTopRightRadius: `${borderTopRightRadiusHeader}px`,
                borderTopLeftRadius: `${borderTopLeftRadiusHeader}px`,
                borderBottomRightRadius: `${borderBottomRightRadiusHeader}px`,
                borderBottomLeftRadius: `${borderBottomLeftRadiusHeader}px`,
                // padding
                paddingTop: `${paddingTopHeader}px`,
                paddingBottom: `${paddingBottomHeader}px`,
                paddingLeft: `${paddingLeftHeader}px`,
                paddingRight: `${paddingRightHeader}px`,
                // margin
                marginTop: `${marginTopHeader}px`,
                marginBottom: `${marginBottomHeader}px`,
                marginLeft: `${marginLeftHeader}px`,
                marginRight: `${marginRightHeader}px`,

                display: "flex",
                position: "relative",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
                // backgroundColor: DEFAULT_COLOR_SITE
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Logo />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography style={{ fontSize: fontSizeHeader, fontFamily: fontHeader }}>
                  {" "}
                  Need Help? Contact Us
                </Typography>
                <Typography style={{ fontSize: fontSizeHeader, fontFamily: fontHeader }}>
                  Customer Number: 098498493
                </Typography>
              </div>
            </Toolbar>
          </div>
        </Box>
      )}
    </div>
  )
}

export default Header
