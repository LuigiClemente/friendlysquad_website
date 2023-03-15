import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
import BackgroundColorChanger from "@components/BackgroundColorChanger"
import ColorChanger from "@components/ColorChanger"
import { VERIFY_TITLE } from "@components/Constant/const"
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin"
import FontChanger from "@components/FontChanger"
import FontSizeChanger from "@components/FontSizeChanger"
import FullControlPaddingBorderMargin from "@components/FullControlPaddingBorderMargin/FullControlPaddingBorderMargin"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Divider } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Paper, { PaperProps } from "@mui/material/Paper"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import * as React from "react"
import Draggable from "react-draggable"
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
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    },
    divider: {
      root: {
        height: "0.5px !important",
        color: "#F2F2F2 !important",
        padding: "6px",
        opacity: "0.5 !important"
      }
    }
  })
)
function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type SettingsTitleVerificationProps = {
  open?: any
}
const SettingsTitleVerification: React.FC<SettingsTitleVerificationProps> = ({
  open
}: SettingsTitleVerificationProps) => {
  const { dialogOpenTitleModal, setDialogOpenTitleModal }: any = useModalsAppProvider()
  const classes = useStyles()

  return (
    <Dialog
      open={dialogOpenTitleModal}
      TransitionComponent={Transition}
      keepMounted
      // fullWidth
      maxWidth="md"
      onClose={() => {
        setDialogOpenTitleModal(false)
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin
        id="customized-dialog-title"
        onClose={() => {
          setDialogOpenTitleModal(false)
        }}
      >
        {"Change Title"}
      </DialogTitleCustomPlugin>

      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-slide-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FontChanger nameSection={VERIFY_TITLE} />
            <Divider className={classes.divider} />
            <FontSizeChanger nameSection={VERIFY_TITLE} />
            <Divider className={classes.divider} />
            <ColorChanger nameSection={VERIFY_TITLE} />
            {/* <Divider className={classes.divider} /> */}
            {/* <BackgroundColorChanger nameSection={VERIFY_TITLE} /> */}
            <Divider className={classes.divider} />
            <FullControlPaddingBorderMargin nameSection={VERIFY_TITLE} />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
export default SettingsTitleVerification
