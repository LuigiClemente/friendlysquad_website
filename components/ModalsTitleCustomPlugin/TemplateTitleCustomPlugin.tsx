import { WithStyles } from "@material-ui/core"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Close } from "@mui/icons-material"
import { createStyles, IconButton, Theme, Typography } from "@mui/material"
import "react-toastify/dist/ReactToastify.css"

import { withStyles } from "@mui/styles"
import { CSSProperties } from "react"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      height: "50px !important"
    },
    closeButton: {
      position: "absolute",
      right: "0px !important",
      top: "0px !important",
      width: "fit-content !important",
      color: theme.palette.grey[500]
    },
    tooltip: {
      backgroundColor: "white",
      color: "#000",
      boxShadow: theme.shadows[1],
      padding: "5px 10px",
      fontSize: "12px"
    },
    arrow: {
      color: "white"
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
  customStyle?: CSSProperties | undefined
  isModals?: boolean
}
const TemplateTitleCustomPlugin = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, customStyle, isModals, ...other } = props
  return (
    <DialogTitle
      disableTypography
      className={classes.root}
      {...other}
      style={{
        width: "100%",
        paddingRight: "0px",
        marginRight: "0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        ...customStyle
      }}
    >
      <Typography variant="h6" component={"span"} className="title_editor">
        {children}
      </Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
})
export default TemplateTitleCustomPlugin
