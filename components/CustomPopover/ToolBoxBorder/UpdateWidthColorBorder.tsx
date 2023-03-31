import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { useEffect } from "react";
import {
  HEADER,
  LOGO,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
} from "../../Constant/const";

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
    setBorderColor,
  }: any = useUpdateSettingsProvider();

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
    borderBottomStyleLogo,
  }: any = useAppProvider();
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

    // -------------------------- TitleModal --------------------------
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

    // -------------------------- Box 2 --------------------------
    borderBottomColorBox2,
    borderBottomWidthBox2,
    borderTopColorBox2,
    borderTopWidthBox2,
    borderLeftColorBox2,
    borderLeftWidthBox2,
    borderRightColorBox2,
    borderRightWidthBox2,
    // border style
    borderRightStyleBox2,
    borderLeftStyleBox2,
    borderTopStyleBox2,
    borderBottomStyleBox2,
  }: any = useModalsAppProvider();

  const updateBorderBottomColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomColor(borderBottomColorLogo);
        break;

      case HEADER:
        setBorderBottomColor(borderBottomColorHeader);
        break;
      case VERIFY_TITLE:
        setBorderBottomColor(borderBottomColorTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderBottomColor(borderBottomColorBox2);
        break;
      case VERIFY_DATA:
        setBorderBottomColor(borderBottomColorData);
        break;
      case VERIFY_CODE:
        setBorderBottomColor(borderBottomColorDataModal);
        break;
      default:
        break;
    }
  };

  const updateBorderBottomWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomWidth(borderBottomWidthLogo);
        break;

      case HEADER:
        setBorderBottomWidth(borderBottomWidthHeader);
        break;

      case VERIFY_TITLE:
        setBorderBottomWidth(borderBottomWidthTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderBottomWidth(borderBottomWidthBox2);
        break;
      case VERIFY_DATA:
        setBorderBottomWidth(borderBottomWidthData);
        break;
      case VERIFY_CODE:
        setBorderBottomWidth(borderBottomWidthDataModal);
        break;

      default:
        break;
    }
  };
  const updateBorderTopColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopColor(borderTopColorLogo);
        break;

      case HEADER:
        setBorderTopColor(borderTopColorHeader);
        break;

      case VERIFY_TITLE:
        setBorderTopColor(borderTopColorTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderTopColor(borderTopColorBox2);
        break;
      case VERIFY_DATA:
        setBorderTopColor(borderTopColorData);
        break;
      case VERIFY_CODE:
        setBorderTopColor(borderTopColorDataModal);
        break;

      default:
        break;
    }
  };
  const updateBorderTopWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopWidth(borderTopWidthLogo);
        break;

      case HEADER:
        setBorderTopWidth(borderTopWidthHeader);
        break;

      case VERIFY_TITLE:
        setBorderTopWidth(borderTopWidthTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderTopWidth(borderTopWidthBox2);
        break;
      case VERIFY_DATA:
        setBorderTopWidth(borderTopWidthData);
        break;
      case VERIFY_CODE:
        setBorderTopWidth(borderTopWidthDataModal);
        break;

      default:
        break;
    }
  };
  const updateBorderLeftColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftColor(borderLeftColorLogo);
        break;

      case HEADER:
        setBorderLeftColor(borderLeftColorHeader);
        break;

      case VERIFY_TITLE:
        setBorderLeftColor(borderLeftColorTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderLeftColor(borderLeftColorBox2);
        break;
      case VERIFY_DATA:
        setBorderLeftColor(borderLeftColorData);
        break;
      case VERIFY_CODE:
        setBorderLeftColor(borderLeftColorDataModal);
        break;

      default:
        break;
    }
  };
  const updateBorderLeftWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftWidth(borderLeftWidthLogo);
        break;

      case VERIFY_TITLE:
        setBorderLeftWidth(borderLeftWidthTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderLeftWidth(borderLeftWidthBox2);
        break;
      case VERIFY_DATA:
        setBorderLeftWidth(borderLeftWidthData);
        break;
      case VERIFY_CODE:
        setBorderLeftWidth(borderLeftWidthDataModal);
        break;
      default:
        break;
    }
  };
  const updateBorderRightColor = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightColor(borderRightColorLogo);
        break;

      case HEADER:
        setBorderRightColor(borderRightColorHeader);
        break;

      case VERIFY_TITLE:
        setBorderRightColor(borderRightColorTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderRightColor(borderRightColorBox2);
        break;
      case VERIFY_DATA:
        setBorderRightColor(borderRightColorData);
        break;
      case VERIFY_CODE:
        setBorderRightColor(borderRightColorDataModal);
        break;

      default:
        break;
    }
  };
  const updateBorderRightWidth = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightWidth(borderRightWidthLogo);
        break;

      case HEADER:
        setBorderRightWidth(borderRightWidthHeader);
        break;

      // this is for modals
      case VERIFY_TITLE:
        setBorderRightWidth(borderRightWidthTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderRightWidth(borderRightWidthBox2);
        break;
      case VERIFY_DATA:
        setBorderRightWidth(borderRightWidthData);
        break;
      case VERIFY_CODE:
        setBorderRightWidth(borderRightWidthDataModal);
        break;

      default:
        break;
    }
  };

  const getValuesWidth = () => {
    switch (sideName) {
      case "top":
        updateBorderTopWidth();
        setBorderWidth(borderTopWidth);
        break;
      case "bottom":
        updateBorderBottomWidth();
        setBorderWidth(borderBottomWidth);
        break;
      case "right":
        updateBorderRightWidth();
        setBorderWidth(borderRightWidth);
        break;
      case "left":
        updateBorderLeftWidth();
        setBorderWidth(borderLeftWidth);
        break;
    }
  };

  const getValuesColor = () => {
    switch (sideName) {
      case "top":
        updateBorderTopColor();
        setBorderColor(borderTopColor);
        break;
      case "bottom":
        updateBorderBottomColor();
        setBorderColor(borderBottomColor);
        break;
      case "right":
        updateBorderRightColor();
        setBorderColor(borderRightColor);
        break;
      case "left":
        updateBorderLeftColor();
        setBorderColor(borderLeftColor);
        break;
    }
  };

  useEffect(() => {
    getValuesWidth();
    getValuesColor();
  }, [nameSection]);
};

export default UpdateWidthColorBorder;
