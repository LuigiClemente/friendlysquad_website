import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import MenuItem from "@mui/material/MenuItem"
import React, { useEffect } from "react"
import { FONT_FAMILY } from "../../theme/ConstantColors"
import { updatePluginValue } from "../../utils/uiController"
import {
  HEADER,
  HEADER_PLUGIN_ID,
  VERIFY_CODE,
  VERIFY_DATA,
  VERIFY_DATA_PLUGIN_ID,
  VERIFY_TITLE,
  VERIFY_TITLE_BTN,
  VERIFY_TITLE_PLUGIN_ID
} from "../Constant/const"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "50%"
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    }
  })
)

const FontChanger = ({ nameSection }: any) => {
  const classes = useStyles()
  const [font, setFont] = React.useState(FONT_FAMILY[0])
  const [open, setOpen] = React.useState(false)
  const {
    setFontHeader,
    // update value in settings
    fontHeader,
    // ----
    headerDBFormat,
    setHeaderDBFormat
  }: any = useAppProvider()

  const {
    dbModalsFormat,
    setDbModalsFormat,
    setFontVerifyData,
    setFontVerifyCode,
    setFontVerifyTitle,
    setFontVerifyFooter,
    // update value in settings
    fontVerifyData,
    fontVerifyCode,
    fontVerifyTitle,
    fontVerifyFooter
  }: any = useModalsAppProvider()
  const { setContent }: any = useUndoable()
  // change the font for all the text in the App
  const handleChange = (event: any) => {
    setFont(event.target.value)

    console.log("font name", event.target.value)
    if (nameSection === HEADER) {
      setFontHeader(event.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "fontHeader", event.target.value)
      )
      setContent({ name: "font", value: event.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setFontVerifyTitle(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontVerifyTitle",
          event.target.value
        )
      )
      setContent({ name: "font", value: event.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFontVerifyFooter(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontVerifyFooter",
          event.target.value
        )
      )
      setContent({ name: "font", value: event.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setFontVerifyData(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontVerifyData",
          event.target.value
        )
      )
      setContent({ name: "font", value: event.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setFontVerifyCode(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontVerifyCode",
          event.target.value
        )
      )
      setContent({ name: "font", value: event.target.value, nameSection: VERIFY_CODE })
    }
  }

  useEffect(() => {
    if (nameSection === HEADER) {
      setFont(fontHeader)
    } else if (nameSection === VERIFY_TITLE) {
      setFont(fontVerifyTitle)
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFont(fontVerifyFooter)
    } else if (nameSection === VERIFY_DATA) {
      setFont(fontVerifyData)
    } else if (nameSection === VERIFY_CODE) {
      setFont(fontVerifyCode)
    }
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

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
                paper: "customPaper"
              }
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
                  flexDirection: "column"
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
  )
}
export default FontChanger
