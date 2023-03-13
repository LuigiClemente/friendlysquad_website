import { createContext, useContext, useEffect, useState } from "react"
import { VERIFY_TITLE_PLUGIN_ID } from "../components/Constant/const"
import { FILE_PATH_HEADER, FILE_PATH_MODALS, TEMPLATE_PATH } from "../config"
import { DEFAULT_COLOR_SITE } from "../theme/ConstantColors"
import { getPluginValue } from "../utils/uiController"
import { useAppProvider } from "./AppProvider"

const Context = createContext({})

export const ModalsAppProvider = ({ children }: any) => {
  const [dbModalsFormat, setDbModalsFormat]: any = useState()
  const { setLoading, setHeaderDBFormat }: any = useAppProvider()

  // ------------------------------------------------------------VerifyData ------------------------------------------------ 1
  const [borderBottomColorVerifyData, setBorderBottomColorVerifyData] = useState("#000")
  const [borderRightColorVerifyData, setBorderRightColorVerifyData] = useState("#000")
  const [borderLeftColorVerifyData, setBorderLeftColorVerifyData] = useState("#000")
  const [borderTopColorVerifyData, setBorderTopColorVerifyData] = useState("#000")
  // border width
  const [borderRightWidthVerifyData, setBorderRightWidthVerifyData] = useState("0")
  const [borderLeftWidthVerifyData, setBorderLeftWidthVerifyData] = useState("0")
  const [borderTopWidthVerifyData, setBorderTopWidthVerifyData] = useState("0")
  const [borderBottomWidthVerifyData, setBorderBottomWidthVerifyData] = useState("0")
  // border style
  const [borderRightStyleVerifyData, setBorderRightStyleVerifyData] = useState("solid")
  const [borderLeftStyleVerifyData, setBorderLeftStyleVerifyData] = useState("solid")
  const [borderTopStyleVerifyData, setBorderTopStyleVerifyData] = useState("solid")
  const [borderBottomStyleVerifyData, setBorderBottomStyleVerifyData] = useState("solid")
  // border radius border-top-right-radius
  const [borderTopRightRadiusVerifyData, setBorderTopRightRadiusVerifyData] = useState("0")
  const [borderTopLeftRadiusVerifyData, setBorderTopLeftRadiusVerifyData] = useState("0")
  const [borderBottomRightRadiusVerifyData, setBorderBottomRightRadiusVerifyData] = useState("0")
  const [borderBottomLeftRadiusVerifyData, setBorderBottomLeftRadiusVerifyData] = useState("0")
  // padding for VerifyData
  const [paddingRightVerifyData, setPaddingRightVerifyData] = useState("10")
  const [paddingLeftVerifyData, setPaddingLeftVerifyData] = useState("10")
  const [paddingTopVerifyData, setPaddingTopVerifyData] = useState("12")
  const [paddingBottomVerifyData, setPaddingBottomVerifyData] = useState("12")
  // margin for VerifyData
  const [marginRightVerifyData, setMarginRightVerifyData] = useState("0")
  const [marginLeftVerifyData, setMarginLeftVerifyData] = useState("0")
  const [marginTopVerifyData, setMarginTopVerifyData] = useState("0")
  const [marginBottomVerifyData, setMarginBottomVerifyData] = useState("0")

  // for background color of VerifyData
  const [backgroundColorVerifyData, setBackgroundColorVerifyData] = useState("#202844")
  // for color of VerifyData
  const [colorVerifyData, setColorVerifyData] = useState("#fff")
  // for font size of VerifyData
  const [fontSizeVerifyData, setFontSizeVerifyData] = useState("1rem")
  // for font of VerifyData
  const [fontVerifyData, setFontVerifyData] = useState("Arial")
  //---------------------------------------------------------------- VerifyCode
  const [fontSizeVerifyCode, setFontSizeVerifyCode] = useState("1rem")
  const [backgroundColorVerifyCode, setBackgroundColorVerifyCode] = useState("#5BD62A")
  const [colorVerifyCode, setColorVerifyCode] = useState("#fff")
  const [fontVerifyCode, setFontVerifyCode] = useState("Roboto")
  const [dialogOpenVerifyCode, setDialogOpenVerifyCode] = useState(false)
  // border for VerifyCode
  const [borderBottomColorVerifyCode, setBorderBottomColorVerifyCode] = useState("#c3c3c3")
  const [borderRightColorVerifyCode, setBorderRightColorVerifyCode] = useState("#c3c3c3")
  const [borderLeftColorVerifyCode, setBorderLeftColorVerifyCode] = useState("#c3c3c3")
  const [borderTopColorVerifyCode, setBorderTopColorVerifyCode] = useState("#c3c3c3")
  // border width
  const [borderRightWidthVerifyCode, setBorderRightWidthVerifyCode] = useState("0")
  const [borderLeftWidthVerifyCode, setBorderLeftWidthVerifyCode] = useState("0")
  const [borderTopWidthVerifyCode, setBorderTopWidthVerifyCode] = useState("0")
  const [borderBottomWidthVerifyCode, setBorderBottomWidthVerifyCode] = useState("0")
  // border style
  const [borderRightStyleVerifyCode, setBorderRightStyleVerifyCode] = useState("solid")
  const [borderLeftStyleVerifyCode, setBorderLeftStyleVerifyCode] = useState("solid")
  const [borderTopStyleVerifyCode, setBorderTopStyleVerifyCode] = useState("solid")
  const [borderBottomStyleVerifyCode, setBorderBottomStyleVerifyCode] = useState("solid")
  // border radius border-top-right-radius
  const [borderTopRightRadiusVerifyCode, setBorderTopRightRadiusVerifyCode] = useState("5")
  const [borderTopLeftRadiusVerifyCode, setBorderTopLeftRadiusVerifyCode] = useState("5")
  const [borderBottomRightRadiusVerifyCode, setBorderBottomRightRadiusVerifyCode] = useState("5")
  const [borderBottomLeftRadiusVerifyCode, setBorderBottomLeftRadiusVerifyCode] = useState("5")
  // padding for VerifyCode
  const [paddingRightVerifyCode, setPaddingRightVerifyCode] = useState("15")
  const [paddingLeftVerifyCode, setPaddingLeftVerifyCode] = useState("15")
  const [paddingTopVerifyCode, setPaddingTopVerifyCode] = useState("10")
  const [paddingBottomVerifyCode, setPaddingBottomVerifyCode] = useState("10")
  // margin for VerifyCode
  const [marginRightVerifyCode, setMarginRightVerifyCode] = useState("0")
  const [marginLeftVerifyCode, setMarginLeftVerifyCode] = useState("0")
  const [marginTopVerifyCode, setMarginTopVerifyCode] = useState("0")
  const [marginBottomVerifyCode, setMarginBottomVerifyCode] = useState("0")

  // -----------------------------------------------------------------------VerifyTitle --------------------------------------- 5

  const [fontSizeVerifyTitle, setFontSizeVerifyTitle] = useState("0.78rem")
  const [backgroundColorVerifyTitle, setBackgroundColorVerifyTitle] = useState(DEFAULT_COLOR_SITE)
  const [colorVerifyTitle, setColorVerifyTitle] = useState("#000")
  const [fontVerifyTitle, setFontVerifyTitle] = useState("Roboto")
  const [dialogOpenVerifyTitle, setDialogOpenVerifyTitle] = useState(false)
  // border for VerifyTitle
  const [borderBottomColorVerifyTitle, setBorderBottomColorVerifyTitle] = useState("#000")
  const [borderRightColorVerifyTitle, setBorderRightColorVerifyTitle] = useState("#000")
  const [borderLeftColorVerifyTitle, setBorderLeftColorVerifyTitle] = useState("#000")
  const [borderTopColorVerifyTitle, setBorderTopColorVerifyTitle] = useState("#000")
  // border width
  const [borderRightWidthVerifyTitle, setBorderRightWidthVerifyTitle] = useState("0")
  const [borderLeftWidthVerifyTitle, setBorderLeftWidthVerifyTitle] = useState("0")
  const [borderTopWidthVerifyTitle, setBorderTopWidthVerifyTitle] = useState("0")
  const [borderBottomWidthVerifyTitle, setBorderBottomWidthVerifyTitle] = useState("0")
  // border style
  const [borderRightStyleVerifyTitle, setBorderRightStyleVerifyTitle] = useState("solid")
  const [borderLeftStyleVerifyTitle, setBorderLeftStyleVerifyTitle] = useState("solid")
  const [borderTopStyleVerifyTitle, setBorderTopStyleVerifyTitle] = useState("solid")
  const [borderBottomStyleVerifyTitle, setBorderBottomStyleVerifyTitle] = useState("solid")
  // border radius border-top-right-radius
  const [borderTopRightRadiusVerifyTitle, setBorderTopRightRadiusVerifyTitle] = useState("0")
  const [borderTopLeftRadiusVerifyTitle, setBorderTopLeftRadiusVerifyTitle] = useState("0")
  const [borderBottomRightRadiusVerifyTitle, setBorderBottomRightRadiusVerifyTitle] = useState("0")
  const [borderBottomLeftRadiusVerifyTitle, setBorderBottomLeftRadiusVerifyTitle] = useState("0")
  // padding for VerifyTitle
  const [paddingRightVerifyTitle, setPaddingRightVerifyTitle] = useState("20")
  const [paddingLeftVerifyTitle, setPaddingLeftVerifyTitle] = useState("20")
  const [paddingTopVerifyTitle, setPaddingTopVerifyTitle] = useState("20")
  const [paddingBottomVerifyTitle, setPaddingBottomVerifyTitle] = useState("20")
  // margin for VerifyTitle
  const [marginRightVerifyTitle, setMarginRightVerifyTitle] = useState("10")
  const [marginLeftVerifyTitle, setMarginLeftVerifyTitle] = useState("10")
  const [marginTopVerifyTitle, setMarginTopVerifyTitle] = useState("10")
  const [marginBottomVerifyTitle, setMarginBottomVerifyTitle] = useState("10")

  //---------------------------------------------------------------- VerifyFooter
  const [fontSizeVerifyFooter, setFontSizeVerifyFooter] = useState("1rem")
  const [backgroundColorVerifyFooter, setBackgroundColorVerifyFooter] = useState("#5BD62A")
  const [colorVerifyFooter, setColorVerifyFooter] = useState("#fff")
  const [fontVerifyFooter, setFontVerifyFooter] = useState("Roboto")
  const [dialogOpenVerifyFooter, setDialogOpenVerifyFooter] = useState(false)
  // border for VerifyFooter
  const [borderBottomColorVerifyFooter, setBorderBottomColorVerifyFooter] = useState("#c3c3c3")
  const [borderRightColorVerifyFooter, setBorderRightColorVerifyFooter] = useState("#c3c3c3")
  const [borderLeftColorVerifyFooter, setBorderLeftColorVerifyFooter] = useState("#c3c3c3")
  const [borderTopColorVerifyFooter, setBorderTopColorVerifyFooter] = useState("#c3c3c3")
  // border width
  const [borderRightWidthVerifyFooter, setBorderRightWidthVerifyFooter] = useState("0.5")
  const [borderLeftWidthVerifyFooter, setBorderLeftWidthVerifyFooter] = useState("0.5")
  const [borderTopWidthVerifyFooter, setBorderTopWidthVerifyFooter] = useState("0.5")
  const [borderBottomWidthVerifyFooter, setBorderBottomWidthVerifyFooter] = useState("0.5")
  // border style
  const [borderRightStyleVerifyFooter, setBorderRightStyleVerifyFooter] = useState("solid")
  const [borderLeftStyleVerifyFooter, setBorderLeftStyleVerifyFooter] = useState("solid")
  const [borderTopStyleVerifyFooter, setBorderTopStyleVerifyFooter] = useState("solid")
  const [borderBottomStyleVerifyFooter, setBorderBottomStyleVerifyFooter] = useState("solid")
  // border radius border-top-right-radius
  const [borderTopRightRadiusVerifyFooter, setBorderTopRightRadiusVerifyFooter] = useState("5")
  const [borderTopLeftRadiusVerifyFooter, setBorderTopLeftRadiusVerifyFooter] = useState("5")
  const [borderBottomRightRadiusVerifyFooter, setBorderBottomRightRadiusVerifyFooter] =
    useState("5")
  const [borderBottomLeftRadiusVerifyFooter, setBorderBottomLeftRadiusVerifyFooter] = useState("5")
  // padding for VerifyFooter
  const [paddingRightVerifyFooter, setPaddingRightVerifyFooter] = useState("15")
  const [paddingLeftVerifyFooter, setPaddingLeftVerifyFooter] = useState("15")
  const [paddingTopVerifyFooter, setPaddingTopVerifyFooter] = useState("10")
  const [paddingBottomVerifyFooter, setPaddingBottomVerifyFooter] = useState("10")
  // margin for VerifyFooter
  const [marginRightVerifyFooter, setMarginRightVerifyFooter] = useState("0")
  const [marginLeftVerifyFooter, setMarginLeftVerifyFooter] = useState("0")
  const [marginTopVerifyFooter, setMarginTopVerifyFooter] = useState("0")
  const [marginBottomVerifyFooter, setMarginBottomVerifyFooter] = useState("0")
  const [isLoadFooter, setIsLoadFooter] = useState(false)

  useEffect(() => {
    // if (isCurrentIdLoad) {
      console.log("Modals")
    load()
    // }
  }, [])

  useEffect(() => {
    // loadDBFormat()
  }, [])

  // useEffect(() => {
  //   // loadTemplate()
  //   loadT()
  // }, [template])

  const loadDBFormat = async (result: any) => {
    // load on server
    // const result = await fetch(TEMPLATE_PATH + `${template}` + "/modals.json").then((res) =>
    //   res.json()
    // )
    // const result = await loadModals()

    if (result) {
      setDbModalsFormat(result)
      const defaultVerifyTitleFormat: any = getPluginValue(result, VERIFY_TITLE_PLUGIN_ID)
      // setVerifyTitleDBFormat(VerifyTitle)
      setFontSizeVerifyTitle(defaultVerifyTitleFormat?.fontSizeVerifyTitle)
      setBackgroundColorVerifyTitle(defaultVerifyTitleFormat?.backgroundColorVerifyTitle)
      setColorVerifyTitle(defaultVerifyTitleFormat?.colorVerifyTitle)
      setFontVerifyTitle(defaultVerifyTitleFormat?.fontVerifyTitle)
      // border background color
      setBorderBottomColorVerifyTitle(defaultVerifyTitleFormat?.borderBottomColorVerifyTitle)
      setBorderRightColorVerifyTitle(defaultVerifyTitleFormat?.borderRightColorVerifyTitle)
      setBorderLeftColorVerifyTitle(defaultVerifyTitleFormat?.borderLeftColorVerifyTitle)
      setBorderTopColorVerifyTitle(defaultVerifyTitleFormat?.borderTopColorVerifyTitle)
      // border width
      setBorderRightWidthVerifyTitle(defaultVerifyTitleFormat?.borderRightWidthVerifyTitle)
      setBorderLeftWidthVerifyTitle(defaultVerifyTitleFormat?.borderLeftWidthVerifyTitle)
      setBorderTopWidthVerifyTitle(defaultVerifyTitleFormat?.borderTopWidthVerifyTitle)
      setBorderBottomWidthVerifyTitle(defaultVerifyTitleFormat?.borderBottomWidthVerifyTitle)
      // border style
      setBorderRightStyleVerifyTitle(defaultVerifyTitleFormat?.borderRightStyleVerifyTitle)
      setBorderLeftStyleVerifyTitle(defaultVerifyTitleFormat?.borderLeftStyleVerifyTitle)
      setBorderTopStyleVerifyTitle(defaultVerifyTitleFormat?.borderTopStyleVerifyTitle)
      setBorderBottomStyleVerifyTitle(defaultVerifyTitleFormat?.borderBottomStyleVerifyTitle)
      // border radius border-top-right-radius
      setBorderTopRightRadiusVerifyTitle(defaultVerifyTitleFormat?.borderTopRightRadiusVerifyTitle)
      setBorderTopLeftRadiusVerifyTitle(defaultVerifyTitleFormat?.borderTopLeftRadiusVerifyTitle)
      setBorderBottomRightRadiusVerifyTitle(
        defaultVerifyTitleFormat?.borderBottomRightRadiusVerifyTitle
      )
      setBorderBottomLeftRadiusVerifyTitle(
        defaultVerifyTitleFormat?.borderBottomLeftRadiusVerifyTitle
      )
      // padding
      setPaddingRightVerifyTitle(defaultVerifyTitleFormat?.paddingRightVerifyTitle)
      setPaddingLeftVerifyTitle(defaultVerifyTitleFormat?.paddingLeftVerifyTitle)
      setPaddingTopVerifyTitle(defaultVerifyTitleFormat?.paddingTopVerifyTitle)
      setPaddingBottomVerifyTitle(defaultVerifyTitleFormat?.paddingBottomVerifyTitle)
      // margin
      setMarginRightVerifyTitle(defaultVerifyTitleFormat?.marginRightVerifyTitle)
      setMarginLeftVerifyTitle(defaultVerifyTitleFormat?.marginLeftVerifyTitle)
      setMarginTopVerifyTitle(defaultVerifyTitleFormat?.marginTopVerifyTitle)
      setMarginBottomVerifyTitle(defaultVerifyTitleFormat?.marginBottomVerifyTitle)
      // ------------for VerifyTitle button----------------
      setFontSizeVerifyFooter(defaultVerifyTitleFormat?.fontSizeVerifyFooter)
      setBackgroundColorVerifyFooter(defaultVerifyTitleFormat?.backgroundColorVerifyFooter)
      setColorVerifyFooter(defaultVerifyTitleFormat?.colorVerifyFooter)
      setFontVerifyFooter(defaultVerifyTitleFormat?.fontVerifyFooter)
      // border background color
      setBorderBottomColorVerifyFooter(defaultVerifyTitleFormat?.borderBottomColorVerifyFooter)
      setBorderRightColorVerifyFooter(defaultVerifyTitleFormat?.borderRightColorVerifyFooter)
      setBorderLeftColorVerifyFooter(defaultVerifyTitleFormat?.borderLeftColorVerifyFooter)
      setBorderTopColorVerifyFooter(defaultVerifyTitleFormat?.borderTopColorVerifyFooter)
      // border width
      setBorderRightWidthVerifyFooter(defaultVerifyTitleFormat?.borderRightWidthVerifyFooter)
      setBorderLeftWidthVerifyFooter(defaultVerifyTitleFormat?.borderLeftWidthVerifyFooter)
      setBorderTopWidthVerifyFooter(defaultVerifyTitleFormat?.borderTopWidthVerifyFooter)
      setBorderBottomWidthVerifyFooter(defaultVerifyTitleFormat?.borderBottomWidthVerifyFooter)
      // border style
      setBorderRightStyleVerifyFooter(defaultVerifyTitleFormat?.borderRightStyleVerifyFooter)
      setBorderLeftStyleVerifyFooter(defaultVerifyTitleFormat?.borderLeftStyleVerifyFooter)
      setBorderTopStyleVerifyFooter(defaultVerifyTitleFormat?.borderTopStyleVerifyFooter)
      setBorderBottomStyleVerifyFooter(defaultVerifyTitleFormat?.borderBottomStyleVerifyFooter)
      // border radius border-top-right-radius
      setBorderTopRightRadiusVerifyFooter(
        defaultVerifyTitleFormat?.borderTopRightRadiusVerifyFooter
      )
      setBorderTopLeftRadiusVerifyFooter(defaultVerifyTitleFormat?.borderTopLeftRadiusVerifyFooter)
      setBorderBottomRightRadiusVerifyFooter(
        defaultVerifyTitleFormat?.borderBottomRightRadiusVerifyFooter
      )
      setBorderBottomLeftRadiusVerifyFooter(
        defaultVerifyTitleFormat?.borderBottomLeftRadiusVerifyFooter
      )
      // padding
      setPaddingRightVerifyFooter(defaultVerifyTitleFormat?.paddingRightVerifyFooter)
      setPaddingLeftVerifyFooter(defaultVerifyTitleFormat?.paddingLeftVerifyFooter)
      setPaddingTopVerifyFooter(defaultVerifyTitleFormat?.paddingTopVerifyFooter)
      setPaddingBottomVerifyFooter(defaultVerifyTitleFormat?.paddingBottomVerifyFooter)
      // margin
      setMarginRightVerifyFooter(defaultVerifyTitleFormat?.marginRightVerifyFooter)
      setMarginLeftVerifyFooter(defaultVerifyTitleFormat?.marginLeftVerifyFooter)
      setMarginTopVerifyFooter(defaultVerifyTitleFormat?.marginTopVerifyFooter)
      setMarginBottomVerifyFooter(defaultVerifyTitleFormat?.marginBottomVerifyFooter)

      // -------------------------- VerifyData --------------------------
      const defaultVerifyDataFormat: any = getPluginValue(result, "VerifyData-modal-Plugin")
      setFontSizeVerifyData(defaultVerifyDataFormat?.fontSizeVerifyData)
      setFontVerifyData(defaultVerifyDataFormat?.fontVerifyData)
      setColorVerifyData(defaultVerifyDataFormat?.colorVerifyData)
      setBackgroundColorVerifyData(defaultVerifyDataFormat?.backgroundColorVerifyData)
      // border
      setBorderBottomColorVerifyData(defaultVerifyDataFormat?.borderBottomColorVerifyData)
      setBorderRightColorVerifyData(defaultVerifyDataFormat?.borderRightColorVerifyData)
      setBorderLeftColorVerifyData(defaultVerifyDataFormat?.borderLeftColorVerifyData)
      setBorderTopColorVerifyData(defaultVerifyDataFormat?.borderTopColorVerifyData)
      // border width
      setBorderRightWidthVerifyData(defaultVerifyDataFormat?.borderRightWidthVerifyData)
      setBorderLeftWidthVerifyData(defaultVerifyDataFormat?.borderLeftWidthVerifyData)
      setBorderTopWidthVerifyData(defaultVerifyDataFormat?.borderTopWidthVerifyData)
      setBorderBottomWidthVerifyData(defaultVerifyDataFormat?.borderBottomWidthVerifyData)
      // border style
      setBorderRightStyleVerifyData(defaultVerifyDataFormat?.borderRightStyleVerifyData)
      setBorderLeftStyleVerifyData(defaultVerifyDataFormat?.borderLeftStyleVerifyData)
      setBorderTopStyleVerifyData(defaultVerifyDataFormat?.borderTopStyleVerifyData)
      setBorderBottomStyleVerifyData(defaultVerifyDataFormat?.borderBottomStyleVerifyData)
      // border radius border-top-right-radius
      setBorderTopRightRadiusVerifyData(defaultVerifyDataFormat?.borderTopRightRadiusVerifyData)
      setBorderTopLeftRadiusVerifyData(defaultVerifyDataFormat?.borderTopLeftRadiusVerifyData)
      setBorderBottomRightRadiusVerifyData(
        defaultVerifyDataFormat?.borderBottomRightRadiusVerifyData
      )
      setBorderBottomLeftRadiusVerifyData(defaultVerifyDataFormat?.borderBottomLeftRadiusVerifyData)
      // padding
      setPaddingRightVerifyData(defaultVerifyDataFormat?.paddingRightVerifyData)
      setPaddingLeftVerifyData(defaultVerifyDataFormat?.paddingLeftVerifyData)
      setPaddingTopVerifyData(defaultVerifyDataFormat?.paddingTopVerifyData)
      setPaddingBottomVerifyData(defaultVerifyDataFormat?.paddingBottomVerifyData)
      // margin
      setMarginRightVerifyData(defaultVerifyDataFormat?.marginRightVerifyData)
      setMarginLeftVerifyData(defaultVerifyDataFormat?.marginLeftVerifyData)
      setMarginTopVerifyData(defaultVerifyDataFormat?.marginTopVerifyData)
      setMarginBottomVerifyData(defaultVerifyDataFormat?.marginBottomVerifyData)
      // -------------------------- VerifyData Button --------------------------
      const defaultVerifyCodeFormat: any = getPluginValue(result, "VerifyCode-modal-btn")

      // VerifyCode-modal-btn
      setFontSizeVerifyCode(defaultVerifyCodeFormat?.fontSizeVerifyCode)
      setFontVerifyCode(defaultVerifyCodeFormat?.fontVerifyCode)
      setColorVerifyCode(defaultVerifyCodeFormat?.colorVerifyCode)
      setBackgroundColorVerifyCode(defaultVerifyDataFormat?.backgroundColorVerifyCode)
      // border
      setBorderBottomColorVerifyCode(defaultVerifyCodeFormat?.borderBottomColorVerifyCode)
      setBorderRightColorVerifyCode(defaultVerifyCodeFormat?.borderRightColorVerifyCode)
      setBorderLeftColorVerifyCode(defaultVerifyCodeFormat?.borderLeftColorVerifyCode)
      setBorderTopColorVerifyCode(defaultVerifyCodeFormat?.borderTopColorVerifyCode)
      // border width
      setBorderRightWidthVerifyCode(defaultVerifyCodeFormat?.borderRightWidthVerifyCode)
      setBorderLeftWidthVerifyCode(defaultVerifyCodeFormat?.borderLeftWidthVerifyCode)
      setBorderTopWidthVerifyCode(defaultVerifyCodeFormat?.borderTopWidthVerifyCode)
      setBorderBottomWidthVerifyCode(defaultVerifyCodeFormat?.borderBottomWidthVerifyCode)
      // border style
      setBorderRightStyleVerifyCode(defaultVerifyCodeFormat?.borderRightStyleVerifyCode)
      setBorderLeftStyleVerifyCode(defaultVerifyCodeFormat?.borderLeftStyleVerifyCode)
      setBorderTopStyleVerifyCode(defaultVerifyCodeFormat?.borderTopStyleVerifyCode)
      setBorderBottomStyleVerifyCode(defaultVerifyCodeFormat?.borderBottomStyleVerifyCode)
      // border radius border-top-right-radius
      setBorderTopRightRadiusVerifyCode(defaultVerifyCodeFormat?.borderTopRightRadiusVerifyCode)
      setBorderTopLeftRadiusVerifyCode(defaultVerifyCodeFormat?.borderTopLeftRadiusVerifyCode)
      setBorderBottomRightRadiusVerifyCode(
        defaultVerifyCodeFormat?.borderBottomRightRadiusVerifyCode
      )
      setBorderBottomLeftRadiusVerifyCode(defaultVerifyDataFormat?.borderBottomLeftRadiusVerifyCode)
      // padding
      setPaddingRightVerifyCode(defaultVerifyDataFormat?.paddingRightVerifyCode)
      setPaddingLeftVerifyCode(defaultVerifyDataFormat?.paddingLeftVerifyCode)
      setPaddingTopVerifyCode(defaultVerifyDataFormat?.paddingTopVerifyCode)
      setPaddingBottomVerifyCode(defaultVerifyDataFormat?.paddingBottomVerifyCode)
      // margin
      setMarginRightVerifyCode(defaultVerifyDataFormat?.marginRightVerifyCode)
      setMarginLeftVerifyCode(defaultVerifyDataFormat?.marginLeftVerifyCode)
      setMarginTopVerifyCode(defaultVerifyDataFormat?.marginTopVerifyCode)
      setMarginBottomVerifyCode(defaultVerifyDataFormat?.marginBottomVerifyCode)
    }
    setLoading(true)
  }
  // const loadT = async () => {
  //   const header = await import(TEMPLATE_PATH + `${template}` + "/container.json")
  //     .then((res: any) => {
  //       setHeaderDBFormat(header)
  //     })
  //     .catch((err) => {
  //       console.log("err", err)
  //     })

  // }
  // load on server
  const loadTemplate = async () => {
    const [header] = await Promise.all([
      await fetch(TEMPLATE_PATH  + "/container.json").then((res) => res.json())
    ])

    setHeaderDBFormat(header)

    setIsLoadFooter(true)
    setLoading(true)
  }

  // load locally
  const load = async () => { 
    const [header, Footer] = await Promise.all([
      await fetch(FILE_PATH_HEADER).then((res) => res.json()),
      await fetch(FILE_PATH_MODALS ).then((res) => res.json())
    ])

    console.log("New Fetch ----------------------------->",header)
    console.log("New Fetch ----------------------------->",Footer)

    setHeaderDBFormat(header)
    if (Footer) {
      setDbModalsFormat(Footer)
      loadDBFormat(Footer)
    }
  }

  const [theme, setTheme] = useState("light")

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        // =====new
        dialogOpenVerifyTitle,
        setDialogOpenVerifyTitle,

        // -------------------------- VerifyData --------------------------
        fontSizeVerifyData,
        setFontSizeVerifyData,
        fontVerifyData,
        setFontVerifyData,
        colorVerifyData,
        setColorVerifyData,
        backgroundColorVerifyData,
        setBackgroundColorVerifyData,
        //  border
        borderBottomColorVerifyData,
        setBorderBottomColorVerifyData,
        borderBottomWidthVerifyData,
        setBorderBottomWidthVerifyData,
        borderTopColorVerifyData,
        setBorderTopColorVerifyData,
        borderTopWidthVerifyData,
        setBorderTopWidthVerifyData,
        borderLeftColorVerifyData,
        setBorderLeftColorVerifyData,
        borderLeftWidthVerifyData,
        setBorderLeftWidthVerifyData,
        borderRightColorVerifyData,
        setBorderRightColorVerifyData,
        borderRightWidthVerifyData,
        setBorderRightWidthVerifyData,
        // border style
        borderRightStyleVerifyData,
        setBorderRightStyleVerifyData,
        borderLeftStyleVerifyData,
        setBorderLeftStyleVerifyData,
        borderTopStyleVerifyData,
        setBorderTopStyleVerifyData,
        borderBottomStyleVerifyData,
        setBorderBottomStyleVerifyData,
        // border radius
        borderTopRightRadiusVerifyData,
        setBorderTopRightRadiusVerifyData,
        borderTopLeftRadiusVerifyData,
        setBorderTopLeftRadiusVerifyData,
        borderBottomRightRadiusVerifyData,
        setBorderBottomRightRadiusVerifyData,
        borderBottomLeftRadiusVerifyData,
        setBorderBottomLeftRadiusVerifyData,
        // padding
        paddingTopVerifyData,
        setPaddingTopVerifyData,
        paddingBottomVerifyData,
        setPaddingBottomVerifyData,
        paddingLeftVerifyData,
        setPaddingLeftVerifyData,
        paddingRightVerifyData,
        setPaddingRightVerifyData,
        // margin
        marginTopVerifyData,
        setMarginTopVerifyData,
        marginBottomVerifyData,
        setMarginBottomVerifyData,
        marginLeftVerifyData,
        setMarginLeftVerifyData,
        marginRightVerifyData,
        setMarginRightVerifyData,
        // VerifyData hight and width
        // dialogOpenVerifyData,
        // setDialogOpenVerifyData,
        // -------------------------- Verify Code --------------------------
        dialogOpenVerifyCode,
        setDialogOpenVerifyCode,
        fontSizeVerifyCode,
        setFontSizeVerifyCode,
        fontVerifyCode,
        setFontVerifyCode,
        colorVerifyCode,
        setColorVerifyCode,
        backgroundColorVerifyCode,
        setBackgroundColorVerifyCode,
        //  border
        borderBottomColorVerifyCode,
        setBorderBottomColorVerifyCode,
        borderBottomWidthVerifyCode,
        setBorderBottomWidthVerifyCode,
        borderTopColorVerifyCode,
        setBorderTopColorVerifyCode,
        borderTopWidthVerifyCode,
        setBorderTopWidthVerifyCode,
        borderLeftColorVerifyCode,
        setBorderLeftColorVerifyCode,
        borderLeftWidthVerifyCode,
        setBorderLeftWidthVerifyCode,
        borderRightColorVerifyCode,
        setBorderRightColorVerifyCode,
        borderRightWidthVerifyCode,
        setBorderRightWidthVerifyCode,
        // border style
        borderRightStyleVerifyCode,
        setBorderRightStyleVerifyCode,
        borderLeftStyleVerifyCode,
        setBorderLeftStyleVerifyCode,
        borderTopStyleVerifyCode,
        setBorderTopStyleVerifyCode,
        borderBottomStyleVerifyCode,
        setBorderBottomStyleVerifyCode,
        // border radius
        borderTopRightRadiusVerifyCode,
        setBorderTopRightRadiusVerifyCode,
        borderTopLeftRadiusVerifyCode,
        setBorderTopLeftRadiusVerifyCode,
        borderBottomRightRadiusVerifyCode,
        setBorderBottomRightRadiusVerifyCode,
        borderBottomLeftRadiusVerifyCode,
        setBorderBottomLeftRadiusVerifyCode,
        // padding
        paddingTopVerifyCode,
        setPaddingTopVerifyCode,
        paddingBottomVerifyCode,
        setPaddingBottomVerifyCode,
        paddingLeftVerifyCode,
        setPaddingLeftVerifyCode,
        paddingRightVerifyCode,
        setPaddingRightVerifyCode,
        // margin
        marginTopVerifyCode,
        setMarginTopVerifyCode,
        marginBottomVerifyCode,
        setMarginBottomVerifyCode,
        marginLeftVerifyCode,
        setMarginLeftVerifyCode,
        marginRightVerifyCode,
        setMarginRightVerifyCode,
        // VerifyData hight and width

        // dialogOpenVerifyCode,
        // setDialogOpenVerifyCode,

        // -------------------------- VerifyTitle --------------------------
        fontSizeVerifyTitle,
        setFontSizeVerifyTitle,
        fontVerifyTitle,
        setFontVerifyTitle,
        colorVerifyTitle,
        setColorVerifyTitle,
        backgroundColorVerifyTitle,
        setBackgroundColorVerifyTitle,
        //  border
        borderBottomColorVerifyTitle,
        setBorderBottomColorVerifyTitle,
        borderBottomWidthVerifyTitle,
        setBorderBottomWidthVerifyTitle,
        borderTopColorVerifyTitle,
        setBorderTopColorVerifyTitle,
        borderTopWidthVerifyTitle,
        setBorderTopWidthVerifyTitle,
        borderLeftColorVerifyTitle,
        setBorderLeftColorVerifyTitle,
        borderLeftWidthVerifyTitle,
        setBorderLeftWidthVerifyTitle,
        borderRightColorVerifyTitle,
        setBorderRightColorVerifyTitle,
        borderRightWidthVerifyTitle,
        setBorderRightWidthVerifyTitle,
        // border style
        borderRightStyleVerifyTitle,
        setBorderRightStyleVerifyTitle,
        borderLeftStyleVerifyTitle,
        setBorderLeftStyleVerifyTitle,
        borderTopStyleVerifyTitle,
        setBorderTopStyleVerifyTitle,
        borderBottomStyleVerifyTitle,
        setBorderBottomStyleVerifyTitle,
        // border radius
        borderTopRightRadiusVerifyTitle,
        setBorderTopRightRadiusVerifyTitle,
        borderTopLeftRadiusVerifyTitle,
        setBorderTopLeftRadiusVerifyTitle,
        borderBottomRightRadiusVerifyTitle,
        setBorderBottomRightRadiusVerifyTitle,
        borderBottomLeftRadiusVerifyTitle,
        setBorderBottomLeftRadiusVerifyTitle,
        // padding
        paddingTopVerifyTitle,
        setPaddingTopVerifyTitle,
        paddingBottomVerifyTitle,
        setPaddingBottomVerifyTitle,
        paddingLeftVerifyTitle,
        setPaddingLeftVerifyTitle,
        paddingRightVerifyTitle,
        setPaddingRightVerifyTitle,
        // margin
        marginTopVerifyTitle,
        setMarginTopVerifyTitle,
        marginBottomVerifyTitle,
        setMarginBottomVerifyTitle,
        marginLeftVerifyTitle,
        setMarginLeftVerifyTitle,
        marginRightVerifyTitle,
        setMarginRightVerifyTitle,
        // VerifyTitle hight and width
        // -------------------------- VerifyTitle Btn --------------------------
        fontSizeVerifyFooter,
        setFontSizeVerifyFooter,
        fontVerifyFooter,
        setFontVerifyFooter,
        colorVerifyFooter,
        setColorVerifyFooter,
        backgroundColorVerifyFooter,
        setBackgroundColorVerifyFooter,
        //  border
        borderBottomColorVerifyFooter,
        setBorderBottomColorVerifyFooter,
        borderBottomWidthVerifyFooter,
        setBorderBottomWidthVerifyFooter,
        borderTopColorVerifyFooter,
        setBorderTopColorVerifyFooter,
        borderTopWidthVerifyFooter,
        setBorderTopWidthVerifyFooter,
        borderLeftColorVerifyFooter,
        setBorderLeftColorVerifyFooter,
        borderLeftWidthVerifyFooter,
        setBorderLeftWidthVerifyFooter,
        borderRightColorVerifyFooter,
        setBorderRightColorVerifyFooter,
        borderRightWidthVerifyFooter,
        setBorderRightWidthVerifyFooter,
        // border style
        borderRightStyleVerifyFooter,
        setBorderRightStyleVerifyFooter,
        borderLeftStyleVerifyFooter,
        setBorderLeftStyleVerifyFooter,
        borderTopStyleVerifyFooter,
        setBorderTopStyleVerifyFooter,
        borderBottomStyleVerifyFooter,
        setBorderBottomStyleVerifyFooter,
        // border radius
        borderTopRightRadiusVerifyFooter,
        setBorderTopRightRadiusVerifyFooter,
        borderTopLeftRadiusVerifyFooter,
        setBorderTopLeftRadiusVerifyFooter,
        borderBottomRightRadiusVerifyFooter,
        setBorderBottomRightRadiusVerifyFooter,
        borderBottomLeftRadiusVerifyFooter,
        setBorderBottomLeftRadiusVerifyFooter,
        // padding
        paddingTopVerifyFooter,
        setPaddingTopVerifyFooter,
        paddingBottomVerifyFooter,
        setPaddingBottomVerifyFooter,
        paddingLeftVerifyFooter,
        setPaddingLeftVerifyFooter,
        paddingRightVerifyFooter,
        setPaddingRightVerifyFooter,
        // margin
        marginTopVerifyFooter,
        setMarginTopVerifyFooter,
        marginBottomVerifyFooter,
        setMarginBottomVerifyFooter,
        marginLeftVerifyFooter,
        setMarginLeftVerifyFooter,
        marginRightVerifyFooter,
        setMarginRightVerifyFooter,
        // VerifyTitle hight and width

        dialogOpenVerifyFooter,
        setDialogOpenVerifyFooter,
        //  db json table for modals
        dbModalsFormat,
        setDbModalsFormat
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useModalsAppProvider = () => useContext(Context)
