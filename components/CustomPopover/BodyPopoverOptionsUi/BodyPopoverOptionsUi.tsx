import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { IconButton } from "@mui/material"
import { useAppProvider } from "@appProvider/AppProvider"
import SettingsBody from "@plugins/settingsBody/settingsBody"
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
    },
    popover: {
      // work event only on popover
      pointerEvents: "none"
    }
  })
)
type TabContentPopoverOptionsUiProps = {
  style: any
}
const BodyPopoverOptionsUi = ({ style }: TabContentPopoverOptionsUiProps) => {
  const classes = useStyles()

  const { dialogOpenBody, setDialogOpenBody }: any = useAppProvider()
  const handleClickOpen = () => {
    setDialogOpenBody(true)
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
        display: "flex",
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
      {dialogOpenBody && <SettingsBody open={dialogOpenBody} />}
    </div>
  )
}
export default BodyPopoverOptionsUi
