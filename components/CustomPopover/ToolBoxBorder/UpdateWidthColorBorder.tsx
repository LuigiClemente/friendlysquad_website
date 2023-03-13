import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import { useEffect } from "react"
import {
  HEADER,
  LOGO,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN
} from "../../Constant/const"

const UpdateWidthColorBorder = (nameSection: string, sideName: string) => {
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
    setMarginRight,

    borderStyle,
    setBorderStyle,
    borderWidth,
    setBorderWidth,
    setBorderColor
  }: any = useUpdateSettingsProvider()

  const {
    // ----------------------------------------- header
    borderBottomColorHeader,
    borderBottomWidthHeader,
    borderTopColorHeader,
    borderTopWidthHeader,
    borderLeftColorHeader,
    borderLeftWidthHeader,
    borderRightColorHeader,
    borderRightWidthHeader,
    // border style
    borderRightStyleHeader,
    borderLeftStyleHeader,
    borderTopStyleHeader,
    borderBottomStyleHeader,

    // ----------------------
    // border color and width
    borderBottomColorLogo,
    borderBottomWidthLogo,
    borderTopColorLogo,
    borderTopWidthLogo,
    borderLeftColorLogo,
    borderLeftWidthLogo,
    borderRightColorLogo,
    borderRightWidthLogo,
    // border style
    borderRightStyleLogo,
    borderLeftStyleLogo,
    borderTopStyleLogo,
    borderBottomStyleLogo
  }: any = useAppProvider()
  //  use state size
  const {
    // -------------------------- VerifyData --------------------------
    borderBottomColorVerifyData,
    borderBottomWidthVerifyData,
    borderTopColorVerifyData,
    borderTopWidthVerifyData,
    borderLeftColorVerifyData,
    borderLeftWidthVerifyData,
    borderRightColorVerifyData,
    borderRightWidthVerifyData,
    // border style
    borderRightStyleVerifyData,
    borderLeftStyleVerifyData,
    borderTopStyleVerifyData,
    borderBottomStyleVerifyData,

    // -------------------------- VerifyData Btn --------------------------
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

    // -------------------------- VerifyTitle --------------------------
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

    // -------------------------- VerifyTitle Btn --------------------------
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
    borderBottomStyleVerifyFooter
  }: any = useModalsAppProvider()

  const updateBorderBottomColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomColor(borderBottomColorLogo)
        break

      case HEADER:
        setBorderBottomColor(borderBottomColorHeader)
        break
      case VERIFY_TITLE:
        setBorderBottomColor(borderBottomColorVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomColor(borderBottomColorVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderBottomColor(borderBottomColorVerifyData)
        break
      case VERIFY_CODE:
        setBorderBottomColor(borderBottomColorVerifyCode)
        break
      default:
        break
    }
  }

  const updateBorderBottomWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomWidth(borderBottomWidthLogo)
        break

      case HEADER:
        setBorderBottomWidth(borderBottomWidthHeader)
        break

      case VERIFY_TITLE:
        setBorderBottomWidth(borderBottomWidthVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomWidth(borderBottomWidthVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderBottomWidth(borderBottomWidthVerifyData)
        break
      case VERIFY_CODE:
        setBorderBottomWidth(borderBottomWidthVerifyCode)
        break

      default:
        break
    }
  }
  const updateBorderTopColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopColor(borderTopColorLogo)
        break

      case HEADER:
        setBorderTopColor(borderTopColorHeader)
        break

      case VERIFY_TITLE:
        setBorderTopColor(borderTopColorVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopColor(borderTopColorVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderTopColor(borderTopColorVerifyData)
        break
      case VERIFY_CODE:
        setBorderTopColor(borderTopColorVerifyCode)
        break

      default:
        break
    }
  }
  const updateBorderTopWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopWidth(borderTopWidthLogo)
        break

      case HEADER:
        setBorderTopWidth(borderTopWidthHeader)
        break

      case VERIFY_TITLE:
        setBorderTopWidth(borderTopWidthVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopWidth(borderTopWidthVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderTopWidth(borderTopWidthVerifyData)
        break
      case VERIFY_CODE:
        setBorderTopWidth(borderTopWidthVerifyCode)
        break

      default:
        break
    }
  }
  const updateBorderLeftColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftColor(borderLeftColorLogo)
        break

      case HEADER:
        setBorderLeftColor(borderLeftColorHeader)
        break

      case VERIFY_TITLE:
        setBorderLeftColor(borderLeftColorVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftColor(borderLeftColorVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderLeftColor(borderLeftColorVerifyData)
        break
      case VERIFY_CODE:
        setBorderLeftColor(borderLeftColorVerifyCode)
        break

      default:
        break
    }
  }
  const updateBorderLeftWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftWidth(borderLeftWidthLogo)
        break

      case VERIFY_TITLE:
        setBorderLeftWidth(borderLeftWidthVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftWidth(borderLeftWidthVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderLeftWidth(borderLeftWidthVerifyData)
        break
      case VERIFY_CODE:
        setBorderLeftWidth(borderLeftWidthVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderRightColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightColor(borderRightColorLogo)
        break

      case HEADER:
        setBorderRightColor(borderRightColorHeader)
        break

      case VERIFY_TITLE:
        setBorderRightColor(borderRightColorVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightColor(borderRightColorVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderRightColor(borderRightColorVerifyData)
        break
      case VERIFY_CODE:
        setBorderRightColor(borderRightColorVerifyCode)
        break

      default:
        break
    }
  }
  const updateBorderRightWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightWidth(borderRightWidthLogo)
        break

      case HEADER:
        setBorderRightWidth(borderRightWidthHeader)
        break

      // this is for modals
      case VERIFY_TITLE:
        setBorderRightWidth(borderRightWidthVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightWidth(borderRightWidthVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderRightWidth(borderRightWidthVerifyData)
        break
      case VERIFY_CODE:
        setBorderRightWidth(borderRightWidthVerifyCode)
        break

      default:
        break
    }
  }

  const getValuesWidth = () => {
    switch (sideName) {
      case "top":
        updateBorderTopWidth()
        setBorderWidth(borderTopWidth)
        break
      case "bottom":
        updateBorderBottomWidth()
        setBorderWidth(borderBottomWidth)
        break
      case "right":
        updateBorderRightWidth()
        setBorderWidth(borderRightWidth)
        break
      case "left":
        updateBorderLeftWidth()
        setBorderWidth(borderLeftWidth)
        break
    }
  }

  const getValuesColor = () => {
    switch (sideName) {
      case "top":
        updateBorderTopColor()
        setBorderColor(borderTopColor)
        break
      case "bottom":
        updateBorderBottomColor()
        setBorderColor(borderBottomColor)
        break
      case "right":
        updateBorderRightColor()
        setBorderColor(borderRightColor)
        break
      case "left":
        updateBorderLeftColor()
        setBorderColor(borderLeftColor)
        break
    }
  }

  useEffect(() => {
    getValuesWidth()
    getValuesColor()
  }, [nameSection])
}

export default UpdateWidthColorBorder
