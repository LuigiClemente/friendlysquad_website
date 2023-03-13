import { useAppProvider } from "@appProvider/AppProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { IconButton } from "@mui/material"
import SettingsLogo from "@plugins/settingsLogo/settingsLogo"
import Edit from "../../icons/Edit"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerBtn: {
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
type LogoOptionsUiProps = {
  style: any
}
const LogoOptionsUi = ({ style }: LogoOptionsUiProps) => {
  const classes = useStyles()

  const { dialogOpenLogo, setDialogOpenLogo }: any = useAppProvider()
  const handleClickOpen = () => {
    setDialogOpenLogo(true)
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
          // ml: 1,
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }
        }}
        className={classes.containerBtn}
      >
        <Edit />
      </IconButton>
      {dialogOpenLogo && <SettingsLogo open={dialogOpenLogo} />}
    </div>
  )
}
export default LogoOptionsUi
