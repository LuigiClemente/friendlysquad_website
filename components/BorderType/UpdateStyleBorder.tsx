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
} from "../Constant/const"

const UpdateStyleBorder = (nameSection: string, sideName: string) => {
  const {
    borderRightStyle,
    setBorderRightStyle,
    borderLeftStyle,
    setBorderLeftStyle,
    borderTopStyle,
    setBorderTopStyle,
    borderBottomStyle,
    setBorderBottomStyle,
    borderStyle,
    setBorderStyle
  }: any = useUpdateSettingsProvider()

  const {
    // border style
    borderRightStyleHeader,
    borderLeftStyleHeader,
    borderTopStyleHeader,
    borderBottomStyleHeader,
    // border style Logo
    borderRightStyleLogo,
    borderLeftStyleLogo,
    borderTopStyleLogo,
    borderBottomStyleLogo
  }: any = useAppProvider()
  //  use state size
  const {
    // -------------------------- VerifyData --------------------------

    // border style
    borderRightStyleVerifyData,
    borderLeftStyleVerifyData,
    borderTopStyleVerifyData,
    borderBottomStyleVerifyData,
    // border radius

    // -------------------------- VerifyData Btn --------------------------

    // border style
    borderRightStyleVerifyCode,
    borderLeftStyleVerifyCode,
    borderTopStyleVerifyCode,
    borderBottomStyleVerifyCode,
    // border radius

    // -------------------------- VerifyTitle --------------------------

    // border style
    borderRightStyleVerifyTitle,
    borderLeftStyleVerifyTitle,
    borderTopStyleVerifyTitle,
    borderBottomStyleVerifyTitle,
    // border radius

    // -------------------------- VerifyTitle Btn --------------------------

    // border style
    borderRightStyleVerifyFooter,
    borderLeftStyleVerifyFooter,
    borderTopStyleVerifyFooter,
    borderBottomStyleVerifyFooter
  }: any = useModalsAppProvider()

  const updateBorderRightStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightStyle(borderRightStyleLogo)
        break
      case HEADER:
        setBorderRightStyle(borderRightStyleHeader)
        break
      // this is for modals
      case VERIFY_TITLE:
        setBorderRightStyle(borderRightStyleVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightStyle(borderRightStyleVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderRightStyle(borderRightStyleVerifyData)
        break
      case VERIFY_CODE:
        setBorderRightStyle(borderRightStyleVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderLeftStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftStyle(borderLeftStyleLogo)
      case HEADER:
        setBorderLeftStyle(borderLeftStyleHeader)
        break
      // this is for modals
      case VERIFY_TITLE:
        setBorderLeftStyle(borderLeftStyleVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftStyle(borderLeftStyleVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderLeftStyle(borderLeftStyleVerifyData)
        break
      case VERIFY_CODE:
        setBorderLeftStyle(borderLeftStyleVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderTopStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopStyle(borderTopStyleLogo)
        break
      case HEADER:
        setBorderTopStyle(borderTopStyleHeader)
        break
      // this is for modals
      case VERIFY_TITLE:
        setBorderTopStyle(borderTopStyleVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopStyle(borderTopStyleVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderTopStyle(borderTopStyleVerifyData)
        break
      case VERIFY_CODE:
        setBorderTopStyle(borderTopStyleVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderBottomStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomStyle(borderBottomStyleLogo)
      case HEADER:
        setBorderBottomStyle(borderBottomStyleHeader)
        break
      // this is for modals
      case VERIFY_TITLE:
        setBorderBottomStyle(borderBottomStyleVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomStyle(borderBottomStyleVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderBottomStyle(borderBottomStyleVerifyData)
        break
      case VERIFY_CODE:
        setBorderBottomStyle(borderBottomStyleVerifyCode)
        break
      default:
        break
    }
  }
  const getValueStyle = () => {
    switch (sideName) {
      case "top":
        updateBorderTopStyle()
        setBorderStyle(borderTopStyle)
        break
      case "bottom":
        updateBorderBottomStyle()
        setBorderStyle(borderBottomStyle)
        break
      case "right":
        updateBorderRightStyle()
        setBorderStyle(borderRightStyle)
        break
      case "left":
        updateBorderLeftStyle()
        setBorderStyle(borderLeftStyle)
        break
    }
  }
  useEffect(() => {
    getValueStyle()
  }, [nameSection])
}

export default UpdateStyleBorder
