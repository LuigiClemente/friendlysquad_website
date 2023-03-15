import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { IconButton } from "@mui/material"
import SettingsDataTitle from "@plugins/SettingsDataTitle/SettingsDataTitle"
import Edit from "../../icons/Edit"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerBtn: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "9px",

      height: "2rem",
      width: "2.2rem"
    },
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "0px",
      right: "0px",
      height: "fit-content",
      width: "fit-content",
      zIndex: 1000
    }
  })
)
type DataTitleOptionsUiProps = {
  style: any
}
const DataTitleOptionsUi = ({ style }: DataTitleOptionsUiProps) => {
  const classes = useStyles()
  const { dialogOpenDataTitle, setDialogOpenDataTitle }: any = useModalsAppProvider()
  const handleClickOpen = () => {
    setDialogOpenDataTitle(true)
  }

  return (
    <div
      className={"popover-option"}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0px",
        right: "0px",
        height: "fit-content",
        width: "fit-content",
        zIndex: 1000,
        ...style
      }}
    >
      <IconButton
        onClick={handleClickOpen}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }
        }}
        className={classes.containerBtn}
      >
        <Edit />
      </IconButton>
      {dialogOpenDataTitle && <SettingsDataTitle open={dialogOpenDataTitle} />}
    </div>
  )
}
export default DataTitleOptionsUi
