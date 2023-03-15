import { useAppProvider } from "@appProvider/AppProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { TextField } from "@mui/material"
import React, { useEffect } from "react"
import ColorPopover from "../ColorPopover/ColorPopover"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "20px"
    },
    title: {
      display: "block",
      padding: theme.spacing(1),
      width: "100px"
    },
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: "10px",
      marginBottom: "10px"
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
      position: "relative"
    },
    rowControl: {
      display: "flex",
      flexDirection: "row",
      padding: "3px",
      justifyContent: "center",
      alignItems: "center"
    }
  })
)

const PaddingBorderMarginChanger = ({ nameSection }: any) => {
  const classes = useStyles()

  const { dbFormat, giftDBFormat, setGiftDBFormat }: any = useAppProvider()

  const [anchorElColor, setAnchorElColor] = React.useState<null | HTMLElement>(null)
  const handleDisplayColorPicker = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElColor(event.currentTarget)
  }
  const [colorPicker, setColorPicker] = React.useState("#cad4ef")

  // padding
  const [padding, setPadding] = React.useState(10)
  // border
  const [borderWidth, setBorderWidth] = React.useState("0.5")

  // margin
  const [margin, setMargin] = React.useState(15)

  const updatePadding = () => {
    // if (nameSection === THERAPIST_TABLE) {
    //   setPadding(paddingTherapistTable)
    // }
  }
  const updateBorderWidth = () => {
    // if (nameSection === THERAPIST_TABLE) {
    //   setBorderWidth(borderWidthTherapistTable)
    // }
  }
  const updateMargin = () => {
    // if (nameSection === THERAPIST_TABLE) {
    //   setMargin(marginTherapistTable)
    // }
  }

  useEffect(() => {
    updatePadding()
    updateBorderWidth()
    updateMargin()
  }, [])

  const handleCloseReasonsList = () => {
    setAnchorElColor(null)
  }
  const handleGetColor = (color: any) => {
    //  if (nameSection === CHECK_CARD) {
    //     setBorderColorGiftCheckCard(color)
    //     setGiftDBFormat(
    //       updatePluginValue(giftDBFormat, DEFAULT_GIFT_CHECK, "borderColorGiftCheckCard", color)
    //     )
    //   }
    setColorPicker(color)
  }

  // handle change margin
  const handleChangeMargin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMargin(parseInt(event.target.value))
    // if (nameSection === THERAPIST_TABLE) {
    //   setMarginTherapistTable(parseInt(event.target.value))
    //   setDbFormat(
    //     updatePluginValue(
    //       dbFormat,
    //       DEFAULT_THERAPIST_TABLE,
    //       "marginTherapistTable",
    //       parseInt(event.target.value)
    //     )
    //   )
    // }
  }
  // handle change padding
  const handleChangePadding = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPadding(parseInt(event.target.value))
    // if (nameSection === THERAPIST_TABLE) {
    //   setPaddingTherapistTable(parseInt(event.target.value))
    //   setDbFormat(
    //     updatePluginValue(
    //       dbFormat,
    //       DEFAULT_THERAPIST_TABLE,
    //       "paddingTherapistTable",
    //       parseInt(event.target.value)
    //     )
    //   )
    // }
  }
  // handle change border width
  const handleChangeBorderWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBorderWidth(event.target.value)
    // if (nameSection === THERAPIST_TABLE) {
    //   setBorderWidthTherapistTable(event.target.value)
    //   setDbFormat(
    //     updatePluginValue(
    //       dbFormat,
    //       DEFAULT_THERAPIST_TABLE,
    //       "borderWidthTherapistTable",
    //       parseInt(event.target.value)
    //     )
    //   )
    // }
  }

  const openColorList = Boolean(anchorElColor)
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className="text">Change Border Color</div>
        <div
          onClick={handleDisplayColorPicker}
          className={`toolbox-button btn-info ${classes.sizeBtn}`}
          style={{ color: colorPicker, border: `1px solid !important`, borderColor: colorPicker }}
        >
          Border Color
        </div>
        <ColorPopover
          open={openColorList}
          anchorEl={anchorElColor}
          handleClose={handleCloseReasonsList}
          getColor={handleGetColor}
        />
      </div>
      <div className={classes.content}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className={classes.rowControl}>
            <div className={`text ${classes.title}`}>Padding</div>
            <TextField
              type={"number"}
              value={padding}
              onChange={(e: any) => handleChangePadding(e)}
              variant="outlined"
            />
          </div>
          <div className={classes.rowControl}>
            <div className={`text ${classes.title}`}>Border</div>
            <TextField
              type={"number"}
              value={borderWidth}
              onChange={(e: any) => handleChangeBorderWidth(e)}
              variant="outlined"
            />
          </div>
          <div className={classes.rowControl}>
            <div className={`text ${classes.title}`}>Margin</div>
            <TextField
              type={"number"}
              value={margin}
              onChange={(e: any) => handleChangeMargin(e)}
              variant="outlined"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              borderWidth: `${margin}px`,
              borderStyle: "solid"
            }}
            className="margin-show"
          >
            <div
              style={{
                borderColor: `${colorPicker} !important`,
                borderWidth: `${borderWidth}px`,
                borderStyle: "solid"
              }}
            >
              <div
                style={{
                  borderWidth: `${padding}px`,
                  // borderColor: "whitesmoke",
                  borderStyle: "solid"
                }}
              >
                <div
                  style={{ height: "80px", width: "80px", backgroundColor: "transparent" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PaddingBorderMarginChanger
