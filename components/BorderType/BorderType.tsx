import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import FormControl from "@material-ui/core/FormControl"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { MenuItem, TextField } from "@mui/material"
import { BORDER_STYLE } from "../../theme/ConstantColors"
import { updatePluginValue } from "../../utils/uiController"
import {
  HEADER,
  HEADER_PLUGIN_ID,
  LOGO,
  LOGO_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID
} from "../Constant/const"
import UpdateStyleBorder from "./UpdateStyleBorder"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: "10px",
      height: "90px"
    }
  })
)

const BorderType = ({ nameSection, sideName }: any) => {
  const classes = useStyles()
  const {}: any = useAppProvider()

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
    setBorderBottomStyleLogo
  }: any = useAppProvider()
  // set use state size
  const {
    // -------------------------- VerifyData --------------------------
    // border style
    setBorderRightStyleVerifyData,
    setBorderLeftStyleVerifyData,
    setBorderTopStyleVerifyData,
    setBorderBottomStyleVerifyData,

    // -------------------------- VerifyData Btn --------------------------
    // border style
    setBorderRightStyleVerifyCode,
    setBorderLeftStyleVerifyCode,
    setBorderTopStyleVerifyCode,
    setBorderBottomStyleVerifyCode,

    // -------------------------- VerifyTitle --------------------------
    // border style
    setBorderRightStyleVerifyTitle,
    setBorderLeftStyleVerifyTitle,
    setBorderTopStyleVerifyTitle,
    setBorderBottomStyleVerifyTitle,

    // -------------------------- VerifyTitle Btn --------------------------
    // border style
    setBorderRightStyleVerifyContent,
    setBorderLeftStyleVerifyContent,
    setBorderTopStyleVerifyContent,
    setBorderBottomStyleVerifyContent,
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat
  }: any = useModalsAppProvider()
  // set use state margin
  const { borderStyle, setBorderStyle }: any = useUpdateSettingsProvider()
  // change the borderStyle for all the text in the App
  UpdateStyleBorder(nameSection, sideName)
  const { setContent }: any = useUndoable()
  //handle for border right style change
  const handleBorderRightStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderRightStyleLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightStyleLogo", e.target.value)
      )
      setContent({ name: "borderRightStyle", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightStyleVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderRightStyle", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightStyleVerifyContent(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightStyleVerifyContent",
          e.target.value
        )
      )
      setContent({ name: "borderRightStyle", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightStyleVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderRightStyle", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightStyleVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightStyleVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderRightStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border left style change
  const handleBorderLeftStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderLeftStyleLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftStyleLogo", e.target.value)
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === HEADER) {
      setBorderLeftStyleHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftStyleHeader", e.target.value)
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: HEADER
      })
    }
    // this is for modals
    else if (nameSection === VERIFY_TITLE) {
      setBorderLeftStyleVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftStyleVerifyContent(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftStyleVerifyContent",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftStyleVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftStyleVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftStyleVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border top style change
  const handleBorderTopStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderTopStyleLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopStyleLogo", e.target.value)
      )
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: LOGO
      })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopStyleVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleVerifyTitle",
          e.target.value
        )
      )
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE
      })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopStyleVerifyContent(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopStyleVerifyContent",
          e.target.value
        )
      )
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopStyleVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleVerifyData",
          e.target.value
        )
      )
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_DATA
      })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopStyleVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopStyleVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderTopStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //handle for border bottom style change -----------------------------------------------------------------------
  const handleBorderBottomStyleChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderBottomStyleLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomStyleLogo", e.target.value)
      )
      setContent({ name: "borderBottomStyle", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderBottomStyleHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomStyleHeader",
          e.target.value
        )
      )
      setContent({ name: "borderBottomStyle", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomStyleVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderBottomStyle", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomStyleVerifyContent(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomStyleVerifyContent",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomStyleVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderBottomStyle", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomStyleVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomStyleVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomStyle",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }

  const handleBorderStyle = (e: any) => {
    setBorderStyle(e.target.value)
    switch (sideName) {
      case "top":
        handleBorderTopStyleChange(e)
        break
      case "bottom":
        handleBorderBottomStyleChange(e)
        break
      case "right":
        handleBorderRightStyleChange(e)
        break
      case "left":
        handleBorderLeftStyleChange(e)
        break
    }
  }

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
          /* styles the wrapper */
          style={{
            height: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
          className="toolbox-button"
          /* styles the label component */
          // InputLabelProps={{
          //   style: {
          //     height
          //   }
          // }}
          // /* styles the input component */
          // inputProps={{
          //   style: {
          //     height,
          //     padding: "0 14px"
          //   }
          // }}
        >
          {BORDER_STYLE.map((borderStyle, index) => (
            <MenuItem
              key={borderStyle + index}
              value={borderStyle}
              style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
            >
              {borderStyle}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </div>
  )
}
export default BorderType
