import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useEffect } from "react";
import { updatePluginValue } from "../../utils/uiController";
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
  BUTTONS_PLUGIN_ID,
  MODAL_BOX,
  MODAL_BOX_PLUGIN_ID,
} from "../Constant/const";
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
    // --------------------------------Modal Box
    setBackgroundColorModalBox,
    setFontModalBox,
    setFontSizeModalBox,
    setColorModalBox,
    setBorderBottomColorModalBox,
    setBorderBottomWidthModalBox,
    setBorderTopColorModalBox,
    setBorderTopWidthModalBox,
    setBorderLeftColorModalBox,
    setBorderLeftWidthModalBox,
    setBorderRightColorModalBox,
    setBorderRightWidthModalBox,
    // border style
    setBorderRightStyleModalBox,
    setBorderLeftStyleModalBox,
    setBorderTopStyleModalBox,
    setBorderBottomStyleModalBox,
    // border radius
    setBorderTopRightRadiusModalBox,
    setBorderTopLeftRadiusModalBox,
    setBorderBottomRightRadiusModalBox,
    setBorderBottomLeftRadiusModalBox,
    // padding
    setPaddingTopModalBox,
    setPaddingBottomModalBox,
    setPaddingLeftModalBox,
    setPaddingRightModalBox,
    // margin
    setMarginTopModalBox,
    setMarginBottomModalBox,
    setMarginLeftModalBox,
    setMarginRightModalBox,

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
    setMarginRightLogo,
  }: any = useAppProvider();

  const {
    dbModalsFormat,
    setDbModalsFormat,

    setBackgroundColorData,
    setBackgroundColorDataModal,
    setBackgroundColorBalanceCheck,
    setBackgroundColorTitleModal,
    setBackgroundColorBox2,
    // -------------------this is for font
    setFontData,
    setFontDataModal,
    setFontBalanceCheck,
    setFontTitleModal,
    setFontDataTitle,
    // -------------------------- Data --------------------------
    setBorderBottomWidthData,
    setBorderTopWidthData,
    setBorderLeftWidthData,
    setBorderRightWidthData,

    // border radius
    setBorderTopRightRadiusData,
    setBorderTopLeftRadiusData,
    setBorderBottomRightRadiusData,
    setBorderBottomLeftRadiusData,
    // padding
    setPaddingTopData,
    setPaddingBottomData,
    setPaddingLeftData,
    setPaddingRightData,
    // margin
    setMarginTopData,
    setMarginBottomData,
    setMarginLeftData,
    setMarginRightData,
    // -------------------------- Data Btn --------------------------
    setBorderBottomWidthDataModal,
    setBorderTopWidthDataModal,
    setBorderLeftWidthDataModal,
    setBorderRightWidthDataModal,

    // border radius
    setBorderTopRightRadiusDataModal,
    setBorderTopLeftRadiusDataModal,
    setBorderBottomRightRadiusDataModal,
    setBorderBottomLeftRadiusDataModal,
    // padding
    setPaddingTopDataModal,
    setPaddingBottomDataModal,
    setPaddingLeftDataModal,
    setPaddingRightDataModal,
    // margin
    setMarginTopDataModal,
    setMarginBottomDataModal,
    setMarginLeftDataModal,
    setMarginRightDataModal,

    // -------------------------- TitleModal --------------------------
    setBorderBottomWidthTitleModal,
    setBorderTopWidthTitleModal,
    setBorderLeftWidthTitleModal,
    setBorderRightWidthTitleModal,
    // border radius
    setBorderTopRightRadiusTitleModal,
    setBorderTopLeftRadiusTitleModal,
    setBorderBottomRightRadiusTitleModal,
    setBorderBottomLeftRadiusTitleModal,
    // padding
    setPaddingTopTitleModal,
    setPaddingBottomTitleModal,
    setPaddingLeftTitleModal,
    setPaddingRightTitleModal,
    // margin
    setMarginTopTitleModal,
    setMarginBottomTitleModal,
    setMarginLeftTitleModal,
    setMarginRightTitleModal,
    // -------------------------- Box 2--------------------------
    setBorderBottomColorBox2,
    setBorderBottomWidthBox2,
    setBorderTopColorBox2,
    setBorderTopWidthBox2,
    setBorderLeftColorBox2,
    setBorderLeftWidthBox2,
    setBorderRightColorBox2,
    setBorderRightWidthBox2,
    // border style
    setBorderRightStyleBox2,
    setBorderLeftStyleBox2,
    setBorderTopStyleBox2,
    setBorderBottomStyleBox2,
    // border radius
    setBorderTopRightRadiusBox2,
    setBorderTopLeftRadiusBox2,
    setBorderBottomRightRadiusBox2,
    setBorderBottomLeftRadiusBox2,
    // padding
    setPaddingTopBox2,
    setPaddingBottomBox2,
    setPaddingLeftBox2,
    setPaddingRightBox2,
    // margin
    setMarginTopBox2,
    setMarginBottomBox2,
    setMarginLeftBox2,
    setMarginRightBox2,

    // -------------------------- Data Btn --------------------------
    setBorderBottomColorDataModal,
    setBorderTopColorDataModal,
    setBorderLeftColorDataModal,
    setBorderRightColorDataModal,

    setBorderBottomColorData,
    setBorderTopColorData,
    setBorderLeftColorData,
    setBorderRightColorData,

    // -------------------------- TitleModal --------------------------
    setBorderBottomColorTitleModal,
    setBorderTopColorTitleModal,
    setBorderLeftColorTitleModal,
    setBorderRightColorTitleModal,

    // -------------------------- Data --------------------------
    // border style
    setBorderRightStyleData,
    setBorderLeftStyleData,
    setBorderTopStyleData,
    setBorderBottomStyleData,

    // -------------------------- Data Btn --------------------------
    // border style
    setBorderRightStyleDataModal,
    setBorderLeftStyleDataModal,
    setBorderTopStyleDataModal,
    setBorderBottomStyleDataModal,
    // border radius

    // -------------------------- TitleModal --------------------------
    // border style
    setBorderRightStyleTitleModal,
    setBorderLeftStyleTitleModal,
    setBorderTopStyleTitleModal,
    setBorderBottomStyleTitleModal,

    // ---------------------------------- Button ----------------------
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
    setBorderBottomStyleButtons,
  }: any = useModalsAppProvider();
  // setTabColor(getPluginValueProperty(dbFormat, TAP_PLUGIN_ID, "tabColor"))
  // console.log("value is::", value)
  const handleUndoRedo = () => {
    switch (name) {
      case "backgroundColor":
        handleBackgroundColor();
        break;
      case "font":
        handleChangeFont();
        break;
      case "fontSize":
        handleChangeFontSize();
        break;
      case "color":
        handleChangeColor();
        break;
      case "borderBottomWidth":
        handleBorderBottomWidth();
        break;
      case "borderTopWidth":
        handleBorderTopWidth();
        break;
      case "borderLeftWidth":
        handleBorderLeftWidth();
        break;
      case "borderRightWidth":
        handleBorderRightWidth();
        break;
      case "borderTopRightRadius":
        handleBorderTopRightRadius();
        break;
      case "borderTopLeftRadius":
        handleBorderTopLeftRadius();
        break;
      case "borderBottomRightRadius":
        handleBorderBottomRightRadius();
        break;
      case "borderBottomLeftRadius":
        handleBorderBottomLeftRadius();
        break;
      case "paddingTop":
        handlePaddingTop();
        break;
      case "paddingBottom":
        handlePaddingBottom();
        break;
      case "paddingLeft":
        handlePaddingLeft();
        break;
      case "paddingRight":
        handlePaddingRight();
        break;
      case "marginTop":
        handleMarginTop();
        break;
      case "marginBottom":
        handleMarginBottom();
        break;
      case "marginLeft":
        handleMarginLeft();
        break;
      case "marginRight":
        handleMarginRight();
        break;
      case "borderBottomColor":
        handleBorderBottomColor();
        break;
      case "borderTopColor":
        handleBorderTopColor();
        break;
      case "borderLeftColor":
        handleBorderLeftColor();
        break;
      case "borderRightColor":
        handleBorderRightColor();
        break;
      case "borderRightStyle":
        handleBorderRightStyle();
        break;
      case "borderLeftStyle":
        handleBorderLeftStyle();
        break;
      case "borderTopStyle":
        handleBorderTopStyle();
        break;
      case "borderBottomStyle":
        handleBorderBottomStyle();
        break;
    }
  };

  useEffect(() => {
    console.log("call undo or redo!", callUndo);
    if (callUndo) {
      handleUndoRedo();
      setCallUndo(false);
    }
  }, [callUndo]);
  //handle color for background color for undo and redo
  const handleBackgroundColor = () => {
    if (nameSection === HEADER) {
      setBackgroundColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "backgroundColorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBackgroundColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "backgroundColorModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBackgroundColorTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBackgroundColorBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "backgroundColorBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBackgroundColorData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "backgroundColorData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBackgroundColorDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "backgroundColorDataModal",
          value
        )
      );
    } else if (nameSection === BODY_CUSTOMIZE) {
      setBodyBackgroundColor(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          BODY_PLUGIN_ID,
          "bodyBackgroundColor",
          value
        )
      );
    } else if (nameSection === CONTAINER_CUSTOMIZE) {
      setContainerBackgroundColor(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          BODY_PLUGIN_ID,
          "containerBackgroundColor",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBackgroundColorButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "backgroundColorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "backgroundColorButtons",
          value
        )
      );
    }
  };
  //handle color for font for undo and redo
  const handleChangeFont = () => {
    if (nameSection === HEADER) {
      setFontHeader(value);
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "fontHeader", value)
      );
    } else if (nameSection === MODAL_BOX) {
      setFontModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "fontModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setFontTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFontDataTitle(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontDataTitle",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setFontData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setFontDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setFontButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "fontButtons",
          value
        )
      );
    }
  };
  //handle color for font size for undo and redo
  const handleChangeFontSize = () => {
    if (nameSection === HEADER) {
      setFontSizeHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "fontSizeHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setFontSizeModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "fontSizeModalBox",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setFontSizeButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "fontSizeButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "fontSizeButtons",
          value
        )
      );
    }
  };
  //handle color for undo and redo
  const handleChangeColor = () => {
    if (nameSection === HEADER) {
      setColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "colorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "colorModalBox",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setColorButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "colorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "colorButtons",
          value
        )
      );
    }
  };

  //handle for border bottom for undo and redo
  const handleBorderBottomWidth = () => {
    if (nameSection === LOGO) {
      setBorderBottomWidthLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomWidthLogo",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderBottomWidthModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderBottomWidthModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomWidthTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomWidthBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomWidthData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomWidthDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderBottomWidthButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomWidthButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomWidthButtons",
          value
        )
      );
    }
  };

  //handle for border top width change
  const handleBorderTopWidth = () => {
    if (nameSection === LOGO) {
      setBorderTopWidthLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopWidthLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderTopWidthHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopWidthHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderTopWidthModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderTopWidthModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopWidthTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopWidthBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopWidthData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopWidthDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderTopWidthButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopWidthButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopWidthButtons",
          value
        )
      );
    }
  };

  //handle for border left width change
  const handleBorderLeftWidth = () => {
    if (nameSection === LOGO) {
      setBorderLeftWidthLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftWidthLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderLeftWidthHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftWidthHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderLeftWidthModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderLeftWidthModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftWidthTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftWidthBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftWidthData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftWidthDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderLeftWidthButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftWidthButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftWidthButtons",
          value
        )
      );
    }
  };

  //handle for border right width change
  const handleBorderRightWidth = () => {
    if (nameSection === LOGO) {
      setBorderRightWidthLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightWidthLogo",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderRightWidthModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderRightWidthModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightWidthTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightWidthBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightWidthData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightWidthDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderRightWidthButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightWidthButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightWidthButtons",
          value
        )
      );
    }
  };

  //handle for border top right radius change
  const handleBorderTopRightRadius = () => {
    if (nameSection === LOGO) {
      setBorderTopRightRadiusLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopRightRadiusLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderTopRightRadiusHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopRightRadiusHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderTopRightRadiusModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderTopRightRadiusModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopRightRadiusTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopRightRadiusBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopRightRadiusData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopRightRadiusDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderTopRightRadiusButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopRightRadiusButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopRightRadiusButtons",
          value
        )
      );
    }
  };
  //handle for border top left radius change
  const handleBorderTopLeftRadius = () => {
    if (nameSection === LOGO) {
      setBorderTopLeftRadiusLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopLeftRadiusLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderTopLeftRadiusHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopLeftRadiusHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderTopLeftRadiusModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderTopLeftRadiusModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopLeftRadiusTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopLeftRadiusBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopLeftRadiusData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopLeftRadiusDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderTopLeftRadiusButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopLeftRadiusButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopLeftRadiusButtons",
          value
        )
      );
    }
  };
  //handle for border bottom right radius change
  const handleBorderBottomRightRadius = () => {
    if (nameSection === LOGO) {
      setBorderBottomRightRadiusLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomRightRadiusLogo",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderBottomRightRadiusModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderBottomRightRadiusModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomRightRadiusTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomRightRadiusBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomRightRadiusData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomRightRadiusDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderBottomRightRadiusButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomRightRadiusButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomRightRadiusButtons",
          value
        )
      );
    }
  };
  //handle for border bottom left radius change
  const handleBorderBottomLeftRadius = () => {
    if (nameSection === LOGO) {
      setBorderBottomLeftRadiusLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomLeftRadiusLogo",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderBottomLeftRadiusModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderBottomLeftRadiusModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomLeftRadiusTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomLeftRadiusBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomLeftRadiusData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomLeftRadiusDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderBottomLeftRadiusButtons(value);
      setDbFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomLeftRadiusButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomLeftRadiusButtons",
          value
        )
      );
    }
  };
  //handle for padding top change
  const handlePaddingTop = () => {
    if (nameSection === LOGO) {
      setPaddingTopLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingTopLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setPaddingTopHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingTopHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setPaddingTopModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "paddingTopModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingTopTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingTopBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setPaddingTopData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setPaddingTopDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setPaddingTopButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingTopButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingTopButtons",
          value
        )
      );
    }
  };
  //handle for padding bottom change
  const handlePaddingBottom = () => {
    if (nameSection === LOGO) {
      setPaddingBottomLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingBottomLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setPaddingBottomHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingBottomHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setPaddingBottomModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "paddingBottomModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingBottomTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "PaddingBottomTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingBottomBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingBottomBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setPaddingBottomData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setPaddingBottomDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setPaddingBottomButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingBottomButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingBottomButtons",
          value
        )
      );
    }
  };
  //handle for padding left change
  const handlePaddingLeft = () => {
    if (nameSection === LOGO) {
      setPaddingLeftLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingLeftLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setPaddingLeftHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingLeftHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setPaddingLeftModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "paddingLeftModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingLeftTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingLeftBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setPaddingLeftData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setPaddingLeftDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setPaddingLeftButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingLeftButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingLeftButtons",
          value
        )
      );
    }
  };
  //handle for padding right change
  const handlePaddingRight = () => {
    if (nameSection === LOGO) {
      setPaddingRightLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingRightLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setPaddingRightHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingRightHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setPaddingRightModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "paddingRightModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingRightTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingRightBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setPaddingRightData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setPaddingRightDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setPaddingRightButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingRightButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingRightButtons",
          value
        )
      );
    }
  };
  //handle for margin top change
  const handleMarginTop = () => {
    if (nameSection === LOGO) {
      setMarginTopLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginTopLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setMarginTopHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginTopHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setMarginTopModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "marginTopModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setMarginTopTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginTopBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setMarginTopData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setMarginTopDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setMarginTopButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginTopButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginTopButtons",
          value
        )
      );
    }
  };
  //handle for margin bottom change
  const handleMarginBottom = () => {
    if (nameSection === LOGO) {
      setMarginBottomLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginLeftLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setMarginBottomHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginBottomHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setMarginBottomModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "marginBottomModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setMarginBottomTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginBottomBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setMarginBottomData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setMarginBottomDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setMarginBottomButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginBottomButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginBottomButtons",
          value
        )
      );
    }
  };
  //handle for margin left change
  const handleMarginLeft = () => {
    if (nameSection === LOGO) {
      setMarginLeftLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginLeftLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setMarginLeftHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginLeftHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setMarginLeftModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "marginLeftModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setMarginLeftTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginLeftBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setMarginLeftData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setMarginLeftDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setMarginLeftButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginLeftButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginLeftButtons",
          value
        )
      );
    }
  };
  //handle for margin right change
  const handleMarginRight = () => {
    if (nameSection === LOGO) {
      setMarginRightLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginRightLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setMarginRightHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginRightHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setMarginRightModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "marginRightModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setMarginRightTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginRightBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setMarginRightData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setMarginRightDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setMarginRightButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginRightButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginRightButtons",
          value
        )
      );
    }
  };

  //handle for border bottom color change
  const handleBorderBottomColor = () => {
    if (nameSection === LOGO) {
      setBorderBottomColorLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomColorLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderBottomColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomColorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderBottomColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderBottomColorModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomColorTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomColorBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomColorData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomColorDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderBottomColorButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomColorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomColorButtons",
          value
        )
      );
    }
  };
  //handle for border top color change
  const handleBorderTopColor = () => {
    if (nameSection === LOGO) {
      setBorderTopColorLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopColorLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderTopColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopColorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderTopColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderTopColorModalBox",
          value
        )
      );
    }
    // this is for modals
    else if (nameSection === VERIFY_TITLE) {
      setBorderTopColorTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopColorBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopColorData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopColorData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopColorDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopColorDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderTopColorButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopColorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopColorButtons",
          value
        )
      );
    }
  };
  //handle for border left color change
  const handleBorderLeftColor = () => {
    if (nameSection === LOGO) {
      setBorderLeftColorLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftColorLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderLeftColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftColorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderLeftColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderLeftColorModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftColorTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftColorBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftColorData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftColorData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftColorDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftColorDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderLeftColorButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftColorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftColorButtons",
          value
        )
      );
    }
  };
  //handle for border right color change
  const handleBorderRightColor = () => {
    if (nameSection === LOGO) {
      setBorderRightColorLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightColorLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderRightColorHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightColorHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderRightColorModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderRightColorModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightColorTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightColorBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightColorData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightColorDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderRightColorButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightColorButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightColorButtons",
          value
        )
      );
    }
  };
  //handle for border right style change
  const handleBorderRightStyle = () => {
    if (nameSection === LOGO) {
      setBorderRightStyleLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightStyleLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderRightStyleHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightStyleHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderRightStyleModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderRightStyleModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightStyleTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightStyleBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightStyleData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightStyleDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderRightStyleButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightStyleButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightStyleButtons",
          value
        )
      );
    }
  };

  //handle for border left style change
  const handleBorderLeftStyle = () => {
    if (nameSection === LOGO) {
      setBorderLeftStyleLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftStyleLogo",
          value
        )
      );
    } else if (nameSection === HEADER) {
      setBorderLeftStyleHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftStyleHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderLeftStyleModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderLeftStyleModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftStyleTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftStyleBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftStyleData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftStyleDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderLeftStyleButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftStyleButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftStyleButtons",
          value
        )
      );
    }
  };
  //handle for border top style change
  const handleBorderTopStyle = () => {
    if (nameSection === LOGO) {
      setBorderTopStyleLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopStyleLogo",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderTopStyleModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderTopStyleModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopStyleTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopStyleBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopStyleData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopStyleDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderTopStyleButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopStyleButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopStyleButtons",
          value
        )
      );
    }
  };
  //handle for border bottom style change -----------------------------------------------------------------------
  const handleBorderBottomStyle = () => {
    if (nameSection === LOGO) {
      setBorderBottomStyleLogo(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomStyleLogo",
          value
        )
      );
    }
    if (nameSection === HEADER) {
      setBorderBottomStyleHeader(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomStyleHeader",
          value
        )
      );
    } else if (nameSection === MODAL_BOX) {
      setBorderBottomStyleModalBox(value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "borderBottomStyleModalBox",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomStyleTitleModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleTitleModal",
          value
        )
      );
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomStyleBox2(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleBox2",
          value
        )
      );
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomStyleData(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleData",
          value
        )
      );
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomStyleDataModal(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleDataModal",
          value
        )
      );
    } else if (nameSection === BUTTONS) {
      setBorderBottomStyleButtons(value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomStyleButtons",
          value
        )
      );
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomStyleButtons",
          value
        )
      );
    }
  };
};

export default UndoCustomization;

// optimize code the above code
