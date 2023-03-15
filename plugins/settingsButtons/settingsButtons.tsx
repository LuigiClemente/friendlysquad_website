import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Divider, Paper, PaperProps } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import * as React from "react"
import Draggable from "react-draggable"
import BackgroundColorChanger from "@components/BackgroundColorChanger"
import ColorChanger from "@components/ColorChanger"
import { BUTTONS } from "@components/Constant/const"
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin"
import FontChanger from "@components/FontChanger"
import FontSizeChanger from "@components/FontSizeChanger"
import FullControlPaddingBorderMargin from "@components/FullControlPaddingBorderMargin/FullControlPaddingBorderMargin"
import { useModalsAppProvider } from "@appProvider/ModalsAppProvider"
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
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type SettingsTabContentProps = {
  open?: any
}
function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}
const SettingsButtons: React.FC<SettingsTabContentProps> = ({ open }: SettingsTabContentProps) => {
  const {  dialogOpenButtons,
    setDialogOpenButtons }: any = useModalsAppProvider()
  const classes = useStyles()

  React.useEffect(() => {
    setDialogOpenButtons(open)
  }, [])

  return (
    <Dialog
      open={dialogOpenButtons}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      onClose={() => {
        setDialogOpenButtons(false)
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin
        id="customized-dialog-title"
        onClose={() => {
          setDialogOpenButtons(false)
        }}
      >
        {"Buttons Settings"}
      </DialogTitleCustomPlugin>
      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <FontChanger nameSection={BUTTONS} />
            <Divider className={classes.divider} />
            <FontSizeChanger nameSection={BUTTONS} />
            <Divider className={classes.divider} />
            <ColorChanger nameSection={BUTTONS} />
            <Divider className={classes.divider} />
            <BackgroundColorChanger nameSection={BUTTONS} />
            <Divider className={classes.divider} />
            <FullControlPaddingBorderMargin nameSection={BUTTONS} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
export default SettingsButtons
