import { useAppProvider } from "@appProvider/AppProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { FONT_SIZE_LIST } from "../../theme/ConstantColors"
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
    contentFontSize: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    },
    sizeChanger: {
      select: {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: `#fff`
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: `#fff`,
          borderWidth: "0.15rem"
        }
      }
    },
    icon: {
      fill: `#fff`
    }
  })
)

const FontSizeChanger = ({ nameSection }: any) => {
  const classes = useStyles()

  const {
    headerDBFormat,
    setHeaderDBFormat,
    setFontSizeHeader,
    dbFormat,
    giftDBFormat,
    setGiftDBFormat
  }: any = useAppProvider()

  const {
    dbModalsFormat,
    setDbModalsFormat,
    setFontSizeVerifyData,
    setFontSizeVerifyCode,
    setFontSizeVerifyTitle,
    setFontSizeVerifyFooter
  }: any = useModalsAppProvider()
  const [open, setOpen] = React.useState(false)
  const [fontSize, setFontSize] = React.useState("1rem")
  const { setContent }: any = useUndoable()
  // change the font for all the text in the App
  const handleChange = (event: any) => {
    setFontSize(event.target.value)
    console.log(event.target.value)
    if (nameSection === HEADER) {
      setFontSizeHeader(event.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "fontSizeHeader", event.target.value)
      )
      setContent({ name: "fontSize", value: event.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setFontSizeVerifyTitle(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontSizeVerifyTitle",
          event.target.value
        )
      )
      setContent({ name: "fontSize", value: event.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setFontSizeVerifyFooter(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "fontSizeVerifyFooter",
          event.target.value
        )
      )
      setContent({ name: "fontSize", value: event.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setFontSizeVerifyData(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontSizeVerifyData",
          event.target.value
        )
      )
      setContent({ name: "fontSize", value: event.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setFontSizeVerifyCode(event.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "fontSizeVerifyCode",
          event.target.value
        )
      )
      setContent({ name: "fontSize", value: event.target.value, nameSection: VERIFY_CODE })
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div className={classes.contentFontSize}>
      <div className="text">Change Font Size</div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fontSize || "1rem"}
          onChange={handleChange}
          // outlined
          variant="outlined"
          defaultValue={fontSize}
          MenuProps={{
            classes: {
              paper: "customPaper"
            }
          }}
          className="sizeChanger"
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
        >
          {FONT_SIZE_LIST.map((font, index) => (
            <option key={font + index} style={{ padding: "2px" }} value={font}>
              {font}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export default FontSizeChanger
