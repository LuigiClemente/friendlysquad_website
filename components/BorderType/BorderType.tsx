import { useAppProvider } from "@appProvider/AppProvider";
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider";
import { useUndoable } from "@appProvider/UndoableProvider";
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import FormControl from "@material-ui/core/FormControl";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { MenuItem, TextField } from "@mui/material";
import { BORDER_STYLE } from "../../theme/ConstantColors";
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
import UpdateStyleBorder from "./UpdateStyleBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "10px",
      height: "90px",
    },
  })
);

const BorderType = ({ nameSection, sideName }: any) => {
  const classes = useStyles();
  const {}: any = useAppProvider();

  const {
    setHeaderDBFormat,
    headerDBFormat,
    dbFormat,
    setDbFormat,

    // ----------------------------------------- header
    // border style
    setBorderRightStyleHeader,
    setBorderLeftStyleHeader,
    setBorderTopStyleHeader,
    setBorderBottomStyleHeader,

    // border style logo
    setBorderRightStyleLogo,
    setBorderLeftStyleLogo,
    setBorderTopStyleLogo,
    setBorderBottomStyleLogo,
  }: any = useAppProvider();
  // set use state size
  const {
    // border style
    setBorderRightStyleData,
    setBorderLeftStyleData,
    setBorderTopStyleData,
    setBorderBottomStyleData,
    // -------------------------- VerifyData --------------------------
    // border style
    setBorderRightStyleVerifyData,
    setBorderLeftStyleVerifyData,
    setBorderTopStyleVerifyData,
    setBorderBottomStyleVerifyData,

    // -------------------------- VerifyData Btn --------------------------
    // border style
    setBorderRightStyleDataModal,
    setBorderLeftStyleDataModal,
    setBorderTopStyleDataModal,
    setBorderBottomStyleDataModal,

    // -------------------------- TitleModal --------------------------
    // border style
    setBorderRightStyleTitleModal,
    setBorderLeftStyleTitleModal,
    setBorderTopStyleTitleModal,
    setBorderBottomStyleTitleModal,

    // -------------------------- TitleModal Btn --------------------------
    // border style
    setBorderRightStyleBox2,
    setBorderLeftStyleBox2,
    setBorderTopStyleBox2,
    setBorderBottomStyleBox2,
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat,
    // -------------------------- Buttons --------------------------
    setBorderRightStyleButtons,
    setBorderLeftStyleButtons,
    setBorderTopStyleButtons,
    setBorderBottomStyleButtons,
  }: any = useModalsAppProvider();

  // set use state margin
  const { borderStyle, setBorderStyle }: any = useUpdateSettingsProvider();
  // change the borderStyle for all the text in the App
  UpdateStyleBorder(nameSection, sideName);
  const { setContent }: any = useUndoable();
  //handle for border right style change
  const handleBorderRightStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderRightStyleLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderRightStyleLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderRightStyleHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderRightStyleHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightStyleTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightStyleBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightStyleVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightStyleDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderRightStyleButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderRightStyleButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderRightStyleData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderRightStyleData",
          e.target.value
        )
      );
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border left style change
  const handleBorderLeftStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderLeftStyleLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderLeftStyleLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderLeftStyleHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderLeftStyleHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: HEADER,
      });
    }
    // this is for modals
    else if (nameSection === VERIFY_TITLE) {
      setBorderLeftStyleTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftStyleBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftStyleVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftStyleDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderLeftStyleButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderLeftStyleButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderLeftStyleData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderLeftStyleData",
          e.target.value
        )
      );
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border top style change
  const handleBorderTopStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderTopStyleLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderTopStyleLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderTopStyleHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderTopStyleHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopStyleTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopStyleBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopStyleVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopStyleDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderTopStyleButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderTopStyleButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderTopStyleData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderTopStyleData",
          e.target.value
        )
      );
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };
  //handle for border bottom style change -----------------------------------------------------------------------
  const handleBorderBottomStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderBottomStyleLogo(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          LOGO_PLUGIN_ID,
          "borderBottomStyleLogo",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: LOGO,
      });
    } else if (nameSection === HEADER) {
      setBorderBottomStyleHeader(e.target.value);
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomStyleHeader",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: HEADER,
      });
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomStyleTitleModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleTitleModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE,
      });
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomStyleBox2(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleBox2",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN,
      });
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomStyleVerifyData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleVerifyData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA,
      });
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomStyleDataModal(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleDataModal",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE,
      });
    } else if (nameSection === BUTTONS) {
      setBorderBottomStyleButtons(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          BUTTONS_PLUGIN_ID,
          "borderBottomStyleButtons",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: BUTTONS,
      });
    }
    // content
    else if (nameSection === CONTENT) {
      console.log("border bottom", e.target.value);
      setBorderBottomStyleData(e.target.value);
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          DATA_PLUGIN,
          "borderBottomStyleData",
          e.target.value
        )
      );
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: CONTENT,
      });
    }
  };

  const handleBorderStyle = (e: any) => {
    setBorderStyle(e.target.value);
    switch (sideName) {
      case "top":
        handleBorderTopStyleChange(e);
        break;
      case "bottom":
        handleBorderBottomStyleChange(e);
        break;
      case "right":
        handleBorderRightStyleChange(e);
        break;
      case "left":
        handleBorderLeftStyleChange(e);
        break;
    }
  };

  return (
    <div className={classes.content}>
      <div style={{ fontSize: "12px" }}>Style</div>
      <FormControl variant="filled" size="small">
        <TextField
          select
          size="small"
          id="demo-controlled-open-select"
          sx={{ width: 130, height: 20 }}
          value={borderStyle || "1rem"}
          onChange={handleBorderStyle}
          variant="outlined"
          defaultValue={borderStyle}
          style={{
            height: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
          className="toolbox-button"
        >
          {BORDER_STYLE.map((borderStyle, index) => (
            <MenuItem
              key={borderStyle + index}
              value={borderStyle}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              {borderStyle}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </div>
  );
};
export default BorderType;
