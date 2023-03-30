import { useAppProvider } from "@appProvider/AppProvider";
import { useAppStateProvider } from "@appProvider/AppStateProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect } from "react";
import { FONT_FAMILY } from "../../theme/ConstantColors";
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
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "50%",
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
  })
);

const FontChanger = ({ nameSection }: any) => {
  const classes = useStyles();
  const [font, setFont] = React.useState(FONT_FAMILY[0]);
  const [open, setOpen] = React.useState(false);
  const {
    setFontHeader,
    setFontModalBox,
    // update value in settings
    fontHeader,
    fontModalBox,
    fontSizeLogo,
    backgroundColorLogo,
    colorLogo,
    setFontLogo,
    fontLogo,
    // ----
    headerDBFormat,
    setHeaderDBFormat,
  }: any = useAppProvider();

  const {
    dbModalsFormat,
    setDbModalsFormat,
    setFontVerifyData,
    setFontDataModal,
    setFontTitleModal,
    setFontDataTitle,
    setFontData,
    // update value in settings
    fontVerifyData,
    fontDataModal,
    fontTitleModal,
    fontDataTitle,
    fontData,
    // -------------Buttons
    setFontButtons,
    fontButtons,
  }: any = useModalsAppProvider();
  // const {setFontButtons, fontButtons}:any=useAppStateProvider()
  const { setContent }: any = useUndoable();
  // change the font for all the text in the App
  const handleChange = (event: any) => {
    setFont(event.target.value);

    console.log("font name", event.target.value);
    if (nameSection === HEADER) {
      setFontHeader(event.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "fontHeader",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === LOGO) {
      setFontLogo(event.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "fontLogo",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === MODAL_BOX) {
      setFontModalBox(event.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          MODAL_BOX_PLUGIN_ID,
          "fontModalBox",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: MODAL_BOX,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setFontTitleModal(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontTitleModal",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFontDataTitle(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontDataTitle",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setFontVerifyData(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontVerifyData",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setFontDataModal(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontDataModal",
          event.target.value
        )
      );
      console.log("this is for font modal:::");
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === CONTENT) {
      setFontData(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "fontData",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: CONTENT,
      });
    } else if (nameSection === BUTTONS) {
      setFontButtons(event.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "fontButtons",
          event.target.value
        )
      );
      setContent({
        name: "font",
        value: event.target.value,
        nameSection: BUTTONS,
      });
    }
  };

  useEffect(() => {
    if (nameSection === HEADER) {
      setFont(fontHeader);
    } else if (nameSection === LOGO) {
      setFont(fontLogo);
    } else if (nameSection === VERIFY_TITLE) {
      setFont(fontTitleModal);
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFont(fontDataTitle);
    } else if (nameSection === VERIFY_DATA) {
      setFont(fontVerifyData);
    } else if (nameSection === VERIFY_CODE) {
      setFont(fontDataModal);
    } else if (nameSection === CONTENT) {
      setFont(fontData);
    } else if (nameSection === BUTTONS) {
      setFont(fontButtons);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.content}>
      <div style={{ width: "120px" }} className="text">
        Change Font
      </div>
      <div>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-controlled-open-Font-changer-label"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={font}
            onChange={handleChange}
            variant="outlined"
            style={{ width: "100%" }}
            MenuProps={{
              classes: {
                paper: "customPaper",
              },
            }}
          >
            {FONT_FAMILY.map((font, index) => (
              <MenuItem
                key={font + index}
                value={font}
                style={{
                  fontFamily: font,
                  padding: "8px",
                  width: "fit-content !important",
                  minWidth: "fit-content",
                  wordWrap: "break-word",
                  margin: "5px",
                  fontSize: "22px",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="myk"
              >
                {FONT_FAMILY[index]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default FontChanger;
