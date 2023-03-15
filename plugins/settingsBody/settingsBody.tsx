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
import { useAppProvider } from "@appProvider/AppProvider"
import BackgroundColorChanger from "@components/BackgroundColorChanger"
import { BODY_CUSTOMIZE, CONTAINER_CUSTOMIZE } from "@components/Constant/const"
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin"
import FullControlPaddingBorderMargin from "@components/FullControlPaddingBorderMargin"
import ShadowChanger from "@components/ShadowChanger"
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

type SettingsLogoProps = {
  open?: any
}
const SettingsBody: React.FC<SettingsLogoProps> = ({ open }: SettingsLogoProps) => {
  const { dialogOpenBody, setDialogOpenBody }: any = useAppProvider()
  const classes = useStyles()

  return (
    <Dialog
      open={dialogOpenBody}
      TransitionComponent={Transition}
      keepMounted
      // fullWidth="md"
      maxWidth="xl"
      onClose={() => {
        setDialogOpenBody(false)
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin
        id="customized-dialog-title"
        onClose={() => {
          setDialogOpenBody(false)
        }}
      >
        {"Settings Body"}
      </DialogTitleCustomPlugin>

      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-slide-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider className={classes.divider} />
            <ShadowChanger nameSection={CONTAINER_CUSTOMIZE} />
            <Divider className={classes.divider} />
            <BackgroundColorChanger nameSection={CONTAINER_CUSTOMIZE} />
            <Divider className={classes.divider} />
            <BackgroundColorChanger nameSection={BODY_CUSTOMIZE} isBody={true} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
export default SettingsBody
