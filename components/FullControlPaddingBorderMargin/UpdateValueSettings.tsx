import { useAppProvider } from "@appProvider/AppProvider"
import { useAppStateProvider } from "@appProvider/AppStateProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import { useEffect } from "react"
import {
  BUTTONS,
  HEADER,
  LOGO,
  MODAL_BOX,
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

    // ModalBox
    borderBottomColorModalBox,
    borderBottomWidthModalBox,
    borderTopColorModalBox,
    borderTopWidthModalBox,
    borderLeftColorModalBox,
    borderLeftWidthModalBox,
    borderRightColorModalBox,
    borderRightWidthModalBox,
    // border style
    borderRightStyleModalBox,
    borderLeftStyleModalBox,
    borderTopStyleModalBox,
    borderBottomStyleModalBox,
    // border radius
    borderTopRightRadiusModalBox,
    borderTopLeftRadiusModalBox,
    borderBottomRightRadiusModalBox,
    borderBottomLeftRadiusModalBox,
    // padding
    paddingTopModalBox,
    paddingBottomModalBox,
    paddingLeftModalBox,
    paddingRightModalBox,
    // margin
    marginTopModalBox,
    marginBottomModalBox,
    marginLeftModalBox,
    marginRightModalBox,

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
    // -------------------------- Data --------------------------
    borderBottomColorData,
    borderBottomWidthData,
    borderTopColorData,
    borderTopWidthData,
    borderLeftColorData,
    borderLeftWidthData,
    borderRightColorData,
    borderRightWidthData,
    // border style
    borderRightStyleData,
    borderLeftStyleData,
    borderTopStyleData,
    borderBottomStyleData,
    // border radius
    borderTopRightRadiusData,
    borderTopLeftRadiusData,
    borderBottomRightRadiusData,
    borderBottomLeftRadiusData,
    // padding
    paddingTopData,
    paddingBottomData,
    paddingLeftData,
    paddingRightData,
    // margin
    marginTopData,
    marginBottomData,
    marginLeftData,
    marginRightData,
    // -------------------------- Data Btn --------------------------
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
    marginRightDataModal,

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
    // -------------------------- TitleModal Btn --------------------------
    borderBottomColorDataTitle,
    borderBottomWidthDataTitle,
    borderTopColorDataTitle,
    borderTopWidthDataTitle,
    borderLeftColorDataTitle,
    borderLeftWidthDataTitle,
    borderRightColorDataTitle,
    borderRightWidthDataTitle,
    // border style
    borderRightStyleDataTitle,
    borderLeftStyleDataTitle,
    borderTopStyleDataTitle,
    borderBottomStyleDataTitle,
    // border radius
    borderTopRightRadiusDataTitle,
    borderTopLeftRadiusDataTitle,
    borderBottomRightRadiusDataTitle,
    borderBottomLeftRadiusDataTitle,
    // padding
    paddingTopDataTitle,
    paddingBottomDataTitle,
    paddingLeftDataTitle,
    paddingRightDataTitle,
    // margin
    marginTopDataTitle,
    marginBottomDataTitle,
    marginLeftDataTitle,
    marginRightDataTitle,
      // ---------------------------------------buttons
      borderBottomColorButtons,
      borderRightColorButtons,
      borderLeftColorButtons,
      borderTopColorButtons,
      //  border width
      borderRightWidthButtons,
      borderLeftWidthButtons,
      borderTopWidthButtons,
      borderBottomWidthButtons,
      // border style
      borderRightStyleButtons,
      borderLeftStyleButtons,
      borderTopStyleButtons,
      borderBottomStyleButtons,
      // border radius border-top-right-radius
      borderTopRightRadiusButtons,
      borderTopLeftRadiusButtons,
      borderBottomRightRadiusButtons,
      borderBottomLeftRadiusButtons,
      // padding
      paddingRightButtons,
      paddingLeftButtons,
      paddingTopButtons,
      paddingBottomButtons,
      // margin
      marginRightButtons,
      marginLeftButtons,
      marginTopButtons,
      marginBottomButtons
  }: any = useModalsAppProvider()

  // const {
  //   // ---------------------------------------buttons
  //   borderBottomColorButtons,
  //   borderRightColorButtons,
  //   borderLeftColorButtons,
  //   borderTopColorButtons,
  //   //  border width
  //   borderRightWidthButtons,
  //   borderLeftWidthButtons,
  //   borderTopWidthButtons,
  //   borderBottomWidthButtons,
  //   // border style
  //   borderRightStyleButtons,
  //   borderLeftStyleButtons,
  //   borderTopStyleButtons,
  //   borderBottomStyleButtons,
  //   // border radius border-top-right-radius
  //   borderTopRightRadiusButtons,
  //   borderTopLeftRadiusButtons,
  //   borderBottomRightRadiusButtons,
  //   borderBottomLeftRadiusButtons,
  //   // padding
  //   paddingRightButtons,
  //   paddingLeftButtons,
  //   paddingTopButtons,
  //   paddingBottomButtons,
  //   // margin
  //   marginRightButtons,
  //   marginLeftButtons,
  //   marginTopButtons,
  //   marginBottomButtons
  // }: any = useAppStateProvider()

  const updateBorderBottomColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomColor(borderBottomColorLogo)
        break

      case HEADER:
        setBorderBottomColor(borderBottomColorHeader)
        break
      case MODAL_BOX:
        setBorderBottomColor(borderBottomColorModalBox)
        break

      case VERIFY_TITLE:
        setBorderBottomColor(borderBottomColorTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomColor(borderBottomColorDataTitle)
        break
      case VERIFY_DATA:
        setBorderBottomColor(borderBottomColorData)
        break
      case VERIFY_CODE:
        setBorderBottomColor(borderBottomColorDataModal)
        break
      case BUTTONS:
        setBorderBottomColor(borderBottomColorButtons)
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
      case MODAL_BOX:
        setBorderBottomWidth(borderBottomWidthModalBox)
        break

      case VERIFY_TITLE:
        setBorderBottomWidth(borderBottomWidthTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomWidth(borderBottomWidthDataTitle)
        break
      case VERIFY_DATA:
        setBorderBottomWidth(borderBottomWidthData)
        break
      case VERIFY_CODE:
        setBorderBottomWidth(borderBottomWidthDataModal)
        break
      case BUTTONS:
        setBorderBottomWidth(borderBottomWidthButtons)
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
      case MODAL_BOX:
        setBorderTopColor(borderTopColorModalBox)
        break
      case VERIFY_TITLE:
        setBorderTopColor(borderTopColorTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopColor(borderTopColorDataTitle)
        break
      case VERIFY_DATA:
        setBorderTopColor(borderTopColorData)
        break
      case VERIFY_CODE:
        setBorderTopColor(borderTopColorDataModal)
        break
      case BUTTONS:
        setBorderTopColor(borderTopColorButtons)
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
      case MODAL_BOX:
        setBorderTopWidth(borderTopWidthModalBox)
        break
      case VERIFY_TITLE:
        setBorderTopWidth(borderTopWidthTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopWidth(borderTopWidthDataTitle)
        break
      case VERIFY_DATA:
        setBorderTopWidth(borderTopWidthData)
        break
      case VERIFY_CODE:
        setBorderTopWidth(borderTopWidthDataModal)
        break
      case BUTTONS:
        setBorderTopWidth(borderTopWidthButtons)
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
      case MODAL_BOX:
        setBorderLeftColor(borderLeftColorModalBox)
        break
      case VERIFY_TITLE:
        setBorderLeftColor(borderLeftColorTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftColor(borderLeftColorDataTitle)
        break
      case VERIFY_DATA:
        setBorderLeftColor(borderLeftColorData)
        break
      case VERIFY_CODE:
        setBorderLeftColor(borderLeftColorDataModal)
        break
      case BUTTONS:
        setBorderLeftColor(borderLeftColorButtons)
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
      case MODAL_BOX:
        setBorderLeftWidth(borderLeftWidthModalBox)
        break
      case VERIFY_TITLE:
        setBorderLeftWidth(borderLeftWidthTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftWidth(borderLeftWidthDataTitle)
        break
      case VERIFY_DATA:
        setBorderLeftWidth(borderLeftWidthData)
        break
      case VERIFY_CODE:
        setBorderLeftWidth(borderLeftWidthDataModal)
        break
      case BUTTONS:
        setBorderLeftWidth(borderLeftWidthButtons)
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
      case MODAL_BOX:
        setBorderRightColor(borderRightColorModalBox)
        break
      case VERIFY_TITLE:
        setBorderRightColor(borderRightColorTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightColor(borderRightColorDataTitle)
        break
      case VERIFY_DATA:
        setBorderRightColor(borderRightColorData)
        break
      case VERIFY_CODE:
        setBorderRightColor(borderRightColorDataModal)
        break
      case BUTTONS:
        setBorderRightColor(borderRightColorButtons)
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
      case MODAL_BOX:
        setBorderRightWidth(borderRightWidthModalBox)
        break
      case VERIFY_TITLE:
        setBorderRightWidth(borderRightWidthTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightWidth(borderRightWidthDataTitle)
        break
      case VERIFY_DATA:
        setBorderRightWidth(borderRightWidthData)
        break
      case VERIFY_CODE:
        setBorderRightWidth(borderRightWidthDataModal)
        break
      case BUTTONS:
        setBorderRightWidth(borderRightWidthButtons)
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
      case MODAL_BOX:
        setBorderRightStyle(borderRightStyleModalBox)
        break
      case VERIFY_TITLE:
        setBorderRightStyle(borderRightStyleTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderRightStyle(borderRightStyleDataTitle)
        break
      case VERIFY_DATA:
        setBorderRightStyle(borderRightStyleData)
        break
      case VERIFY_CODE:
        setBorderRightStyle(borderRightStyleDataModal)
        break
      case BUTTONS:
        setBorderRightStyle(borderRightStyleButtons)
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
      case MODAL_BOX:
        setBorderLeftStyle(borderLeftStyleModalBox)
        break
      case VERIFY_TITLE:
        setBorderLeftStyle(borderLeftStyleTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderLeftStyle(borderLeftStyleDataTitle)
        break
      case VERIFY_DATA:
        setBorderLeftStyle(borderLeftStyleData)
        break
      case VERIFY_CODE:
        setBorderLeftStyle(borderLeftStyleDataModal)
        break
      case BUTTONS:
        setBorderLeftStyle(borderLeftStyleButtons)
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
      case MODAL_BOX:
        setBorderTopStyle(borderTopStyleModalBox)
        break
      case VERIFY_TITLE:
        setBorderTopStyle(borderTopStyleTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopStyle(borderTopStyleDataTitle)
        break
      case VERIFY_DATA:
        setBorderTopStyle(borderTopStyleData)
        break
      case VERIFY_CODE:
        setBorderTopStyle(borderTopStyleDataModal)
        break
      case BUTTONS:
        setBorderTopStyle(borderTopStyleButtons)
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
      case MODAL_BOX:
        setBorderBottomStyle(borderBottomStyleModalBox)
        break
      case VERIFY_TITLE:
        setBorderBottomStyle(borderBottomStyleTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomStyle(borderBottomStyleDataTitle)
        break
      case VERIFY_DATA:
        setBorderBottomStyle(borderBottomStyleData)
        break
      case VERIFY_CODE:
        setBorderBottomStyle(borderBottomStyleDataModal)
        break
      case BUTTONS:
        setBorderBottomStyle(borderBottomStyleButtons)
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
      case MODAL_BOX:
        setBorderTopRightRadius(borderTopRightRadiusModalBox)
        break
      case VERIFY_TITLE:
        setBorderTopRightRadius(borderTopRightRadiusTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopRightRadius(borderTopRightRadiusDataTitle)
        break
      case VERIFY_DATA:
        setBorderTopRightRadius(borderTopRightRadiusData)
        break
      case VERIFY_CODE:
        setBorderTopRightRadius(borderTopRightRadiusDataModal)
        break
      case BUTTONS:
        setBorderTopRightRadius(borderTopRightRadiusButtons)
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
      case MODAL_BOX:
        setBorderTopLeftRadius(borderTopLeftRadiusModalBox)
        break
      case VERIFY_TITLE:
        setBorderTopLeftRadius(borderTopLeftRadiusTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderTopLeftRadius(borderTopLeftRadiusDataTitle)
        break
      case VERIFY_DATA:
        setBorderTopLeftRadius(borderTopLeftRadiusData)
        break
      case VERIFY_CODE:
        setBorderTopLeftRadius(borderTopLeftRadiusDataModal)
        break
      case BUTTONS:
        setBorderTopLeftRadius(borderTopLeftRadiusButtons)
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
      case MODAL_BOX:
        setBorderBottomLeftRadius(borderBottomLeftRadiusModalBox)
        break
      case VERIFY_TITLE:
        setBorderBottomLeftRadius(borderBottomLeftRadiusTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomLeftRadius(borderBottomLeftRadiusDataTitle)
        break
      case VERIFY_DATA:
        setBorderBottomLeftRadius(borderBottomLeftRadiusData)
        break
      case VERIFY_CODE:
        setBorderBottomLeftRadius(borderBottomLeftRadiusDataModal)
        break
      case BUTTONS:
        setBorderBottomLeftRadius(borderBottomLeftRadiusButtons)
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
      case MODAL_BOX:
        setBorderBottomRightRadius(borderBottomRightRadiusModalBox)
        break
      case VERIFY_TITLE:
        setBorderBottomRightRadius(borderBottomRightRadiusTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setBorderBottomRightRadius(borderBottomRightRadiusDataTitle)
        break
      case VERIFY_DATA:
        setBorderBottomRightRadius(borderBottomRightRadiusData)
        break
      case VERIFY_CODE:
        setBorderBottomRightRadius(borderBottomRightRadiusDataModal)
        break
      case BUTTONS:
        setBorderBottomRightRadius(borderBottomRightRadiusButtons)
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
      case MODAL_BOX:
        setPaddingTop(paddingTopModalBox)
        break
      case VERIFY_TITLE:
        setPaddingTop(paddingTopTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setPaddingTop(paddingTopDataTitle)
        break
      case VERIFY_DATA:
        setPaddingTop(paddingTopData)
        break
      case VERIFY_CODE:
        setPaddingTop(paddingTopDataModal)
        break
      case BUTTONS:
        setPaddingTop(paddingTopButtons)
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
      case MODAL_BOX:
        setPaddingBottom(paddingBottomModalBox)
        break
      case VERIFY_TITLE:
        setPaddingBottom(paddingBottomTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setPaddingBottom(paddingBottomDataTitle)
        break
      case VERIFY_DATA:
        setPaddingBottom(paddingBottomData)
        break
      case VERIFY_CODE:
        setPaddingBottom(paddingBottomDataModal)
        break
      case BUTTONS:
        setPaddingBottom(paddingBottomButtons)
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
      case MODAL_BOX:
        setPaddingLeft(paddingLeftModalBox)
        break
      case VERIFY_TITLE:
        setPaddingLeft(paddingLeftTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setPaddingLeft(paddingLeftDataTitle)
        break
      case VERIFY_DATA:
        setPaddingLeft(paddingLeftData)
        break
      case VERIFY_CODE:
        setPaddingLeft(paddingLeftDataModal)
        break
      case BUTTONS:
        setPaddingLeft(paddingLeftButtons)
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
      case MODAL_BOX:
        setPaddingRight(paddingRightModalBox)
        break
      case VERIFY_TITLE:
        setPaddingRight(paddingRightTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setPaddingRight(paddingRightDataTitle)
        break
      case VERIFY_DATA:
        setPaddingRight(paddingRightData)
        break
      case VERIFY_CODE:
        setPaddingRight(paddingRightDataModal)
        break
      case BUTTONS:
        setPaddingRight(paddingRightButtons)
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
      case MODAL_BOX:
        setMarginTop(marginTopModalBox)
        break
      case VERIFY_TITLE:
        setMarginTop(marginTopTitleModal)
        console.log("margin top TitleModal", marginTopTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setMarginTop(marginTopDataTitle)
        break
      case VERIFY_DATA:
        setMarginTop(marginTopData)
        break
      case VERIFY_CODE:
        setMarginTop(marginTopDataModal)
        break
      case BUTTONS:
        setMarginTop(marginTopButtons)
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
      case MODAL_BOX:
        setMarginBottom(marginBottomModalBox)
        break
      case VERIFY_TITLE:
        setMarginBottom(marginBottomTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setMarginBottom(marginBottomDataTitle)
        break
      case VERIFY_DATA:
        setMarginBottom(marginBottomData)
        break
      case VERIFY_CODE:
        setMarginBottom(marginBottomDataModal)
        break
      case BUTTONS:
        setMarginBottom(marginBottomButtons)
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
      case MODAL_BOX:
        setMarginLeft(marginLeftModalBox)
        break
      case VERIFY_TITLE:
        setMarginLeft(marginLeftTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setMarginLeft(marginLeftDataTitle)
        break
      case VERIFY_DATA:
        setMarginLeft(marginLeftData)
        break
      case VERIFY_CODE:
        setMarginLeft(marginLeftDataModal)
        break
      case BUTTONS:
        setMarginLeft(marginLeftButtons)
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
      case MODAL_BOX:
        setMarginRight(marginRightModalBox)
        break
      case VERIFY_TITLE:
        setMarginRight(marginRightTitleModal)
        break
      case VERIFY_TITLE_BTN:
        setMarginRight(marginRightDataTitle)
        break
      case VERIFY_DATA:
        setMarginRight(marginRightData)
        break
      case VERIFY_CODE:
        setMarginRight(marginRightDataModal)
        break
      case BUTTONS:
        setMarginRight(marginRightButtons)
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
