import { useAppProvider } from "@appProvider/AppProvider";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { updatePluginValue } from "../../utils/uiController";
import {
  BUTTONS,
  BUTTONS_PLUGIN_ID,
  CONTENT,
  DATA_PLUGIN,
  HEADER,
  HEADER_PLUGIN_ID,
  LOGO,
  LOGO_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID,
} from "../Constant/const";
import PopperBorderStyle from "../CustomPopover/ToolBoxBorder/PopperBorderStyle";
import UpdateValueSettings from "./UpdateValueSettings";
import { useAppStateProvider } from "@appProvider/AppStateProvider";

const FullControlPaddingBorderMargin = ({ nameSection }: any) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.down("md"));

  const {
    setHeaderDBFormat,
    headerDBFormat,
    dbFormat,
    setDbFormat,
    // ----------------------------------------- header
    setBorderBottomWidthHeader,
    setBorderTopWidthHeader,
    setBorderLeftWidthHeader,
    setBorderRightWidthHeader,

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
    setBorderBottomWidthLogo,
    setBorderTopWidthLogo,
    setBorderLeftWidthLogo,
    setBorderRightWidthLogo,

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
  // set use state size
  const {
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
    // -------------------------- Box 2 --------------------------
    setBorderBottomWidthBox2,
    setBorderTopWidthBox2,
    setBorderLeftWidthBox2,
    setBorderRightWidthBox2,

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
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat,
    // --------------------------------- Content

    setBorderBottomColorData,
    setBorderBottomWidthData,
    setBorderTopColorData,
    setBorderTopWidthData,
    setBorderLeftColorData,
    setBorderLeftWidthData,
    setBorderRightColorData,
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

    // ------------------------------------- buttons
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
  }: any = useModalsAppProvider();
  // set use state margin
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
  }: any = useUpdateSettingsProvider();
  UpdateValueSettings(nameSection);
  const [isActiveStyleBorderPopper, setIsActiveStyleBorderPopper] =
    useState(false);

  const [sideEffect, setSideEffect] = useState("top");

  const { content, setContent }: any = useUndoable();
  // -------------------------------------------------------------------width
  //handle for border bottom width change
  const handleBorderBottomWidthChange = (e: any) => {
    setBorderBottomWidth(e.target.value);
    if (nameSection === LOGO) {
      setBorderBottomWidthLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomWidthLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderBottomWidthHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomWidthHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomWidthTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomWidthBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomWidthVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomWidthDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    }

    // buttons
    else if (nameSection === BUTTONS) {
      console.log("border bottom", e.target.value);
      setBorderBottomWidthButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomWidthButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }

    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderBottomWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderBottomWidthData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };

  //handle for border top width change
  const handleBorderTopWidthChange = (e: any) => {
    setBorderTopWidth(e.target.value);
    if (nameSection === LOGO) {
      setBorderTopWidthLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopWidthLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: LOGO,
      });
    }
    // -----------------
    else if (nameSection === HEADER) {
      setBorderTopWidthHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopWidthHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: HEADER,
      });
    }
    // ----------------
    else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopWidthBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopWidthVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopWidthDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    }
    // buttons
    else if (nameSection === BUTTONS) {
      console.log("border bottom", e.target.value);
      setBorderTopWidthButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopWidthButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderTopWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderTopWidthData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };

  //handle for border left width change
  const handleBorderLeftWidthChange = (e: any) => {
    setBorderLeftWidth(e.target.value);
    if (nameSection === LOGO) {
      setBorderLeftWidthLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftWidthLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderLeftWidthHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftWidthHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftWidthTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftWidthBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftWidthVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    }
    // buttons
    else if (nameSection === BUTTONS) {
      console.log("border bottom", e.target.value);
      setBorderLeftWidthButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftWidthButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderLeftWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderLeftWidthData",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };

  //handle for border right width change
  const handleBorderRightWidthChange = (e: any) => {
    setBorderRightWidth(e.target.value);
    if (nameSection === LOGO) {
      setBorderRightWidthLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightWidthLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderRightWidthHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightWidthHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightWidthTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightWidthBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightWidthVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightWidthDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderRightWidthButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightWidthButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderRightWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderRightWidthData",
          e.target.value
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  // -----------------------------------------------------------------------Radius
  //handle for border top right radius change
  const handleBorderTopRightRadiusChange = (e: any) => {
    setBorderTopRightRadius(e.target.value);
    if (nameSection === LOGO) {
      setBorderTopRightRadiusLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopRightRadiusLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderTopRightRadiusHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopRightRadiusHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopRightRadiusTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopRightRadiusBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopRightRadiusBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopRightRadiusVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopRightRadiusDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopRightRadiusDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderTopRightRadiusButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopRightRadiusButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderTopRightRadiusData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderTopRightRadiusData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopRightRadius",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };

  //handle for border top left radius change
  const handleBorderTopLeftRadiusChange = (e: any) => {
    setBorderTopLeftRadius(e.target.value);
    if (nameSection === LOGO) {
      setBorderTopLeftRadiusLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopLeftRadiusLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderTopLeftRadiusHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopLeftRadiusHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopLeftRadiusTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopLeftRadiusBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopLeftRadiusBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopLeftRadiusVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopLeftRadiusDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopLeftRadiusDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderTopLeftRadiusButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopLeftRadiusButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }

    // content
    else if (nameSection === CONTENT) {
      setBorderTopLeftRadiusData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderTopLeftRadiusData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopLeftRadius",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border bottom right radius change
  const handleBorderBottomRightRadiusChange = (e: any) => {
    setBorderBottomRightRadius(e.target.value);
    if (nameSection === LOGO) {
      setBorderBottomRightRadiusLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomRightRadiusLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderBottomRightRadiusHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomRightRadiusHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomRightRadiusTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomRightRadiusBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomRightRadiusBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomRightRadiusVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomRightRadiusDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomRightRadiusDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderBottomRightRadiusButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomRightRadiusButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderBottomRightRadiusData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderBottomRightRadiusData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomRightRadius",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border bottom left radius change
  const handleBorderBottomLeftRadiusChange = (e: any) => {
    setBorderBottomLeftRadius(e.target.value);
    if (nameSection === LOGO) {
      setBorderBottomLeftRadiusLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomLeftRadiusLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderBottomLeftRadiusHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomLeftRadiusHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomLeftRadiusTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomLeftRadiusBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomLeftRadiusBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomLeftRadiusVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomLeftRadiusDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomLeftRadiusDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderBottomLeftRadiusButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomLeftRadiusButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderBottomLeftRadiusData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderBottomLeftRadiusData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomLeftRadius",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for padding top change
  const handlePaddingTopChange = (e: any) => {
    setPaddingTop(e.target.value);
    if (nameSection === LOGO) {
      setPaddingTopLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingTopLogo",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setPaddingTopHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingTopHeader",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingTopTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingTopBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingTopBox2",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setPaddingTopVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setPaddingTopDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingTopDataModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setPaddingTopButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingTopButtons",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setPaddingTopData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "paddingTopData",
          e.target.value
        )
      );
      setContent({
        name: "paddingTop",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for padding bottom change
  const handlePaddingBottomChange = (e: any) => {
    setPaddingBottom(e.target.value);
    if (nameSection === LOGO) {
      setPaddingBottomLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingBottomLogo",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setPaddingBottomHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingBottomHeader",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingBottomTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "PaddingBottomTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingBottomBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingBottomBox2",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setPaddingBottomVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setPaddingBottomDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingBottomDataModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setPaddingBottomButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingBottomButtons",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setPaddingBottomData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "paddingBottomData",
          e.target.value
        )
      );
      setContent({
        name: "paddingBottom",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for padding left change
  const handlePaddingLeftChange = (e: any) => {
    setPaddingLeft(e.target.value);
    if (nameSection === LOGO) {
      setPaddingLeftLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingLeftLogo",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setPaddingLeftHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingLeftHeader",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingLeftTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingLeftBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingLeftBox2",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setPaddingLeftVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setPaddingLeftDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingLeftDataModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setPaddingLeftButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingLeftButtons",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setPaddingLeftData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "paddingLeftData",
          e.target.value
        )
      );
      setContent({
        name: "paddingLeft",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for padding right change
  const handlePaddingRightChange = (e: any) => {
    setPaddingRight(e.target.value);
    if (nameSection === LOGO) {
      setPaddingRightLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "paddingRightLogo",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setPaddingRightHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "paddingRightHeader",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setPaddingRightTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setPaddingRightBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "paddingRightBox2",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setPaddingRightVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setPaddingRightDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "paddingRightDataModal",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setPaddingRightButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "paddingRightButtons",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setPaddingRightData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "paddingRightData",
          e.target.value
        )
      );
      setContent({
        name: "paddingRight",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for margin top change ------------------------------------------------------------------------------------------- remaining
  const handleMarginTopChange = (e: any) => {
    setMarginTop(e.target.value);
    if (nameSection === LOGO) {
      setMarginTopLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginTopLogo",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setMarginTopHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginTopHeader",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setMarginTopTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginTopBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginTopBox2",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setMarginTopVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setMarginTopDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginTopDataModal",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setMarginTopButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginTopButtons",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setMarginTopData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "marginTopData",
          e.target.value
        )
      );
      setContent({
        name: "marginTop",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for margin bottom change
  const handleMarginBottomChange = (e: any) => {
    setMarginBottom(e.target.value);
    if (nameSection === LOGO) {
      setMarginBottomLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginBottomLogo",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setMarginBottomHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginBottomHeader",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setMarginBottomTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginBottomBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginBottomBox2",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setMarginBottomVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setMarginBottomDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginBottomDataModal",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setMarginBottomButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginBottomButtons",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setMarginBottomData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "marginBottomData",
          e.target.value
        )
      );
      setContent({
        name: "marginBottom",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for margin left change
  const handleMarginLeftChange = (e: any) => {
    setMarginLeft(e.target.value);
    if (nameSection === LOGO) {
      setMarginLeftLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginLeftLogo",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setMarginLeftHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginLeftHeader",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setMarginLeftTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginLeftBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginLeftBox2",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setMarginLeftVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setMarginLeftDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginLeftDataModal",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setMarginLeftButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginLeftButtons",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setMarginLeftData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "marginLeftData",
          e.target.value
        )
      );
      setContent({
        name: "marginLeft",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for margin right change
  const handleMarginRightChange = (e: any) => {
    setMarginRight(e.target.value);
    if (nameSection === LOGO) {
      setMarginRightLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "marginRightLogo",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setMarginRightHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "marginRightHeader",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setMarginRightTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setMarginRightBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "marginRightBox2",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setMarginRightVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setMarginRightDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "marginRightDataModal",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setMarginRightButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "marginRightButtons",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setMarginRightData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "marginRightData",
          e.target.value
        )
      );
      setContent({
        name: "marginRight",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  // buttons

  // popper for border style
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, sideName: any) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    setSideEffect(sideName);
    setIsActiveStyleBorderPopper(!isActiveStyleBorderPopper);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div
      style={{
        padding: isMdUp ? "0px !important" : "1px !important",
        margin: isMdUp ? "0px !important" : "1px !important",
        minWidth: "450px !important",
        width: "400px",
        position: "relative",
      }}
    >
      {isActiveStyleBorderPopper && (
        <PopperBorderStyle
          open={open}
          anchorEl={anchorEl}
          id={id}
          sideName={sideEffect}
          nameSection={nameSection}
        />
      )}
      <div
        role="document"
        className="editor resizable-content flex flex-column"
      >
        <div
          className="form ps ps--active-y"
          style={{
            padding: isMdUp ? "0px !important" : "1px !important",
            margin: isMdUp ? "0px !important" : "1px !important",
          }}
        >
          {/* Size */}

          <div
            className="form-group form-group-collapsible"
            style={{
              minWidth: "350px !important",
              width: "100%",
              position: "relative",
            }}
          >
            <label className="form-label">
              <b className="text">Box</b>
            </label>
            <div>
              {/* For Margin */}
              <div>
                <div className="box-model">
                  <div className="box-model-margin box-model-enabled">
                    <div className="box-model-group">
                      <span className="box-model-label text">margin</span>
                      <input
                        type="text"
                        className="box-model-control box-model-control-top text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginTop}
                        onChange={handleMarginTopChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-left text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginLeft}
                        onChange={handleMarginLeftChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-right text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginRight}
                        onChange={handleMarginRightChange}
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-bottom text"
                        placeholder="-"
                        aria-expanded="false"
                        value={marginBottom}
                        onChange={handleMarginBottomChange}
                      />
                    </div>
                    {/* for Border */}
                    <div className="box-model-border box-model-enabled">
                      <div className="box-model-group">
                        <span className="box-model-label text">border</span>
                        <input
                          type="text"
                          className="box-model-control box-model-control-top text"
                          placeholder="--"
                          aria-expanded="false"
                          onChange={handleBorderTopWidthChange}
                          value={borderTopWidth}
                          aria-describedby={id}
                          onClick={(e) => handleClick(e, "top")}
                          // onClick={handleClick}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-left text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderLeftWidthChange}
                          value={borderLeftWidth}
                          onClick={(e) => handleClick(e, "left")}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-right text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderRightWidthChange}
                          value={borderRightWidth}
                          onClick={(e) => handleClick(e, "right")}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom text"
                          placeholder="-"
                          aria-expanded="false"
                          onChange={handleBorderBottomWidthChange}
                          value={borderBottomWidth}
                          onClick={(e) => handleClick(e, "bottom")}
                        />

                        <input
                          type="text"
                          className="box-model-control box-model-control-top-left text"
                          placeholder="-"
                          onChange={handleBorderTopLeftRadiusChange}
                          value={borderTopLeftRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-top-right text"
                          placeholder="-"
                          onChange={handleBorderTopRightRadiusChange}
                          value={borderTopRightRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-left text"
                          placeholder="-"
                          onChange={handleBorderBottomLeftRadiusChange}
                          value={borderBottomLeftRadius}
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-right text"
                          placeholder="-"
                          onChange={handleBorderBottomRightRadiusChange}
                          value={borderBottomRightRadius}
                        />
                      </div>

                      <div className="box-model-padding box-model-enabled">
                        <div className="box-model-group">
                          <span className="box-model-label text">padding</span>
                          <input
                            type="text"
                            className="box-model-control box-model-control-top text"
                            placeholder="-"
                            onChange={handlePaddingTopChange}
                            value={paddingTop}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-left text"
                            placeholder="-"
                            onChange={handlePaddingLeftChange}
                            value={paddingLeft}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-right text"
                            placeholder="-"
                            onChange={handlePaddingRightChange}
                            value={paddingRight}
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-bottom text"
                            placeholder="-"
                            onChange={handlePaddingBottomChange}
                            value={paddingBottom}
                          />
                        </div>

                        <div className="box-model-content text">content</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
    </div>
  );
};

export default FullControlPaddingBorderMargin;
