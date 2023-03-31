import { createContext, useContext, useEffect, useState } from "react";
import {
  BUTTONS_PLUGIN_ID,
  DATA_PLUGIN,
  HEADER_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_TITLE_PLUGIN_ID,
} from "../components/Constant/const";
import { FILE_PATH_HEADER, FILE_PATH_MODALS, TEMPLATE_PATH } from "../config";
import { DEFAULT_COLOR_SITE } from "../theme/ConstantColors";
import { getPluginValue } from "../utils/uiController";
import { useAppProvider } from "./AppProvider";

const Context = createContext({});

export const ModalsAppProvider = ({ children }: any) => {
  const [dbModalsFormat, setDbModalsFormat]: any = useState();
  const { setLoading, setHeaderDBFormat, headerDBFormat }: any =
    useAppProvider();
  const [buttonFormat, setButtonFormat] = useState();

  const [dialogOpenButtons, setDialogOpenButtons] = useState(false);

  // ------------------------------------------------------------Data ------------------------------------------------ 1
  const [borderBottomColorData, setBorderBottomColorData] = useState("gray");
  const [borderRightColorData, setBorderRightColorData] = useState("gray");
  const [borderLeftColorData, setBorderLeftColorData] = useState("gray");
  const [borderTopColorData, setBorderTopColorData] = useState("gray");
  // border width
  const [borderRightWidthData, setBorderRightWidthData] = useState("1");
  const [borderLeftWidthData, setBorderLeftWidthData] = useState("1");
  const [borderTopWidthData, setBorderTopWidthData] = useState("0.5");
  const [borderBottomWidthData, setBorderBottomWidthData] = useState("0.5");
  // border style
  const [borderRightStyleData, setBorderRightStyleData] = useState("solid");
  const [borderLeftStyleData, setBorderLeftStyleData] = useState("solid");
  const [borderTopStyleData, setBorderTopStyleData] = useState("solid");
  const [borderBottomStyleData, setBorderBottomStyleData] = useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusData, setBorderTopRightRadiusData] = useState("0");
  const [borderTopLeftRadiusData, setBorderTopLeftRadiusData] = useState("0");
  const [borderBottomRightRadiusData, setBorderBottomRightRadiusData] =
    useState("0");
  const [borderBottomLeftRadiusData, setBorderBottomLeftRadiusData] =
    useState("0");
  // padding for Data
  const [paddingRightData, setPaddingRightData] = useState("10");
  const [paddingLeftData, setPaddingLeftData] = useState("10");
  const [paddingTopData, setPaddingTopData] = useState("12");
  const [paddingBottomData, setPaddingBottomData] = useState("12");
  // margin for Data
  const [marginRightData, setMarginRightData] = useState("0");
  const [marginLeftData, setMarginLeftData] = useState("0");
  const [marginTopData, setMarginTopData] = useState("0");
  const [marginBottomData, setMarginBottomData] = useState("0");

  // for background color of Data
  const [backgroundColorData, setBackgroundColorData] = useState(
    "rgba(255, 255, 255, 0.4)"
  );
  // for color of Data
  const [colorData, setColorData] = useState("#000");
  // for font size of Data
  const [fontSizeData, setFontSizeData] = useState("1.5rem");
  // for font of Data
  const [fontData, setFontData] = useState("Segoe UI");
  //---------------------------------------------------------------- DataModal
  const [fontSizeDataModal, setFontSizeDataModal] = useState("1.3rem");
  const [backgroundColorDataModal, setBackgroundColorDataModal] =
    useState("#5BD62A");
  const [colorDataModal, setColorDataModal] = useState("#000");
  const [fontDataModal, setFontDataModal] = useState("MAD Sans Fill");
  const [dialogOpenDataModal, setDialogOpenDataModal] = useState(false);
  // border for DataModal
  const [borderBottomColorDataModal, setBorderBottomColorDataModal] =
    useState("#c3c3c3");
  const [borderRightColorDataModal, setBorderRightColorDataModal] =
    useState("#c3c3c3");
  const [borderLeftColorDataModal, setBorderLeftColorDataModal] =
    useState("#c3c3c3");
  const [borderTopColorDataModal, setBorderTopColorDataModal] =
    useState("#c3c3c3");
  // border width
  const [borderRightWidthDataModal, setBorderRightWidthDataModal] =
    useState("0");
  const [borderLeftWidthDataModal, setBorderLeftWidthDataModal] = useState("0");
  const [borderTopWidthDataModal, setBorderTopWidthDataModal] = useState("0");
  const [borderBottomWidthDataModal, setBorderBottomWidthDataModal] =
    useState("0");
  // border style
  const [borderRightStyleDataModal, setBorderRightStyleDataModal] =
    useState("solid");
  const [borderLeftStyleDataModal, setBorderLeftStyleDataModal] =
    useState("solid");
  const [borderTopStyleDataModal, setBorderTopStyleDataModal] =
    useState("solid");
  const [borderBottomStyleDataModal, setBorderBottomStyleDataModal] =
    useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusDataModal, setBorderTopRightRadiusDataModal] =
    useState("5");
  const [borderTopLeftRadiusDataModal, setBorderTopLeftRadiusDataModal] =
    useState("5");
  const [
    borderBottomRightRadiusDataModal,
    setBorderBottomRightRadiusDataModal,
  ] = useState("5");
  const [borderBottomLeftRadiusDataModal, setBorderBottomLeftRadiusDataModal] =
    useState("5");
  // padding for DataModal
  const [paddingRightDataModal, setPaddingRightDataModal] = useState("15");
  const [paddingLeftDataModal, setPaddingLeftDataModal] = useState("15");
  const [paddingTopDataModal, setPaddingTopDataModal] = useState("10");
  const [paddingBottomDataModal, setPaddingBottomDataModal] = useState("10");
  // margin for DataModal
  const [marginRightDataModal, setMarginRightDataModal] = useState("0");
  const [marginLeftDataModal, setMarginLeftDataModal] = useState("0");
  const [marginTopDataModal, setMarginTopDataModal] = useState("0");
  const [marginBottomDataModal, setMarginBottomDataModal] = useState("0");

  // -----------------------------------------------------------------------TitleModal --------------------------------------- 5

  const [fontSizeTitleModal, setFontSizeTitleModal] = useState("2rem");
  const [backgroundColorTitleModal, setBackgroundColorTitleModal] =
    useState(DEFAULT_COLOR_SITE);
  const [colorTitleModal, setColorTitleModal] = useState("#fff");
  const [fontTitleModal, setFontTitleModal] = useState("MAD Sans Fill");
  const [dialogOpenTitleModal, setDialogOpenTitleModal] = useState(false);
  // border for TitleModal
  const [borderBottomColorTitleModal, setBorderBottomColorTitleModal] =
    useState("#000");
  const [borderRightColorTitleModal, setBorderRightColorTitleModal] =
    useState("#000");
  const [borderLeftColorTitleModal, setBorderLeftColorTitleModal] =
    useState("#000");
  const [borderTopColorTitleModal, setBorderTopColorTitleModal] =
    useState("#000");
  // border width
  const [borderRightWidthTitleModal, setBorderRightWidthTitleModal] =
    useState("0");
  const [borderLeftWidthTitleModal, setBorderLeftWidthTitleModal] =
    useState("0");
  const [borderTopWidthTitleModal, setBorderTopWidthTitleModal] = useState("0");
  const [borderBottomWidthTitleModal, setBorderBottomWidthTitleModal] =
    useState("0");
  // border style
  const [borderRightStyleTitleModal, setBorderRightStyleTitleModal] =
    useState("solid");
  const [borderLeftStyleTitleModal, setBorderLeftStyleTitleModal] =
    useState("solid");
  const [borderTopStyleTitleModal, setBorderTopStyleTitleModal] =
    useState("solid");
  const [borderBottomStyleTitleModal, setBorderBottomStyleTitleModal] =
    useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusTitleModal, setBorderTopRightRadiusTitleModal] =
    useState("0");
  const [borderTopLeftRadiusTitleModal, setBorderTopLeftRadiusTitleModal] =
    useState("0");
  const [
    borderBottomRightRadiusTitleModal,
    setBorderBottomRightRadiusTitleModal,
  ] = useState("0");
  const [
    borderBottomLeftRadiusTitleModal,
    setBorderBottomLeftRadiusTitleModal,
  ] = useState("0");
  // padding for TitleModal
  const [paddingRightTitleModal, setPaddingRightTitleModal] = useState("0");
  const [paddingLeftTitleModal, setPaddingLeftTitleModal] = useState("0");
  const [paddingTopTitleModal, setPaddingTopTitleModal] = useState("0");
  const [paddingBottomTitleModal, setPaddingBottomTitleModal] = useState("0");
  // margin for TitleModal
  const [marginRightTitleModal, setMarginRightTitleModal] = useState("10");
  const [marginLeftTitleModal, setMarginLeftTitleModal] = useState("10");
  const [marginTopTitleModal, setMarginTopTitleModal] = useState("10");
  const [marginBottomTitleModal, setMarginBottomTitleModal] = useState("10");

  //---------------------------------------------------------------- DataTitle
  const [fontSizeDataTitle, setFontSizeDataTitle] = useState("2rem");
  const [backgroundColorBox2, setBackgroundColorBox2] = useState("transparent");
  const [colorDataTitle, setColorDataTitle] = useState("#000");
  const [fontDataTitle, setFontDataTitle] = useState("Segoe UI");
  // border for DataTitle
  // -----------------------------------------------------------box 2
  const [borderBottomColorBox2, setBorderBottomColorBox2] = useState("#fff");
  const [borderRightColorBox2, setBorderRightColorBox2] = useState("#fff");
  const [borderLeftColorBox2, setBorderLeftColorBox2] = useState("#fff");
  const [borderTopColorBox2, setBorderTopColorBox2] = useState("#fff");
  // border width
  const [borderRightWidthBox2, setBorderRightWidthBox2] = useState("1");
  const [borderLeftWidthBox2, setBorderLeftWidthBox2] = useState("1");
  const [borderTopWidthBox2, setBorderTopWidthBox2] = useState("1");
  const [borderBottomWidthBox2, setBorderBottomWidthBox2] = useState("1");
  // border style
  const [borderRightStyleBox2, setBorderRightStyleBox2] = useState("solid");
  const [borderLeftStyleBox2, setBorderLeftStyleBox2] = useState("solid");
  const [borderTopStyleBox2, setBorderTopStyleBox2] = useState("solid");
  const [borderBottomStyleBox2, setBorderBottomStyleBox2] = useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusBox2, setBorderTopRightRadiusBox2] = useState("0");
  const [borderTopLeftRadiusBox2, setBorderTopLeftRadiusBox2] = useState("0");
  const [borderBottomRightRadiusBox2, setBorderBottomRightRadiusBox2] =
    useState("0");
  const [borderBottomLeftRadiusBox2, setBorderBottomLeftRadiusBox2] =
    useState("0");
  // padding for Box2
  const [paddingRightBox2, setPaddingRightBox2] = useState("15");
  const [paddingLeftBox2, setPaddingLeftBox2] = useState("15");
  const [paddingTopBox2, setPaddingTopBox2] = useState("10");
  const [paddingBottomBox2, setPaddingBottomBox2] = useState("10");
  // margin for Box2
  const [marginRightBox2, setMarginRightBox2] = useState("0");
  const [marginLeftBox2, setMarginLeftBox2] = useState("0");
  const [marginTopBox2, setMarginTopBox2] = useState("0");
  const [marginBottomBox2, setMarginBottomBox2] = useState("0");
  const [isLoadFooter, setIsLoadFooter] = useState(false);

  //---------------------------------------------------------------- buttons -----------------------------------------------
  const [fontSizeButtons, setFontSizeButtons] = useState("1rem");
  const [backgroundColorButtons, setBackgroundColorButtons] = useState("#fff");
  const [colorButtons, setColorButtons] = useState("#000");
  const [fontButtons, setFontButtons] = useState("Roboto");
  const [dialogOpenButtons2, setDialogOpenButtons2] = useState(false);
  // border for buttons
  const [borderBottomColorButtons, setBorderBottomColorButtons] =
    useState("#000");
  const [borderRightColorButtons, setBorderRightColorButtons] =
    useState("#000");
  const [borderLeftColorButtons, setBorderLeftColorButtons] = useState("#000");
  const [borderTopColorButtons, setBorderTopColorButtons] = useState("#000");
  // border width
  const [borderRightWidthButtons, setBorderRightWidthButtons] = useState("0.5");
  const [borderLeftWidthButtons, setBorderLeftWidthButtons] = useState("0.5");
  const [borderTopWidthButtons, setBorderTopWidthButtons] = useState("0.5");
  const [borderBottomWidthButtons, setBorderBottomWidthButtons] =
    useState("0.5");
  // border style
  const [borderRightStyleButtons, setBorderRightStyleButtons] =
    useState("solid");
  const [borderLeftStyleButtons, setBorderLeftStyleButtons] = useState("solid");
  const [borderTopStyleButtons, setBorderTopStyleButtons] = useState("solid");
  const [borderBottomStyleButtons, setBorderBottomStyleButtons] =
    useState("solid");
  // border radius border-top-right-radius
  const [borderTopRightRadiusButtons, setBorderTopRightRadiusButtons] =
    useState("5");
  const [borderTopLeftRadiusButtons, setBorderTopLeftRadiusButtons] =
    useState("5");
  const [borderBottomRightRadiusButtons, setBorderBottomRightRadiusButtons] =
    useState("5");
  const [borderBottomLeftRadiusButtons, setBorderBottomLeftRadiusButtons] =
    useState("5");
  // padding for buttons
  const [paddingRightButtons, setPaddingRightButtons] = useState("15");
  const [paddingLeftButtons, setPaddingLeftButtons] = useState("15");
  const [paddingTopButtons, setPaddingTopButtons] = useState("10");
  const [paddingBottomButtons, setPaddingBottomButtons] = useState("10");
  // margin for buttons
  const [marginRightButtons, setMarginRightButtons] = useState("3");
  const [marginLeftButtons, setMarginLeftButtons] = useState("3");
  const [marginTopButtons, setMarginTopButtons] = useState("0");
  const [marginBottomButtons, setMarginBottomButtons] = useState("0");

  const [dialogOpenData, setDialogOpenData] = useState();

  // useEffect(() => {
  //   console.log("Modals", dbModalsFormat);
  //   load();
  //   updateStateContent();
  // }, []);

  // useEffect(() => {
  //   loadDBFormat()
  // }, []);

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

    setLoading(true);
  };
  const updateStateContent = () => {
    if (dbModalsFormat) {
      const defaultTitleModalFormat: any = getPluginValue(
        dbModalsFormat,
        VERIFY_TITLE_PLUGIN_ID
      );
      setFontSizeTitleModal(defaultTitleModalFormat?.fontSizeTitleModal);
      setBackgroundColorTitleModal(
        defaultTitleModalFormat?.backgroundColorTitleModal
      );
      setColorTitleModal(defaultTitleModalFormat?.colorTitleModal);
      setFontTitleModal(defaultTitleModalFormat?.fontTitleModal);
      // border background color
      setBorderBottomColorTitleModal(
        defaultTitleModalFormat?.borderBottomColorTitleModal
      );
      setBorderRightColorTitleModal(
        defaultTitleModalFormat?.borderRightColorTitleModal
      );
      setBorderLeftColorTitleModal(
        defaultTitleModalFormat?.borderLeftColorTitleModal
      );
      setBorderTopColorTitleModal(
        defaultTitleModalFormat?.borderTopColorTitleModal
      );
      // border width
      setBorderRightWidthTitleModal(
        defaultTitleModalFormat?.borderRightWidthTitleModal
      );
      setBorderLeftWidthTitleModal(
        defaultTitleModalFormat?.borderLeftWidthTitleModal
      );
      setBorderTopWidthTitleModal(
        defaultTitleModalFormat?.borderTopWidthTitleModal
      );
      setBorderBottomWidthTitleModal(
        defaultTitleModalFormat?.borderBottomWidthTitleModal
      );
      // border style
      setBorderRightStyleTitleModal(
        defaultTitleModalFormat?.borderRightStyleTitleModal
      );
      setBorderLeftStyleTitleModal(
        defaultTitleModalFormat?.borderLeftStyleTitleModal
      );
      setBorderTopStyleTitleModal(
        defaultTitleModalFormat?.borderTopStyleTitleModal
      );
      setBorderBottomStyleTitleModal(
        defaultTitleModalFormat?.borderBottomStyleTitleModal
      );
      // border radius border-top-right-radius
      setBorderTopRightRadiusTitleModal(
        defaultTitleModalFormat?.borderTopRightRadiusTitleModal
      );
      setBorderTopLeftRadiusTitleModal(
        defaultTitleModalFormat?.borderTopLeftRadiusTitleModal
      );
      setBorderBottomRightRadiusTitleModal(
        defaultTitleModalFormat?.borderBottomRightRadiusTitleModal
      );
      setBorderBottomLeftRadiusTitleModal(
        defaultTitleModalFormat?.borderBottomLeftRadiusTitleModal
      );
      // padding
      setPaddingRightTitleModal(
        defaultTitleModalFormat?.paddingRightTitleModal
      );
      setPaddingLeftTitleModal(defaultTitleModalFormat?.paddingLeftTitleModal);
      setPaddingTopTitleModal(defaultTitleModalFormat?.paddingTopTitleModal);
      setPaddingBottomTitleModal(
        defaultTitleModalFormat?.paddingBottomTitleModal
      );
      // margin
      setMarginRightTitleModal(defaultTitleModalFormat?.marginRightTitleModal);
      setMarginLeftTitleModal(defaultTitleModalFormat?.marginLeftTitleModal);
      setMarginTopTitleModal(defaultTitleModalFormat?.marginTopTitleModal);
      setMarginBottomTitleModal(
        defaultTitleModalFormat?.marginBottomTitleModal
      );
      // ------------for TitleModal button----------------
      setFontSizeDataTitle(defaultTitleModalFormat?.fontSizeDataTitle);
      setBackgroundColorBox2(defaultTitleModalFormat?.backgroundColorBox2);
      setColorDataTitle(defaultTitleModalFormat?.colorDataTitle);
      setFontDataTitle(defaultTitleModalFormat?.fontDataTitle);
      // ------------for Box 2----------------
      // border background color
      setBorderBottomColorBox2(defaultTitleModalFormat?.borderBottomColorBox2);
      setBorderRightColorBox2(defaultTitleModalFormat?.borderRightColorBox2);
      setBorderLeftColorBox2(defaultTitleModalFormat?.borderLeftColorBox2);
      setBorderTopColorBox2(defaultTitleModalFormat?.borderTopColorBox2);
      // border width
      setBorderRightWidthBox2(defaultTitleModalFormat?.borderRightWidthBox2);
      setBorderLeftWidthBox2(defaultTitleModalFormat?.borderLeftWidthBox2);
      setBorderTopWidthBox2(defaultTitleModalFormat?.borderTopWidthBox2);
      setBorderBottomWidthBox2(defaultTitleModalFormat?.borderBottomWidthBox2);
      // border style
      setBorderRightStyleBox2(defaultTitleModalFormat?.borderRightStyleBox2);
      setBorderLeftStyleBox2(defaultTitleModalFormat?.borderLeftStyleBox2);
      setBorderTopStyleBox2(defaultTitleModalFormat?.borderTopStyleBox2);
      setBorderBottomStyleBox2(defaultTitleModalFormat?.borderBottomStyleBox2);
      // border radius border-top-right-radius
      setBorderTopRightRadiusBox2(
        defaultTitleModalFormat?.borderTopRightRadiusBox2
      );
      setBorderTopLeftRadiusBox2(
        defaultTitleModalFormat?.borderTopLeftRadiusBox2
      );
      setBorderBottomRightRadiusBox2(
        defaultTitleModalFormat?.borderBottomRightRadiusBox2
      );
      setBorderBottomLeftRadiusBox2(
        defaultTitleModalFormat?.borderBottomLeftRadiusBox2
      );
      // padding
      setPaddingRightBox2(defaultTitleModalFormat?.paddingRightBox2);
      setPaddingLeftBox2(defaultTitleModalFormat?.paddingLeftBox2);
      setPaddingTopBox2(defaultTitleModalFormat?.paddingTopBox2);
      setPaddingBottomBox2(defaultTitleModalFormat?.paddingBottomBox2);
      // margin
      setMarginRightBox2(defaultTitleModalFormat?.marginRightBox2);
      setMarginLeftBox2(defaultTitleModalFormat?.marginLeftBox2);
      setMarginTopBox2(defaultTitleModalFormat?.marginTopBox2);
      setMarginBottomBox2(defaultTitleModalFormat?.marginBottomBox2);

      // -------------------------- Data --------------------------
      const defaultDataFormat: any = getPluginValue(
        dbModalsFormat,
        DATA_PLUGIN
      );
      setFontSizeData(defaultDataFormat?.fontSizeData);
      setFontData(defaultDataFormat?.fontData);
      setColorData(defaultDataFormat?.colorData);
      setBackgroundColorData(defaultDataFormat?.backgroundColorData);
      // border
      setBorderBottomColorData(defaultDataFormat?.borderBottomColorData);
      setBorderRightColorData(defaultDataFormat?.borderRightColorData);
      setBorderLeftColorData(defaultDataFormat?.borderLeftColorData);
      setBorderTopColorData(defaultDataFormat?.borderTopColorData);
      // border width
      setBorderRightWidthData(defaultDataFormat?.borderRightWidthData);
      setBorderLeftWidthData(defaultDataFormat?.borderLeftWidthData);
      setBorderTopWidthData(defaultDataFormat?.borderTopWidthData);
      setBorderBottomWidthData(defaultDataFormat?.borderBottomWidthData);
      // border style
      setBorderRightStyleData(defaultDataFormat?.borderRightStyleData);
      setBorderLeftStyleData(defaultDataFormat?.borderLeftStyleData);
      setBorderTopStyleData(defaultDataFormat?.borderTopStyleData);
      setBorderBottomStyleData(defaultDataFormat?.borderBottomStyleData);
      // border radius border-top-right-radius
      setBorderTopRightRadiusData(defaultDataFormat?.borderTopRightRadiusData);
      setBorderTopLeftRadiusData(defaultDataFormat?.borderTopLeftRadiusData);
      setBorderBottomRightRadiusData(
        defaultDataFormat?.borderBottomRightRadiusData
      );
      setBorderBottomLeftRadiusData(
        defaultDataFormat?.borderBottomLeftRadiusData
      );
      // padding
      setPaddingRightData(defaultDataFormat?.paddingRightData);
      setPaddingLeftData(defaultDataFormat?.paddingLeftData);
      setPaddingTopData(defaultDataFormat?.paddingTopData);
      setPaddingBottomData(defaultDataFormat?.paddingBottomData);
      // margin
      setMarginRightData(defaultDataFormat?.marginRightData);
      setMarginLeftData(defaultDataFormat?.marginLeftData);
      setMarginTopData(defaultDataFormat?.marginTopData);
      setMarginBottomData(defaultDataFormat?.marginBottomData);
      // -------------------------- Data Button --------------------------
      const defaultDataModalFormat: any = getPluginValue(
        dbModalsFormat,
        VERIFY_CODE
      );

      setFontSizeDataModal(defaultDataModalFormat?.fontSizeDataModal);
      setFontDataModal(defaultDataModalFormat?.fontDataModal);
      setColorDataModal(defaultDataModalFormat?.colorDataModal);
      setBackgroundColorDataModal(defaultDataFormat?.backgroundColorDataModal);
      // border
      setBorderBottomColorDataModal(
        defaultDataModalFormat?.borderBottomColorDataModal
      );
      setBorderRightColorDataModal(
        defaultDataModalFormat?.borderRightColorDataModal
      );
      setBorderLeftColorDataModal(
        defaultDataModalFormat?.borderLeftColorDataModal
      );
      setBorderTopColorDataModal(
        defaultDataModalFormat?.borderTopColorDataModal
      );
      // border width
      setBorderRightWidthDataModal(
        defaultDataModalFormat?.borderRightWidthDataModal
      );
      setBorderLeftWidthDataModal(
        defaultDataModalFormat?.borderLeftWidthDataModal
      );
      setBorderTopWidthDataModal(
        defaultDataModalFormat?.borderTopWidthDataModal
      );
      setBorderBottomWidthDataModal(
        defaultDataModalFormat?.borderBottomWidthDataModal
      );
      // border style
      setBorderRightStyleDataModal(
        defaultDataModalFormat?.borderRightStyleDataModal
      );
      setBorderLeftStyleDataModal(
        defaultDataModalFormat?.borderLeftStyleDataModal
      );
      setBorderTopStyleDataModal(
        defaultDataModalFormat?.borderTopStyleDataModal
      );
      setBorderBottomStyleDataModal(
        defaultDataModalFormat?.borderBottomStyleDataModal
      );
      // border radius border-top-right-radius
      setBorderTopRightRadiusDataModal(
        defaultDataModalFormat?.borderTopRightRadiusDataModal
      );
      setBorderTopLeftRadiusDataModal(
        defaultDataModalFormat?.borderTopLeftRadiusDataModal
      );
      setBorderBottomRightRadiusDataModal(
        defaultDataModalFormat?.borderBottomRightRadiusDataModal
      );
      setBorderBottomLeftRadiusDataModal(
        defaultDataFormat?.borderBottomLeftRadiusDataModal
      );
      // padding
      setPaddingRightDataModal(defaultDataFormat?.paddingRightDataModal);
      setPaddingLeftDataModal(defaultDataFormat?.paddingLeftDataModal);
      setPaddingTopDataModal(defaultDataFormat?.paddingTopDataModal);
      setPaddingBottomDataModal(defaultDataFormat?.paddingBottomDataModal);
      // margin
      setMarginRightDataModal(defaultDataFormat?.marginRightDataModal);
      setMarginLeftDataModal(defaultDataFormat?.marginLeftDataModal);
      setMarginTopDataModal(defaultDataFormat?.marginTopDataModal);
      setMarginBottomDataModal(defaultDataFormat?.marginBottomDataModal);

      // -------------------------- Data Button --------------------------
      const buttonFormat: any = getPluginValue(
        dbModalsFormat,
        BUTTONS_PLUGIN_ID
      );
      setButtonFormat(buttonFormat);
      if (buttonFormat) {
        console.log("buttonFormat", buttonFormat?.fontSizeButtons);
        // Buttons-modal-btn
        setFontSizeButtons(buttonFormat?.fontSizeButtons);
        setFontButtons(buttonFormat?.fontButtons);
        setColorButtons(buttonFormat?.colorButtons);
        setBackgroundColorButtons(buttonFormat?.backgroundColorButtons);
        // border
        setBorderBottomColorButtons(buttonFormat?.borderBottomColorButtons);
        setBorderRightColorButtons(buttonFormat?.borderRightColorButtons);
        setBorderLeftColorButtons(buttonFormat?.borderLeftColorButtons);
        setBorderTopColorButtons(buttonFormat?.borderTopColorButtons);
        // border width
        setBorderRightWidthButtons(buttonFormat?.borderRightWidthButtons);
        setBorderLeftWidthButtons(buttonFormat?.borderLeftWidthButtons);
        setBorderTopWidthButtons(buttonFormat?.borderTopWidthButtons);
        setBorderBottomWidthButtons(buttonFormat?.borderBottomWidthButtons);
        // border style
        setBorderRightStyleButtons(buttonFormat?.borderRightStyleButtons);
        setBorderLeftStyleButtons(buttonFormat?.borderLeftStyleButtons);
        setBorderTopStyleButtons(buttonFormat?.borderTopStyleButtons);
        setBorderBottomStyleButtons(buttonFormat?.borderBottomStyleButtons);
        // border radius border-top-right-radius
        setBorderTopRightRadiusButtons(
          buttonFormat?.borderTopRightRadiusButtons
        );
        setBorderTopLeftRadiusButtons(buttonFormat?.borderTopLeftRadiusButtons);
        setBorderBottomRightRadiusButtons(
          buttonFormat?.borderBottomRightRadiusButtons
        );
        setBorderBottomLeftRadiusButtons(
          buttonFormat?.borderBottomLeftRadiusButtons
        );
        // padding
        setPaddingRightButtons(buttonFormat?.paddingRightButtons);
        setPaddingLeftButtons(buttonFormat?.paddingLeftButtons);
        setPaddingTopButtons(buttonFormat?.paddingTopButtons);
        setPaddingBottomButtons(buttonFormat?.paddingBottomButtons);
        // margin
        setMarginRightButtons(buttonFormat?.marginRightButtons);
        setMarginLeftButtons(buttonFormat?.marginLeftButtons);
        setMarginTopButtons(buttonFormat?.marginTopButtons);
        setMarginBottomButtons(buttonFormat?.marginBottomButtons);
      }
    }
  };

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
      await fetch(TEMPLATE_PATH + "/container.json").then((res) => res.json()),
    ]);

    setHeaderDBFormat(header);

    setIsLoadFooter(true);
    setLoading(true);
  };

  // load locally
  const load = async () => {
    const [header, content] = await Promise.all([
      await fetch(FILE_PATH_HEADER).then((res) => res.json()),
      await fetch(FILE_PATH_MODALS).then((res) => res.json()),
    ]);

    console.log("New Fetch ----------------------------->", header);
    console.log("New Fetch ----------------------------->", content);

    setHeaderDBFormat(header);
    if (content) {
      setDbModalsFormat(content);
      loadDBFormat(content);
    }
  };

  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        // =====new
        dialogOpenTitleModal,
        setDialogOpenTitleModal,

        // -------------------------- Data --------------------------
        fontSizeData,
        setFontSizeData,
        fontData,
        setFontData,
        colorData,
        setColorData,
        backgroundColorData,
        setBackgroundColorData,
        //  border
        borderBottomColorData,
        setBorderBottomColorData,
        borderBottomWidthData,
        setBorderBottomWidthData,
        borderTopColorData,
        setBorderTopColorData,
        borderTopWidthData,
        setBorderTopWidthData,
        borderLeftColorData,
        setBorderLeftColorData,
        borderLeftWidthData,
        setBorderLeftWidthData,
        borderRightColorData,
        setBorderRightColorData,
        borderRightWidthData,
        setBorderRightWidthData,
        // border style
        borderRightStyleData,
        setBorderRightStyleData,
        borderLeftStyleData,
        setBorderLeftStyleData,
        borderTopStyleData,
        setBorderTopStyleData,
        borderBottomStyleData,
        setBorderBottomStyleData,
        // border radius
        borderTopRightRadiusData,
        setBorderTopRightRadiusData,
        borderTopLeftRadiusData,
        setBorderTopLeftRadiusData,
        borderBottomRightRadiusData,
        setBorderBottomRightRadiusData,
        borderBottomLeftRadiusData,
        setBorderBottomLeftRadiusData,
        // padding
        paddingTopData,
        setPaddingTopData,
        paddingBottomData,
        setPaddingBottomData,
        paddingLeftData,
        setPaddingLeftData,
        paddingRightData,
        setPaddingRightData,
        // margin
        marginTopData,
        setMarginTopData,
        marginBottomData,
        setMarginBottomData,
        marginLeftData,
        setMarginLeftData,
        marginRightData,
        setMarginRightData,
        // Data hight and width
        dialogOpenData,
        setDialogOpenData,
        // -------------------------- Verify Code --------------------------
        dialogOpenDataModal,
        setDialogOpenDataModal,
        fontSizeDataModal,
        setFontSizeDataModal,
        fontDataModal,
        setFontDataModal,
        colorDataModal,
        setColorDataModal,
        backgroundColorDataModal,
        setBackgroundColorDataModal,
        //  border
        borderBottomColorDataModal,
        setBorderBottomColorDataModal,
        borderBottomWidthDataModal,
        setBorderBottomWidthDataModal,
        borderTopColorDataModal,
        setBorderTopColorDataModal,
        borderTopWidthDataModal,
        setBorderTopWidthDataModal,
        borderLeftColorDataModal,
        setBorderLeftColorDataModal,
        borderLeftWidthDataModal,
        setBorderLeftWidthDataModal,
        borderRightColorDataModal,
        setBorderRightColorDataModal,
        borderRightWidthDataModal,
        setBorderRightWidthDataModal,
        // border style
        borderRightStyleDataModal,
        setBorderRightStyleDataModal,
        borderLeftStyleDataModal,
        setBorderLeftStyleDataModal,
        borderTopStyleDataModal,
        setBorderTopStyleDataModal,
        borderBottomStyleDataModal,
        setBorderBottomStyleDataModal,
        // border radius
        borderTopRightRadiusDataModal,
        setBorderTopRightRadiusDataModal,
        borderTopLeftRadiusDataModal,
        setBorderTopLeftRadiusDataModal,
        borderBottomRightRadiusDataModal,
        setBorderBottomRightRadiusDataModal,
        borderBottomLeftRadiusDataModal,
        setBorderBottomLeftRadiusDataModal,
        // padding
        paddingTopDataModal,
        setPaddingTopDataModal,
        paddingBottomDataModal,
        setPaddingBottomDataModal,
        paddingLeftDataModal,
        setPaddingLeftDataModal,
        paddingRightDataModal,
        setPaddingRightDataModal,
        // margin
        marginTopDataModal,
        setMarginTopDataModal,
        marginBottomDataModal,
        setMarginBottomDataModal,
        marginLeftDataModal,
        setMarginLeftDataModal,
        marginRightDataModal,
        setMarginRightDataModal,
        buttonFormat,
        setButtonFormat,
        // Data hight and width

        // dialogOpenDataModal,
        // setDialogOpenDataModal,

        // -------------------------- TitleModal --------------------------
        fontSizeTitleModal,
        setFontSizeTitleModal,
        fontTitleModal,
        setFontTitleModal,
        colorTitleModal,
        setColorTitleModal,
        backgroundColorTitleModal,
        setBackgroundColorTitleModal,
        //  border
        borderBottomColorTitleModal,
        setBorderBottomColorTitleModal,
        borderBottomWidthTitleModal,
        setBorderBottomWidthTitleModal,
        borderTopColorTitleModal,
        setBorderTopColorTitleModal,
        borderTopWidthTitleModal,
        setBorderTopWidthTitleModal,
        borderLeftColorTitleModal,
        setBorderLeftColorTitleModal,
        borderLeftWidthTitleModal,
        setBorderLeftWidthTitleModal,
        borderRightColorTitleModal,
        setBorderRightColorTitleModal,
        borderRightWidthTitleModal,
        setBorderRightWidthTitleModal,
        // border style
        borderRightStyleTitleModal,
        setBorderRightStyleTitleModal,
        borderLeftStyleTitleModal,
        setBorderLeftStyleTitleModal,
        borderTopStyleTitleModal,
        setBorderTopStyleTitleModal,
        borderBottomStyleTitleModal,
        setBorderBottomStyleTitleModal,
        // border radius
        borderTopRightRadiusTitleModal,
        setBorderTopRightRadiusTitleModal,
        borderTopLeftRadiusTitleModal,
        setBorderTopLeftRadiusTitleModal,
        borderBottomRightRadiusTitleModal,
        setBorderBottomRightRadiusTitleModal,
        borderBottomLeftRadiusTitleModal,
        setBorderBottomLeftRadiusTitleModal,
        // padding
        paddingTopTitleModal,
        setPaddingTopTitleModal,
        paddingBottomTitleModal,
        setPaddingBottomTitleModal,
        paddingLeftTitleModal,
        setPaddingLeftTitleModal,
        paddingRightTitleModal,
        setPaddingRightTitleModal,
        // margin
        marginTopTitleModal,
        setMarginTopTitleModal,
        marginBottomTitleModal,
        setMarginBottomTitleModal,
        marginLeftTitleModal,
        setMarginLeftTitleModal,
        marginRightTitleModal,
        setMarginRightTitleModal,
        // TitleModal hight and width
        // -------------------------- TitleModal Btn --------------------------
        fontSizeDataTitle,
        setFontSizeDataTitle,
        fontDataTitle,
        setFontDataTitle,
        colorDataTitle,
        setColorDataTitle,
        backgroundColorBox2,
        setBackgroundColorBox2,
        //  border -------------------------Box 2 -------------------------
        borderBottomColorBox2,
        setBorderBottomColorBox2,
        borderBottomWidthBox2,
        setBorderBottomWidthBox2,
        borderTopColorBox2,
        setBorderTopColorBox2,
        borderTopWidthBox2,
        setBorderTopWidthBox2,
        borderLeftColorBox2,
        setBorderLeftColorBox2,
        borderLeftWidthBox2,
        setBorderLeftWidthBox2,
        borderRightColorBox2,
        setBorderRightColorBox2,
        borderRightWidthBox2,
        setBorderRightWidthBox2,
        // border style
        borderRightStyleBox2,
        setBorderRightStyleBox2,
        borderLeftStyleBox2,
        setBorderLeftStyleBox2,
        borderTopStyleBox2,
        setBorderTopStyleBox2,
        borderBottomStyleBox2,
        setBorderBottomStyleBox2,
        // border radius
        borderTopRightRadiusBox2,
        setBorderTopRightRadiusBox2,
        borderTopLeftRadiusBox2,
        setBorderTopLeftRadiusBox2,
        borderBottomRightRadiusBox2,
        setBorderBottomRightRadiusBox2,
        borderBottomLeftRadiusBox2,
        setBorderBottomLeftRadiusBox2,
        // padding
        paddingTopBox2,
        setPaddingTopBox2,
        paddingBottomBox2,
        setPaddingBottomBox2,
        paddingLeftBox2,
        setPaddingLeftBox2,
        paddingRightBox2,
        setPaddingRightBox2,
        // margin
        marginTopBox2,
        setMarginTopBox2,
        marginBottomBox2,
        setMarginBottomBox2,
        marginLeftBox2,
        setMarginLeftBox2,
        marginRightBox2,
        setMarginRightBox2,

        // TitleModal hight and width

        //  db json table for modals
        dbModalsFormat,
        setDbModalsFormat,
        dialogOpenButtons,
        setDialogOpenButtons,

        // ------------------------- Buttons
        fontSizeButtons,
        setFontSizeButtons,
        backgroundColorButtons,
        setBackgroundColorButtons,
        colorButtons,
        setColorButtons,
        fontButtons,
        setFontButtons,
        //  border background color
        borderBottomColorButtons,
        setBorderBottomColorButtons,
        borderRightColorButtons,
        setBorderRightColorButtons,
        borderLeftColorButtons,
        setBorderLeftColorButtons,
        borderTopColorButtons,
        setBorderTopColorButtons,
        // border width
        borderRightWidthButtons,
        setBorderRightWidthButtons,
        borderLeftWidthButtons,
        setBorderLeftWidthButtons,
        borderTopWidthButtons,
        setBorderTopWidthButtons,
        borderBottomWidthButtons,
        setBorderBottomWidthButtons,
        // border style
        borderRightStyleButtons,
        setBorderRightStyleButtons,
        borderLeftStyleButtons,
        setBorderLeftStyleButtons,
        borderTopStyleButtons,
        setBorderTopStyleButtons,
        borderBottomStyleButtons,
        setBorderBottomStyleButtons,
        // border radius border-top-right-radius
        borderTopRightRadiusButtons,
        setBorderTopRightRadiusButtons,
        borderTopLeftRadiusButtons,
        setBorderTopLeftRadiusButtons,
        borderBottomRightRadiusButtons,
        setBorderBottomRightRadiusButtons,
        borderBottomLeftRadiusButtons,
        setBorderBottomLeftRadiusButtons,
        // padding
        paddingRightButtons,
        setPaddingRightButtons,
        paddingLeftButtons,
        setPaddingLeftButtons,
        paddingTopButtons,
        setPaddingTopButtons,
        paddingBottomButtons,
        setPaddingBottomButtons,
        // margin
        marginRightButtons,
        setMarginRightButtons,
        marginLeftButtons,
        setMarginLeftButtons,
        marginTopButtons,
        setMarginTopButtons,
        marginBottomButtons,
        setMarginBottomButtons,
        // for buttons dialog
        dialogOpenButtons2,
        setDialogOpenButtons2,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useModalsAppProvider = () => useContext(Context);
