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
} from "../Constant/const";

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
    setBorderStyle,
  }: any = useUpdateSettingsProvider();

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
    borderBottomStyleLogo,
  }: any = useAppProvider();
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
    borderRightStyleDataModal,
    borderLeftStyleDataModal,
    borderTopStyleDataModal,
    borderBottomStyleDataModal,
    // border radius

    // -------------------------- TitleModal --------------------------

    // border style
    borderRightStyleTitleModal,
    borderLeftStyleTitleModal,
    borderTopStyleTitleModal,
    borderBottomStyleTitleModal,
    // border radius

    // -------------------------- TitleModal Btn --------------------------

    // border style
    borderRightStyleBox2,
    borderLeftStyleBox2,
    borderTopStyleBox2,
    borderBottomStyleBox2,
  }: any = useModalsAppProvider();

  const updateBorderRightStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderRightStyle(borderRightStyleLogo);
        break;
      case HEADER:
        setBorderRightStyle(borderRightStyleHeader);
        break;
      // this is for modals
      case VERIFY_TITLE:
        setBorderRightStyle(borderRightStyleTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderRightStyle(borderRightStyleBox2);
        break;
      case VERIFY_DATA:
        setBorderRightStyle(borderRightStyleVerifyData);
        break;
      case VERIFY_CODE:
        setBorderRightStyle(borderRightStyleDataModal);
        break;
      default:
        break;
    }
  };
  const updateBorderLeftStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderLeftStyle(borderLeftStyleLogo);
      case HEADER:
        setBorderLeftStyle(borderLeftStyleHeader);
        break;
      // this is for modals
      case VERIFY_TITLE:
        setBorderLeftStyle(borderLeftStyleTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderLeftStyle(borderLeftStyleBox2);
        break;
      case VERIFY_DATA:
        setBorderLeftStyle(borderLeftStyleVerifyData);
        break;
      case VERIFY_CODE:
        setBorderLeftStyle(borderLeftStyleDataModal);
        break;
      default:
        break;
    }
  };
  const updateBorderTopStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderTopStyle(borderTopStyleLogo);
        break;
      case HEADER:
        setBorderTopStyle(borderTopStyleHeader);
        break;
      // this is for modals
      case VERIFY_TITLE:
        setBorderTopStyle(borderTopStyleTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderTopStyle(borderTopStyleBox2);
        break;
      case VERIFY_DATA:
        setBorderTopStyle(borderTopStyleVerifyData);
        break;
      case VERIFY_CODE:
        setBorderTopStyle(borderTopStyleDataModal);
        break;
      default:
        break;
    }
  };
  const updateBorderBottomStyle = () => {
    switch (nameSection) {
      case LOGO:
        setBorderBottomStyle(borderBottomStyleLogo);
      case HEADER:
        setBorderBottomStyle(borderBottomStyleHeader);
        break;
      // this is for modals
      case VERIFY_TITLE:
        setBorderBottomStyle(borderBottomStyleTitleModal);
        break;
      case VERIFY_TITLE_BTN:
        setBorderBottomStyle(borderBottomStyleBox2);
        break;
      case VERIFY_DATA:
        setBorderBottomStyle(borderBottomStyleVerifyData);
        break;
      case VERIFY_CODE:
        setBorderBottomStyle(borderBottomStyleDataModal);
        break;
      default:
        break;
    }
  };
  const getValueStyle = () => {
    switch (sideName) {
      case "top":
        updateBorderTopStyle();
        setBorderStyle(borderTopStyle);
        break;
      case "bottom":
        updateBorderBottomStyle();
        setBorderStyle(borderBottomStyle);
        break;
      case "right":
        updateBorderRightStyle();
        setBorderStyle(borderRightStyle);
        break;
      case "left":
        updateBorderLeftStyle();
        setBorderStyle(borderLeftStyle);
        break;
    }
  };
  useEffect(() => {
    getValueStyle();
  }, [nameSection]);
};

export default UpdateStyleBorder;
