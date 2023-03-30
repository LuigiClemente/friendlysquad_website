import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { updatePluginValue } from "../../utils/uiController";
import ColorPopover from "../ColorPopover/ColorPopover";
import {
  BUTTONS,
  BUTTONS_PLUGIN_ID,
  CONTENT,
  DATA_PLUGIN,
  HEADER,
  HEADER_PLUGIN_ID,
  LOGO,
  LOGO_PLUGIN_ID,
  MODAL_BOX,
  MODAL_BOX_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID,
} from "../Constant/const";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px",
    },
    sizeBtn: {
      maxWidth: "fit-content",
      width: "fit-content",
      border: "0.5px solid #e5e2e2 !important",
      padding: "5px",
      color: theme.palette.text.primary,
      marginRight: "10px",
      paddingLeft: "14px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
  })
);

const ColorChanger = ({ nameSection }: any) => {
  const classes = useStyles();

  const {
    headerDBFormat,
    setHeaderDBFormat,
    colorHeader,
    setColorHeader,
    setColorModalBox,
    colorModalBox,
    setColorLogo,
    colorLogo,
    dbFormat,
    giftDBFormat,
    setGiftDBFormat,
  }: any = useAppProvider();

  const {
    dbModalsFormat,
    setDbModalsFormat,
    setColorVerifyData,
    setColorDataModal,
    setColorTitleModal,
    setColorDataTitle,
    setColorData,
    // update settings value
    colorVerifyData,
    colorDataModal,
    colorTitleModal,
    colorDataTitle,
    colorData,
    colorButtons,
    setColorButtons,
  }: any = useModalsAppProvider();
  // const {colorButtons, setColorButtons}:any=useAppStateProvider()
  const [anchorElColor, setAnchorElColor] = React.useState<null | HTMLElement>(
    null
  );
  const handleDisplayColorPicker = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElColor(event.currentTarget);
  };
  // call useUndo function from uiController
  const { content, setContent }: any = useUndoable();
  const [colorPicker, setColorPicker] = React.useState("#cad4ef");
  const handleCloseReasonsList = () => {
    setAnchorElColor(null);
  };
  const handleGetColor = (color: any) => {
    setColorPicker(color);
    if (nameSection === HEADER) {
      setColorHeader(color);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "colorHeader",
          color
        )
      );
      setContent({ name: "color", value: color, nameSection: HEADER });
    } else if (nameSection === LOGO) {
      setColorLogo(color);
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "colorLogo", color)
      );
    } else if (nameSection === MODAL_BOX) {
      setColorModalBox(color);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "colorModalBox",
          color
        )
      );
      setContent({ name: "color", value: color, nameSection: MODAL_BOX });
    } // this is for modals
    else if (nameSection === VERIFY_TITLE) {
      setColorTitleModal(color);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "colorTitleModal",
          color
        )
      );
      setContent({ name: "color", value: color, nameSection: VERIFY_TITLE });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setColorDataTitle(color);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "colorDataTitle",
          color
        )
      );
      setContent({
        name: "color",
        value: color,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setColorVerifyData(color);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "colorVerifyData",
          color
        )
      );
      setContent({ name: "color", value: color, nameSection: VERIFY_DATA });
    } else if (nameSection === VERIFY_CODE) {
      setColorDataModal(color);
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_CODE, "colorDataModal", color)
      );
      setContent({ name: "color", value: color, nameSection: VERIFY_CODE });
      console.log("color", colorDataModal);
    } else if (nameSection === CONTENT) {
      setColorData(color);
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, DATA_PLUGIN, "colorData", color)
      );
      setContent({ name: "color", value: color, nameSection: CONTENT });
    } else if (nameSection === BUTTONS) {
      setColorButtons(color);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "colorButtons",
          color
        )
      );
      setContent({ name: "color", value: color, nameSection: BUTTONS });
    }
  };
  useEffect(() => {
    if (nameSection === HEADER) {
      setColorPicker(colorHeader);
    } else if (nameSection === VERIFY_TITLE) {
      setColorPicker(colorTitleModal);
    } else if (nameSection === LOGO) {
      setColorPicker(colorLogo);
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setColorPicker(colorDataTitle);
    } else if (nameSection === VERIFY_DATA) {
      setColorPicker(colorVerifyData);
    } else if (nameSection === VERIFY_CODE) {
      setColorPicker(colorDataModal);
    } else if (nameSection === CONTENT) {
      setColorPicker(colorData);
    } else if (nameSection === BUTTONS) {
      setColorPicker(colorButtons);
    } else if (nameSection === MODAL_BOX) {
      setColorPicker(colorModalBox);
    }
  }, []);

  const openColorList = Boolean(anchorElColor);
  return (
    <div className={classes.content}>
      <div className={`text ${classes.title}`}>Change Color Text</div>

      <div
        className="toolbox-button"
        aria-expanded="false"
        onClick={handleDisplayColorPicker}
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "4px",
          justifyContent: "center",
          alignItems: "center",
          border: "0.5px solid #c7c4c4a2",
          marginRight: "10px",
        }}
      >
        <span
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: colorPicker,
            marginRight: "10px",
            border: "0.5px solid #c7c4c4a2",
          }}
        ></span>
        {colorPicker}
      </div>
      <ColorPopover
        open={openColorList}
        anchorEl={anchorElColor}
        handleClose={handleCloseReasonsList}
        getColor={handleGetColor}
      />
    </div>
  );
};
export default ColorChanger;
