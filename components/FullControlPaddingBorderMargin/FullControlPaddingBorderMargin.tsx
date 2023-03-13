import { useAppProvider } from "@appProvider/AppProvider"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useState } from "react"

import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import { updatePluginValue } from "../../utils/uiController"
import {
  HEADER,
  HEADER_PLUGIN_ID,
  LOGO,
  LOGO_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID
} from "../Constant/const"
import PopperBorderStyle from "../CustomPopover/ToolBoxBorder/PopperBorderStyle"
import UpdateValueSettings from "./UpdateValueSettings"

const FullControlPaddingBorderMargin = ({ nameSection }: any) => {
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.down("md"))

  const {
    setHeaderDBFormat,
    headerDBFormat,
    dbFormat,
    setDbFormat,
    // ----------------------------------------- header
    setBorderBottomWidthHeader,
    setBorderTopWidthHeader,
    setBorderLeftWidthHeader,
    setBorderRightWidthHeader,

    // border radius
    setBorderTopRightRadiusHeader,
    setBorderTopLeftRadiusHeader,
    setBorderBottomRightRadiusHeader,
    setBorderBottomLeftRadiusHeader,
    // padding
    setPaddingTopHeader,
    setPaddingBottomHeader,
    setPaddingLeftHeader,
    setPaddingRightHeader,
    // margin
    setMarginTopHeader,
    setMarginBottomHeader,
    setMarginLeftHeader,
    setMarginRightHeader,

    // --------------this is for logo
    // border color and width
    setBorderBottomWidthLogo,
    setBorderTopWidthLogo,
    setBorderLeftWidthLogo,
    setBorderRightWidthLogo,

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
    setMarginRightLogo
  }: any = useAppProvider()
  // set use state size
  const {
    // -------------------------- VerifyData --------------------------
    setBorderBottomWidthVerifyData,
    setBorderTopWidthVerifyData,
    setBorderLeftWidthVerifyData,
    setBorderRightWidthVerifyData,

    // border radius
    setBorderTopRightRadiusVerifyData,
    setBorderTopLeftRadiusVerifyData,
    setBorderBottomRightRadiusVerifyData,
    setBorderBottomLeftRadiusVerifyData,
    // padding
    setPaddingTopVerifyData,
    setPaddingBottomVerifyData,
    setPaddingLeftVerifyData,
    setPaddingRightVerifyData,
    // margin
    setMarginTopVerifyData,
    setMarginBottomVerifyData,
    setMarginLeftVerifyData,
    setMarginRightVerifyData,
    // -------------------------- VerifyData Btn --------------------------
    setBorderBottomWidthVerifyCode,
    setBorderTopWidthVerifyCode,
    setBorderLeftWidthVerifyCode,
    setBorderRightWidthVerifyCode,

    // border radius
    setBorderTopRightRadiusVerifyCode,
    setBorderTopLeftRadiusVerifyCode,
    setBorderBottomRightRadiusVerifyCode,
    setBorderBottomLeftRadiusVerifyCode,
    // padding
    setPaddingTopVerifyCode,
    setPaddingBottomVerifyCode,
    setPaddingLeftVerifyCode,
    setPaddingRightVerifyCode,
    // margin
    setMarginTopVerifyCode,
    setMarginBottomVerifyCode,
    setMarginLeftVerifyCode,
    setMarginRightVerifyCode,

    // -------------------------- VerifyTitle --------------------------
    setBorderBottomWidthVerifyTitle,
    setBorderTopWidthVerifyTitle,
    setBorderLeftWidthVerifyTitle,
    setBorderRightWidthVerifyTitle,
    // border radius
    setBorderTopRightRadiusVerifyTitle,
    setBorderTopLeftRadiusVerifyTitle,
    setBorderBottomRightRadiusVerifyTitle,
    setBorderBottomLeftRadiusVerifyTitle,
    // padding
    setPaddingTopVerifyTitle,
    setPaddingBottomVerifyTitle,
    setPaddingLeftVerifyTitle,
    setPaddingRightVerifyTitle,
    // margin
    setMarginTopVerifyTitle,
    setMarginBottomVerifyTitle,
    setMarginLeftVerifyTitle,
    setMarginRightVerifyTitle,
    // -------------------------- VerifyTitle Btn --------------------------
    setBorderBottomWidthVerifyFooter,
    setBorderTopWidthVerifyFooter,
    setBorderLeftWidthVerifyFooter,
    setBorderRightWidthVerifyFooter,

    // border radius
    setBorderTopRightRadiusVerifyFooter,
    setBorderTopLeftRadiusVerifyFooter,
    setBorderBottomRightRadiusVerifyFooter,
    setBorderBottomLeftRadiusVerifyFooter,
    // padding
    setPaddingTopVerifyFooter,
    setPaddingBottomVerifyFooter,
    setPaddingLeftVerifyFooter,
    setPaddingRightVerifyFooter,
    // margin
    setMarginTopVerifyFooter,
    setMarginBottomVerifyFooter,
    setMarginLeftVerifyFooter,
    setMarginRightVerifyFooter,
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat
  }: any = useModalsAppProvider()
  // set use state margin
  const {
    borderBottomColor,
    setBorderBottomColor,
    borderBottomWidth,
    setBorderBottomWidth,
    borderTopColor,
    setBorderTopColor,
    borderTopWidth,
    setBorderTopWidth,
    borderLeftColor,
    setBorderLeftColor,
    borderLeftWidth,
    setBorderLeftWidth,
    borderRightColor,
    setBorderRightColor,
    borderRightWidth,
    setBorderRightWidth,
    borderRightStyle,
    setBorderRightStyle,
    borderLeftStyle,
    setBorderLeftStyle,
    borderTopStyle,
    setBorderTopStyle,
    borderBottomStyle,
    setBorderBottomStyle,
    borderTopRightRadius,
    setBorderTopRightRadius,
    borderTopLeftRadius,
    setBorderTopLeftRadius,
    borderBottomRightRadius,
    setBorderBottomRightRadius,
    borderBottomLeftRadius,
    setBorderBottomLeftRadius,
    paddingTop,
    setPaddingTop,
    paddingBottom,
    setPaddingBottom,
    paddingLeft,
    setPaddingLeft,
    paddingRight,
    setPaddingRight,
    marginTop,
    setMarginTop,
    marginBottom,
    setMarginBottom,
    marginLeft,
    setMarginLeft,
    marginRight,
    setMarginRight
  }: any = useUpdateSettingsProvider()
  UpdateValueSettings(nameSection)
  const [isActiveStyleBorderPopper, setIsActiveStyleBorderPopper] = useState(false)

  const [sideEffect, setSideEffect] = useState("top")

  const { content, setContent }: any = useUndoable()

  //handle for border bottom width change
  const handleBorderBottomWidthChange = (e: any) => {
    setBorderBottomWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderBottomWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomWidthLogo", e.target.value)
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: LOGO })
    }
    if (nameSection === HEADER) {
      setBorderBottomWidthHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomWidthHeader",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }

    // buttons
  }

  //handle for border top width change
  const handleBorderTopWidthChange = (e: any) => {
    setBorderTopWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderTopWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopWidthLogo", e.target.value)
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthVerifyCode",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_CODE })
    }
  }

  //handle for border left width change
  const handleBorderLeftWidthChange = (e: any) => {
    setBorderLeftWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderLeftWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftWidthLogo", e.target.value)
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderLeftWidthHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftWidthHeader", e.target.value)
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }

  //handle for border right width change
  const handleBorderRightWidthChange = (e: any) => {
    setBorderRightWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderRightWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightWidthLogo", e.target.value)
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderRightWidthHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightWidthHeader",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }

  //handle for border top right radius change
  const handleBorderTopRightRadiusChange = (e: any) => {
    setBorderTopRightRadius(e.target.value)
    if (nameSection === LOGO) {
      setBorderTopRightRadiusLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopRightRadiusLogo",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setBorderTopRightRadiusHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopRightRadiusHeader",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopRightRadiusVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopRightRadiusVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopRightRadiusVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopRightRadiusVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border top left radius change
  const handleBorderTopLeftRadiusChange = (e: any) => {
    setBorderTopLeftRadius(e.target.value)
    if (nameSection === LOGO) {
      setBorderTopLeftRadiusLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopLeftRadiusLogo", e.target.value)
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setBorderTopLeftRadiusHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopLeftRadiusHeader",
          e.target.value
        )
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopLeftRadiusVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopLeftRadiusVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopLeftRadiusVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopLeftRadiusVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border bottom right radius change
  const handleBorderBottomRightRadiusChange = (e: any) => {
    setBorderBottomRightRadius(e.target.value)
    if (nameSection === LOGO) {
      setBorderBottomRightRadiusLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomRightRadiusLogo",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setBorderBottomRightRadiusHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomRightRadiusHeader",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomRightRadiusVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomRightRadiusVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomRightRadiusVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomRightRadiusVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border bottom left radius change
  const handleBorderBottomLeftRadiusChange = (e: any) => {
    setBorderBottomLeftRadius(e.target.value)
    if (nameSection === LOGO) {
      setBorderBottomLeftRadiusLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomLeftRadiusLogo",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setBorderBottomLeftRadiusHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomLeftRadiusHeader",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomLeftRadiusVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomLeftRadiusVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomLeftRadiusVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomLeftRadiusVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for padding top change
  const handlePaddingTopChange = (e: any) => {
    setPaddingTop(e.target.value)
    if (nameSection === LOGO) {
      setPaddingTopLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingTopLogo", e.target.value)
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setPaddingTopHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingTopHeader", e.target.value)
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingTopVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingTopVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setPaddingTopVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setPaddingTopVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for padding bottom change
  const handlePaddingBottomChange = (e: any) => {
    setPaddingBottom(e.target.value)
    if (nameSection === LOGO) {
      setPaddingBottomLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingBottomLogo", e.target.value)
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setPaddingBottomHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingBottomHeader", e.target.value)
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingBottomVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "PaddingBottomVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingBottomVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingBottomVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setPaddingBottomVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setPaddingBottomVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for padding left change
  const handlePaddingLeftChange = (e: any) => {
    setPaddingLeft(e.target.value)
    if (nameSection === LOGO) {
      setPaddingLeftLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingLeftLogo", e.target.value)
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setPaddingLeftHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingLeftHeader", e.target.value)
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingLeftVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingLeftVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setPaddingLeftVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setPaddingLeftVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for padding right change
  const handlePaddingRightChange = (e: any) => {
    setPaddingRight(e.target.value)
    if (nameSection === LOGO) {
      setPaddingRightLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingRightLogo", e.target.value)
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setPaddingRightHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingRightHeader", e.target.value)
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingRightVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingRightVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setPaddingRightVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setPaddingRightVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for margin top change ------------------------------------------------------------------------------------------- remaining
  const handleMarginTopChange = (e: any) => {
    setMarginTop(e.target.value)
    if (nameSection === LOGO) {
      setMarginTopLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginTopLogo", e.target.value)
      )
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === VERIFY_TITLE) {
      setMarginTopVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginTopVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setMarginTopVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setMarginTopVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for margin bottom change
  const handleMarginBottomChange = (e: any) => {
    setMarginBottom(e.target.value)
    if (nameSection === LOGO) {
      setMarginBottomLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginBottomLogo", e.target.value)
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setMarginBottomHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginBottomHeader", e.target.value)
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setMarginBottomVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginBottomVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setMarginBottomVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setMarginBottomVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for margin left change
  const handleMarginLeftChange = (e: any) => {
    setMarginLeft(e.target.value)
    if (nameSection === LOGO) {
      setMarginLeftLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginLeftLogo", e.target.value)
      )
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === VERIFY_TITLE) {
      setMarginLeftVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginLeftVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setMarginLeftVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setMarginLeftVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for margin right change
  const handleMarginRightChange = (e: any) => {
    setMarginRight(e.target.value)
    if (nameSection === LOGO) {
      setMarginRightLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginRightLogo", e.target.value)
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setMarginRightHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginRightHeader", e.target.value)
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: HEADER
      })
    } else if (nameSection === VERIFY_TITLE) {
      setMarginRightVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginRightVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setMarginRightVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setMarginRightVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  // buttons

  // popper for border style
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>, sideName: any) => {
    setAnchorEl(event.currentTarget)
    setOpen((previousOpen) => !previousOpen)
    setSideEffect(sideName)
    setIsActiveStyleBorderPopper(!isActiveStyleBorderPopper)
  }
  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? "transition-popper" : undefined

  return (
    <div
      style={{
        padding: isMdUp ? "0px !important" : "1px !important",
        margin: isMdUp ? "0px !important" : "1px !important",
        minWidth: "450px !important",
        width: "400px",
        position: "relative"
      }}
    >
      {isActiveStyleBorderPopper && (
        <PopperBorderStyle
          open={open}
          anchorEl={anchorEl}
          id={id}
          sideName={sideEffect}
          nameSection={nameSection}
        />
      )}
      <div role="document" className="editor resizable-content flex flex-column">
        <div
          className="form ps ps--active-y"
          style={{
            padding: isMdUp ? "0px !important" : "1px !important",
            margin: isMdUp ? "0px !important" : "1px !important"
          }}
        >
          {/* Size */}

          <div
            className="form-group form-group-collapsible"
            style={{ minWidth: "350px !important", width: "100%", position: "relative" }}
          >
            <label className="form-label">
              <b className="text">Box</b>
            </label>
            <div>
              {/* For Margin */}
              <div>
                <div className="box-model">
                  <div className="box-model-margin box-model-enabled">
                    <div className="box-model-group">
                      <span className="box-model-label text">margin</span>
                      <input
                        type="text"
                        className="box-model-control box-model-control-top text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginTop}
                        onChange={handleMarginTopChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-left text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginLeft}
                        onChange={handleMarginLeftChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-right text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginRight}
                        onChange={handleMarginRightChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-bottom text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginBottom}
                        onChange={handleMarginBottomChange}
                      />
                    </div>
                    {/* for Border */}
                    <div className="box-model-border box-model-enabled">
                      <div className="box-model-group">
                        <span className="box-model-label text">border</span>
                        <input
                          type="text"
                          className="box-model-control box-model-control-top text"
                          placeholder="--"
                          aria-expanded="false"
                          onChange={handleBorderTopWidthChange}
                          value={borderTopWidth}
                          aria-describedby={id}
                          onClick={(e) => handleClick(e, "top")}
                          // onClick={handleClick}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-left text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderLeftWidthChange}
                          value={borderLeftWidth}
                          onClick={(e) => handleClick(e, "left")}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-right text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderRightWidthChange}
                          value={borderRightWidth}
                          onClick={(e) => handleClick(e, "right")}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderBottomWidthChange}
                          value={borderBottomWidth}
                          onClick={(e) => handleClick(e, "bottom")}
                        />

                        <input
                          type="text"
                          className="box-model-control box-model-control-top-left text"
                          placeholder="-"
                          onChange={handleBorderTopLeftRadiusChange}
                          value={borderTopLeftRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-top-right text"
                          placeholder="-"
                          onChange={handleBorderTopRightRadiusChange}
                          value={borderTopRightRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-left text"
                          placeholder="-"
                          onChange={handleBorderBottomLeftRadiusChange}
                          value={borderBottomLeftRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-right text"
                          placeholder="-"
                          onChange={handleBorderBottomRightRadiusChange}
                          value={borderBottomRightRadius}
                        />
                      </div>

                      <div className="box-model-padding box-model-enabled">
                        <div className="box-model-group">
                          <span className="box-model-label text">padding</span>
                          <input
                            type="text"
                            className="box-model-control box-model-control-top text"
                            placeholder="-"
                            onChange={handlePaddingTopChange}
                            value={paddingTop}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-left text"
                            placeholder="-"
                            onChange={handlePaddingLeftChange}
                            value={paddingLeft}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-right text"
                            placeholder="-"
                            onChange={handlePaddingRightChange}
                            value={paddingRight}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-bottom text"
                            placeholder="-"
                            onChange={handlePaddingBottomChange}
                            value={paddingBottom}
                          />
                        </div>

                        <div className="box-model-content text">content</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
    </div>
  )
}

export default FullControlPaddingBorderMargin
