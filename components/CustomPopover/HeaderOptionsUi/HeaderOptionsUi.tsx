import { useAppProvider } from "@appProvider/AppProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { IconButton } from "@mui/material"
import SettingsHeader from "@plugins/settingsHeader/settingsHeader"
import Edit from "../../icons/Edit"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "none !important",
      width: "2.2rem",
      height: "2rem"
    }
  })
)
type HeaderOptionsUiProps = {
  style: any
}
const HeaderOptionsUi = ({ style }: HeaderOptionsUiProps) => {
  const classes = useStyles()

  const { dialogOpenHeader, setDialogOpenHeader }: any = useAppProvider()
  const handleClickOpen = () => {
    setDialogOpenHeader(true)
  }

  return (
    <div
      className="popover-option"
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        fontSize: "9px",
        top: "0px",
        right: "0px",
        height: "2rem",
        width: "2.2rem",
        zIndex: "500",
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
        className={classes.icon}
      >
        <Edit />
      </IconButton>
      {dialogOpenHeader && <SettingsHeader open={dialogOpenHeader} />}
    </div>
  )
}
export default HeaderOptionsUi
