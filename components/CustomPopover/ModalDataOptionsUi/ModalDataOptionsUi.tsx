import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { IconButton } from "@mui/material"
import SettingsCodeVerification from "@plugins/settingsCodeVerification/settingsCodeVerification"
import SettingsTitleVerification from "@plugins/SettingsTitleVerification/SettingsTitleVerification"
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
type ModalDataOptionsUiProps = {
  style: any
}
const ModalDataOptionsUi = ({ style }: ModalDataOptionsUiProps) => {
  const classes = useStyles()
<<<<<<< HEAD
  const { dialogOpenDataModal, setDialogOpenDataModal }: any = useModalsAppProvider()
  const handleClickOpen = () => {
    setDialogOpenDataModal(true)
=======
  const { dialogOpenVerifyCode, setDialogOpenVerifyCode }: any = useModalsAppProvider()
  const handleClickOpen = () => {
    setDialogOpenVerifyCode(true)
>>>>>>> 1c6806168f51fa92cd3293a86a7d411567c6662a
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
<<<<<<< HEAD
      {dialogOpenDataModal && <SettingsCodeVerification open={dialogOpenDataModal} />}
=======
      {dialogOpenVerifyCode && <SettingsCodeVerification open={dialogOpenVerifyCode} />}
>>>>>>> 1c6806168f51fa92cd3293a86a7d411567c6662a
    </div>
  )
}
export default ModalDataOptionsUi
