import { WithStyles } from "@material-ui/core"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Close } from "@mui/icons-material"
import { createStyles, IconButton, Theme, Typography } from "@mui/material"

import { withStyles } from "@mui/styles"
import { CSSProperties } from "react"

const styles = (theme: Theme) =>
  createStyles({
    closeButton: {
      position: "absolute",
      right: "0px !important",
      top: "0px !important",
      width: "fit-content !important",
      // color: theme.palette.grey[500]
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
  customStyle?: CSSProperties | undefined
  isModals?: boolean
}
const DialogTitleCustomPlugin = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, customStyle, isModals, ...other } = props
  return (
    <DialogTitle
      disableTypography
      className={classes.root}
      {...other}
      style={{
        cursor: "move",
        width: "100%",
        margin: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
      id="draggable-dialog-title"
    >
      <Typography component="div" variant="h6" className="title_editor">
        {children}
      </Typography>
      <div>
        {onClose ? (
          <IconButton
            aria-label="close"
            style={{
              width: "fit-content !important"
            }}
            onClick={onClose}
          >
            <Close />
          </IconButton>
        ) : null}
      </div>
    </DialogTitle>
  )
})
export default DialogTitleCustomPlugin
