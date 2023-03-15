import { useAppProvider } from "@appProvider/AppProvider"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { useEffect } from "react"
import { FONT_FAMILY, SHADOW } from "../../theme/ConstantColors"
import { updatePluginValue } from "../../utils/uiController"
import { BODY_PLUGIN_ID, CONTAINER_CUSTOMIZE } from "../Constant/const"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: "60%"
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

const ShadowChanger = ({ nameSection }: any) => {
  const classes = useStyles()
  const [shadow, setShadow] = React.useState(FONT_FAMILY[0])
  const [open, setOpen] = React.useState(false)
  const {
    setContainerShadow,
    containerShadow,
    // db
    headerDBFormat,
    setHeaderDBFormat
  }: any = useAppProvider()

  const handleChange = (event: any) => {
    setShadow(event.target.value)
    if (nameSection === CONTAINER_CUSTOMIZE) {
      setContainerShadow(event.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, BODY_PLUGIN_ID, "containerShadow", event.target.value)
      )
    }
  }

  useEffect(() => {
    if (nameSection === CONTAINER_CUSTOMIZE) {
      setShadow(containerShadow)
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
      <div>Change Font</div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={shadow}
          onChange={handleChange}
          variant="outlined"
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
          MenuProps={{
            classes: {
              paper: "customPaper"
            }
          }}
        >
          {SHADOW.map((font, index) => (
            <option key={font.name + index} value={font.value}>
              {font.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export default ShadowChanger
