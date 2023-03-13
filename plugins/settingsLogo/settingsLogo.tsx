import { useAppProvider } from "@appProvider/AppProvider"
import { LOGO } from "@components/Constant/const"
import DialogTitleCustomPlugin from "@components/DialogTitleCustomPlugin"
import DimensionChanger from "@components/DimensionChanger"
import FullControlPaddingBorderMargin from "@components/FullControlPaddingBorderMargin"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Divider } from "@mui/material"
import Dialog from "@mui/material/Dialog"
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

type SettingsLogoProps = {
  open?: any
}
const SettingsLogo: React.FC<SettingsLogoProps> = ({ open }: SettingsLogoProps) => {
  const { dialogOpenLogo, setDialogOpenLogo }: any = useAppProvider()
  const classes = useStyles()

  return (
    <Dialog
      open={dialogOpenLogo}
      TransitionComponent={Transition}
      keepMounted
      // fullWidth
      maxWidth="xl"
      onClose={() => {
        setDialogOpenLogo(false)
      }}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitleCustomPlugin
        id="customized-dialog-title"
        onClose={() => {
          setDialogOpenLogo(false)
        }}
      >
        {"Logo Settings"}
      </DialogTitleCustomPlugin>

      <DialogContent id="dialog-content-editor">
        <DialogContentText id="alert-dialog-slide-description">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider className={classes.divider} />
            <DimensionChanger nameSection={LOGO} />
            <Divider className={classes.divider} />
            <FullControlPaddingBorderMargin nameSection={LOGO} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
export default SettingsLogo
