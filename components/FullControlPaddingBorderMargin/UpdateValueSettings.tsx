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

const UpdateValueSettings = (nameSection: string) => {
  const {
    setBorderBottomColor,
    setBorderBottomWidth,
    setBorderTopColor,
    setBorderTopWidth,
    setBorderLeftColor,
    setBorderLeftWidth,
    setBorderRightColor,
    setBorderRightWidth,
    setBorderRightStyle,
    setBorderLeftStyle,
    setBorderTopStyle,
    setBorderBottomStyle,
    setBorderTopRightRadius,
    setBorderTopLeftRadius,
    setBorderBottomRightRadius,
    setBorderBottomLeftRadius,
    setPaddingTop,
    setPaddingBottom,
    setPaddingLeft,
    setPaddingRight,
    setMarginTop,
    setMarginBottom,
    setMarginLeft,
    setMarginRight
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
    // border radius
    borderTopRightRadiusHeader,
    borderTopLeftRadiusHeader,
    borderBottomRightRadiusHeader,
    borderBottomLeftRadiusHeader,
    // padding
    paddingTopHeader,
    paddingBottomHeader,
    paddingLeftHeader,
    paddingRightHeader,
    // margin
    marginTopHeader,
    marginBottomHeader,
    marginLeftHeader,
    marginRightHeader,

    // ReferralImage
    borderBottomColorReferralImage,
    borderBottomWidthReferralImage,
    borderTopColorReferralImage,
    borderTopWidthReferralImage,
    borderLeftColorReferralImage,
    borderLeftWidthReferralImage,
    borderRightColorReferralImage,
    borderRightWidthReferralImage,
    // border style
    borderRightStyleReferralImage,
    borderLeftStyleReferralImage,
    borderTopStyleReferralImage,
    borderBottomStyleReferralImage,
    // border radius
    borderTopRightRadiusReferralImage,
    borderTopLeftRadiusReferralImage,
    borderBottomRightRadiusReferralImage,
    borderBottomLeftRadiusReferralImage,
    // padding
    paddingTopReferralImage,
    paddingBottomReferralImage,
    paddingLeftReferralImage,
    paddingRightReferralImage,
    // margin
    marginTopReferralImage,
    marginBottomReferralImage,
    marginLeftReferralImage,
    marginRightReferralImage,

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
    borderBottomStyleLogo,
    // border radius
    borderTopRightRadiusLogo,
    borderTopLeftRadiusLogo,
    borderBottomRightRadiusLogo,
    borderBottomLeftRadiusLogo,

    // padding
    paddingTopLogo,
    paddingBottomLogo,
    paddingLeftLogo,
    paddingRightLogo,
    // margin
    marginTopLogo,
    marginBottomLogo,
    marginLeftLogo,
    marginRightLogo
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
    // border radius
    borderTopRightRadiusVerifyData,
    borderTopLeftRadiusVerifyData,
    borderBottomRightRadiusVerifyData,
    borderBottomLeftRadiusVerifyData,
    // padding
    paddingTopVerifyData,
    paddingBottomVerifyData,
    paddingLeftVerifyData,
    paddingRightVerifyData,
    // margin
    marginTopVerifyData,
    marginBottomVerifyData,
    marginLeftVerifyData,
    marginRightVerifyData,
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
    marginRightVerifyCode,

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
      case HEADER:
        setBorderLeftWidth(borderLeftWidthHeader)
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
  const updateBorderRightStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightStyle(borderRightStyleLogo)
        break
      case HEADER:
        setBorderRightStyle(borderRightStyleHeader)
        break
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
        break
      case HEADER:
        setBorderLeftStyle(borderLeftStyleHeader)
        break
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
        break
      case HEADER:
        setBorderBottomStyle(borderBottomStyleHeader)
        break
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
  const updateBorderTopRightRadius = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopRightRadius(borderTopRightRadiusLogo)
        break
      case HEADER:
        setBorderTopRightRadius(borderTopRightRadiusHeader)
        break
      case VERIFY_TITLE:
        setBorderTopRightRadius(borderTopRightRadiusVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopRightRadius(borderTopRightRadiusVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderTopRightRadius(borderTopRightRadiusVerifyData)
        break
      case VERIFY_CODE:
        setBorderTopRightRadius(borderTopRightRadiusVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderTopLeftRadius = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopLeftRadius(borderTopLeftRadiusLogo)
        break
      case HEADER:
        setBorderTopLeftRadius(borderTopLeftRadiusHeader)
        break
      case VERIFY_TITLE:
        setBorderTopLeftRadius(borderTopLeftRadiusVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopLeftRadius(borderTopLeftRadiusVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderTopLeftRadius(borderTopLeftRadiusVerifyData)
        break
      case VERIFY_CODE:
        setBorderTopLeftRadius(borderTopLeftRadiusVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderBottomLeftRadius = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomLeftRadius(borderBottomLeftRadiusLogo)
        break
      case HEADER:
        setBorderBottomLeftRadius(borderBottomLeftRadiusHeader)
        break
      case VERIFY_TITLE:
        setBorderBottomLeftRadius(borderBottomLeftRadiusVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomLeftRadius(borderBottomLeftRadiusVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderBottomLeftRadius(borderBottomLeftRadiusVerifyData)
        break
      case VERIFY_CODE:
        setBorderBottomLeftRadius(borderBottomLeftRadiusVerifyCode)
        break
      default:
        break
    }
  }
  const updateBorderBottomRightRadius = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomRightRadius(borderBottomRightRadiusLogo)
        break
      case HEADER:
        setBorderBottomRightRadius(borderBottomRightRadiusHeader)
        break
      case VERIFY_TITLE:
        setBorderBottomRightRadius(borderBottomRightRadiusVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomRightRadius(borderBottomRightRadiusVerifyFooter)
        break
      case VERIFY_DATA:
        setBorderBottomRightRadius(borderBottomRightRadiusVerifyData)
        break
      case VERIFY_CODE:
        setBorderBottomRightRadius(borderBottomRightRadiusVerifyCode)
        break
      default:
        break
    }
  }
  const updatePaddingTop = () => {
    switch (nameSection) {
      case LOGO:
        setPaddingTop(paddingTopLogo)
        break
      case HEADER:
        setPaddingTop(paddingTopHeader)
        break
      case VERIFY_TITLE:
        setPaddingTop(paddingTopVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setPaddingTop(paddingTopVerifyFooter)
        break
      case VERIFY_DATA:
        setPaddingTop(paddingTopVerifyData)
        break
      case VERIFY_CODE:
        setPaddingTop(paddingTopVerifyCode)
        break
      default:
        break
    }
  }
  const updatePaddingBottom = () => {
    switch (nameSection) {
      case LOGO:
        setPaddingBottom(paddingBottomLogo)
        break
      case HEADER:
        setPaddingBottom(paddingBottomHeader)
        break
      case VERIFY_TITLE:
        setPaddingBottom(paddingBottomVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setPaddingBottom(paddingBottomVerifyFooter)
        break
      case VERIFY_DATA:
        setPaddingBottom(paddingBottomVerifyData)
        break
      case VERIFY_CODE:
        setPaddingBottom(paddingBottomVerifyCode)
        break
      default:
        break
    }
  }
  const updatePaddingLeft = () => {
    switch (nameSection) {
      case LOGO:
        setPaddingLeft(paddingLeftLogo)
        break
      case HEADER:
        setPaddingLeft(paddingLeftHeader)
        break
      case VERIFY_TITLE:
        setPaddingLeft(paddingLeftVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setPaddingLeft(paddingLeftVerifyFooter)
        break
      case VERIFY_DATA:
        setPaddingLeft(paddingLeftVerifyData)
        break
      case VERIFY_CODE:
        setPaddingLeft(paddingLeftVerifyCode)
        break
      default:
        break
    }
  }
  const updatePaddingRight = () => {
    switch (nameSection) {
      case LOGO:
        setPaddingRight(paddingRightLogo)
        break
      case HEADER:
        setPaddingRight(paddingRightHeader)
        break
      case VERIFY_TITLE:
        setPaddingRight(paddingRightVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setPaddingRight(paddingRightVerifyFooter)
        break
      case VERIFY_DATA:
        setPaddingRight(paddingRightVerifyData)
        break
      case VERIFY_CODE:
        setPaddingRight(paddingRightVerifyCode)
        break
      default:
        break
    }
  }
  const updateMarginTop = () => {
    switch (nameSection) {
      case LOGO:
        setMarginTop(marginTopLogo)
        break
      case HEADER:
        setMarginTop(marginTopHeader)
        break
      case VERIFY_TITLE:
        setMarginTop(marginTopVerifyTitle)
        console.log("margin top VerifyTitle", marginTopVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setMarginTop(marginTopVerifyFooter)
        break
      case VERIFY_DATA:
        setMarginTop(marginTopVerifyData)
        break
      case VERIFY_CODE:
        setMarginTop(marginTopVerifyCode)
        break

      default:
        break
    }
  }
  const updateMarginBottom = () => {
    switch (nameSection) {
      case LOGO:
        setMarginBottom(marginBottomLogo)
        break
      case HEADER:
        setMarginBottom(marginBottomHeader)
        break
      case VERIFY_TITLE:
        setMarginBottom(marginBottomVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setMarginBottom(marginBottomVerifyFooter)
        break
      case VERIFY_DATA:
        setMarginBottom(marginBottomVerifyData)
        break
      case VERIFY_CODE:
        setMarginBottom(marginBottomVerifyCode)
        break
      default:
        break
    }
  }
  const updateMarginLeft = () => {
    switch (nameSection) {
      case LOGO:
        setMarginLeft(marginLeftLogo)
        break
      case HEADER:
        setMarginLeft(marginLeftHeader)
        break
      case VERIFY_TITLE:
        setMarginLeft(marginLeftVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setMarginLeft(marginLeftVerifyFooter)
        break
      case VERIFY_DATA:
        setMarginLeft(marginLeftVerifyData)
        break
      case VERIFY_CODE:
        setMarginLeft(marginLeftVerifyCode)
        break
      default:
        break
    }
  }
  const updateMarginRight = () => {
    switch (nameSection) {
      case LOGO:
        setMarginRight(marginRightLogo)
        break
      case HEADER:
        setMarginRight(marginRightHeader)
        break
      case VERIFY_TITLE:
        setMarginRight(marginRightVerifyTitle)
        break
      case VERIFY_TITLE_BTN:
        setMarginRight(marginRightVerifyFooter)
        break
      case VERIFY_DATA:
        setMarginRight(marginRightVerifyData)
        break
      case VERIFY_CODE:
        setMarginRight(marginRightVerifyCode)
        break
      default:
        break
    }
  }
  useEffect(() => {
    updateBorderBottomColor()
    updateBorderTopColor()
    updateBorderLeftColor()
    updateBorderRightColor()
    updateBorderBottomWidth()
    updateBorderTopWidth()
    updateBorderLeftWidth()
    updateBorderRightWidth()
    updateBorderBottomStyle()
    updateBorderTopStyle()
    updateBorderLeftStyle()
    updateBorderRightStyle()
    updateBorderTopRightRadius()
    updateBorderTopLeftRadius()
    updateBorderBottomRightRadius()
    updateBorderBottomLeftRadius()
    updatePaddingTop()
    updatePaddingBottom()
    updatePaddingLeft()
    updatePaddingRight()
    updateMarginTop()
    updateMarginBottom()
    updateMarginLeft()
    updateMarginRight()
  }, [nameSection])
}

export default UpdateValueSettings
