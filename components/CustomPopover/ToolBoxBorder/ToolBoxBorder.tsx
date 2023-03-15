import React from "react"
import BorderType from "../../BorderType"
import ColorPopover from "../../ColorPopover/ColorPopover"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import FontChanger from "../../FontChanger"

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
      //   justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      justifyContent: "flex-start"
    }
  })
)

const ToolBoxBorder = () => {
  const [anchorElColor, setAnchorElColor] = React.useState<null | HTMLElement>(null)
  const handleDisplayColorPicker = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElColor(event.currentTarget)
  }
  const [colorPicker, setColorPicker] = React.useState("#cad4ef")
  const handleCloseReasonsList = () => {
    setAnchorElColor(null)
  }
  const handleGetColor = (color: any) => {
    setColorPicker(color)
  }
  const classes = useStyles()
  const openColorList = Boolean(anchorElColor)
  return (
    <div className={classes.content}>
      <div className={classes.content} style={{ width: "50%", justifyContent: "flex-start" }}>
        <BorderType />
      </div>

      <div
        className="toolbox-button"
        aria-expanded="false"
        onClick={handleDisplayColorPicker}
        style={{
          color: colorPicker,
          //   border: `1px solid !important`,
          borderColor: colorPicker,
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "5px",
          justifyContent: "center",
          alignItems: "center",
          border: "0.5px solid #c7c4c4a2"
        }}
      >
        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "20px",
            backgroundColor: colorPicker,
            marginRight: "10px"
          }}
        ></span>
        Border Color
      </div>
      <ColorPopover
        open={openColorList}
        anchorEl={anchorElColor}
        handleClose={handleCloseReasonsList}
        getColor={handleGetColor}
      />
    </div>
  )
}

export default ToolBoxBorder
