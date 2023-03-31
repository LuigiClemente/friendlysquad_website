import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import { CompactPicker } from "react-color";
import { updatePluginValue } from "../../../utils/uiController";
import BorderType from "../../BorderType";
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
} from "../../Constant/const";
import UpdateWidthColorBorder from "./UpdateWidthColorBorder";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 230,
      border: "none !important",
      marginTop: "10px",
      // change style for MuiBox-root
      "& .MuiBox-root": {
        border: "none !important",
        borderWidth: "0px",
        borderRadius: "5px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        backgroundColor: "white",
        Padding: "10px",
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
  })
);
interface PopperBorderStyleProps {
  anchorEl?: any;
  open?: boolean;
  id?: any;
  valueWidth?: any;
  valueStyle?: any;
  valueColor?: any;
  nameSection?: any;
  sideName?: any;
}
const PopperBorderStyle = ({
  anchorEl,
  open,
  id,
  nameSection,
  sideName,
}: PopperBorderStyleProps) => {
  const classes = useStyles();

  const { setBorderColor, setBorderWidth, borderWidth, borderColor }: any =
    useUpdateSettingsProvider();

  console.log("border style dialogs", nameSection, sideName);

  const {
    setHeaderDBFormat,
    headerDBFormat,
    // ----------------------------------------- header
    setBorderBottomColorHeader,
    setBorderBottomWidthHeader,
    setBorderTopColorHeader,
    setBorderTopWidthHeader,
    setBorderLeftColorHeader,
    setBorderLeftWidthHeader,
    setBorderRightColorHeader,
    setBorderRightWidthHeader,

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
  }: any = useAppProvider();
  // set use state size
  const {
    // -------------------------- Data --------------------------
    setBorderBottomColorData,
    setBorderBottomWidthData,
    setBorderTopColorData,
    setBorderTopWidthData,
    setBorderLeftColorData,
    setBorderLeftWidthData,
    setBorderRightColorData,
    setBorderRightWidthData,

    // --------------------------Modal Data --------------------------

    setBorderBottomWidthDataModal,
    setBorderTopWidthDataModal,
    setBorderLeftWidthDataModal,
    borderLeftWidthDataModal,
    setBorderRightWidthDataModal,

    // -------------------------- Data Btn --------------------------
    setBorderBottomColorDataModal,
    setBorderTopColorDataModal,
    setBorderLeftColorDataModal,
    setBorderRightColorDataModal,

    // -------------------------- TitleModal --------------------------
    setBorderBottomColorTitleModal,
    setBorderTopColorTitleModal,
    setBorderLeftColorTitleModal,
    setBorderRightColorTitleModal,

    // -------------------------- Box 2 --------------------------
    setBorderBottomColorBox2,
    setBorderTopColorBox2,
    setBorderLeftColorBox2,
    setBorderRightColorBox2,

    //  width border
    setBorderBottomWidthTitleModal,
    setBorderTopWidthTitleModal,
    setBorderLeftWidthTitleModal,
    setBorderRightWidthTitleModal,
    // btn
    setBorderBottomWidthBox2,
    setBorderTopWidthBox2,
    setBorderLeftWidthBox2,
    setBorderRightWidthBox2,
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat,
    // -----------------------------------  buttons
    setBorderBottomColorButtons,
    setBorderRightColorButtons,
    setBorderLeftColorButtons,
    setBorderTopColorButtons,
    // --------------- border width
    // border width
    setBorderRightWidthButtons,
    setBorderLeftWidthButtons,
    setBorderTopWidthButtons,
    setBorderBottomWidthButtons,
  }: any = useModalsAppProvider();
  // set use state margin

  // const {
  //   // -----------------------------------  buttons
  //   setBorderBottomColorButtons,
  //   setBorderRightColorButtons,
  //   setBorderLeftColorButtons,
  //   setBorderTopColorButtons,
  //   // --------------- border width
  //   // border width
  //   setBorderRightWidthButtons,
  //   setBorderLeftWidthButtons,
  //   setBorderTopWidthButtons,
  //   setBorderBottomWidthButtons
  // }:any=useAppStateProvider()
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
  UpdateWidthColorBorder(nameSection, sideName);
  const { setContent }: any = useUndoable();
  //handle for border bottom color change
  const handleBorderBottomColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderBottomColorLogo(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomColorLogo",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderBottomColorHeader(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomColorHeader",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomColorTitleModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorTitleModal",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomColorBox2(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorBox2setBorderBottomColorBox2",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorData",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomColorDataModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorDataModal",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderBottomColorButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomColorButtons",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderBottomColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderBottomColorData",
          e.hex
        )
      );
      setContent({
        name: "borderBottomColor",
        value: e.hex,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border top color change
  const handleBorderTopColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderTopColorLogo(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopColorLogo",
          e.hex
        )
      );
      setContent({ name: "borderTopColor", value: e.hex, nameSection: LOGO });
    } else if (nameSection === HEADER) {
      setBorderTopColorHeader(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopColorHeader",
          e.hex
        )
      );
      setContent({
        name: "borderTopColorLogo",
        value: e.hex,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopColorTitleModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorTitleModal",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopColorBox2(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorBox2",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopColorData",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopColorDataModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopColorDataModal",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderTopColorButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopColorButtons",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderTopColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderTopColorData",
          e.hex
        )
      );
      setContent({
        name: "borderTopColor",
        value: e.hex,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border left color change
  const handleBorderLeftColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderLeftColorLogo(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftColorLogo",
          e.hex
        )
      );
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: LOGO });
    } else if (nameSection === HEADER) {
      setBorderLeftColorHeader(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftColorHeader",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftColorTitleModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorTitleModal",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftColorBox2(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorBox2",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftColorData",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftColorDataModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftColorDataModal",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderLeftColorButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftColorButtons",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderLeftColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderLeftColorData",
          e.hex
        )
      );
      setContent({
        name: "borderLeftColor",
        value: e.hex,
        nameSection: CONTENT,
      });
    }
  };

  //handle for border right color change
  const handleBorderRightColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderRightColorLogo(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightColorLogo",
          e.hex
        )
      );
      setContent({ name: "borderRightColor", value: e.hex, nameSection: LOGO });
    } else if (nameSection === HEADER) {
      setBorderRightColorHeader(e.hex);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightColorHeader",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightColorTitleModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorTitleModal",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightColorBox2(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorBox2",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorData",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightColorDataModal(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorDataModal",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderRightColorButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightColorButtons",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      setBorderRightColorData(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderRightColorData",
          e.hex
        )
      );
      setContent({
        name: "borderRightColor",
        value: e.hex,
        nameSection: CONTENT,
      });
    }
  };
  // ---------------------------------------------width---------------------------------------------
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
      setBorderBottomWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthData",
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
    } else if (nameSection === BUTTONS) {
      setBorderBottomWidthButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomWidthButtons",
          e.hex
        )
      );
      setContent({
        name: "borderBottomWidth",
        value: e.hex,
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
    } else if (nameSection === HEADER) {
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
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopWidthTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
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
      setBorderTopWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthData",
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
    } else if (nameSection === BUTTONS) {
      setBorderTopWidthButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopWidthButtons",
          e.hex
        )
      );
      setContent({
        name: "borderTopWidth",
        value: e.hex,
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
      setBorderLeftWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthData",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftWidthDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
      console.log(borderLeftWidthDataModal);
    } else if (nameSection === BUTTONS) {
      setBorderLeftWidthButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftWidthButtons",
          e.hex
        )
      );
      setContent({
        name: "borderLeftWidth",
        value: e.hex,
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
      setBorderRightWidthData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthData",
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
      setBorderRightWidthButtons(e.hex);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightWidthButtons",
          e.hex
        )
      );
      setContent({
        name: "borderRightWidth",
        value: e.hex,
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
  //-----------------------------------------End Width --------------------------------------------
  const handleBorderColor = (e: any) => {
    console.log(" color :", e.hex);
    setBorderColor(e.hex);
    switch (sideName) {
      case "top":
        handleBorderTopColorChange(e);
        break;
      case "bottom":
        handleBorderBottomColorChange(e);
        break;
      case "right":
        handleBorderRightColorChange(e);
        break;
      case "left":
        handleBorderLeftColorChange(e);
        break;
    }
  };

  const handleBorderWidth = (e: any) => {
    setBorderWidth(e.target.value);
    switch (sideName) {
      case "top":
        handleBorderTopWidthChange(e);
        break;
      case "bottom":
        handleBorderBottomWidthChange(e);
        break;
      case "right":
        handleBorderRightWidthChange(e);
        break;
      case "left":
        handleBorderLeftWidthChange(e);
        break;
    }
  };

  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      transition
      disablePortal={true}
      style={{
        zIndex: "2000",
        border: "none !important",
        borderWidth: "0px",
        borderRadius: "5px",
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        width: "fit-content",
        minWidth: "fit-content",
      }}
      className={classes.root}
      placement="top"
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350} id="borderStyle">
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            <div className="input-group">
              <input
                type="number"
                min="0"
                className="form-control"
                placeholder="(Inherit)"
                id="minWidth"
                value={borderWidth}
                onChange={handleBorderWidth}
              />
              <div className="input-group-addon" data-bind="text: displayUnits">
                px
              </div>
            </div>
            <BorderType nameSection={nameSection} sideName={sideName} />
            <Divider />

            <CompactPicker onChange={handleBorderColor} color={borderColor} />
          </Box>
        </Fade>
      )}
    </Popper>
  );
};
export default PopperBorderStyle;
