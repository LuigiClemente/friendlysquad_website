import { useAppProvider } from "@appProvider/AppProvider"
import { useAppStateProvider } from "@appProvider/AppStateProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useEffect } from "react"
import { updatePluginValue } from "../../utils/uiController"
import {
  VERIFY_DATA,
  VERIFY_CODE,
  VERIFY_DATA_PLUGIN_ID,
  BODY_CUSTOMIZE,
  BODY_PLUGIN_ID,
  CONTAINER_CUSTOMIZE,
  HEADER,
  HEADER_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID,
  LOGO,
  LOGO_PLUGIN_ID,
  BUTTONS,
  BUTTONS_PLUGIN_ID
} from "../Constant/const"
const UndoCustomization = ({ name, value, nameSection }: any) => {
  const {
    headerDBFormat,
    setHeaderDBFormat,
    // json db
    dbFormat,
    setDbFormat,
    setBackgroundColorHeader,
    giftDBFormat,
    setGiftDBFormat,
    // this is for body
    setBodyBackgroundColor,
    setContainerBackgroundColor,
    callUndo,
    setCallUndo,
    // -------------------this is for font
    setFontHeader,
    // --------------------- this is for font size
    setFontSizeHeader,
    // -------------------- this is for color
    setColorHeader,
    // --------------------- this is for margin, padding, border & border style
    setBorderBottomColorHeader,
    setBorderBottomWidthHeader,
    setBorderTopColorHeader,
    setBorderTopWidthHeader,
    setBorderLeftColorHeader,
    setBorderLeftWidthHeader,
    setBorderRightColorHeader,
    setBorderRightWidthHeader,
    // border style
    setBorderRightStyleHeader,
    setBorderLeftStyleHeader,
    setBorderTopStyleHeader,
    setBorderBottomStyleHeader,
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
    setMarginRightLogo
    
  }: any = useAppProvider()
const { // ------------------------------------- buttons
  // border width
  setBorderRightWidthButtons,
  setBorderLeftWidthButtons,
  setBorderTopWidthButtons,
  setBorderBottomWidthButtons,
  // border style

  setBorderTopRightRadiusButtons,
  setBorderTopLeftRadiusButtons,
  setBorderBottomRightRadiusButtons,
  setBorderBottomLeftRadiusButtons,
  // padding
  setPaddingRightButtons,
  setPaddingLeftButtons,
  setPaddingTopButtons,
  setPaddingBottomButtons,
  // margin
  setMarginRightButtons,
  setMarginLeftButtons,
  setMarginTopButtons,
  setMarginBottomButtons,
  // for buttons
  setFontSizeButtons,
  setBackgroundColorButtons,
  setColorButtons,
  setFontButtons,
  //  border background color
  setBorderBottomColorButtons,
  setBorderRightColorButtons,
  setBorderLeftColorButtons,
  setBorderTopColorButtons,

  // border style
  setBorderRightStyleButtons,
  setBorderLeftStyleButtons,
  setBorderTopStyleButtons,
  setBorderBottomStyleButtons}:any=useAppStateProvider()
  const {
    dbModalsFormat,
    setDbModalsFormat,

    setBackgroundColorVerifyData,
    setBackgroundColorVerifyCode,
    setBackgroundColorBalanceCheck,
    setBackgroundColorVerifyTitle,
    setBackgroundColorVerifyFooter,
    // -------------------this is for font
    setFontVerifyData,
    setFontVerifyCode,
    setFontBalanceCheck,
    setFontVerifyTitle,
    setFontVerifyFooter,
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
    setBorderBottomColorVerifyFooter,
    setBorderBottomWidthVerifyFooter,
    setBorderTopColorVerifyFooter,
    setBorderTopWidthVerifyFooter,
    setBorderLeftColorVerifyFooter,
    setBorderLeftWidthVerifyFooter,
    setBorderRightColorVerifyFooter,
    setBorderRightWidthVerifyFooter,
    // border style
    setBorderRightStyleVerifyFooter,
    setBorderLeftStyleVerifyFooter,
    setBorderTopStyleVerifyFooter,
    setBorderBottomStyleVerifyFooter,
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

    // -------------------------- VerifyData Btn --------------------------
    setBorderBottomColorVerifyCode,
    setBorderTopColorVerifyCode,
    setBorderLeftColorVerifyCode,
    setBorderRightColorVerifyCode,

    setBorderBottomColorVerifyData,
    setBorderTopColorVerifyData,
    setBorderLeftColorVerifyData,
    setBorderRightColorVerifyData,

    // -------------------------- VerifyTitle --------------------------
    setBorderBottomColorVerifyTitle,
    setBorderTopColorVerifyTitle,
    setBorderLeftColorVerifyTitle,
    setBorderRightColorVerifyTitle,

    // -------------------------- VerifyData --------------------------
    // border style
    setBorderRightStyleVerifyData,
    setBorderLeftStyleVerifyData,
    setBorderTopStyleVerifyData,
    setBorderBottomStyleVerifyData,

    // -------------------------- VerifyData Btn --------------------------
    // border style
    setBorderRightStyleVerifyCode,
    setBorderLeftStyleVerifyCode,
    setBorderTopStyleVerifyCode,
    setBorderBottomStyleVerifyCode,
    // border radius

    // -------------------------- VerifyTitle --------------------------
    // border style
    setBorderRightStyleVerifyTitle,
    setBorderLeftStyleVerifyTitle,
    setBorderTopStyleVerifyTitle,
    setBorderBottomStyleVerifyTitle
  }: // -------------------------- VerifyTitle Btn --------------------------

  any = useModalsAppProvider()
  // setTabColor(getPluginValueProperty(dbFormat, TAP_PLUGIN_ID, "tabColor"))
  // console.log("value is::", value)
  const handleUndoRedo = () => {
    switch (name) {
      case "backgroundColor":
        handleBackgroundColor()
        break
      case "font":
        handleChangeFont()
        break
      case "fontSize":
        handleChangeFontSize()
        break
      case "color":
        handleChangeColor()
        break
      case "borderBottomWidth":
        handleBorderBottomWidth()
        break
      case "borderTopWidth":
        handleBorderTopWidth()
        break
      case "borderLeftWidth":
        handleBorderLeftWidth()
        break
      case "borderRightWidth":
        handleBorderRightWidth()
        break
      case "borderTopRightRadius":
        handleBorderTopRightRadius()
        break
      case "borderTopLeftRadius":
        handleBorderTopLeftRadius()
        break
      case "borderBottomRightRadius":
        handleBorderBottomRightRadius()
        break
      case "borderBottomLeftRadius":
        handleBorderBottomLeftRadius()
        break
      case "paddingTop":
        handlePaddingTop()
        break
      case "paddingBottom":
        handlePaddingBottom()
        break
      case "paddingLeft":
        handlePaddingLeft()
        break
      case "paddingRight":
        handlePaddingRight()
        break
      case "marginTop":
        handleMarginTop()
        break
      case "marginBottom":
        handleMarginBottom()
        break
      case "marginLeft":
        handleMarginLeft()
        break
      case "marginRight":
        handleMarginRight()
        break
      case "borderBottomColor":
        handleBorderBottomColor()
        break
      case "borderTopColor":
        handleBorderTopColor()
        break
      case "borderLeftColor":
        handleBorderLeftColor()
        break
      case "borderRightColor":
        handleBorderRightColor()
        break
      case "borderRightStyle":
        handleBorderRightStyle()
        break
      case "borderLeftStyle":
        handleBorderLeftStyle()
        break
      case "borderTopStyle":
        handleBorderTopStyle()
        break
      case "borderBottomStyle":
        handleBorderBottomStyle()
        break
    }
  }

  useEffect(() => {
    console.log("call undo or redo!", callUndo)
    if (callUndo) {
      handleUndoRedo()
      setCallUndo(false)
    }
  }, [callUndo])
  //handle color for background color for undo and redo
  const handleBackgroundColor = () => {
    if (nameSection === HEADER) {
      setBackgroundColorHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "backgroundColorHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBackgroundColorVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBackgroundColorVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBackgroundColorVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "backgroundColorVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBackgroundColorVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "backgroundColorVerifyCode", value)
      )
    } else if (nameSection === BODY_CUSTOMIZE) {
      setBodyBackgroundColor(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, BODY_PLUGIN_ID, "bodyBackgroundColor", value)
      )
    } else if (nameSection === CONTAINER_CUSTOMIZE) {
      setContainerBackgroundColor(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, BODY_PLUGIN_ID, "containerBackgroundColor", value)
      )
    }else if (nameSection === BUTTONS) {
      setBackgroundColorButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "backgroundColorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "backgroundColorButtons",
          value
        )
      )
    }
  }
  //handle color for font for undo and redo
  const handleChangeFont = () => {
    if (nameSection === HEADER) {
      setFontHeader(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "fontHeader", value))
    } else if (nameSection === VERIFY_TITLE) {
      setFontVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "fontVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFontVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "fontVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setFontVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "fontVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setFontVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "fontVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setFontButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "fontButtons", value))
    }
  }
  //handle color for font size for undo and redo
  const handleChangeFontSize = () => {
    if (nameSection === HEADER) {
      setFontSizeHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "fontSizeHeader", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setFontSizeButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "fontSizeButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "fontSizeButtons",
          value
        )
      )
    }
  }
  //handle color for undo and redo
  const handleChangeColor = () => {
    if (nameSection === HEADER) {
      setColorHeader(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "colorHeader", value))
    }
    else if (nameSection === BUTTONS) {
      setColorButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "colorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "colorButtons",
          value
        )
      )
    }
  }

  //handle for border bottom for undo and redo
  const handleBorderBottomWidth = () => {
    if (nameSection === LOGO) {
      setBorderBottomWidthLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomWidthLogo", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomWidthVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomWidthVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomWidthVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomWidthVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderBottomWidthButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderBottomWidthButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomWidthButtons",
          value
        )
      )
    }
  }

  //handle for border top width change
  const handleBorderTopWidth = () => {
    if (nameSection === LOGO) {
      setBorderTopWidthLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopWidthLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderTopWidthHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderTopWidthHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopWidthVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopWidthVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopWidthVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopWidthVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopWidthVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopWidthVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderTopWidthButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderTopWidthButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopWidthButtons",
          value
        )
      )
      
    }
  }

  //handle for border left width change
  const handleBorderLeftWidth = () => {
    if (nameSection === LOGO) {
      setBorderLeftWidthLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftWidthLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderLeftWidthHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftWidthHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftWidthVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftWidthVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftWidthVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftWidthVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftWidthVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftWidthVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderLeftWidthButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderLeftWidthButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftWidthButtons",
          value
        )
      )
    }
  }

  //handle for border right width change
  const handleBorderRightWidth = () => {
    if (nameSection === LOGO) {
      setBorderRightWidthLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightWidthLogo", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightWidthVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightWidthVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightWidthVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightWidthVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderRightWidthButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderRightWidthButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightWidthButtons",
          value
        )
      )
    }
  }

  //handle for border top right radius change
  const handleBorderTopRightRadius = () => {
    if (nameSection === LOGO) {
      setBorderTopRightRadiusLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopRightRadiusLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderTopRightRadiusHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderTopRightRadiusHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopRightRadiusVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopRightRadiusVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopRightRadiusVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopRightRadiusVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderTopRightRadiusButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderTopRightRadiusButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopRightRadiusButtons",
          value
        )
      )
    }
  }
  //handle for border top left radius change
  const handleBorderTopLeftRadius = () => {
    if (nameSection === LOGO) {
      setBorderTopLeftRadiusLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopLeftRadiusLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderTopLeftRadiusHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderTopLeftRadiusHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopLeftRadiusVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopLeftRadiusVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopLeftRadiusVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopLeftRadiusVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderTopLeftRadiusButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderTopLeftRadiusButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopLeftRadiusButtons",
          value
        )
      )
    }
  }
  //handle for border bottom right radius change
  const handleBorderBottomRightRadius = () => {
    if (nameSection === LOGO) {
      setBorderBottomRightRadiusLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomRightRadiusLogo", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomRightRadiusVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomRightRadiusVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomRightRadiusVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomRightRadiusVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderBottomRightRadiusButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderBottomRightRadiusButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomRightRadiusButtons",
          value
        )
      )
    }
  }
  //handle for border bottom left radius change
  const handleBorderBottomLeftRadius = () => {
    if (nameSection === LOGO) {
      setBorderBottomLeftRadiusLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomLeftRadiusLogo", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomLeftRadiusVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomLeftRadiusVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomLeftRadiusVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomLeftRadiusVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderBottomLeftRadiusButtons(value)
      setDbFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderBottomLeftRadiusButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomLeftRadiusButtons",
          value
        )
      )
    }
  }
  //handle for padding top change
  const handlePaddingTop = () => {
    if (nameSection === LOGO) {
      setPaddingTopLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingTopLogo", value))
    } else if (nameSection === HEADER) {
      setPaddingTopHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingTopHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingTopVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingTopVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingTopVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingTopVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setPaddingTopVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingTopVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setPaddingTopVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingTopVerifyCode", value)
      )

    }
    else if (nameSection === BUTTONS) {
      setPaddingTopButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "paddingTopButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingTopButtons",
          value
        )
      )
  }
}
  //handle for padding bottom change
  const handlePaddingBottom = () => {
    if (nameSection === LOGO) {
      setPaddingBottomLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingBottomLogo", value)
      )
    } else if (nameSection === HEADER) {
      setPaddingBottomHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingBottomHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingBottomVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "PaddingBottomVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingBottomVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingBottomVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setPaddingBottomVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingBottomVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setPaddingBottomVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingBottomVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setPaddingBottomButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "paddingBottomButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingBottomButtons",
          value
        )
      )
  }
  }
  //handle for padding left change
  const handlePaddingLeft = () => {
    if (nameSection === LOGO) {
      setPaddingLeftLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingLeftLogo", value))
    } else if (nameSection === HEADER) {
      setPaddingLeftHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingLeftHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingLeftVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingLeftVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingLeftVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingLeftVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setPaddingLeftVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingLeftVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setPaddingLeftVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingLeftVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setPaddingLeftButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "paddingLeftButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingLeftButtons",
          value
        )
      )
  }
  }
  //handle for padding right change
  const handlePaddingRight = () => {
    if (nameSection === LOGO) {
      setPaddingRightLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "paddingRightLogo", value)
      )
    } else if (nameSection === HEADER) {
      setPaddingRightHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "paddingRightHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingRightVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingRightVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingRightVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "paddingRightVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setPaddingRightVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingRightVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setPaddingRightVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "paddingRightVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setPaddingRightButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "paddingRightButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingRightButtons",
          value
        )
      )
  }
  }
  //handle for margin top change
  const handleMarginTop = () => {
    if (nameSection === LOGO) {
      setMarginTopLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginTopLogo", value))
    } else if (nameSection === HEADER) {
      setMarginTopHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginTopHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setMarginTopVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginTopVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginTopVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginTopVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setMarginTopVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginTopVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setMarginTopVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginTopVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setMarginTopButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "marginTopButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginTopButtons",
          value
        )
      )
  }
  }
  //handle for margin bottom change
  const handleMarginBottom = () => {
    if (nameSection === LOGO) {
      setMarginBottomLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginLeftLogo", value))
    } else if (nameSection === HEADER) {
      setMarginBottomHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginBottomHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setMarginBottomVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginBottomVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginBottomVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginBottomVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setMarginBottomVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginBottomVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setMarginBottomVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginBottomVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setMarginBottomButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "marginBottomButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginBottomButtons",
          value
        )
      )
  }
  }
  //handle for margin left change
  const handleMarginLeft = () => {
    if (nameSection === LOGO) {
      setMarginLeftLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginLeftLogo", value))
    } else if (nameSection === HEADER) {
      setMarginLeftHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginLeftHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setMarginLeftVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginLeftVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginLeftVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginLeftVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setMarginLeftVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginLeftVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setMarginLeftVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginLeftVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setMarginLeftButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "marginLeftButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginLeftButtons",
          value
        )
      )
  }
  }
  //handle for margin right change
  const handleMarginRight = () => {
    if (nameSection === LOGO) {
      setMarginRightLogo(value)
      setHeaderDBFormat(updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "marginRightLogo", value))
    } else if (nameSection === HEADER) {
      setMarginRightHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "marginRightHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setMarginRightVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginRightVerifyTitle", value)
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginRightVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_TITLE_PLUGIN_ID, "marginRightVerifyFooter", value)
      )
    } else if (nameSection === VERIFY_DATA) {
      setMarginRightVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginRightVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setMarginRightVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "marginRightVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setMarginRightButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "marginRightButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginRightButtons",
          value
        )
      )
  }
  }

  //handle for border bottom color change
  const handleBorderBottomColor = () => {
    if (nameSection === LOGO) {
      setBorderBottomColorLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomColorLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderBottomColorHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderBottomColorHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomColorVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomColorVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomColorVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomColorVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderBottomColorButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderBottomColorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomColorButtons",
          value
        )
      )
  }
  }
  //handle for border top color change
  const handleBorderTopColor = () => {
    if (nameSection === LOGO) {
      setBorderTopColorLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopColorLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderTopColorHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderTopColorHeader", value)
      )
    }
    // this is for modals
    else if (nameSection === VERIFY_TITLE) {
      setBorderTopColorVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopColorVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopColorVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopColorVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopColorVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopColorVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderTopColorButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderTopColorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopColorButtons",
          value
        )
      )
  }
  }
  //handle for border left color change
  const handleBorderLeftColor = () => {
    if (nameSection === LOGO) {
      setBorderLeftColorLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftColorLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderLeftColorHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftColorHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftColorVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftColorVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftColorVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftColorVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftColorVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftColorVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderLeftColorButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderLeftColorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftColorButtons",
          value
        )
      )
  }
  }
  //handle for border right color change
  const handleBorderRightColor = () => {
    if (nameSection === LOGO) {
      setBorderRightColorLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightColorLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderRightColorHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderRightColorHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightColorVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightColorVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightColorVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightColorVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderRightColorButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderRightColorButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightColorButtons",
          value
        )
      )
  }
  }
  //handle for border right style change
  const handleBorderRightStyle = () => {
    if (nameSection === LOGO) {
      setBorderRightStyleLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightStyleLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderRightStyleHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderRightStyleHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightStyleVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightStyleVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightStyleVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightStyleVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderRightStyleButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderRightStyleButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightStyleButtons",
          value
        )
      )
  }
  }

  //handle for border left style change
  const handleBorderLeftStyle = () => {
    if (nameSection === LOGO) {
      setBorderLeftStyleLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftStyleLogo", value)
      )
    } else if (nameSection === HEADER) {
      setBorderLeftStyleHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftStyleHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftStyleVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftStyleVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftStyleVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftStyleVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftStyleVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftStyleVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderLeftStyleButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderLeftStyleButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftStyleButtons",
          value
        )
      )
  }
  }
  //handle for border top style change
  const handleBorderTopStyle = () => {
    if (nameSection === LOGO) {
      setBorderTopStyleLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopStyleLogo", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopStyleVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopStyleVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopStyleVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopStyleVerifyData", value)
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopStyleVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopStyleVerifyCode", value)
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderTopStyleButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderTopStyleButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopStyleButtons",
          value
        )
      )
  }
  }
  //handle for border bottom style change -----------------------------------------------------------------------
  const handleBorderBottomStyle = () => {
    if (nameSection === LOGO) {
      setBorderBottomStyleLogo(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomStyleLogo", value)
      )
    }
    if (nameSection === HEADER) {
      setBorderBottomStyleHeader(value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderBottomStyleHeader", value)
      )
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomStyleVerifyTitle(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleVerifyTitle",
          value
        )
      )
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomStyleVerifyFooter(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleVerifyFooter",
          value
        )
      )
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomStyleVerifyData(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleVerifyData",
          value
        )
      )
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomStyleVerifyCode(value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleVerifyCode",
          value
        )
      )
    }
    else if (nameSection === BUTTONS) {
      setBorderBottomStyleButtons(value)
      setDbModalsFormat(updatePluginValue(dbModalsFormat, BUTTONS_PLUGIN_ID , "borderBottomStyleButtons", value))
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomStyleButtons",
          value
        )
      )
  }
  }
}

export default UndoCustomization

// optimize code the above code
