import { makeStyles, Popover } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { SketchPicker } from "react-color"

interface MenuScheduleOptionFilterProps {
  open?: any
  anchorEl: any
  handleClose: any
  getColor: any
  nameSection?: any
}
const useStyles = makeStyles(
  (theme) => ({
    root: {
      "& .MuiFormControlLabel-root": {
        fontSize: "12px",
        color: "#000000",
        fontWeight: "normal",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        marginLeft: "0px !important",
        marginRight: "0px !important"
      },
      "& .MuiFormControlLabel-label": {
        padding: "8px !important",
        color: theme.palette.text.primary
      }
    },
    textColor: {
      color: theme.palette.text.primary
    }
  }),
  { name: "offerForm" }
)

const ColorPopover: React.FC<MenuScheduleOptionFilterProps> = ({
  open,
  anchorEl,
  handleClose,
  getColor,
  nameSection
}: MenuScheduleOptionFilterProps) => {
  const [color, setColor]: any = useState()

  const updateColor = () => {
    // if (nameSection === THERAPIST_TABLE) {
    //   setColor(borderColorTherapistTable)
    // } else if (nameSection === TIME_TABLE) {
    //   setColor(borderColorTimeTable)
    // }
  }

  useEffect(() => {
    updateColor()
  }, [nameSection])

  const handleColor = (event: any) => {
    setColor(event.hex)
    getColor(event.hex)
  }
  const classes = useStyles({})
  return (
    <Popover
      style={{
        borderRadius: "20px !important",
        padding: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onChange={handleColor}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // maxWidth: "300px",
          width: "fit-content",
          height: "fit-content",
          justifyContent: "center !important"
        }}
        className={classes.root}
      >
        <SketchPicker color={color} onChange={handleColor} />
      </div>
    </Popover>
  )
}
export default ColorPopover
