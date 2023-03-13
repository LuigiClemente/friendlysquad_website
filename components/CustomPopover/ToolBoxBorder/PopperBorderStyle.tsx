import { useAppProvider } from "@appProvider/AppProvider"
import { useAppStateProvider } from "@appProvider/AppStateProvider"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import { useUpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Fade from "@mui/material/Fade"
import Popper from "@mui/material/Popper"
import { CompactPicker } from "react-color"
import { updatePluginValue } from "../../../utils/uiController"
import BorderType from "../../BorderType"
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
} from "../../Constant/const"
import UpdateWidthColorBorder from "./UpdateWidthColorBorder"
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
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        backgroundColor: "white",
        Padding: "10px"
      }
    },
    typography: {
      padding: theme.spacing(2)
    }
  })
)
interface PopperBorderStyleProps {
  anchorEl?: any
  open?: boolean
  id?: any
  valueWidth?: any
  valueStyle?: any
  valueColor?: any
  nameSection?: any
  sideName?: any
}
const PopperBorderStyle = ({
  anchorEl,
  open,
  id,
  nameSection,
  sideName
}: PopperBorderStyleProps) => {
  // const [borderWidth, setBorderWidth] = React.useState(0)
  // const [borderColor, setBorderColor] = React.useState("#000000")
  const classes = useStyles()

  const {
    borderStyle,
    setBorderStyle,
    setBorderColor,
    setBorderWidth,
    borderWidth,
    borderColor
  }: any = useUpdateSettingsProvider()

  console.log("border style dialogs", nameSection, sideName)

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
    setBorderRightWidthLogo
  }: any = useAppProvider()
  // set use state size
  const {
    // -------------------------- VerifyData --------------------------
    setBorderBottomColorVerifyData,
    setBorderBottomWidthVerifyData,
    setBorderTopColorVerifyData,
    setBorderTopWidthVerifyData,
    setBorderLeftColorVerifyData,
    setBorderLeftWidthVerifyData,
    setBorderRightColorVerifyData,
    setBorderRightWidthVerifyData,

    setBorderBottomWidthVerifyCode,
    setBorderTopWidthVerifyCode,
    setBorderLeftWidthVerifyCode,
    setBorderRightWidthVerifyCode,

    // -------------------------- VerifyData Btn --------------------------
    setBorderBottomColorVerifyCode,
    setBorderTopColorVerifyCode,
    setBorderLeftColorVerifyCode,
    setBorderRightColorVerifyCode,

    // -------------------------- VerifyTitle --------------------------
    setBorderBottomColorVerifyTitle,
    setBorderTopColorVerifyTitle,
    setBorderLeftColorVerifyTitle,
    setBorderRightColorVerifyTitle,

    // -------------------------- VerifyTitle Btn --------------------------
    setBorderBottomColorVerifyFooter,
    setBorderTopColorVerifyFooter,
    setBorderLeftColorVerifyFooter,
    setBorderRightColorVerifyFooter,

    //  width border
    setBorderBottomWidthVerifyTitle,
    setBorderTopWidthVerifyTitle,
    setBorderLeftWidthVerifyTitle,
    setBorderRightWidthVerifyTitle,
    // btn
    setBorderBottomWidthVerifyFooter,
    setBorderTopWidthVerifyFooter,
    setBorderLeftWidthVerifyFooter,
    setBorderRightWidthVerifyFooter,
    //  db json table for modals
    dbModalsFormat,
    setDbModalsFormat
  }: any = useModalsAppProvider()
  // set use state margin

  const {
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
    setBorderBottomWidthButtons
  }:any=useAppStateProvider()
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
    setMarginRight
  }: any = useUpdateSettingsProvider()
  UpdateWidthColorBorder(nameSection, sideName)
  const { setContent }: any = useUndoable()
  //handle for border bottom color change
  const handleBorderBottomColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderBottomColorLogo(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomColorLogo", e.hex)
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderBottomColorHeader(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderBottomColorHeader", e.hex)
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomColorVerifyTitle(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorVerifyTitle",
          e.hex
        )
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomColorVerifyFooter(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomColorVerifyFooter",
          e.hex
        )
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomColorVerifyData(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorVerifyData",
          e.hex
        )
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomColorVerifyCode(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomColorVerifyCode",
          e.hex
        )
      )
      setContent({ name: "borderBottomColor", value: e.hex, nameSection: VERIFY_CODE })
    }
  }
  //handle for border top color change
  const handleBorderTopColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderTopColorLogo(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopColorLogo", e.hex)
      )
      setContent({ name: "borderTopColor", value: e.hex, nameSection: LOGO })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopColorVerifyTitle(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorVerifyTitle",
          e.hex
        )
      )
      setContent({ name: "borderTopColor", value: e.hex, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopColorVerifyFooter(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopColorVerifyFooter",
          e.hex
        )
      )
      setContent({ name: "borderTopColor", value: e.hex, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopColorVerifyData(e.hex)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopColorVerifyData", e.hex)
      )
      setContent({ name: "borderTopColor", value: e.hex, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopColorVerifyCode(e.hex)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderTopColorVerifyCode", e.hex)
      )
      setContent({ name: "borderTopColor", value: e.hex, nameSection: VERIFY_CODE })
    }
  }
  //handle for border left color change
  const handleBorderLeftColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderLeftColorLogo(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftColorLogo", e.hex)
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderLeftColorHeader(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderLeftColorHeader", e.hex)
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftColorVerifyTitle(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorVerifyTitle",
          e.hex
        )
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftColorVerifyFooter(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftColorVerifyFooter",
          e.hex
        )
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftColorVerifyData(e.hex)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftColorVerifyData", e.hex)
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftColorVerifyCode(e.hex)
      setDbModalsFormat(
        updatePluginValue(dbModalsFormat, VERIFY_DATA_PLUGIN_ID, "borderLeftColorVerifyCode", e.hex)
      )
      setContent({ name: "borderLeftColor", value: e.hex, nameSection: VERIFY_CODE })
    }
  }
  //handle for border right color change
  const handleBorderRightColorChange = (e: any) => {
    if (nameSection === LOGO) {
      setBorderRightColorLogo(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightColorLogo", e.hex)
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderRightColorHeader(e.hex)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderRightColorHeader", e.hex)
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightColorVerifyTitle(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorVerifyTitle",
          e.hex
        )
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightColorVerifyFooter(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightColorVerifyFooter",
          e.hex
        )
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightColorVerifyData(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorVerifyData",
          e.hex
        )
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightColorVerifyCode(e.hex)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightColorVerifyCode",
          e.hex
        )
      )
      setContent({ name: "borderRightColor", value: e.hex, nameSection: VERIFY_CODE })
    }
  }

  //handle for border bottom width change
  const handleBorderBottomWidthChange = (e: any) => {
    setBorderBottomWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderBottomWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderBottomWidthLogo", e.target.value)
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderBottomWidthHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(
          headerDBFormat,
          HEADER_PLUGIN_ID,
          "borderBottomWidthHeader",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderBottomWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderBottomWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderBottomWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_TITLE_BTN
      })
    } else if (nameSection === VERIFY_DATA) {
      setBorderBottomWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderBottomWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderBottomWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderBottomWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderBottomWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }

  //handle for border top width change
  const handleBorderTopWidthChange = (e: any) => {
    setBorderTopWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderTopWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderTopWidthLogo", e.target.value)
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === HEADER) {
      setBorderTopWidthHeader(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, HEADER_PLUGIN_ID, "borderTopWidthHeader", e.target.value)
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: HEADER })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderTopWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderTopWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderTopWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderTopWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderTopWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderTopWidthVerifyCode",
          e.target.value
        )
      )
      setContent({ name: "borderTopWidth", value: e.target.value, nameSection: VERIFY_CODE })
    }
  }

  //handle for border left width change
  const handleBorderLeftWidthChange = (e: any) => {
    setBorderLeftWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderLeftWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderLeftWidthLogo", e.target.value)
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderLeftWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderLeftWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderLeftWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderLeftWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderLeftWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderLeftWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderLeftWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderLeftWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }

  //handle for border right width change
  const handleBorderRightWidthChange = (e: any) => {
    setBorderRightWidth(e.target.value)
    if (nameSection === LOGO) {
      setBorderRightWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "borderRightWidthLogo", e.target.value)
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: LOGO })
    } else if (nameSection === VERIFY_TITLE) {
      setBorderRightWidthVerifyTitle(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyTitle",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_TITLE })
    } else if (nameSection === VERIFY_TITLE_BTN) {
      setBorderRightWidthVerifyFooter(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_TITLE_PLUGIN_ID,
          "borderRightWidthVerifyFooter",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_TITLE_BTN })
    } else if (nameSection === VERIFY_DATA) {
      setBorderRightWidthVerifyData(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyData",
          e.target.value
        )
      )
      setContent({ name: "borderRightWidth", value: e.target.value, nameSection: VERIFY_DATA })
    } else if (nameSection === VERIFY_CODE) {
      setBorderRightWidthVerifyCode(e.target.value)
      setDbModalsFormat(
        updatePluginValue(
          dbModalsFormat,
          VERIFY_DATA_PLUGIN_ID,
          "borderRightWidthVerifyCode",
          e.target.value
        )
      )
      setContent({
        name: "borderRightWidth",
        value: e.target.value,
        nameSection: VERIFY_CODE
      })
    }
  }
  //
  const handleBorderColor = (e: any) => {
    console.log(" color :", e.hex)
    setBorderColor(e.hex)
    switch (sideName) {
      case "top":
        handleBorderTopColorChange(e)
        break
      case "bottom":
        handleBorderBottomColorChange(e)
        break
      case "right":
        handleBorderRightColorChange(e)
        break
      case "left":
        handleBorderLeftColorChange(e)
        break
    }
  }

  const handleBorderWidth = (e: any) => {
    setBorderWidth(e.target.value)
    switch (sideName) {
      case "top":
        handleBorderTopWidthChange(e)
        break
      case "bottom":
        handleBorderBottomWidthChange(e)
        break
      case "right":
        handleBorderRightWidthChange(e)
        break
      case "left":
        handleBorderLeftWidthChange(e)
        break
    }
  }

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
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        width: "fit-content",
        minWidth: "fit-content"
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
  )
}
export default PopperBorderStyle
